---
layout: content
title: Use the AGA
lead: Use the Australian Government Architecture when you’re preparing a digital investment proposal, planning a project or assessing your agency’s digital capabilities 
style: 'ct-vertical-spacing--bottom'
---


<div class="ct-list ct-theme-light">
  <div class="ct-list__inner">
    <div class="ct-list__rows">
      <div class="container" aria-live="polite">
        <div class="row row--vertically-spaced">
        {% assign subpages = site.pages | sort: "order" | where_exp: "item", "item.url contains page.dir" %}
        {% include list-child-pages.html content=subpages %}
        {% include components/card.html 
        headingLevel="h2"
        url="/explore/"
        title="Explore the AGA"
        summary="Browse or search for topics and resources relevant to your digital solution."
        widths="col-xxs-12 col-m-12"
        %}
        {% include components/card.html 
        headingLevel="h2"
        url="/about/"
        title="Learn about the AGA"
        summary="Find out what the AGA is and how it supports your agency to design and deliver digital solutions."
        widths="col-xxs-12 col-m-12"
        %}
        {% include components/card.html 
        headingLevel='h2'
        url="/help/"
        title="How to get help"
        summary="For help using the AGA or applying it to your digital solution, you can contact the Digital Transformation Agency (DTA) via: architecture@dta.gov.au."
        widths="col-xxs-12 col-m-12"
        %}
        </div>
      </div>
    </div>
  </div>
</div>

