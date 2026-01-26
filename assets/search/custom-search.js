---
---
/*
  custom-search.js
  - Reads asset paths from the <script id="custom-search-script"> data-* attributes
  - Listens for 'searchPrefetch' CustomEvent to receive prefetch data
  - Uses a loaderStarted marker on the script tag to avoid duplicate fetches
  - Caches the built engine on window.searchEngine for compatibility
  - Keeps temporary data nulled to help GC
*/

let loadingPromise = null;
// Module-scoped prefetch holder (populated by 'searchPrefetch' event)
let __prefetchData = null;

// Locate our own script tag to read data attributes and set loader marker
const __selfScript = document.getElementById('custom-search-script');
const __searchIndexPath = (__selfScript && __selfScript.dataset.index) || '/assets/search/search_index.json';
const __searchDocsPath  = (__selfScript && __selfScript.dataset.docs)  || '/assets/search/search_docs.json';


// Listen for the page-scoped prefetch event (dispatched by the inline page script).
// This avoids storing raw JSON on window.* while still allowing the loader to use it.
document.addEventListener('searchPrefetch', (ev) => {
  if (ev && ev.detail && ev.detail.index && ev.detail.docs) {
    __prefetchData = { index: ev.detail.index, docs: ev.detail.docs };
    console.log('custom-search: received prefetch data via event');
  }
}, { once: true });

