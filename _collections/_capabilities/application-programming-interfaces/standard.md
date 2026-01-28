---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'application-programming-interfaces'
title: 'Application programming interfaces (APIs)'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA37'
type: 'AGA Standard'
---

API solutions can facilitate the interconnection of Commonwealth entity, supplier, and partner functionality needed by government to manage internal and external engagements with stakeholders. Internal interoperability via API functionality can increase productivity, efficiency, accuracy, and visibility, and enhance management reporting. External interoperability can provide access to government data and should be governed under a fair use policy, as well as in consideration of guidance aligned to capabilities.

## Use api.gov.au as a central resource

Entities must:

* apply the National API Design Standards (NAPIDS) hosted on [API.gov.au](https://architecture.digital.gov.au/apigovau) to all Experience level APIs.

Entities should:

* apply the NAPIDS to all Process Level APIs tailored for re-usability
* apply the NAPIDS to custom developed, System Level APIs to assist developing Process or Experience Level APIs if required
* utilise [API.gov.au](https://architecture.digital.gov.au/apigovau) as a resource guiding all API development requirements.

The standard does **not** apply to third-party system level APIs such as those available ‘out-of-the-box’ or as part of Software as a Service (SaaS) platform, e.g. Salesforce APIs or ArcGIS APIs. However, it **may** be applicable in circumstances where these Experience Level APIs are re-exposed for wider consumption.

## Understand the evolving API technology environment

Entities should:

* prioritise [REST (Representational State Transfer)](https://api.gov.au/sections/getting-started.html#the-choice-behind-rest) as the basis for design, noting its ‘core’ position as the de-facto mechanism of data representation and transfer to and from systems on the internet
* consider emerging alternatives such as GraphQL for streaming data or function-based APIs, where REST APIs typically are *not* suitable
* avoid implementation of outdated/superseded API types such as SOAP (Simple Object Access Protocol)
* retire/replace older API types such as SOAP where they are presently in use
* monitor emerging trends when developing API solutions.

Recent shifts in the API architecture and design have included the evolution of API gateways from proprietary, supplier owned and managed interfaces to open-sourced alternatives offered at little or no cost. These offerings reduce implementation cost and provide greater flexibility in interconnecting other APIs and systems.

API design is evolving to incorporate the segmentation of API data functionality into either control streams or pure data, ensuring the optimisation of data flow through the API. The technology movement in both API domains provide an opportunity for Commonwealth entities to enhance interoperability, reduce implementation costs and optimise data transfer functionality. There is also a recent trend towards direct incorporation of Machine Learning and Large Language Model systems that will be inherently dependent on API connectivity.

## Lower development and maintenance complexity

Entities should:

* ensure that their selected solution is supportable, affordable, secure, and fit-for-purpose
* consider the suitability of low-code / no-code development paths prior to the use of more contemporary API development approaches.

API solutions can be implemented using a low-code/no-code development approach that uses human-centred functionality to rapidly define, test, integrate, and present complex processes and rulesets in a modular and repeatable manner, with minimal use of programming languages.

Contemporary API solutions adopting a low-code / no-code approach can benefit from the removal of layers between an analyst’s expertise and the solution. Direct engagement between the analyst and the platform can help optimise the end-to-end process or integrate the needs of a stakeholder. Benefits of this approach include rapid development, a better-understood and more refined business process and enhanced stakeholder satisfaction.

## Determine an API release, fair use, and distribution strategy

Entities must:

* define and document an API release, fair use and distribution strategy
* control and document release and distribution on a per-API basis.

Entities should:

* ensure a transparent approach to the release of APIs, around fair and reasonable use of the API and access to all associated data
* provide clear guidance on how APIs may be made available, including any supply costs.

Commonwealth entities have invested in the substantial development of system APIs. Some of these may be used internally as patterns, supplied to other entities for systems interconnection or released externally for third party interfaces. API owners have a discretion as to how, and to whom, they release APIs.

## Adhere to reuse principles

The Australian Government Architecture provides information for entities on [Reuse](https://architecture.digital.gov.au/reuse-standard).

Entities must:

* meet the requirements of the [Digital and ICT Reuse Policy](https://architecture.digital.gov.au/digital-and-ict-reuse-policy)
* ensure that their selected solution, irrespective of reuse of existing investment, is supportable, affordable, secure, and fit-for-purpose through continual improvement of processes, and features, data, security, technology, skills, and cost
* check the contractual arrangements, Memorandum of Understanding (MoU) currency, and AGA design state prior to investment.

Entities should:

* compare their requirements with those of other comparable entities and system functions, and seek to reuse learnings from preceding implementations
* consider specific functional and non-functional requirements prior to solution design or consideration of technology choice, including:
  + volume and nature of information assets
  + broader system purpose
  + performance and availability requirements
  + privacy/sensitivity concerns
* discover existing designs on the AGA website, on [api.gov.au](https://api.gov.au/), through direct contact with entities with comparable use cases, or via existing whole-of-government (WofG) procurement arrangements.