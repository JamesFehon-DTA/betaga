---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'information-asset-security'
title: 'Information Asset Security'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA52'
type: 'AGA Standard'
---

As a trusted custodian of sensitive information, the Australian Government is required to ensure the safety and security of its operations. The Government continues to maintain the safe, secure operation of the systems and technology through:

* the effective implementation of the [*Information security manual*](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/ism), the [*Protective security policy framework*](https://www.protectivesecurity.gov.au/) (PSPF) and the [*Essential eight mitigation strategies*](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight)
* increasingly adopting secure-by-design and secure-by-default principles and tactics
* investing in secure data centres and associated infrastructure that provide hosting services for Commonwealth entities.

The *Information Asset Security standard* has been developed to support these aims. It ensures that applications are developed and maintained with security in mind, protecting sensitive information assets and preventing unauthorised access, use, disclosure, modification or destruction of those assets. It is critical this standard be considered alongside those of complementary capabilities:

* [Application Security](https://architecture.digital.gov.au/application-security)
* [Network Security](https://architecture.digital.gov.au/network-security)
* [Permissions](https://architecture.digital.gov.au/permissions).

## Align to guidelines and standards

Entities must:

* apply the principles and requirements of the [*Protective security policy framework*](https://architecture.digital.gov.au/protective-security-policy-framework-pspf) (PSPF) throughout their organisation
* meet the requirements of the [*Hosting certification framework*](https://architecture.digital.gov.au/hosting-certification-framework) (HCF).

Entities should consider and align, where suitable, to security frameworks across Government, including:

* [*Information security manual*](https://architecture.digital.gov.au/information-security-manual-ism)
* [*Strategies to mitigate cyber security incidents*](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/strategies-mitigate-cyber-security-incidents).

Entities should also consider the following from organisations outside of the APS:

* [ISO/IEC 27001](https://www.iso.org/standard/27001) defines requirements an information security management system ISMS must meet.
* The Open Web Application Security Project (OWASP) provides comprehensive resources in relation to data security, including the [*OWASP data security top 10*](https://owasp.org/www-project-data-security-top-10/) which outlines the key security risks for storing and moving sensitive and personally identifiable information, the challenges involved and how to overcome them.

## Be secure-by-design

Entities should:

* take a [secure-by-design](https://www.cyber.gov.au/resources-business-and-government/governance-and-user-education/secure-by-design) approach to information asset security as defined and recommended by the Australian Signals Directorate
* implement [Essential Eight Maturity Level 2](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight/essential-eight-maturity-model) mitigations as a minimum
* implement [ISM controls](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight/essential-eight-maturity-model-ism-mapping) within the defined areas of:

1. application control
2. patch applications
3. configure Microsoft Office macro settings
4. user application hardening
5. restrict administrative privileges
6. patch operating systems
7. multi-factor authentication
8. regular backups.

## Align operational and technological needs

Entities should:

* design information asset security measures and solutions to integrate seamlessly with an entity’s existing security infrastructure to provide layered security
* understand the specific type of information being handled and tailor security measures accordingly
* use trusted suppliers, vetted as part of cyber supply chain risk management assessments
* record suppliers on their approved supplier list once vetted
* adopt advanced encryption methods, secure communication protocols and intrusion detection systems to safeguard both data in transit and data at rest
* ensure security solutions for information assets are scalable and flexible to adapt to evolving threats and technological advancements
* integrate security awareness and training programs, as human factors may pose a significant risk to the security of information assets.

## Apply a risk-based approach

Entities should:

* be careful to ensure that security mechanisms do not inadvertently impact the performance, availability, accessibility or other aspects of systems to the detriment of the user experience
* be careful to ensure that security and authentication mechanisms do not inadvertently make digital records inaccessible in the long term
* prioritise security considerations throughout all stages of the software delivery lifecycle, including when architecting, developing, testing and deploying applications
* integrate security awareness and training programs
* demonstrate and foster a culture of security among their employees.

## Select and implement appropriate information asset security controls

The Australian Government uses four security classifications:

* OFFICIAL: Sensitive
* PROTECTED
* SECRET
* TOP SECRET

All other information from business operations and services is OFFICIAL by default. UNOFFICIAL information is information that does not form part of official duty.

Entities must:

* apply the [*Australian Government recordkeeping metadata standard*](https://www.naa.gov.au/information-management/standards/australian-government-recordkeeping-metadata-standard)
* ensure security classified information is stored, transferred and disposed of appropriately.

Entities should:

* consider declassifying or downgrading records when protection is no longer needed
* understand the specific type of information asset being held or transferred, and tailor security measures accordingly.

## Implement detective measures

Entities should:

* implement detective controls such as [intrusion detection systems](https://www.techtarget.com/searchsecurity/definition/intrusion-detection-system) and agents that monitor data health and availability
* develop and implement mechanisms for continuous vulnerability assessment and remediation across all stages of the application development lifecycle
* monitor emerging risks and understand the threats these pose to their specific information assets.

## Implement reporting measures

Entities should:

* consider and implement appropriate reporting processes
* have protocols and processes for reporting and recording any security incidents.

## Implement corrective measures

Entities should:

* establish a process for timely identification of attacks to prevent further compromise of the application
* be able to understand the impact of an attack, by gathering facts and evaluating risks, including potential harm to affected individuals, and, where possible, take action to remediate any risk of harm
* ensure secure data redundancy such that critical systems can be restored and made available following any breach.

## Adhere to reuse principles

For further information on reuse, see the AGA's [*Reuse standard*](https://architecture.digital.gov.au/reuse-operating-model).

Entities should:

* consider application security-specific functional and non-functional requirements prior to solution design or consideration of technology choice, including:
  + volume and nature of information assets
  + broader system purpose
  + performance and availability requirements
  + privacy/sensitivity concerns
* meet the requirements of the whole-of-government reuse policy.

## Comply with legislation and regulation

Entities must:

* comply with relevant whole-of-government laws, regulations and domain standards including (but not limited to):
  + *Archives Act 1983* (Cth)
  + *Data Availability and Transparency* (DAT) *Act 2002* (Cth)
  + *Privacy Act 1988* (Cth)
  + *Security of Critical Infrastructure Act 2018* (Cth)
  + comply with any other legislation applicable to specific functions and circumstances, such as [*Strategies to mitigate cyber security incidents*](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/strategies-mitigate-cyber-security-incidents).