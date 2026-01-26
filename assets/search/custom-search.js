---
layout: null
permalink: '/assets/search/custom-search.js'
robots: noindex
site-search: false
---
// =============================================================================
// custom-search.js
// Full file: listens for page prefetch event, picks up fallback, sets loader
// marker inside loadPrebuilt() as 'building', clears temps, and initializes
// search UI only on the /search/ page.
// =============================================================================

/* eslint-disable no-console */

'use strict';

// -----------------------------------------------------------------------------
// Module-scoped state
// -----------------------------------------------------------------------------
let loadingPromise = null;          // Promise for an in-flight build
let __prefetchData = null;          // Prefetched JSON payload (index + docs)
const __selfScript = document.getElementById('custom-search-script');

// Read configuration from data-* attributes (fallbacks included)
const __searchIndexPath = (__selfScript && __selfScript.dataset.index) || '/assets/search/search_index.json';
const __searchDocsPath  = (__selfScript && __selfScript.dataset.docs)  || '/assets/search/search_docs.json';

// -----------------------------------------------------------------------------
// Prefetch event listener + fallback pickup
// -----------------------------------------------------------------------------

// Listen for the page-scoped prefetch event (dispatched by inline page script).
// Store payload in module-scoped __prefetchData and mark consumption.
document.addEventListener('searchPrefetch', (ev) => {
  if (ev && ev.detail && ev.detail.index && ev.detail.docs) {
    __prefetchData = { index: ev.detail.index, docs: ev.detail.docs };
    console.debug('custom-search: received prefetch data via event');

    // Signal that event was consumed (prevents fallback property from persisting)
    try { document.__searchPrefetchConsumed = true; } catch (e) { /* ignore */ }
  }
}, { once: true });

// FALLBACK: pickup any prefetch data stored on document if the event fired before listener registration
// (use a microtask so this runs after synchronous registration but before other tasks)
Promise.resolve().then(() => {
  if (!__prefetchData && document.__searchPrefetchData) {
    __prefetchData = document.__searchPrefetchData;
    try { document.__searchPrefetchData = null; } catch (e) { /* ignore */ }
    console.debug('custom-search: picked up prefetch data from fallback property');
  }
});

// -----------------------------------------------------------------------------
// Utility: HTML escape
// -----------------------------------------------------------------------------
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// -----------------------------------------------------------------------------
// Core: loadPrebuilt()
// - sets loader marker to 'building' immediately before network work
// - uses __prefetchData if present, otherwise fetches JSON
// - builds lunr index and docMap, caches engine on window.searchEngine
// -----------------------------------------------------------------------------
async function loadPrebuilt() {
  // Mark loader as actively building immediately before any network fetch to prevent duplicate fetches.
  try {
    if (__selfScript) __selfScript.dataset.loaderStarted = 'building';
    console.debug('custom-search: loaderStarted set to "building"');
  } catch (e) {
    console.warn('custom-search: Could not set loaderStarted marker on script tag:', e);
  }

  // If engine already exists, reuse it
  if (window.searchEngine) {
    console.debug('custom-search: Using existing search engine');
    // Mark ready for clarity
    try { if (__selfScript) __selfScript.dataset.loaderStarted = 'ready'; } catch (e) {}
    return window.searchEngine;
  }

  // If a build is already in progress, return the same promise
  if (loadingPromise) {
    console.debug('custom-search: Load in progress, waiting...');
    return loadingPromise;
  }

  console.debug('custom-search: Building search engine...');

  loadingPromise = (async () => {
    let idxJson = null;
    let docs = null;

    // Use prefetched data if available (received via CustomEvent or fallback), otherwise fetch
    if (__prefetchData) {
      ({ index: idxJson, docs } = __prefetchData);
      __prefetchData = null; // clear module-scoped holder to help GC
      console.debug('custom-search: Using prefetched data (module-scoped)');
    } else {
      console.debug('custom-search: Fetching search data from network...');
      [idxJson, docs] = await Promise.all([
        fetch(__searchIndexPath).then(r => {
          if (!r.ok) throw new Error('Failed to fetch search index');
          return r.json();
        }),
        fetch(__searchDocsPath).then(r => {
          if (!r.ok) throw new Error('Failed to fetch search docs');
          return r.json();
        })
      ]);
    }

    // Ensure lunr is available
    if (typeof lunr === 'undefined' || !lunr.Index || !lunr.Index.load) {
      throw new Error('lunr is not available. Make sure lunr is loaded before this script.');
    }

    // Build Lunr index and docMap
    const idx = lunr.Index.load(idxJson);
    const docMap = Object.fromEntries((docs || []).map(d => [d.url, d]));

    // Clear temporary references to allow GC
    idxJson = null;
    docs = null;

    const engine = { idx, docMap };

    // Cache engine on window for compatibility with existing code paths.
    window.searchEngine = engine;

    // Mark loader as ready
    try {
      if (__selfScript) __selfScript.dataset.loaderStarted = 'ready';
      console.debug('custom-search: loaderStarted set to "ready"');
    } catch (e) {
      // ignore
    }

    console.debug('custom-search: Search engine ready');
    return engine;
  })();

  try {
    return await loadingPromise;
  } finally {
    // Reset the in-flight promise so subsequent calls create a fresh one if needed
    loadingPromise = null;
  }
}

