---
layout: main
title: Explore the AGA
lead: Browse or search for topics and resources relevant to your digital solution.
site-search: false
---

<main   class="ct-layout ct-layout--no-top-right ct-layout--no-bottom-right ct-layout--no-top-left ct-layout--no-bottom-left ct-vertical-spacing--top" role="main">
          <!--  CONTENT_TOP  -->
          {% if page.content_top %}  <div>{{ content_top }}</div> {% endif %} 
          <div class="ct-layout__inner container" data-masonry="true">
            <section class="ct-layout__main">
              <form class="ct-inline-filter ct-form ct-theme-light" action="{{site.baseurl}}/search/" method="get">
    <div class="ct-inline-filter__content">
      <div class="ct-inline-filter__items">
        <div class="ct-field ct-theme-light ct-field--textfield ct-field--vertical">
          <label class="ct-label ct-theme-light ct-label--extra-large ct-field__title" for="search-form">
            <h1 class="ct-heading ct-theme-light ct-banner__title">{{page.title}}
              </h1>
          </label>
            <div
              class="ct-paragraph ct-theme-light ct-paragraph--regular ct-list__content__inner"
            >
              <p class="ct-text-large"> {{page.lead}}</p>
            </div>
          <div class="ct-field__wrapper">
            <input
              type="search"
              autocomplete="off"
              class="ct-textfield ct-theme-light ct-field__control"
              name="query"
              id="search-form"
              placeholder="Search for a topic, technology or requirement">
          </div>
        </div>
        <div class="ct-inline-filter__actions">
          <button
            class="ct-button ct-theme-light ct-button--primary ct-button--button ct-button--regular ct-inline-filter__submit-button"
            data-component-name="button"
            type="submit"
            data-button="true">
            <span class="ct-text-icon__text">Search</span>
          </button>
        </div>

      </div>
    </div>
  </form>

              {{page.toc}}
              <div class="ct-theme-light">
                <div class="container">
                  <div class="row">
                    <div class="col-xxs-12">
                      {% include explore-cards.html %}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <!-- <div >{{ content_bottom }}</div> -->
        </main>


