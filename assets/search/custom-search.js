---
---
let loadingPromise = null;

async function loadPrebuilt() {
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
    
    // Use prefetched data if available
    if (window.__searchPrefetchData) {
      ({ index: idxJson, docs } = window.__searchPrefetchData);
      window.__searchPrefetchData = null;
      console.log('Using prefetched data');
    } else {
      console.log('Fetching search data...');
      [idxJson, docs] = await Promise.all([
        fetch(searchIndex).then(r => r.json()),
        fetch(searchDocs).then(r => r.json())
      ]);
    }
    
    // Build search structures
    const idx = lunr.Index.load(idxJson);
    const docMap = Object.fromEntries(docs.map(d => [d.url, d]));
    
    // Clear references to help GC
    idxJson = null;
    docs = null;
    
    const engine = { idx, docMap };
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

  function renderSnippet(r) {
    const subtypeTag = r.subtype ? `> <span class="ct-tag ct-theme-light ct-tag--primary">${r.subtype}</span>` : '';
    const resultStyle = `${r.type} ${r.subtype ? r.subtype : ''}`.toLowerCase().trim().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-');
    
    return `<div class="col-xxs-12 ${resultStyle || ''}">
        <div class="ct-snippet ct-theme-light">
          <div class="ct-snippet__content">
            <div class="ct-snippet__title">
              <a class="ct-snippet__title-link" href="{{site.baseurl}}${r.url}">
                ${r.title}
              </a>
            </div>
            <div class="ct-paragraph ct-theme-light ct-paragraph--regular ct-paragraph--no-margin ct-snippet__summary">
              ${r.description || r.excerpt || ''}
            </div>
            <div class="ct-snippet__tags">
              <div class="ct-tag-list ct-theme-light">
                <ul class="ct-item-list ct-item-list--horizontal ct-item-list--small ct-tag-list__content">
                  <li class="ct-item-list__item">
                    <span class="ct-tag ct-theme-light ct-tag--primary">
                      ${r.type || ''}
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
    if (!q) {
      list.innerHTML = '';
      info.textContent = '';
      wrapper.style.display = 'none';
      if (spinner) spinner.style.display = 'none';
      if (recommended) recommended.style.display = 'block';
      return;
    }

    try {
      const results = await runSearch(q);

      if (spinner) spinner.style.display = 'none';
      wrapper.style.display = 'block';

      if (recommended) {
        recommended.style.display = results.length > 0 ? 'none' : 'block';
      }

      info.textContent = `Showing ${results.length} result${results.length === 1 ? '' : 's'}`;
      list.innerHTML = results.map(renderSnippet).join('');
      
    } catch (err) {
      if (spinner) spinner.style.display = 'none';
      
      console.error('Search error:', err);
      wrapper.style.display = 'block';
      info.textContent = 'An error occurred during search';
      list.innerHTML = '<div class="col-xxs-12"><p>Unable to complete search. Please try again.</p></div>';
      
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
    const q = box.value.trim();

    const newUrl = `${window.location.pathname}?query=${encodeURIComponent(q)}`;
    window.history.pushState({}, '', newUrl);

    if (spinner && q) {
      spinner.style.display = 'block';
    }

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