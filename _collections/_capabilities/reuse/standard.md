---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'reuse'
title: 'Reuse'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA39'
type: 'AGA Standard'
---

Reuse is defined as making use of something more than once for a different purpose, or for a subsequent time. In government context, reuse enables simple, consistent, and accelerated government services through standardisation and utilisation of these common components. This can be enabled via partial or full utilisation of existing solutions, or by onboarding to an existing service in place of standing up a new platform.

In the Australian Government context, the term 'reuse' means using an existing component within the process of realising a new digital or ICT solution, as grouped into the following categories:

* Technology and architecture
  + Platforms and services
  + Architecture frameworks, standards, and patterns
  + Common components and code
* Business capability and process
  + Business capability models and process designs
  + Governance models
  + Business requirements and rules
* Procurement
  + Commercial, legal, and licensing agreements
  + Whole-of-government (WofG) procurement resources
  + Procurement processes
* Information and data
  + User and customer research
  + Data sets
* Skills and capabilities
  + Digital and ICT skills and capabilities

Reuse enables simple, consistent, and accelerated government services through standardisation and utilisation of these components. This can be enabled via partial or full utilisation of existing solutions, or by onboarding to an existing Shared Services Arrangement in place of standing up a new platform.

Reuse should not stand in the way of competitiveness, innovation, and adoption of modern solutions. Any new adoption of new technologies or standards, or development of new components, should enable future reuse while retaining compatibility with other related governmental policy and advice.

The Digital and ICT Reuse Standard applies to Non-corporate Commonwealth entities subject to the Public Governance, Performance and Accountability Act 2013.

For corporate Commonwealth entities and wholly owned Commonwealth companies, the standard represents better practice.

## Reuse guidance

The Digital and ICT Reuse Policy is underpinned by several themes: engagement, governance, architecture, and operations. As a starting point, entities should:

* identify their use case requirements and alignment to business capabilities
* start engagement with key stakeholders and entities that may harbour reusable components early in planning of proposals to identify reuseable capabilities or what is required to be built for reuse
* establish governance arrangements, including high-level architectures mapping to broadly applicable base capabilities, to ensure objectives are achieved and standards are adhered to throughout the delivery process
* if building whole-of-government (WofG) capabilities, establish and maintain the WofG base capability as well as the necessary support processes, tools, and guidance to facilitate reuse or onboarding by consuming entities
* understand factors effecting reuse such as commonality of the use case requirements, existing technology and data environment, scale, and the availability of the reusable content.

## Understand use case requirements

Many different solutions and platforms are available in government. There is therefore significant opportunity to derive value from previous investment.

Entities should:

* understand specific functional and non-functional use case requirements
* understand how their own systems requirements can be aligned to existing systems.

Use case requirements of specific note may include:

* alignment to defined business capabilities
* scale/volume/frequency/availability
* tactical/strategic nature of solution
* security/privacy
* policy mandates
* existing technological landscape
* user and client needs/attributes
* nature of data contained/managed.

## Architecturally map alignment to business capabilities

Any technological solution/system can be considered through the lens of the capabilities it enables. The Open Group define a capability as 'an ability to do something'. A business capability, then, represents the ability for a business to *do something*.

Entities should:

* map the proposal to the business capabilities it enables, aligning it to policies, standards, and designs (representing previous investment that can be leveraged)
* adopt an overarching Enterprise Architecture approach that aligns its function and structure to business capabilities, and further to technical solutions and patterns.

## Consider scale of solution and appropriate licencing/hosting

ICT applications and solutions commonly used across government, including in the domains of Customer Relationship Management, Case Management, Enterprise Resource Planning, Grant Management, and many others, may be considered in terms of scale (micro/mid/enterprise), and supply/licencing/hosting.

Entities should:

* gain a good understanding of scale, supply, licencing, and hosting related requirements and options available as aligned to vendor offerings:
  + Micro-scale COTS.

    Locally installed on organisation computers, often with simple extensions to support specific organisational needs and integrations, and generally only supporting standardised, simple solutions and processes.
  + Micro-scale SaaS.

    Subscription-based and hosted on a hosting provider’s servers. Mostly used by multiple organisations in the same shared technology platform, with limited capacity for custom configurations, deployment, or hosting.
  + Mid-scale SaaS.

    Similar to Micro-scale SaaS, but with a higher level of organisational configuration and customisation than micro-scale. Allow extension to handle more complex models/transactions/processes, but generally only with a small number of variations and in a simple structure or deployment context.
  + Enterprise-scale SaaS

    Specific to the organisation (or organisations) they are servicing and often referred to as a “private cloud offering”. A vendor provides the software and technology layer, with contractual responsibility for design, implementation, maintenance, and support. Very high enrolment, and implementation(s) should support high-volume, low-cost unit rates or high-cost specialist transactions, and support multiple customisation and localisation options beyond the vendor’s base offering, as well as allowing for significant scaling and expansion.
  + Subscription-based PaaS

    A cloud offering that broadens the SaaS model to include the vendor delivering infrastructure for hosting software, data, and other requisite components within the service.
  + Government Platform as a Service (GPaaS)

    A combination model where government acts as the platform provider and controls the design, implementation, maintenance, and support of combined services. In this model, government may make use of specific SaaS services from enterprise-scale providers, and/or utilise Infrastructure as a Service (IaaS), or on-premises (own infrastructure) to deliver a solution. Distinct in that government determines and owns the implementation, the frequency of maintenance and support, and other functionality or lifecycle management. This is a strictly private-to-government arrangement, in which implementation(s) must support high-cost, specialist transactions and may support high-volume, low-cost unit rates.
