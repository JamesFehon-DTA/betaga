---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'application-security'
title: 'Application security'
url: '/'
toc: ''
content_top: true
aga_code: 'STA54'
type: 'AGA Standard'
---

The Australian Government ensures the safety and security of its operations to remain a trusted custodian of sensitive information. It will continue to maintain the safe, secure operation of government systems and technology through the effective implementation of the [Information Security Manual](https://architecture.digital.gov.au/information-security-manual-ism), [Protective Security Policy Framework](https://architecture.digital.gov.au/protective-security-policy-framework-pspf), the [Essential Eight Mitigations](https://architecture.digital.gov.au/essential-eight), and by increasingly adopting secure-by-design and secure-by-default principles and tactics.

The application security standard ensures that applications are developed and maintained with security in mind, protecting sensitive data and preventing unauthorised access, use, disclosure, modification, or destruction of data.

Cornerstones of investment include the secure environments where applications are hosted, and appropriate proactive approaches to detective, reporting, and corrective measures.

It is critical this standard be considered alongside those of complementary capabilities:

* [Information Asset Security](https://architecture.digital.gov.au/capability/information-asset-security)
* [Network Security](https://architecture.digital.gov.au/capability/network-security)
* [Permissions](https://architecture.digital.gov.au/capability/permissions).

## Be Secure-by-Design

Entities should:

* take a [Secure-by-Design](https://www.cyber.gov.au/resources-business-and-government/governance-and-user-education/secure-by-design) approach to application development as defined and recommended by the Australian Signals Directorate
* implement [Essential Eight Maturity Level 2](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight/essential-eight-maturity-model) mitigations as a minimum
* implement [ISM controls](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight/essential-eight-maturity-model-ism-mapping) within the defined areas of:

1. application control
2. patch applications
3. configure Microsoft Office macro settings
4. user application hardening
5. restrict administrative privileges
6. patch operating systems
7. multi-factor authentication
8. regular backups

## Align operational and technological needs

Entities should:

* design applications to integrate seamlessly with existing security infrastructure to provide layered security
* use trusted suppliers vetted as part of cyber supply chain risk management assessments
* record suppliers on their approved supplier list once vetted
* ensure security solutions for applications are scalable and flexible to adapt to evolving threats and technological advancements
* integrate security awareness and training programs, as human factors may pose a significant risk to the security of applications.

## Apply a risk-based approach

Entities should:

* be careful to ensure that security mechanisms do not inadvertently impact the performance, availability, accessibility, or other aspects of systems to the detriment of the user experience
* prioritise security considerations throughout all stages of the software development lifecycle, including architecture, design, development, testing, deployment and maintenance of applications
* integrate security awareness and training programs
* demonstrate and foster a culture of security awareness and management among their employees.

## Implement preventative measures

Entities should:

* implement access controls to ensure that users are granted the minimum level of access necessary to perform their job function, in line with a ’zero trust‘ approach
* define and manage user permissions based on job roles, streamlining access management and reducing potential security risks. For more detail on permissions, please refer to the [permissions](https://architecture.digital.gov.au/permissions) capability page.
* use multi factor authentication for user authentication
* ensure that both hardware and software are current, including:
  + timely implementation of tested vendor-supplied vulnerability patches
  + ongoing support and budget for necessary security works.

## Implement detective measures

Entities should:

* implement detective controls such as [intrusion detection systems](https://www.techtarget.com/searchsecurity/definition/intrusion-detection-system), antivirus scanners, and agents that monitor system health and availability
* develop and implement mechanisms for continuous vulnerability assessment and remediation across all stages of the software development lifecycle.

## Implement reporting measures

Entities should:

* consider and implement appropriate reporting processes
* have protocols and processes for reporting and recording any security incidents.

## Implement corrective measures

Entities should:

* establish a process for timely identification of attacks to prevent further compromise of the application’s data holdings
* be able to understand the impact of an attack, by gathering facts and evaluating risks, including potential harm to affected individuals, and, where possible, take action to remediate any risk of harm
* test and deploy security patches and updates to mitigate known vulnerabilities.

## Align to guidelines and standards

Entities must:

* apply the principles and requirements of the [Protective Security Policy Framework](https://architecture.digital.gov.au/protective-security-policy-framework-pspf) throughout their organisation
* meet the requirements of the [Hosting Certification Framework](https://architecture.digital.gov.au/hosting-certification-framework).

Entities should consider and align, where suitable, to security frameworks across Government:

* [Information Security Manual](https://architecture.digital.gov.au/information-security-manual-ism): A cyber security framework that an organisation can apply, using their risk management framework, to protect their systems and data from cyber threats.
* [Strategies to mitigate cyber security incidents](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/strategies-mitigate-cyber-security-incidents): Prioritised mitigation strategies to help organisations reduce cyber security incidents caused by various cyber threats.

Entities should also consider the following from organisations outside of the APS:

* [ISO/IEC 27034](https://www.iso.org/standard/44378.html) provides frameworks and processes to assist entities in integrating security though the life cycle of the application
  + the Open Web Application Security Project (OWASP) provides comprehensive resources in relation to [mobile application security](https://owasp.org/www-project-mobile-app-security/) and [web application security](https://owasp.org/www-project-web-security-testing-guide/)

## Comply with legislation

Entities must:

* comply with relevant Commonwealth legislation including (but not limited to):
  + [*Archives Act 1983*](https://www.legislation.gov.au/C2004A02796/2019-04-25/text) (Cth)
  + [*Data Availability and Transparency (DAT) Act 2022*](https://www.legislation.gov.au/C2022A00011/latest/text) (Cth)
  + [*Privacy Act 1988*](https://www.legislation.gov.au/C2004A03712/asmade/text) (Cth)
  + [*Security of Critical Infrastructure Act 2018*](https://www.legislation.gov.au/C2018A00029/latest/versions) (Cth)
* comply with any other legislation applicable to specific functions and circumstances.

## Adhere to reuse principles

The Australian Government Architecture (AGA) provides information for entities on [reuse](https://architecture.digital.gov.au/reuse-standard).

Entities must:

* meet the requirements of the [Digital and ICT Reuse Policy](https://architecture.digital.gov.au/digital-and-ict-reuse-policy)
* ensure that their selected solution, irrespective of reuse of existing investment, is supportable, affordable, secure and fit-for-purpose through continual improvement of processes, features, data, security, technology, skills and cost
* check the contractual arrangements, Memorandums of Understanding (MoU) currency and AGA design state prior to investment.

Entities should:

* compare their requirements with those of other comparable entities and system functions and seek to reuse learnings from preceding implementations
* consider application security-specific functional and non-functional requirements prior to solution design or consideration of technology choice, including:
  + application interfaces and interoperations
  + broader system purpose
  + performance and availability requirements.