async function loadPrebuilt() {
  try { if (__selfScript) __selfScript.dataset.loaderStarted = '1'; } catch (e) {}

  if (window.searchEngine) {
    console.log('Using existing search engine');
    return window.searchEngine;
  }

  if (loadingPromise) {
    console.log('Load in progress, waiting...');
    return loadingPromise;
  }

  console.log('Building search engine...');

  loadingPromise = (async () => {
    let idxJson, docs;

    // Use prefetched data if available (received via CustomEvent), otherwise fetch
    if (__prefetchData) {
      ({ index: idxJson, docs } = __prefetchData);
      __prefetchData = null; // clear to help GC
      console.log('Using prefetched data (module-scoped)');
    } else {
      console.log('Fetching search data...');
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

    if (typeof lunr === 'undefined' || !lunr.Index || !lunr.Index.load) {
      throw new Error('lunr is not available. Make sure lunr is loaded before this script.');
    }

    // Build search structures
    const idx = lunr.Index.load(idxJson);

    // Keep full doc objects for convenience. If index grows large, consider trimming
    // to only the fields needed for rendering (title, description, url, type, subtype).
    // TODO: If index > ~1000 docs, revisit docMap memory footprint.
    const docMap = Object.fromEntries((docs || []).map(d => [d.url, d]));

    // Clear references to help GC
    idxJson = null;
    docs = null;

    const engine = { idx, docMap };
    // Cache engine on window for compatibility with existing code paths.
    // If you prefer stricter scoping, we can move this to module scope only.
    window.searchEngine = engine;

    console.log('Search engine ready');

    return engine;
  })();

  try {
    return await loadingPromise;
  } finally {
    loadingPromise = null;
  }
}

async function runSearch(query) {
  if (!window.searchEngine) {
    window.searchEngine = await loadPrebuilt();
  }
  const { idx, docMap } = window.searchEngine;
  return idx.search(query).map(r => docMap[r.ref]);
}

document.addEventListener('DOMContentLoaded', async function () {
  const onSearchPage = window.location.pathname.endsWith('/search/') ||
                       window.location.pathname.endsWith('/search/index.html');

  const box = document.getElementById('search-form');
  const form = box ? box.closest('form') : null;
  const list = document.getElementById('resultslist');
  const info = document.getElementById('number_results');
  const wrapper = document.getElementById('search_results');
  const spinner = document.getElementById('spinner');
  const recommended = document.getElementById('recommended_links_block');

  function escapeHtml(str) {
    if (!str && str !== 0) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderSnippet(r) {
    if (!r) return '';
    // The literal '>' before subtype is intentional and encoded as &gt;.
    const subtypeTag = r.subtype ? '&gt; <span class="ct-tag ct-theme-light ct-tag--primary">' + escapeHtml(r.subtype) + '</span>' : '';
    // Consider caching computed resultStyle if rendering many results frequently.
    // TODO: add styleCache Map if result counts grow.
    const resultStyle = `${r.type || ''} ${r.subtype || ''}`.toLowerCase().trim()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-');

    // Keep Jekyll-processed baseurl template so it is expanded at build time
    const href = `{{site.baseurl}}${r.url || ''}`;

    return `<div class="col-xxs-12 ${escapeHtml(resultStyle)}">
      <div class="ct-snippet ct-theme-light">
        <div class="ct-snippet__content">
          <div class="ct-snippet__title">
            <a class="ct-snippet__title-link" href="${escapeHtml(href)}">
              ${escapeHtml(r.title || '')}
            </a>
          </div>
          <div class="ct-paragraph ct-theme-light ct-paragraph--regular ct-paragraph--no-margin ct-snippet__summary">
            ${escapeHtml(r.description || r.excerpt || '')}
          </div>
          <div class="ct-snippet__tags">
            <div class="ct-tag-list ct-theme-light">
              <ul class="ct-item-list ct-item-list--horizontal ct-item-list--small ct-tag-list__content">
                <li class="ct-item-list__item">
                  <span class="ct-tag ct-theme-light ct-tag--primary">
                    ${escapeHtml(r.type || '')}
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

  async function performSearch(q) {
    q = (q || '').trim();

    if (!q) {
      if (list) list.innerHTML = '';
      if (info) info.textContent = '';
      if (wrapper) wrapper.style.display = 'none';
      if (spinner) spinner.style.display = 'none';
      if (recommended) recommended.style.display = 'block';
      return;
    }

    try {
      const results = await runSearch(q);

      if (spinner) spinner.style.display = 'none';
      if (wrapper) wrapper.style.display = 'block';

      if (recommended) {
        recommended.style.display = results.length > 0 ? 'none' : 'block';
      }

      // NOTE: We intentionally do not limit results here. If you want to add
      // client-side paging/limiting later, implement Lunr paging and slice results.
      // TODO: Add MAX_RESULTS and "Load more" UI when ready.
      info.textContent = `Showing ${results.length} result${results.length === 1 ? '' : 's'}`;
      list.innerHTML = results.map(renderSnippet).join('');

    } catch (err) {
      if (spinner) spinner.style.display = 'none';

      console.error('Search error:', err);
      if (wrapper) wrapper.style.display = 'block';
      if (info) info.textContent = 'An error occurred during search';
      if (list) list.innerHTML = '<div class="col-xxs-12"><p>Unable to complete search. Please try again.</p></div>';

      if (recommended) recommended.style.display = 'block';
    }
  }

  if (!onSearchPage) {
    console.log('Not on search page - skipping search initialization');
    return;
  }

  if (!box || !form || !list || !info || !wrapper) {
    console.error('Search page missing required elements');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const q = (box.value || '').trim();

    const newUrl = `${window.location.pathname}?query=${encodeURIComponent(q)}`;
    window.history.pushState({}, '', newUrl);

    // Show spinner immediately for non-empty queries
    if (spinner && q) {
      spinner.style.display = 'block';
    }

    // Defer heavy work to next event loop tick
    setTimeout(() => {
      performSearch(q);
    }, 0);
  });

  const params = new URLSearchParams(window.location.search);
  let initial = params.get('query');

  if (initial === null || initial.trim() === '') {
    initial = '';
  }

  if (initial) {
    box.value = initial;
    if (spinner) {
      spinner.style.display = 'block';
    }
    setTimeout(() => {
      performSearch(initial);
    }, 0);
  } else {
    list.innerHTML = '';
    info.textContent = '';
    wrapper.style.display = 'none';
    if (spinner) spinner.style.display = 'none';
  }

  window.addEventListener('popstate', function () {
    const params = new URLSearchParams(window.location.search);
    let q = params.get('query');

    if (q === null || q.trim() === '') {
      q = '';
    }

    box.value = q;

    if (spinner && q) {
      spinner.style.display = 'block';
    }

    setTimeout(() => {
      performSearch(q);
    }, 0);
  });
});
