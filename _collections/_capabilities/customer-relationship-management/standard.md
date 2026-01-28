---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'customer-relationship-management'
title: 'Customer Relationship Management'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA59'
type: 'AGA Standard'
---

The CRM standard seeks to ensure that government CRM systems align with current digital policies, address both strategic and operational needs of entities, and are regularly monitored and updated to fully optimise their benefits.

Additionally, this standard outlines strategic requirements that enhance the value of customer data. This enables entities to acquire the knowledge and insights vital for fostering stronger relationships with both individuals and businesses.

## Comply with legislation and regulation

Entities must:

* comply with relevant Commonwealth legislation including (but not limited to):
  + *Archives Act 1983* (Cth)
  + *Data Availability and Transparency (DAT) Act 2002* (Cth)
  + *Freedom of Information Act 1982* (Cth)
  + *Privacy Act 1988* (Cth), including the Australian Privacy Principles (APPs)
* comply with any other legislation applicable to specific functions and circumstances.

Entities should:

* seek independent legal advice where appropriate.

## Align to guidelines and standards

Entities must:

* meet the [Hosting Certification Framework](https://www.hostingcertification.gov.au/) (please refer to [Hosting](https://architecture.digital.gov.au/hosting) for more information) for hosting of CRM platforms
* apply the principles and requirements of the [Protective Security Policy Framework](https://architecture.digital.gov.au/protective-security-policy-framework-pspf) throughout their organisation, including in the context of CRM.

Entities should:

* apply a risk-based approach to cyber security, where it comes to CRM systems, to align with the [Information Security Manual](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/ism) (ISM)
* develop a risk-managed approach to treat the risk of a CRM service (including backups of data) becoming inaccessible for any reason, or of data within it being lost or compromised.

## Align to CRM archetypes

Entities should:

* align their use cases to archetypes as defined below
* use archetype alignment as a focal point for identification of previous investment and assessment of solution suitability
* lead any investment in CRM with a holistic service management and delivery approach in alignment with the entity’s overarching mission.

Across government, CRM systems can be grouped based on their broader roles in government operations and service delivery. Specific use cases can be broadly categorised into the following archetypes:

* **Government-to-individual:** Systems for overseeing and engaging with verified individuals and their data, generally for the purpose of individual access to government services.
* **Government-to-business:** Systems designed to manage and interact with verified business representatives and their data generally for the purpose of access to government services.
* **Government-to-government:** Systems created to facilitate interactions with authenticated government officials for fulfilling reporting obligations or delivering shared services.
* **Government-to-partner:** Systems created to facilitate interaction with other external companies and partners, such as suppliers/vendors and industry networks.

In addition to considering the CRM archetype it is important to consider scale of the CRM system. Entities should:

* consider three dimensions of scale:
  + **Data volume:** The total amount of data be maintained in both accessible and archive states.
  + **Interaction volume**: How often interactions are created, updated, and accessed, including an annual average alongside understanding of peaks and troughs (significant spikes due to external factors, such as financial, fiscal or political cycles).
  + **Size of the user base:** The number of users of the system and their access requirements.
* utilise system scale to test comparability of potential solutions, and with previous investment across government.

## Adopt a customer-centric approach to designing CRM systems

Entities must:

* meet the requirements for designing and delivering digital government services set by the [Digital Service Standard](https://architecture.digital.gov.au/digital-service-standard-v2)
* determine and monitor appropriate performance and experience metrics in line with the [Digital Performance Standard](https://architecture.digital.gov.au/digital-performance-standard).

Entities should:

* understand the business issues that CRM systems need to resolve, and their importance, to shape requirements prior to investigating technological solutions
* communicate initial assumptions, seeking varied viewpoints from stakeholders and customers, and utilise existing data and resources as well as undertaking external research
* explicitly outline the risks associated with both acting and remaining inactive, identify the impacts, highlight possible obstacles, and acknowledge any gaps in data and knowledge in managing customer relationships
* ensure CRM systems and solutions can cater for growth and changing preferences without impacting performance, functionality, or stability
* baseline metrics via initial assessments of customer experience, then continually monitor in order to make informed decisions on future improvements
* design with foresight to upholding principles such as net neutrality, uncensored information access, and the freedom of online assembly, evaluating how the use of CRM system could affect users' digital rights.

## Determine needs within an extended set of CRM features

Entities should:

* investigate their entity/project specific needs
* align where suitable to the below considerations when determining potential CRM solutions.

A series of extended CRM considerations includes:

* **Automation of engagements:** Can the solution automate customer engagements, either directly or through integration with other systems?
* **Case management:** Does the solution include case management functionality or integrate with case management systems? [Case Management | aga (digital.gov.au)](https://architecture.digital.gov.au/case-management)
* **Collaboration:** Does the solution enable employee collaboration within a workflow to seamlessly deliver services to customers? [Collaboration and Sharing | aga (digital.gov.au)](https://architecture.digital.gov.au/collaboration-and-sharing)
* **Modularity:** Can the solution operate as an independent component while also integrating seamlessly into the broader business process?
* **Digital engagement:** Does the solution support a range of digital engagement channels?
* **Low-code development:** Does the solution support simplified development, allowing effort to be placed on building business processes, and/or one step deployment?
* **Platform ecosystem integration:** Is the solution interoperable with third party functional modules?
* **Workflow and business process management support:** Does the solution support interaction with business process and workflow management solutions?

## Ensure the security of government and customers

CRM solutions may involve handling, managing, and communicating sensitive data, and the risk of inadvertent access or damage must be managed.

Entities must:

* authenticate users and customers prior to any information access, alteration, or exchange.
* gather only the data required for specific, defined purposes, as excessive data collection can compromise privacy and security.

Entities should:

* acquire explicit and informed permission from individuals and businesses before collecting or using their data
* transparently offer clear, accessible privacy policies in simple language, helping customers make informed choices about their data
* utilise the Office of the Australian Information Commissioner (OAIC) [APP guidelines](https://www.oaic.gov.au/__data/assets/pdf_file/0009/1125/app-guidelines-july-2019.pdf) to assist in applying the APPs when designing CRM solutions
* take a zero-trust approach to the providing of information to both customers and officials, ensuring that only relevant and necessary data is made available
* utilise the Trusted Digital Identity Framework (TDIF) Identity Exchange and Attribute Provider to enable identity authentication of individual and businesses.

## Prioritise integration

Entities must:

* enhance interoperability with Commonwealth entities and support data sharing within the bounds of legislation applicable to entities’ specific functions and circumstances.

Entities should

* define a singular reference source of truth for key data points, ensuring that there cannot be conflicting information in different sources
* integrate CRM solutions with other systems through APIs, or other means, to boost productivity, efficiency, accuracy, and visibility of customer data and interactions across government
* ensure data synchronisation between CRMs and other systems in a controlled manner that maintains record consistency and reduces risks associated with data silos.
* integrate appropriate communication channels (such as digital portal messaging, email, SMS, and paper mail) to improve customer interactions
* align with [API guidance](https://architecture.digital.gov.au/apis) to support cross-agency and jurisdictional data sharing, maintaining a consistent, reusable vocabulary
* consider data interoperability that enables the exchanging of data between different systems and entities using the [DATA Scheme](https://www.datacommissioner.gov.au/the-data-scheme)
* use current data, process, and virtual integration patterns, and develop new ones when needed, to improve collective APS skills across government.

## Monitor innovation and emerging trends in CRM

CRM has traditionally been a mature and commoditized solution. Advancements in technology fields including Artificial Intelligence (AI) and Augmented/Virtual Reality are enabling previously impossible customer experiences by providing features like “next best actions”, or virtual delivery channels.

Entities must:

* comply with the [policy for responsible use of AI in government](https://architecture.digital.gov.au/responsible-use-of-AI-in-government) where there is AI involved at any point in a CRM solution.

Entities should:

* consider opportunities to integrate emerging technologies, such as [AI](https://architecture.digital.gov.au/ai) and [virtual servicing](https://architecture.digital.gov.au/virtual-servicing-individual), into CRM systems to enhance customer interactions, streamline processes, improve overall efficiency, and drive growth
* reflect on how data models, datasets, and algorithms within CRM could relate to [entitlement](https://architecture.digital.gov.au/entitlements) decisions, aiming to offer users transparent information about the factors affecting these decisions.

## Adhere to reuse principles

For further information on reuse, see the AGA's [Reuse standard](https://architecture.digital.gov.au/reuse-standard).

Entities should:

* consider CRM-specific functional and non-functional requirements prior to solution design or consideration of technology choice
* meet the requirements of the whole-of-government reuse policy
* source via the Digital Marketplace on [BuyICT](https://www.buyict.gov.au/sp?id=marketplace_landing&marketplace=cbb1ec15db617b0031d7413b3a96190b&path=buying), including taking advantage of whole-of-government arrangements.