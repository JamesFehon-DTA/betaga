---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'network-security'
title: 'Network Security'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA70'
type: 'AGA Standard'
---

The Australian Government ensures the safety and security of its operations to remain a trusted custodian of sensitive information. It will continue to maintain the safe, secure operation of government systems and technology through the effective implementation of the Information Security Manual, Protective Security Policy Framework, the Essential Eight Mitigations, and by increasingly adopting secure-by-design and secure-by-default principles and tactics.

The variance in specific situations and thus requirements across government inhibits an ability to pursue a single, centralised network security solution; with unique business needs and governing requirements dictating solution selection, design, and implementation.

The considerations outlined in the Standard below are intended to ensure suitable and effective network security implementations across government, assisting entities with reuse of existing investment as well as developing repeatable strategies.

It is critical this standard be considered alongside those of related capabilities:

* [Application Security](https://architecture.digital.gov.au/application-security)
* [Information Asset Security](https://architecture.digital.gov.au/information-asset-security)
* [Privacy](https://architecture.digital.gov.au/privacy)
* [Permissions](https://architecture.digital.gov.au/permissions)

## Comply with legislation

Entities must:

* comply with relevant Commonwealth legislation including (but not limited to):
  + *Archives Act 1983* (Cth)
  + *Data Availability and Transparency Act 2002* (Cth) (DAT Act)
  + *Freedom of Information Act 1982* (Cth)
  + *Privacy Act 1988 (*Cth)
  + *Security of Critical Infrastructure* *Act 2018* (Cth) (SOCI Act))
* comply with any other legislation applicable to specific functions and circumstances.

Entities should:

* engage with Department of Home Affairs and monitor any changes to their legislative requirements as they emerge.

## Align to guidelines and standards

Entities must:

* apply the principles and requirements of the [Protective Security Policy Framework](https://architecture.digital.gov.au/protective-security-policy-framework-pspf) throughout their organisation.

Entities should:

* refer to the “Guidelines for Networking” in the Australian Cyber Security Centre’s [Information Security Manual (ISM)](https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/ism), which provides a substantial set of design inclusions
* align to global conventional standards including:
  + NIST Special Publication 1800-26: Data Integrity: Detecting and Responding to Ransomware and Other Destructive Events
  + ISO/IEC 27001: Information security, cybersecurity and privacy protection – Information security management systems – Requirements
  + ISO/IEC 27002: Information security, cybersecurity and privacy protection – Information security controls
  + ISO/IEC 27003: Information technology – Security techniques – Information security management systems – Guidance
  + ISO/IEC 27035: Information technology – Information security incident management.
* NIST Cybersecurity Framework.

## Model your topology, and develop a strategic approach

Entities should:

* model their existing network infrastructure against the [OSI model](https://www.iso.org/ics/35.100/x/)
* plan network investment in alignment with the OSI model and according to best practice
* develop (and maintain) a whole-of-entity **network recovery and remediation strategy** to ensure that your entity has processes in place to recover from a security attack. The strategy should:
  + be developed to cover a worst-case scenario
  + outline procedures needed to ensure continuity of services, isolate attacks, and contain damage to the network infrastructures
* undertake **vulnerability assessments** at frequent, pre-determined intervals in line with a **vulnerability reporting policy** and associated procedures
* regularly review and update security policies and procedures, particularly to keep up with ‘zero day’ vulnerabilities.

Table 1: OSI model of network layers

| **Network Layer** | **Description** |
| --- | --- |
| **Application** | Application type, and standardised communication methods. |
| **Presentation** | The syntax of the data itself, for applications to send and consume, including data encryption and compression. |
| **Session** | Network coordination between two separate applications in a single session, including opening and closing communication between devices. |
| **Transport** | End-to-end communication between devices, including assurance that transported data packets arrive in the right order, without losses or errors, often demanding flow control and error correction. |
| **Network** | Routing, forwarding, and addressing across multiple connected networks of nodes or machines. |
| **Data Link** | Technologies used to manage data frames travelling through the physical layer within a single network. |
| **Physical** | Physical communication medium, including cables (copper, fibre optic, etc.), the air itself (through which Bluetooth, Wi-Fi, etc. is transmitted). |

## Select and implement appropriate Network Security controls

Entities should:

* implement measures to secure and protect each layer of the network, including design, infrastructure, and software solutions
* implement controls with consideration of the following concepts:
  + Network Segmentation
  + Network Access Control
  + Network Visibility
  + Network Policy Enforcement
* ensure layers of defence build on each security component to ensure there is no single-supplier vulnerability.

Differing network topologies will require a variety of network security components to fully protect across all layers. A wholistic network security solution may include the following components, mapped against the key network layers:

Table 2: Alignment of securing solution to network layer

| **Network Layer** | **Securing Infrastructure / Hardware / Software** |
| --- | --- |
| **Application** | Application Security; Application Firewall, Mobile Device Security |
| **Presentation** | Behavioural Analytics |
| **Session** | Data Loss Prevention; Security Information and Event Management; Intrusion Detection Systems |
| **Transport** | Access Control (TCP, UDP); Intrusion Prevention Systems, Virtual Private Networks, Gateways |
| **Network** | Network Firewall; Network Segmentation; Routers, Layer 3 Switches |
| **Data Link** | Layer 2 switches, hubs, bridges, network interface cards |
| **Physical** | Wireless Security, Network Cabling, Comms Rooms, Building Security, Network Closets, Biometric and Key Card systems |

## Recognise emerging network security trends

Entities should:

* monitor, and adopt where suitable, emergent technologies and paradigms that are transforming network security such as:
  + **Secure Access Service Edge (SASE):** An emerging framework that combines network security functions with comprehensive wide-area network (WAN) capabilities.
  + **Security Service Edge (SSE):** A subset of SASE that secures access to the web, cloud services, and private applications.
  + **Generative Cybersecurity AI:** Generates derived versions of security-related and other relevant content, strategies, designs, and methods by learning from large repositories of original source data.
  + **Identity-First Security:** Makes identity-based controls the foundational element of an organisation’s protection architecture.
  + **Zero-Trust Architecture (ZTA):** A network security paradigm that mandates a proxy that decides whether to grant each access request based on a risk profile calculated from combined contextual factors such as the application, location, user, device, time of day, and data sensitivity.
  + **Quantum Cryptography:** Utilisation of quantum computing to allow communication via more secure methods than those guaranteed by traditional cryptography.
* where there is potential for emergent technologies to impact on the network security of the entity, determine an approach and incorporate this into this into their network recovery and remediation strategy and vulnerability assessments.

## Adhere to reuse principles

The Australian Government Architecture provides information for entities on [Reuse](https://architecture.digital.gov.au/reuse-standard).

Entities should:

* compare their requirements with those of other comparable entities and system functions, and seek to reuse learnings from preceding implementations
* consider specific functional and non-functional requirements prior to solution design or consideration of technology choice, including:
  + auditability requirements of use cases, processes and/or outcomes
  + privacy requirements of individuals, organisations, processes, or intellectual property
  + security needs, particularly if the system contains sensitive or personally identifying data or is otherwise likely a target for threat actors
  + availability/redundancy, especially in the case of systems supporting round-the-clock needs such as medical or emergency service activities
* meet the requirements of the [Digital and ICT Reuse Policy](https://architecture.digital.gov.au/digital-and-ict-reuse-policy).