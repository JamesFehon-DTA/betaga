---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'permissions'
title: 'Permissions'
url: '/'
toc: ''
content_top: true
aga_code: 'STA53'
type: 'AGA Standard'
---

Permissions systems facilitate efficiency, consistency and a seamless workflow across entities responsible for secure access. Unique business needs and governance requirements will dictate solution selection, design and implementation.

The considerations outlined in this standard are intended to ensure suitable and effective permission implementations across government, assisting entities with reuse of existing investment and developing repeatable patterns.

## Confirm permissions applicability

Entities should use the following recommended criteria to confirm the applicability and classification of a permissions solution:

1. Does the permission allow the assessed entity to be something, do something or have something?
2. Is an eligibility assessment conducted, and does a specific set of eligibility conditions have to be met?
3. Has the outcome of the eligibility assessment been captured, and the assessed entity advised of the outcome?

Examples of outcomes that meet the above criteria include:

* sharing data or consenting to usage
* authorising someone to act on behalf of another person or entity (e.g. power of attorney, nominee)
* providing a permit to a resident to do something (e.g. at their property or business).

Other applicable examples will depend on the business function of each entity. Note that some permissions may lead to an entitlement being provided. The scope and granting of entitlements are covered in the [Entitlements](https://architecture.digital.gov.au/entitlements) capability in the Australian Government Architecture.

## Comply with legislation

Entities must:

* comply with relevant whole-of-government laws, regulations and domain standards including:
  + *Archives Act 1983* (Cth)
  + *Data Availability and Transparency (DAT) Act 2002* (Cth)
  + *Freedom of Information Act 1982* (Cth)
  + *Privacy Act 1988* (Cth)
* comply with any other legislation applicable to specific functions and circumstances.

## Identify permissions-related roles

Entities should:

* define a model for permissions that suits their needs
* align (and maintain) a mapping of roles in their context to this model
* use this model to shape decisions on solution design and ongoing use.

The W3C [Verifiable Credentials Data Model v1.1 (w3.org)](https://www.w3.org/TR/vc-data-model/#ecosystem-overview) introduces several key roles, and can be useful when considering an entity’s permissions structure. Each role is defined by its specific steps and functions in the end-to-end permissions process. The following roles are introduced in the specification:

* **Holder** – A role an entity might perform by possessing one or more verifiable credentials and generating verifiable presentations from them. Examples include students, employees and customers.
* **Issuer** – An entity that makes claims about one or more subjects, creates a verifiable credential from these claims and transmits the verifiable credential to a holder. Examples include corporations, non-profit organisations, trade associations, governments and individuals.
* **Subject** – An entity about which claims are made. Examples include human beings, animals and things. In many cases the holder of a verifiable credential is the subject, but not in all. For example, a parent (the holder) might hold the verifiable credentials of a child (the subject), or a pet owner (the holder) might hold the verifiable credentials of their pet (the subject).
* **Verifier** – The entity receiving one or more verifiable credentials, optionally inside a verifiable presentation, for processing. Examples include employers, security personnel and websites.
* **Verifiable data registry** – A system that mediates the creation and verification of identifiers, keys and other relevant data, such as verifiable credential schemas, revocation registries, issuer public keys and so on, which might be required to use verifiable credentials. Some configurations might require correlating identifiers for subjects. Examples include trusted databases, decentralised databases, government ID databases and distributed ledgers. Often there is more than one type of verifiable data registry utilised in a permissions ecosystem.

## Identify permissions decision type

Permissions solutions can be used within entities to assist decision-making. Typically, entity decision-making may be broadly classified into:

* **Immediate decisions** based on the provision of evidence or specific guardrails being met. These permissions generally allow the applicant to proceed with their application as a right, whether it is framed as an ad hoc permission or part of their ongoing eligibility.
* **Future decisions** based on assumptions about future need. These decisions are predictive, and subject to future review and confirmation. For example, ‘life events’, where an entity predicts that an individual may need a service or services in the future.

Entities should:

* recognise and identify against decision types during the design stage of permissions solution development
* identify business and technology systems to suit decision types within the entity’s operational requirements.

## Align operational and technological needs

While a range of functional requirements can be captured and considered, end user permission systems typically align to a supplier-specific solution. Options will vary, however there are a range of vendor-agnostic system functions that should be considered and incorporated if appropriate, e.g. zero-trust architecture.

Entities must:

* ensure permissions solutions appropriately log and attribute all permissions decisions, including the denying, granting and revoking of permissions in line with auditability requirements
* meet privacy requirements of individuals, organisations, processes and intellectual property
* meet security needs, particularly if the system contains sensitive or personally identifying data or is otherwise likely a target for threat actors.

Entities should:

* design permission solutions to integrate seamlessly with an entity’s existing infrastructure
* ensure permissions systems enable seamless management as well as robust permission handling
* consider business requirements of the entity for the granting of permission, which may include client servicing, compliance or regulatory oversight
* consider technology functionality needed to ensure rules-based assessment, end-to-end workflow management or outcome-based information capture and notification
* consider services wrapper needed to maintain the proposed solution, especially in areas such as records management and storage, change management and business continuity.

## Apply a risk-based approach

Entities should ensure that:

* permission systems do not inadvertently impact the performance, availability, accessibility or other aspects of systems to the detriment of the user experience
* permission mechanisms do not inadvertently make digital records inaccessible in the long term
* permissions are suitably applied to production and non-production environments, to ensure appropriate quality assurance of permission handling and protect information contained in those systems.

There are also specific non-functional needs that require upfront consideration, for legislative or practical reasons. Any system proposal that does not meet these needs would immediately be deemed unfit for implementation and ruled out of consideration. These needs may include:

* auditability requirements of process compliance and determination outcomes
* privacy requirements of individuals, organisations, processes and intellectual property
* security needs, particularly if the system contains sensitive or personally identifying data or is otherwise likely a target for threat actors.

## Lower development and maintenance complexity of permissions solutions

Entities are encouraged to work with potential suppliers during design and implementation phases to:

* minimise the development effort and pathway required, including proof of concept and solution pilots, and de-risk final solution implementation
* align with and adopt vendor and industry best practice when developing, deploying and applying permissions solutions, particularly incorporating lessons learned from other government entity implementations
* adopt streamlined maintenance models where the value may reduce overall cost and decrease ongoing management effort without adding additional risk.

## Ensure the ongoing viability of permissions solutions

The variety of permissions requirements across government makes it difficult to find a single, centralised solution or a universally applicable pattern. Unique permissions needs will dictate solution selection, design and implementation.

Entities should:

* ensure that their selected solution is supportable, affordable, secure and fit-for-purpose
* check contractual arrangements, Memorandum of Understanding (MoU) currency and AGA design state in advance of procuring capability
* maintain their solution to ensure ongoing value and reduce the creation of technical debt.

## Adhere to reuse principles

[Reuse](https://architecture.digital.gov.au/reuse-standard) content on the Australian Government Architecture provides information for entities on reuse.

Entities should:

* consider permissions-specific functional and non-functional requirements prior to solution design or consideration of technology choice, including:
  + nature of permissions
  + user needs
  + broader system purpose
  + performance and availability requirements
  + privacy and sensitivity concerns
* meet the requirements of the whole-of-government reuse policy.