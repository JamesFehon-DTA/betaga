---
layout: resource
style: 'ct-vertical-spacing--bottom ct-basic-content'

title: 'GovERP procure-to-pay (P2P) solution'
description: 'The GovERP P2P value stream solution is hosted on S/4 HANA on Services Australia’s Private Azure cloud, although it can be copied and hosted on any equivalent cloud solution. Integrations have been built into GovERP FMIS and SAP SuccessFactors for the HCM design. However, integrations have not yet been built for other tools (e.g. integrations not built for Expense8, which was also part of the GovERP solution stack). Functional overview Following is the high-level overview of the intended GovERP Procurement solution related to the P2P value stream:'
url: '/resource/goverp-procure-to-pay-solution'
aga_code: 'DES158'
type: 'Design'
category: ''
---


## Details

The GovERP P2P value stream solution is hosted on S/4 HANA on Services Australia’s Private Azure cloud, although it can be copied and hosted on any equivalent cloud solution. Integrations have been built into GovERP FMIS and SAP SuccessFactors for the HCM design. However, integrations have not yet been built for other tools (e.g. integrations not built for Expense8, which was also part of the GovERP solution stack).

## Functional overview

Following is the high-level overview of the intended GovERP Procurement solution related to the P2P value stream:

| **Built in the GovERP Solution** | **Not yet built in the GovERP Solution** |
| --- | --- |
| * Supplier Management * Services Procurement | * Purchasing * Report Procurement Activities * Contractor Management * Inventory Management * Accounts Payable * Sourcing * Supplier Management * Asset Management * e-Procurement * Contract Management * Receipting * Services Procurement * WoAG Central Purchasing |

Note, as at the time of writing this content, the above capabilities were not in production, and still partially in development.

An existing Infosec Register Assessors Program (IRAP) report is in place and held by Services Australia.

GovERP aligned solution components to implementation of the P2P value stream as follows:

Sourcing

* SAP S/4HANA Sourcing & Procurement
* SAP Analytics Cloud (Reporting)
* SAP Master Data Governance
* AusTender Reporting Tool

Supplier Management

* SAP Master Data Governance

Contract Management

* SAP S/4HANA Sourcing & Procurement

Contractor Management

* SAP Success Factors
* SAP S/4HANA Sourcing & Procurement

Purchasing

* SAP S/4HANA Sourcing & Procurement
* SAP SuccessFactors

Accounts receivables:

* SAP S/4HANA Accounts Receivable
* SAP S/4HANA Accounts Receivable – FSCM Collections and Disputes
* SAP S/4HANA Business Partner
* SAP S/4HANA Banking and Cash Management
* SAP Master Data Governance
* SAP S/4HANA Embedded Master Data Governance

Accounts Payable:

* SAP S/4HANA Accounts Payable Payment Run and Approval
* SAP S/4HANA Funds Management
* SAP S/4HANA General Ledger
* SAP S/4HANA Banking and Cash Management
* SAP S/4HANA Tax Management
* SAP S/4HANA Sourcing & Procurement
* OpenText Vendor Invoice Management for SAP solutions
* OpenText Intelligent Capture for SAP

Receipting

* SAP S/4HANA Sourcing & Procurement

Report Procurement Activities

* SAP Analytics Cloud (SAC) for statutory reports
* AusTender Reporting Tool for AusTender reporting.

## Whole of Government Customisation and Configuration

Customisation and configuration refer to specific enhancements made to the base products to understand the deviations from the standard ‘out-of-the-box’ configuration grouped into Workflows, Report, Interfaces, Conversions, Enhancements and Forms known as WRICEFs. Each WRICEF has been classified into the below scale of effort to maintain:

* Low – Configuration changes only.
* Medium – Development support required to adjust code (e.g. Business Add-in) and support enhancements.
* High – Full development support required (e.g. solutions implemented via SAP note where code has been written

The following provides a summary of these WRICEFs in P2P for a whole-of-government solution:

| **Capability** | **Workflow** | **Report** | **Interfaces+ Integration** | **Conversion** | **Enhancement** | **Form** | **Total** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Accounts Payable** |  |  |  |  | 12 |  | 12 |
| **Contract Management** | 2 |  |  |  | 4 |  | 6 |
| **Contractor Management** | 1 |  |  |  | 6 |  | 7 |
| **Purchasing** | 1 |  |  |  | 5 | 4 | 10 |
| **Sourcing** |  |  |  |  | 2 |  | 2 |
| **Total** | 4 | 0 | 0 | 0 | 29 | 4 | 37 |

These WRICEF documents are available in a repository held by the Digital Transformation Agency. An entity can request access to the repository by emailing [architecture@dta.gov.au](mailto:architecture@dta.gov.au).



**AGA Code:** DES158



**Type:** Design





**Linked to:** CAP24
