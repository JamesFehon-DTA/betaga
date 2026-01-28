---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'enterprise-resource-planning'
title: 'Enterprise resource planning (ERP)'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA33'
type: 'AGA Standard'
---

The selection of an ERP provider for a new or updated platform, and subsequent implementation, may be influenced by several requirements, including entity complexity, attributes, and the availability and suitability of existing reusable investments. Beyond these criteria, the hosting, licencing, commissioning, and maintenance (and associated contracts) of any system should be considered.

This standard covers ERP at an overarching level. Entities should also consider the following detailed standards:

* [ERP Finance Standard](https://architecture.digital.gov.au/erp-finance-standard)
* [ERP Human Capital Management (HCM) Standard](https://architecture.digital.gov.au/erp-human-capital-management-standard)
* [ERP Procurement Standard](https://architecture.digital.gov.au/erp-procurement-standard)
* [ERP Travel and Expense Management System (TEMS) Standard](https://architecture.digital.gov.au/erp-travel-expense-management-system-standard)

## Align to the APS ERP approach

Under the [APS ERP approach](https://www.finance.gov.au/government/new-aps-erp-approach), all non-corporate Commonwealth entities have autonomy and choice to modernise ERP solutions using technology and vendors that best meet their needs and budgets.

* When choosing ERP solutions or vendors, entities must align with the principles of:
  + affordability: ERP systems are affordable to acquire, operate and sustain and consider re-use in their development.
  + choice: Entities have autonomy to select contemporary technologies that best meets entity needs.
  + contestability: APS leverages competition in the ERP market to improve service offerings and promote innovation.

Smaller entities (defined as having around 800 or less staff) with straightforward, or less complex, ERP requirements must:

* seek support from the Department of Finance, to understand ERP uplift requirements and choose cost-effective solutions. Entities can seek support by emailing [ERPapproach@finance.gov.au](mailto:ERPapproach@finance.gov.au).

The approach does not prevent entities from seeking or continuing to receive transactional processing services from existing hub providers.

## Notify the DTA of any ERP investment activities

Governance and sequencing of ERP investment is overseen by the Secretaries Data and Digital Committee (SDDC) and Chief Operating Officer (COO) Committee.

To facilitate Secretaries’ oversight of the ERP investment pipeline, entities must:

* identify any ERP uplifts intended over the coming years through the [digital investment pipeline data collection](https://www.digital.gov.au/investment/prioritisation) so that the pipeline can be presented to SDDC as part of the Integrated Digital Investment Plan (IDIP)
* identify any planned ERP uplifts through agency [Digital Investment Plans (DIPs)](https://www.digital.gov.au/investment/strategic-planning/digital-investment-plans-dips/digital-investment-plan-policy/digital-investment-plan-dip-policy) to help the DTA gain a complete view of whole-of-government ERP investment planning
* seek contestability and investment advice from [investment@dta.gov.au](mailto:investment@dta.gov.au) for development of ERP business cases towards as required for New Policy Proposals (NPPs).

Entities should:

* provide detailed business requirements and specifications to the DTA via investment@dta.gov.au, including technical scope and operating environment
* obtain guidance, resources, and contribute to the Australian Government Architecture (AGA) by contacting architecture@dta.gov.au
* seek sourcing advice and guidance from the DTA Digital Sourcing Branch via [ICTProcurement@BuyICT.gov.au](mailto:ICTProcurement@BuyICT.gov.au):
  + access and use of the mandatory ERP category under the Software marketplace
  + ERP project planning, implementation, and transition guidance.

## Align to the ERP technical standards

Entities should:

* determine and track low-level requirements in alignment with the technical standards, that break value streams into distinct functional capabilities, and within these nominate key processes that should be enabled by an ERP solution:
  + [ERP Finance Standard](https://architecture.digital.gov.au/erp-finance-standard)
  + [ERP Human Capital Management (HCM) Standard](https://architecture.digital.gov.au/erp-human-capital-management-standard)
  + [ERP Procurement Standard](https://architecture.digital.gov.au/erp-procurement-standard)
  + [ERP Travel and Expense Management System (TEMS) Standard](https://architecture.digital.gov.au/erp-travel-expense-management-system-standard)
* utilise these standards in mapping requirements to reusable designs
* document their implemented solution against these requirements, so that it can be reused in the future.

## Determine if an existing solution is suitable before implementing new instances

Entities must:

* consider suitability of existing instances of ERP solutions and platforms that exist across government, before effort is spent on implementing a bespoke ERP solution.

Entities should:

* reuse existing investment through shared service models or repurposing of existing cloud implementations
* if frequently affected by Machinery-of-Government (MoG) changes, align technologies with other frequently impacted entities to facilitate the efficient exchange of information and simplify future MoG processes.

## Identify further ERP reuse opportunities

Where existing shared service offerings/cloud solutions are not entirely reusable, entities should:

* seek to gain value from leveraging existing patterns and other artefacts
* focus on reusing elements of ERP solutions that benefit from standardisation, including the data formats for payroll data, general ledger, accounts payable and receivable processes, and expense management
* consume patterns and other artefacts available through the AGA’s design library, existing Whole of Australian Government Arrangements, and inter-government Memorandums of Understanding (MoU).

The DTA administers the [Australian Government Architecture Repository](https://architecture.digital.gov.au/australian-government-architecture-repository), a repository of technical artefacts that can be accessed by entities to help identify reuse opportunities. Contact [architecture@dta.gov.au](mailto:architecture@dta.gov.au) to request access.

## Utilise whole-of-government contracts and panels to acquire ERP products and services

The Commonwealth has negotiated terms and conditions through whole-of-government agreements and panel arrangements that consider value for money, legal protections, security and confidentiality provisions, availability and performance requirements, and warranty conditions.

Entities must:

* make use of the ERP Products and Service solutions category on the [Software Marketplace](https://www.buyict.gov.au/sp?id=marketplace_landing&marketplace=1721e561db2f60106529773c34961960&kb=KB0010629&path=buying) when purchasing ERP solutions
* acquire services related to ERP uplift and integration through the DTA’s Digital Panels or whole-of-government contracts
* contact [ICTProcurement@buyict.gov.au](mailto:ICTProcurement@BuyICT.gov.au) if you have concerns or issues with these arrangements.

## Customise only as essential

Entities should:

* ‘adopt rather than adapt’, using ERP technologies as available commercially-off-the- shelf (COTS) if possible
* assess the business processes documented within the AGA technical standards and housed in the DTA process repository
* leverage these processes, driving commonality of corporate processes across the Commonwealth and the efficient development of processes and requirements
* prioritise updating of business processes and policies to align with contemporary technological solutions over the variation (through configuration or customisation) of solutions, to reduce to the extent possible the variation required
* identify where legislation or legislative instruments outline specific requirements for Commonwealth entities that must be met with variations to commercial solutions or standardised processes
* consider whole-of-life impacts when committing to any variations, including:
  + ongoing cost of technology specialist resources to meet cyclical updates
  + additional testing to ensure variations continue to work sufficiently
  + added complexities with upstream or downstream integrated systems
  + more involved release scheduling planning
* use [the DATA Scheme](https://www.datacommissioner.gov.au/the-data-scheme) managed by the Office of the National Data Commissioner as a basis for enabling the exchange of data between entities, as well as commonality of reporting across the Commonwealth
* manage process variation in a scalable and sustainable manner, across:

1. Configuration – A way of re-setting the process through modifying data or settings directly within the technology solution.
2. Customisation – Creating or extending the technology solution through altering or adding code, features, or data.
3. Integration – Where varied processes are executed in another system *external* to the ERP technology solution, with the outcome then returned to and recorded within the ERP solution.

## Ensure ongoing viability of ERP solutions

Entities must:

* meet the requirements of the [Australian Government Architecture’s eInvoicing policy](https://architecture.digital.gov.au/einvoicing-policy) in any ERP implementation
* confirm contractual arrangements, MoU currency, and AGA design state prior to investment
* meet the requirements of the [Digital and ICT Reuse Policy](https://architecture.digital.gov.au/digital-and-ict-reuse-policy).

The Australian Government Architecture provides information for entities on [Reuse](https://architecture.digital.gov.au/reuse-standard).

Entities should:

* compare their requirements with those of other comparable entities and system functions, and seek to reuse learnings from preceding implementations
* consider specific functional and non-functional requirements prior to solution design or consideration of technology choice, including:
  + volume and nature of information assets
  + broader system purpose
  + performance and availability requirements
  + privacy/sensitivity concerns
* when implementing ERP solutions, make ongoing contributions to the [Australian Government Architecture Repository](https://architecture.digital.gov.au/australian-government-architecture-repository)
* collaborate on further developing existing reusable resources to enable the benefits associated with standardisation and reuse as the landscape of ERP implementations evolves.