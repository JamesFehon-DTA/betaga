---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'cloud-computing'
title: 'Cloud computing'
url: '/'
toc: '
<!-- Replace your existing TOC markup with this structure -->
<div class="ct-table-of-contents ct-table-of-contents--sticky ct-theme-light ct-table-of-contents--position-before ct-vertical-spacing--top" style="max-width:100%">
  <h2 class="ct-table-of-contents__title">In this policy</h2>
  <ul class="ct-table-of-contents__links">
    
    <!-- Top-level item -->
    <li class="ct-table-of-contents__item">
      <a class="ct-table-of-contents__link" href="#policy-requirements">Policy requirements</a>
      
      <!-- Second-level nested list -->
      <ul class="ct-table-of-contents__list">
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#comply-with-legislation">Comply with legislation</a>
        </li>
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#align-to-guidelines-and-standards">Align to guidelines and standards</a>
        </li>
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#develop-strategic-documentation-for-the-cloud">Develop strategic documentation for the cloud</a>
        </li>
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#incrementally-adopt-cloud-computing-services">Incrementally adopt cloud computing services</a>
        </li>
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#avoid-customisation-by-using-cloud-services-as-they-come">Avoid customisation by using cloud services &#39;as they come&#39;</a>
        </li>
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#automate-where-suitable">Automate where suitable</a>
        </li>
        <li class="ct-table-of-contents__item is-active">
          <a class="ct-table-of-contents__link" href="#take-a-risk-based-approach-to-cloud-security">Take a risk-based approach to cloud security</a>
        </li>
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#monitor-the-health-and-usage-of-services-in-real-time">Monitor the health and usage of services in real time</a>
        </li>
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#recognise-emerging-cloud-computing-trends">Recognise emerging cloud computing trends</a>
        </li>
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#procure-via-the-cloud-marketplace">Procure via the Cloud Marketplace</a>
        </li>
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#adhere-to-reuse-principles">Adhere to reuse principles</a>
        </li>
      </ul>
    </li>
    
    <!-- Example with third-level nesting -->
    <!-- 
    <li class="ct-table-of-contents__item">
      <a class="ct-table-of-contents__link" href="#section-1">Section 1</a>
      <ul class="ct-table-of-contents__list">
        <li class="ct-table-of-contents__item">
          <a class="ct-table-of-contents__link" href="#subsection-1-1">Subsection 1.1</a>
          <ul class="ct-table-of-contents__list">
            <li class="ct-table-of-contents__item">
              <a class="ct-table-of-contents__link" href="#subsection-1-1-1">Subsection 1.1.1</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    -->
    
  </ul>
</div>

'
content_top: true
aga_code: 'POL10'
type: 'AGA Policy'
---

This policy describes the requirements for entities planning digital investments involving cloud computing. 


