// Proof of concept - Auto-generate TOC with Intersection Observer and smooth scroll
(function() {
  'use strict';

  const sidebar = document.querySelector('.ct-layout__sidebar_top_left');
  const mainContent = document.querySelector('.ct-layout__main');
  const layoutInner = document.querySelector('.ct-layout__inner');
  
  if (!sidebar || !mainContent || !layoutInner) return;

  // Find all H2 and H3 headings in main content
  const headings = mainContent.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  const headingToLink = new Map();
  const seenIds = new Set();

  // Create and insert the above-the-fold spacer as first child of .ct-layout__inner
  const spacer = document.createElement('div');
  spacer.className = 'above-the-fold-spacer';
  layoutInner.insertBefore(spacer, layoutInner.firstChild);

  // Generate IDs for headings that don't have them
  headings.forEach((heading, index) => {
    if (!heading.id) {
      const text = heading.textContent.trim();
      let id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      // Handle empty or duplicate IDs
      if (!id || seenIds.has(id)) {
        id = `heading-${index}`;
      }
      heading.id = id;
    }
    seenIds.add(heading.id);
  });

  // Build TOC HTML structure
  const tocWrapper = document.createElement('div');
  tocWrapper.className = 'ct-table-of-contents ct-table-of-contents--sticky ct-theme-light ct-table-of-contents--position-before ct-vertical-spacing--top';
  tocWrapper.style.maxWidth = '100%';
  tocWrapper.style.margin= '2rem 0 0';
  tocWrapper.setAttribute('role', 'navigation');
  tocWrapper.setAttribute('aria-label', 'In this policy');
  
  const tocTitle = document.createElement('h2');
  tocTitle.className = 'ct-table-of-contents__title';
  tocTitle.textContent = 'In this policy';
  tocWrapper.appendChild(tocTitle);

  const topList = document.createElement('ul');
  topList.className = 'ct-table-of-contents__links';
  
  let currentH2Item = null;
  let currentNestedList = null;

  headings.forEach(heading => {
    const tagName = heading.tagName.toLowerCase();
    const listItem = document.createElement('li');
    listItem.className = 'ct-table-of-contents__item';
    
    const link = document.createElement('a');
    link.className = 'ct-table-of-contents__link';
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent.trim();
    
    // Store link reference
    headingToLink.set(heading.id, link);
    
    listItem.appendChild(link);

    if (tagName === 'h2') {
      // Top-level item
      topList.appendChild(listItem);
      currentH2Item = listItem;
      currentNestedList = null;
    } else if (tagName === 'h3' && currentH2Item) {
      // Nested item under previous H2
      if (!currentNestedList) {
        currentNestedList = document.createElement('ul');
        currentNestedList.className = 'ct-table-of-contents__list';
        currentH2Item.appendChild(currentNestedList);
      }
      currentNestedList.appendChild(listItem);
    }
  });

  tocWrapper.appendChild(topList);
  sidebar.appendChild(tocWrapper);

  // Add CSS
  const style = document.createElement('style');
  style.textContent = `
    /* Scroll offset for smooth scroll */
    .ct-layout__main h2,
    .ct-layout__main h3 {
      scroll-margin-top: 2rem;
    }

    /* Grid layout for above-the-fold spacing within .ct-layout__inner */
    .ct-layout__inner[data-masonry="true"] {
      display: grid;
      grid-template-rows: min-content 1fr;
    }

    .above-the-fold-spacer {
      height: 100vh;
      grid-column: 1 / -1;
      grid-row: 1 / span 2;
      visibility: hidden;
      pointer-events: none;
    }

    /* Override existing grid positioning with higher specificity */
    @media (min-width: 992px) {
      .ct-layout--no-top-right.ct-layout--no-bottom-right > .ct-layout__inner > .ct-layout__main {
        grid-row-start: 1 !important;
        align-self: start;
        }
    }


    /* Sidebar positioning - overlays row 1, allowing it to start at top */
    @media (min-width: 992px) {
      .ct-layout--no-top-right.ct-layout--no-bottom-right > .ct-layout__inner > .ct-layout__sidebar_top_left {
          position: sticky;
          top: 0;
          height: fit-content;
          max-height: 100vh;
          /* overflow-y: auto; */
       
    }

    /* Bottom left sidebar if present */
    .ct-layout--no-top-right.ct-layout--no-bottom-right > .ct-layout__inner > .ct-layout__sidebar_bottom_left {
      grid-column-start: 1;
      grid-row-start: 3;
    }

    /* Table of Contents - Multi-level Support */
    
    /* Remove padding from nested lists to keep backgrounds full-width */
    .ct-table-of-contents__links .ct-table-of-contents__list,
    .ct-table-of-contents__list .ct-table-of-contents__list {
      margin-top: 0;
      padding-left: 0;
      list-style: none;
    }

    /* Indent nested links via padding instead of list padding */
    .ct-table-of-contents__list .ct-table-of-contents__link {
      padding-left: calc(1.25rem + 1rem);
      position: relative;
    }

    /* Add dash prefix to nested links - vertically centered */
    .ct-table-of-contents__list .ct-table-of-contents__link::after {
      content: '–';
      position: absolute;
      left: calc(0.25rem + 1rem);
      top: 50%;
      transform: translateY(-50%);
      color: var(--ct-color-border, #71767a);
      font-weight: var(--ct-font-weight-normal, 400);
    }

    /* Third level nesting */
    .ct-table-of-contents__list .ct-table-of-contents__list .ct-table-of-contents__link {
      padding-left: calc(1.25rem + 2rem);
    }

    .ct-table-of-contents__list .ct-table-of-contents__list .ct-table-of-contents__link::after {
      left: calc(0.25rem + 2rem);
    }

    /* Fourth level nesting (if needed) */
    .ct-table-of-contents__list .ct-table-of-contents__list .ct-table-of-contents__list .ct-table-of-contents__link {
      padding-left: calc(1.25rem + 3rem);
    }

    .ct-table-of-contents__list .ct-table-of-contents__list .ct-table-of-contents__list .ct-table-of-contents__link::after {
      left: calc(0.25rem + 3rem);
    }

    /* Sticky/floating TOC modifier */
    .ct-table-of-contents--sticky {
      position: sticky;
      top: 2rem;
      align-self: start;
    }

    /* Also make TOC sticky when in sidebar */
    .ct-layout__sidebar_top_left .ct-table-of-contents,
    .ct-layout__sidebar_top_right .ct-table-of-contents {
      position: sticky;
      top: 2rem;
      align-self: start;
    }

    /* Apply CivicTheme active styling to UIkit's is-active class */
    .ct-table-of-contents.ct-theme-light .ct-table-of-contents__link.is-active,
    .ct-table-of-contents.ct-theme-light .ct-table-of-contents__link[data-active="true"] {
      background-color: var(--ct-table-of-contents-light-link-hover-background-color);
      color: var(--ct-table-of-contents-light-link-hover-color);
    }

    .ct-table-of-contents.ct-theme-light .ct-table-of-contents__link.is-active::before,
    .ct-table-of-contents.ct-theme-light .ct-table-of-contents__link[data-active="true"]::before {
      background-color: var(--ct-table-of-contents-light-link-hover-stripe-background-color);
    }

    .ct-table-of-contents.ct-theme-light .ct-table-of-contents__link.is-active {
      border-color: var(--ct-table-of-contents-light-link-hover-border-color);
      border-width: 0.0625rem;
      border-left-width: 0;
      padding-top: 0.4375rem;
      padding-bottom: 0.4375rem;
      border-radius: 0 var(--ct-table-of-contents-link-active-border-radius) var(--ct-table-of-contents-link-active-border-radius) 0;
    }
  `;
  document.head.appendChild(style);

  // Get all TOC links
  const tocLinks = document.querySelectorAll('.ct-table-of-contents__link');
  
  // Add smooth scroll on click
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Set active link immediately on click
        tocLinks.forEach(l => {
          l.classList.remove('is-active');
          l.removeAttribute('aria-current');
        });
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
        currentActiveId = targetId;
        
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Move focus to heading after scroll
        setTimeout(() => {
          targetElement.focus({ preventScroll: true });
        }, 100);
        
        // Update URL without jumping
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });

  // Track which heading is currently active
  let currentActiveId = null;

  // Update active link based on heading position
  function updateActiveLink() {
    const scrollPos = window.scrollY + window.innerHeight * 0.3;
    let newActiveId = null;

    for (const heading of headings) {
      if (heading.offsetTop <= scrollPos) {
        newActiveId = heading.id;
      }
    }

    // Only update DOM if active heading changed (prevents unnecessary reflows)
    if (newActiveId !== currentActiveId) {
      tocLinks.forEach(link => {
        link.classList.remove('is-active');
        link.removeAttribute('aria-current');
      });

      if (newActiveId) {
        const activeLink = headingToLink.get(newActiveId);
        if (activeLink) {
          activeLink.classList.add('is-active');
          activeLink.setAttribute('aria-current', 'page');
        }
      }

      currentActiveId = newActiveId;
    }
  }

  // Use Intersection Observer with cleanup to avoid memory issues
  const observerOptions = {
    rootMargin: '-10% 0px -70% 0px',
    threshold: [0, 0.5, 1]
  };

  const observer = new IntersectionObserver(
    () => {
      updateActiveLink();
    },
    observerOptions
  );

  // Observe all headings
  headings.forEach(heading => {
    observer.observe(heading);
  });

  // Initialize on page load
  updateActiveLink();

  // Cleanup on page unload
  window.addEventListener('unload', () => {
    observer.disconnect();
    headingToLink.clear();
    seenIds.clear();
  });

})();
