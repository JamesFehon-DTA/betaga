---
layout: resource
style: 'ct-vertical-spacing--bottom ct-basic-content'

title: 'Expense8 travel and expense management system (TEMS)'
description: 'Within the GovERP initiative Expense8, a software as a service (SaaS) solution, was identified as the platform of choice for implementing Travel and expense management (TEMS) capability. Expense8 is owned by 8common, and is a SaaS solution for travel, expense, and credit card management. It is hosted on Amazon Web Services (AWS) public cloud and is only accessible by those with Australian Government security clearances.'
url: '/resource/expense8-travel-and-expense-management-system'
aga_code: 'DES159'
type: 'Design'
category: 'System'
---


## Details

Within the GovERP initiative Expense8, a software as a service (SaaS) solution, was identified as the platform of choice for implementing *Travel and expense management* (TEMS) capability.

Expense8 is owned by 8common, and is a SaaS solution for travel, expense, and credit card management. It is hosted on Amazon Web Services (AWS) public cloud and is only accessible by those with Australian Government security clearances.

Expense8 is hosted as a SaaS product on AWS public cloud, with all data stored on Australian Government servers. Has existing integration built for a range of common ERP platforms such as SAP ECC6, Aurion, Tech One. At the time of writing this content, integrations to S/4HANA under the GovERP were yet to be built and tested.

An existing IRAP is in place and held by the vendor.

Following is the high-level overview of the Expense8 solution as it relates to the TEMS value stream.

| Built in the GovERP Solution | Not yet built in the GovERP Solution |
| --- | --- |
|  | * Expense Management * Auditing and Compliance * Credit Card Management * Travel and Management |

The Expense8 solution provides all of the above capabilities. Further, it provides the following TEMS value stream processes:

* Manage the processing, payment and audit of employee-initiated expenses including travel expenses.
* Manage the provision, usage and acquittal of corporate credit cards and purchasing cards.
* Monitor and manage the compliance of employee expense claims and credit or purchasing card usage against established policies and legislation.
* Manage work related travel and relocation for staff including accommodation and transportation according to established policies and legislation.
* Manage, calculate, process, and pay travel related allowances according to established policies and legislation.
* Manage the recovery of overpayments made to staff for travel related expenses and allowances.
* Manage the compliance of upstream entity processes, including approvals and acquittal to reduce rework and analysis for central finance teams.
* Manage compliance with credit card payment types to streamline expense management processing.

## Whole of Government Customisation and Configuration

Customisation and configuration refer to specific enhancements made to the base products to understand the deviations from the standard ‘out-of-the-box’ configuration grouped into Workflows, Report, Interfaces, Conversions, Enhancements and Forms known as WRICEFs. Each WRICEF has been classified into the below scale of effort to maintain:

* Low – Configuration changes only.
* Medium – Development support required to adjust code (e.g. Business Add-in) and support enhancements.
* High – Full development support required (e.g. solutions implemented via SAP note where code has been written

The following provides a summary of these WRICEFs in TEMS for a whole-of-government solution:

| **Capability** | **Workflow** | **Report** | **Interfaces + Integration** | **Conversion** | **Enhancement** | **Form** | **Total** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Auditing and Compliance Management** |  |  |  |  |  |  |  |
| **Expense Management** |  |  | 10 |  |  |  | 10 |
| **Manage Travel** |  |  |  |  |  |  |  |
| **Managing Credit Cards** |  |  |  |  |  |  |  |
| **Total** | 0 | 0 | 10 | 0 | 0 | 0 | 10 |

These WRICEF documents are available [in a repository held by the Digital Transformation Agency](https://architecture.digital.gov.au/australian-government-architecture-repository). An entity can request access to the repository by emailing [architecture@dta.gov.au](mailto:architecture@dta.gov.au).



**AGA Code:** DES159



**Type:** Design



**Category:** System



**Linked to:** CAP24