{% capture message %}
The [Whole-of-government cloud computing policy](https://www.digital.gov.au/cloud-policy) will come into effect on 1 July 2026.  

Agencies should begin preparing for its implementation. 

**Read the new policy on** [**digital.gov.au**](https://www.digital.gov.au/cloud-policy).
{% endcapture %}

{% include components/message.html
        title="New policy from 1 July 2026"
        description=message
        %}


## Applicability 
Digital investment proposals are assessed against this policy by the DTA through the Digital and ICT Investment Oversight Framework (IOF). 

Commonwealth entities are encouraged to apply this policy to all digital investments.

## Policy requirements

### Comply with legislation

An entity must comply with any legislation relevant to its circumstances.

### Align to guidelines and standards

All Commonwealth entities must comply with the [Hosting Certification Framework](https://architecture.digital.gov.au/hosting-certification-framework) to ensure cloud computing facilities are hosted in certified tenancies/data centres, as well as any other mandatory frameworks, policies, and standards.

### Develop strategic documentation for the cloud

An appropriate set of guiding documents must be developed within entities undertaking cloud-based investments, and should include a cloud strategy, cloud policy, and implementation plan(s).

### Incrementally adopt cloud computing services

A step-by-step approach to refining and enhancing cloud computing services, starting with low-complexity services and progressively maturing, will allow entities to optimise practices when requirements evolve.

### Avoid customisation by using cloud services ‘as they come’

Changing of business processes to align to cloud offerings, rather than developing or customising technology suit existing processes, is critical to realise the benefits of cloud services.

### Automate where suitable

Automation enables support teams to focus on the more complex requirements that are unique to their business by minimising the effort and need to provision, configure, backup, restore, patch, update, and deploy services.

### Take a risk-based approach to cloud security

Entities continue to be responsible for their own assurance and risk management of cloud services and must manage this risk as appropriate.

### Monitor the health and usage of services in real time

Entities must have visibility of their cloud usage, cloud health and enable them to control costs. Entities should refer to the Cloud Financial Operations [Policy](https://architecture.digital.gov.au/cloud-financial-optimisation-cloud-finops-policy) and [Standard](https://architecture.digital.gov.au/cloud-finops-standard).

### Recognise emerging cloud computing trends

Understanding cloud trends will assist entities to adapt and innovate. Considerations include hybrid and multi-cloud approaches, edge computing, real-time infrastructure, cloud security, FinOps, sustainability initiatives, and GenAI infrastructure.

### Procure via the Cloud Marketplace

The Cloud Marketplace on [BuyICT](https://www.buyict.gov.au/sp) has been designed to meet the complex needs of government agencies who are looking to easily source value-for-money cloud solutions.

### Adhere to reuse principles

Entities must give priority to the adoption of reuseable digital and ICT solutions, patterns, or knowledge, and, where necessary, design new solutions with a focus on future reuse.

<script> 
document.addEventListener("DOMContentLoaded", () => {
  // Headings to observe
  const headings = document.querySelectorAll("h2[id], h3[id]");

  // All TOC links (top-level + nested)
  const tocLinks = document.querySelectorAll(
    ".ct-table-of-contents__links a.ct-table-of-contents__link, \
     .ct-table-of-contents__list a.ct-table-of-contents__link"
  );

  // Track the currently active link to avoid unnecessary DOM work
  let currentActive = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;

      // Find the matching TOC link
      const link = [...tocLinks].find(
        (a) => a.getAttribute("href") === `#${id}`
      );
      if (!link) return;

      // Only update if the link actually changed
      if (currentActive !== link) {
        if (currentActive) {
          currentActive.classList.remove("is-active");
        }
        link.classList.add("is-active");
        currentActive = link;
      }
    });
  }, {
    // Sticky-header aware viewport
    rootMargin: "-140px 0px -60% 0px",
    threshold: 0
  });

  // Observe all headings
  headings.forEach((section) => observer.observe(section));
});

</script>


<style>

/* Layout: ensure equal-height columns */
.ct-layout.ct-layout--no-top-right.ct-layout--no-bottom-right > .ct-layout__inner.container {
  grid-template-rows: auto !important;
  align-items: stretch;
  }

/* TOC base */
.ct-table-of-contents {
  max-height: none;
  overflow: visible;
}


/* Sticky behaviour in sidebar */
.ct-layout__sidebar_top_left .ct-table-of-contents,
.ct-layout__sidebar_top_right .ct-table-of-contents {
  position: sticky;
  top: 2rem;
  align-self: start;
}


/* Nested list reset */
.ct-table-of-contents__links .ct-table-of-contents__list,
.ct-table-of-contents__list .ct-table-of-contents__list {
  margin-top: 0;
  padding-left: 0;
  list-style: none;
}

/* Level 1 indentation + dash */
.ct-table-of-contents__list .ct-table-of-contents__link {
  padding-left: calc(1.25rem + 1rem);
  position: relative;
}

.ct-table-of-contents__list .ct-table-of-contents__link::after {
  content: '–';
  position: absolute;
  left: calc(0.25rem + 1rem);
  top: 50%;
  transform: translateY(-50%);
  color: var(--ct-color-border, #71767a);
  font-weight: var(--ct-font-weight-normal, 400);
}

/* Level 2 */
.ct-table-of-contents__list .ct-table-of-contents__list .ct-table-of-contents__link {
  padding-left: calc(1.25rem + 2rem);
}

.ct-table-of-contents__list .ct-table-of-contents__list .ct-table-of-contents__link::after {
  left: calc(0.25rem + 2rem);
}

/* Level 3 */
.ct-table-of-contents__list
  .ct-table-of-contents__list
  .ct-table-of-contents__list
  .ct-table-of-contents__link {
  padding-left: calc(1.25rem + 3rem);
}

.ct-table-of-contents__list
  .ct-table-of-contents__list
  .ct-table-of-contents__list
  .ct-table-of-contents__link::after {
  left: calc(0.25rem + 3rem);
}


}
.ct-table-of-contents__link.is-active {
  outline: 0 !important;
  border-radius: 0 var(--ct-table-of-contents-link-active-border-radius) var(--ct-table-of-contents-link-active-border-radius) 0;
}

.ct-table-of-contents.ct-theme-light .ct-table-of-contents__link.is-active {
  background-color: var(--ct-table-of-contents-light-link-hover-background-color);
  color: var(--ct-table-of-contents-light-link-hover-color);
}

.ct-table-of-contents.ct-theme-light .ct-table-of-contents__link.is-active::before {
  background-color: var(--ct-table-of-contents-light-link-hover-stripe-background-color);
}
/*.ct-table-of-contents.ct-theme-light .ct-table-of-contents__link.is-active {
  border-color: var(--ct-table-of-contents-light-link-hover-border-color);
  border-width: 0.0625rem;
  border-left-width: 0;
  padding-top: 0.4375rem;
  padding-bottom: 0.4375rem;
}*/

</style>