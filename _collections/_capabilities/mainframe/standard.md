---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'mainframe'
title: 'Mainframe'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA67'
type: 'AGA Standard'
---

Fitness-for-purpose of computer applications to meet organisational needs whilst remaining supportable and best value for money are qualities that erode over time, regardless of the technology used. Whilst Mainframe computers deliver several distinct advantages for certain types of computing workload, the particular risks associated with mainframe usage warrant a set of proactive standards to be adopted, which will enable the Australian Government to manage these risks appropriately and ensure the best performance, resilience and currency for the particular applications needed by Commonwealth entities and the best strategic advantage for the nation on digital investments.

These standards also recognise that mainframe computers may play an important role in emerging technology fields such as AI and quantum computing.

## Utilise the appropriate whole-of-government procurement contract

Entities must:

* liaise with the DTA contract team to identify the appropriate whole-of-government contract arrangements in place
* ensure all procurement of mainframe infrastructure and services are purchased under whole-of-government procurement contract arrangements.

## Host mainframe infrastructure in complying computing facilities

Entities must:

* apply the principles and requirements of the [Protective Security Policy Framework](https://architecture.digital.gov.au/protective-security-policy-framework-pspf) throughout their organisation
* apply a risk-based approach to cyber security for Mainframe computing facilities, to align with the [Information Security Manual](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/ism) (ISM).

## Identify and assess mainframe applications in use

Entities should:

* implement a coherent Enterprise Architecture practice which clearly identifies information systems (applications) and data which rely on mainframe technology components
* detail how applications reliant on mainframe computing facilities support their organisational needs
* regularly assess whether the application meets organisational needs, including current and foreseeable changes
* regularly assess whether the solution architecture of an application represents the most appropriate environment available, enabling the performance and agility to meet anticipated changes in organisational needs
* assess the Total Cost of Operating (TCO) for applications, from a business/operational perspective and a technical perspective, including staff costs, software licensing, hardware, hosting, advisory/specialist support, and other associated costs
* explore the best value for money options when considering plans for existing mainframe applications. Lower cost computing resources may be sufficiently fit-for-purpose to meet organisational needs, whilst enabling greater functionality and agility to meet organisational needs
* ensure that all mainframe applications are incorporated into a mainframe modernisation strategy, incorporating risk assessments which combine the workforce skills risk, application modernisation risk, and risks associated with not investing in application modernisation
* consider the overall application portfolio risk whilst assessing the best course of action for each application
* consider options for modernisation of applications, including the following ‘five R’s’ (courtesy of Gartner):

**Rehost**

Redeploy the application to other infrastructure (physical, virtual or cloud) without recompiling, modifying the application code, or modifying its features and functions.

**Replatform**

Migrate the application to a new runtime platform. This may include minimal changes to code for compatibility with the new platform (e.g. To use cloud services or another database platforms), but no changes to the code structure.

**Rearchitect**

Restructure and optimise existing code without changing its behaviour to remove technical debt and improve nonfunctional attributes and structure. This can include a shift to a new application architecture or platform to exploit new and better capabilities. This can also include code transformation or refactoring.

**Rebuild**

Rebuild or rewrite the application. This includes the possibility to create a like-for-like replacement of the application and preserve its scope and specifications.

**Replace**

Eliminate the former application and replace it with an available vendor solution, taking new requirements and needs into account.

## Manage mainframe workforce skills risk

Entities should:

* manage the mainframe workforce skills risk by assessing this risk and proactively collaborating across the APS to mitigate the risk
* undertake, for each application, a skills assessment which includes details of the specialist skills needed to operate the application effectively to meet operational needs, including planned and anticipated changes
* regularly undertake an overall application portfolio skills requirement assessment, which includes any shared technology components used by multiple applications
* weight skills-requirement assessments against a regularly updated stock-take of the specialist skills capacity available inhouse from organisational staff, from the wider pool of APS staff resources, and from all other sources, considering the relative costs and responsiveness of these resources
* seek to establish resource pooling arrangements between themselves and other relevant entities and take a proactive role in working groups informing the APS Commission’s Digital Workforce Strategy to ensure mainframe skills are appropriately included in planning activities.

## Ensure an effective hybrid technology environment

Commonwealth entities which operate mainframe environments must:

* ensure that mainframe-based applications and data are effectively integrated into a hybrid technology environment
* replicate mainframe-hosted data to other secure commodity computing environments, enabling downstream uses of data such as reporting and access via user portals.

Entities should:

* transition front-end technologies, which provide end user interface experiences and input data into mainframe applications, to commodity computing environments
* document back-end real-time processing and batch processing jobs based on mainframe components, and transition these to modern cost-effective and risk-balanced solutions aligned to the mainframe modernisation strategy.

## Transition away from outdated technologies

When considering a balanced approach to application portfolio modernisation according to their strategic and operational needs, Commonwealth entities must:

* develop strategy to transition away from outdated and/or unsupported code bases, transaction processing environments, and database environments to mitigate the workforce skills risk, agility risk and value for money risk
* prioritise digital investments which enable this transition in the overall ICT Strategy.

This will reduce overall risk for the Australian Government and enable greater agility to respond to changing government policy needs.

## Adhere to reuse principles

The Australian Government Architecture provides information for entities on [Reuse](https://architecture.digital.gov.au/reuse-standard).

Entities should:

* compare their requirements with those of other comparable entities and system functions, and seek to reuse learnings from preceding migrations
* consider specific functional and non-functional requirements prior to transition of any application(s) away from mainframe platforms, including:
  + volume and nature of data and computational requirements
  + broader entity purpose
  + performance and availability requirements
  + privacy/sensitivity concerns
* meet the requirements of the [Digital and ICT Reuse Policy](https://architecture.digital.gov.au/digital-and-ict-reuse-policy).