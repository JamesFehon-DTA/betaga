async function loadPrebuilt() {
  // Check if we already have a built engine on window
  if (window.searchEngine) {
    console.log('Using existing search engine from window');
    return window.searchEngine;
  }
  
  console.log('Building search engine...');
  
  // Fetch the data
  const [idxRes, docsRes] = await Promise.all([
    fetch(searchIndex),
    fetch(searchDocs)
  ]);

  const idxJson = await idxRes.json();
  const docs = await docsRes.json();

  // Build the index
  const idx = lunr.Index.load(idxJson);
  const docMap = {};
  docs.forEach(d => { docMap[d.url] = d });

  // Clear the raw data to free memory
  searchIndexData = null;
  searchDocsData = null;

  // Store on window so it persists
  const engine = { idx, docMap };
  window.searchEngine = engine;
  
  console.log('Search engine built and stored on window');
  
  return engine;
}

async function runSearch(query) {
  // Always check window first
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
    
    return `
      <div class="col-xxs-12 ${resultStyle || ''}">
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
      if (spinner) {
        spinner.style.display = 'none';
      }
      return;
    }

    // Always show spinner when searching (unless results already exist)
    const hasExistingResults = list.innerHTML.trim() !== '';
    if (spinner && !hasExistingResults) {
      spinner.style.display = 'block';
    }

    const results = await runSearch(q);

    // Hide spinner when done
    if (spinner) {
      spinner.style.display = 'none';
    }
    
    wrapper.style.display = 'block';

    if (recommended) {
      recommended.style.display = results.length > 0 ? 'none' : 'block';
    }

    info.textContent = `Showing ${results.length} result${results.length === 1 ? '' : 's'}`;
    list.innerHTML = results.map(renderSnippet).join('');
  }


  // Only run search functionality if we have the required elements
  if (!onSearchPage) {
    console.log('Not on search page - skipping search initialization');
    return;
  } else {
    // Make sure all required elements exist even on the search page
    if (!box || !form || !list || !info || !wrapper) {
      console.error('Search page missing required elements');
      return;
    }
    
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const q = box.value.trim();

      const newUrl = `${window.location.pathname}?query=${encodeURIComponent(q)}`;
      window.history.pushState({}, '', newUrl);

      performSearch(q);
    });

    const params = new URLSearchParams(window.location.search);
    let initial = params.get('query');

    // normalise ?query= to empty string
    if (initial === null || initial.trim() === '') {
      initial = '';
    }

    if (initial) {
      box.value = initial;
      performSearch(initial);
    } else {
      // show "no search" state - don't show spinner
      list.innerHTML = '';
      info.textContent = '';
      wrapper.style.display = 'none';
      if (spinner) {
        spinner.style.display = 'none';
      }
    }

    window.addEventListener('popstate', function () {
      const params = new URLSearchParams(window.location.search);
      let q = params.get('query');

      if (q === null || q.trim() === '') {
        q = '';
      }

      box.value = q;
      performSearch(q);
    });
  }
});