* select a solution and arrangement aligned to the needs of the system and organisation.

## Consider whether a solution is tactical or strategic

Entities should:

* understand whether solutions can be considered as:
  + **Strategic:** A solution developed to solve a business need in a manner that is ongoing and will receive medium to long-term support.
  + **Tactical**: A fast-tracked solution designed to solve an urgent need, often delivered with less procedural rigour and in a manner that does not suit a long-term implementation.
* reuse tactical solutions only for other tactical purposes, and only where components of the existing solution are suitable for re-implementation with minimal rework
* reuse strategic solutions for strategic or tactical purposes where suitable
* maintain appropriate documentation highlighting the nature of reuse and plans for managing any incurred technical debt.

## Reuse whenever possible

Entities should:

* investigate options to plan for and make use of opportunities for reuse. In line with the Reuse Policy, entities should consider reuse opportunities across the five reuse categories:
  + technology and architecture
  + business capability and process
  + procurement
  + information and data
  + digital and ICT skills and capabilities
* develop a clear understanding of requirements and align to business capabilities
* align with Australian Government Architecture (AGA) and engage with entities who have implemented and/or used comparable solutions
* analyse functions (such as policy, service delivery, legislative or regulatory focuses), as these can be of value in identifying potential options for reuse
* ensure existing solutions are suitable for reuse through either shared service models, repurposing of existing cloud implementations, or through leveraging of existing patterns suitable to support the use case
* enable patterns to be available to be consumed through existing Whole of Australian Government arrangements and inter-government Memorandums of Understanding (MoU)
* assess the suitability of reuse by analysing the requirements of a use case against the capabilities of the asset being reused
* discourage reuse of existing investment if the effort required to align it to use case requirements outpaces that of implementing a different, strategically-aligned solution.

## Design and build for reuse

Even if an entity cannot reuse an existing investment, they should still ensure that any new elements created are able to be reused by other entities. The consideration of reuse as a requirement when investing in, and maintaining, digital and ICT delivery will help drive lower build and run costs, increase speed and certainty of delivery, and enable interconnectivity of services for people and businesses.

Entities should:

* document and archive patterns and other key system details in an accessible and navigable internal repository
* standardise data formats and interoperability protocols
* align architecture to industry standard frameworks such as The Open Group Architecture Framework (TOGAF)
* adhere to industry standards such as Web Content Accessibility Guidelines (WCAG)
* adhere to applicable governmental guidelines and non-functional requirements, including those presented on the AGA
* maintain awareness of best practice for relevant technologies at all levels including technology selection and hosting, data management, software development/quality assurance/deployment, etc.
* consider how a system may be appropriately modularised to enable repurposing/reuse with minimal rework/risk to the initial system
* maintain high quality technical documentation throughout works, that can be provided for future reuse
* develop the necessary support processes, tools, and guidance to facilitate reuse or onboarding by other entities.

## Minimise Technical Debt

Technical debt is defined as accrued work that is ’owed’ to an IT system, a side effect of software engineering resulting from teams ’borrowing’ against quality by making sacrifices, taking short cuts, or using workarounds to meet delivery deadlines.

Entities should:

* consider technical debt when implementing a solution intended to be reusable
* consider any instances of reuse as opportunities to remediate previously incurred debt
* understand the long-term cost of technical debt and budget for future remediations/long term costs associated with short-term solutions
* ensure new technical debt is taken on in a deliberate manner and tracked/planned for, according to the situational needs and in line with a long-term strategy
* consider debt management as an ongoing process throughout the delivery lifecycle(s) and analyse and document appropriately
* establish and maintain the WofG base capability as well as the necessary support processes, tools, and guidance to facilitate reuse or onboarding by consuming entities for WofG capabilities.

## Enable reuse by others

Entities should ensure anything created is available to those who might derive benefit from it (unless there are legislative/ethical barriers). This may take the form of:

* senior executive-level engagement across government
* publishing content as a Design on the Australian Government Architecture (AGA), with clear advice guiding the AGA's audience on *how* a component may be reusable, and on the relevant attributes (scale, technology, etc.)
* publishing content on another suitable repository, such as an API on api.gov.au or an open-source codebase on GitHub
* clearly articulating, in a manner that suits the sensitivity of any subject matter/data, the component’s fundamental details on your entity's website, alongside contact details
* working with other entities to provide them support in their reuse of investment or capability.