// -----------------------------------------------------------------------------
// runSearch: convenience wrapper that ensures engine is built
// -----------------------------------------------------------------------------
async function runSearch(query) {
  if (!window.searchEngine) {
    await loadPrebuilt();
  }
  const { idx, docMap } = window.searchEngine;
  return idx.search(query).map(r => docMap[r.ref]);
}

// -----------------------------------------------------------------------------
// renderSnippet: render a single search result into HTML
// -----------------------------------------------------------------------------
function renderSnippet(e) {
  if (!e) return '';
  const subtypeTag = e.subtype ? '&gt; <span class="ct-tag ct-theme-light ct-tag--primary">' + escapeHtml(e.subtype) + '</span>' : '';
  const typeSlug = `${e.type || ''} ${e.subtype || ''}`.toLowerCase().trim().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-');
  const href = `${(typeof window !== 'undefined' && window.__siteBaseUrl) ? window.__siteBaseUrl : '{{site.baseurl}}'}${e.url || ''}`;

  return `<div class="col-xxs-12 ${escapeHtml(typeSlug)}">
    <div class="ct-snippet ct-theme-light">
      <div class="ct-snippet__content">
        <div class="ct-snippet__title">
          <a class="ct-snippet__title-link" href="${escapeHtml(href)}">
            ${escapeHtml(e.title || '')}
          </a>
        </div>
        <div class="ct-paragraph ct-theme-light ct-paragraph--regular ct-paragraph--no-margin ct-snippet__summary">
          ${escapeHtml(e.description || e.excerpt || '')}
        </div>
        <div class="ct-snippet__tags">
          <div class="ct-tag-list ct-theme-light">
            <ul class="ct-item-list ct-item-list--horizontal ct-item-list--small ct-tag-list__content">
              <li class="ct-item-list__item">
                <span class="ct-tag ct-theme-light ct-tag--primary">
                  ${escapeHtml(e.type || '')}
                </span>
                ${subtypeTag}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// -----------------------------------------------------------------------------
// Search UI initialization (only on /search/ page)
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', async function () {
  const onSearchPage = window.location.pathname.endsWith('/search/') ||
                       window.location.pathname.endsWith('/search/index.html');

  // If we're on the search page, build the engine immediately so results are ready.
  if (onSearchPage) {
    // Kick off build but don't block DOMContentLoaded
    loadPrebuilt().catch(err => {
      console.error('custom-search: Failed to build search engine on search page:', err);
    });
  }

  // The rest of the UI wiring should only run on the search page.
  if (!onSearchPage) {
    // Not on search page: nothing more to do here.
    return;
  }

  // Elements expected on the search page
  const searchInput = document.getElementById('search-form');
  const searchForm = searchInput ? searchInput.closest('form') : null;
  const resultsList = document.getElementById('resultslist');
  const numberResults = document.getElementById('number_results');
  const searchResultsBlock = document.getElementById('search_results');
  const spinner = document.getElementById('spinner');
  const recommendedBlock = document.getElementById('recommended_links_block');

  if (!(searchInput && searchForm && resultsList && numberResults && searchResultsBlock)) {
    console.error('custom-search: Search page missing required elements; aborting initialization.');
    return;
  }

  // Helper to sanitize and render results
  function renderResults(results) {
    if (!results || results.length === 0) {
      resultsList.innerHTML = '';
      numberResults.textContent = 'Showing 0 results';
      searchResultsBlock.style.display = 'none';
      recommendedBlock && (recommendedBlock.style.display = 'block');
      return;
    }

    // TODO: add paging / MAX_RESULTS when index grows
    numberResults.textContent = `Showing ${results.length} result${results.length === 1 ? '' : 's'}`;
    resultsList.innerHTML = results.map(renderSnippet).join('');
    searchResultsBlock.style.display = 'block';
    recommendedBlock && (recommendedBlock.style.display = 'none');
  }

  // Perform search and update UI
  async function performSearch(q) {
    const query = (q || '').trim();
    if (!query) {
      resultsList.innerHTML = '';
      numberResults.textContent = '';
      searchResultsBlock.style.display = 'none';
      recommendedBlock && (recommendedBlock.style.display = 'block');
      spinner && (spinner.style.display = 'none');
      return;
    }

    try {
      spinner && (spinner.style.display = 'block');
      const results = await runSearch(query);
      spinner && (spinner.style.display = 'none');
      renderResults(results);
    } catch (err) {
      spinner && (spinner.style.display = 'none');
      console.error('custom-search: Search error:', err);
      numberResults.textContent = 'An error occurred during search';
      resultsList.innerHTML = '<div class="col-xxs-12"><p>Unable to complete search. Please try again.</p></div>';
      recommendedBlock && (recommendedBlock.style.display = 'block');
    }
  }

  // Wire up form submit to update URL and run search
  searchForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const q = (searchInput.value || '').trim();
    const newUrl = `${window.location.pathname}?query=${encodeURIComponent(q)}`;
    window.history.pushState({}, '', newUrl);
    spinner && q && (spinner.style.display = 'block');
    // Defer to allow UI updates
    setTimeout(() => performSearch(q), 0);
  });

  // If query present in URL, run it
  let initialQuery = new URLSearchParams(window.location.search).get('query');
  if (initialQuery === null || initialQuery === undefined) initialQuery = '';
  initialQuery = (initialQuery || '').trim();

  if (initialQuery) {
    searchInput.value = initialQuery;
    spinner && (spinner.style.display = 'block');
    setTimeout(() => performSearch(initialQuery), 0);
  } else {
    // initial empty state
    resultsList.innerHTML = '';
    numberResults.textContent = '';
    searchResultsBlock.style.display = 'none';
    spinner && (spinner.style.display = 'none');
  }

  // Handle back/forward navigation
  window.addEventListener('popstate', () => {
    let q = new URLSearchParams(window.location.search).get('query');
    if (q === null || q === undefined) q = '';
    q = (q || '').trim();
    searchInput.value = q;
    spinner && q && (spinner.style.display = 'block');
    setTimeout(() => performSearch(q), 0);
  });
});

// -----------------------------------------------------------------------------
// Expose runSearch for external callers if needed
// -----------------------------------------------------------------------------
window.customSearch = window.customSearch || {};
window.customSearch.runSearch = runSearch;
