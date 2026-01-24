---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'payments'
title: 'Payments'
url: '/'
toc: ''
content_top: true
aga_code: 'STA66'
type: 'AGA Standard'
---

The Payments standard ensures that payment systems are delivered in a manner that prioritises recipients whilst delivering efficiency and meeting the requirements of Commonwealth entities.

## Comply with legislation

Entities must:

* comply with relevant Commonwealth legislation including (but not limited to):
  + *Data Availability and Transparency* (DAT) *Act 2002* (Cth)
  + *Privacy Act 1988* (Cth)
* comply with any other legislation applicable to specific functions and circumstances.

Relevant standard: ISO 20022 - is a general-purpose standard for development of financial industry messaging in the payments, securities, trade services, cards and foreign exchange business domains. For payments, the ISO 20022 standard covers messaging related to cash account management, payments initiation, clearing, and settlement.

## Understand alignment to payment archetypes

Entities should:

* align their use cases to archetypes as defined below
* use archetype alignment as a focal point for identification of previous investment and assessment of solution suitability.

Across government, payment systems can be grouped based on their broader roles in government financial operations and service delivery. Specific use cases can be broadly categorised into the following archetypes:

* **Stakeholder and service provider payments:** Disbursement of financial benefits or entitlements directly to individuals, businesses, organisations, or authorised representatives.
* **Rebate payments to service providers:** Payments made to service providers who offer government approved or subsidised services to eligible individuals, businesses, organisations or authorised representatives.
* **Vendor payments:** Payments made to vendors and suppliers providing goods and services to government entities. This archetype is typically included within an ERP solutions – see ERP finance standard.
* **Refunds:** Issuance of refunds to individuals or businesses who have overpaid monies to an entity.
* **Commercial fee payments:** Collection of payments related to duties, fees, or similar.
* **Public donations and contributions:** Collection of donations or voluntary contributions from individuals or businesses to fund specific government initiatives or causes.
* **Fund collection/distribution systems:** An entity collects funds from one party and redistributes them to another, acting as an intermediary.
* **Fund collections:** An entity collects funds from an individual, business or other organisation in accordance with legislation.

## Prioritise standardisation and interoperability

Entities should:

* ensure that payment systems can integrate to an external financial institutes and other third-party payment processors
* regularly test interoperability to ensure that updates or changes in one system do not disrupt payment processes.

## Ensure security and fraud prevention

Entities should:

* use secure networks and data carriers
* encrypt data both in transit and at rest
* implement role-based access controls within the payments systems, and any upstream systems, ensuring that only authorised personnel have access to sensitive payment information (refer to [Permissions](https://architecture.digital.gov.au/permissions) for further detail)
* implement continuous monitoring systems to detect and prevent fraudulent activity pre-payment and in real time
* implement and maintain robust verification procedures to ensure accurate collection, storage and validation of bank account details before processing any payments, ensuring funds are directed to the correct recipient.

## Set payment timelines and prompt payment standards

Entities should:

* set clear timelines for processing payments to both promote prompt payment by individuals and businesses, and give recipients confidence in their timely receipt of funds
* if relevant, ensure the ability to expediate and prioritise emergency payments, enabling rapid response in critical situations such as natural disasters.

## Ensure, and report on, transparency and reporting

Entities should:

* utilise real-time reporting and monitoring capabilities to provide transparent and up-to-date information on payment processes, including status tracking for all stakeholders
* leverage the payment platforms centralised data architecture to ensure consistency and accuracy in financial reporting across all entities
* set defined metrics for transparency, and regularly review and report against these.

## Engage stakeholders and consider user experience

Entities should:

* enable users to manage their payment options in a simple and accessible manner in line with guidance on [Digital Portals](https://architecture.digital.gov.au/digital-portal-individual)
* consider automating dispute resolution workflows to ensure timely resolution of payment disputes.

## Prioritise simplicity, sustainability, scalability, and emerging trends

Entities must:

* prepare to transition away from the Bulk Electronic Clearing System framework, expected to close in 2030, in line with the [Strategic Plan for Australia’s Payments System](https://treasury.gov.au/publication/p2023-404960).

Entities should:

* consider the integration of the [New Payment Platform](https://www.rba.gov.au/payments-and-infrastructure/new-payments-platform/) into existing payment systems to enable real-time processing
* maintain interoperability with other payment systems and platforms to ensure seamless integration with emerging technologies
* formulate a strategic roadmap for reducing cheque usage, prioritizing a phased migration to digital payment methods
* focus on electronic payments to reduce paper use, aligning payment methods with environmental sustainability goals
* ensure that any payment-related investment is scalable, accommodating future growth and technological innovations whilst enabling advanced analytics to support
* shift processes and users to digital payments while ensuring minimal disruption, tailoring the approach to meet the needs of different user groups
* offer a range of digital payment options, allowing users to choose methods that are convenient and accessible to them
* regularly elevate and update their payment platforms to integrate new technologies
* ensure payment systems incorporate or enable integration of advanced analytics to support ongoing operational needs.

## Adhere to reuse principles

The Australian Government Architecture provides information for entities on [reuse](https://architecture.digital.gov.au/reuse-operating-model).

Entities should:

* compare their requirements with those of other comparable entities and system functions, and seek to reuse learnings from preceding implementations
* consider specific functional and non-functional requirements prior to solution design or consideration of technology choice, including:
  + volume and nature of payment activities
  + broader entity purpose
  + performance and availability requirements
  + privacy/sensitivity concerns
* meet the requirements of the whole-of-government reuse policy.