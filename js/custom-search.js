---
layout: null
robots: noindex
---
async function loadPrebuilt() {
  const [idxRes, docsRes] = await Promise.all([
  fetch('{{ "search_index.json" | relative_url }}'),
  fetch('{{ "search_docs.json" | relative_url }}')
  ]);

  const idxJson = await idxRes.json();
  const docs = await docsRes.json();

  const idx = lunr.Index.load(idxJson);

  const docMap = {};
  docs.forEach(d => { docMap[d.url] = d });

  return { idx, docMap };
}

let searchEngine = null;


async function runSearch(query) {
  if (!searchEngine) {
    searchEngine = await loadPrebuilt();
  }
  const { idx, docMap } = searchEngine;
  return idx.search(query).map(r => docMap[r.ref]);
}

document.addEventListener('DOMContentLoaded', async function () {
  const onSearchPage = window.location.pathname.endsWith('/search/') ||
                     window.location.pathname.endsWith('/search/index.html');

  let userHasSearched = false;   // <-- required

  const box = document.getElementById('search-form');
  const form = box.closest('form');
  const list = document.getElementById('resultslist');
  const info = document.getElementById('number_results');
  const wrapper = document.getElementById('search_results');
  const spinner = document.getElementById('spinner');
  const recommended = document.getElementById('recommended_links_block');


function renderSnippet(r) {
const subtypeTag = r.subtype ? `><span class="ct-tag ct-theme-light ct-tag--primary">${r.subtype}</span>` : '';
  return `
    <div class="col-xxs-12">
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
      return;
    }

    if (userHasSearched) {
      spinner.style.display = 'block';
    }

    const results = await runSearch(q);

    spinner.style.display = 'none';
    wrapper.style.display = 'block';

    recommended.style.display = results.length > 0 ? 'none' : 'block';

    info.textContent = `Showing ${results.length} result${results.length === 1 ? '' : 's'}`;
    list.innerHTML = results.map(renderSnippet).join('');
  }



  form.addEventListener('submit', function (e) {
    if (!onSearchPage) {
      return;
    }

    e.preventDefault();
    const q = box.value.trim();

    userHasSearched = true; // mark that a real search has started

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
    // show “no search” state
    list.innerHTML = '';
    info.textContent = '';
    wrapper.style.display = 'none';
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

});
