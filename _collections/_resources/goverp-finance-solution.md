---
layout: resource
style: 'ct-vertical-spacing--bottom ct-basic-content'

title: 'GovERP finance solution'
description: 'The Enterprise Resource Planning (ERP) Finance solution developed originally as part of GovERP is hosted on S/4HANA on Services Australia’s Private Microsoft Azure Cloud, but could be copied and hosted on any equivalent cloud solution. An existing Infosec Registered Assessor Program (IRAP) report is in place and held by Services Australia. Integrations with the GovERP Finance solution have been built into SAP SuccessFactors for the Human Capital Management (HCM) design. However, integrations have not yet been built or tested for other tools.'
url: '/resource/goverp-finance-solution'
aga_code: 'DES156'
type: 'Design'
category: ''
---


## Details

The Enterprise Resource Planning (ERP) Finance solution developed originally as part of GovERP is hosted on S/4HANA on Services Australia’s Private Microsoft Azure Cloud, but could be copied and hosted on any equivalent cloud solution.

An existing Infosec Registered Assessor Program (IRAP) report is in place and held by Services Australia.

Integrations with the GovERP Finance solution have been built into SAP SuccessFactors for the Human Capital Management (HCM) design. However, integrations have not yet been built or tested for other tools.

Within GovERP, solution components in the Budget to Report (B2R) value stream and Revenue to Bank (R2B) value stream are utilised to implement the ERP Finance capability and associated business functionalities.

## Budget to Report

Following is the high-level overview of the GovERP Finance solution as it relates to the Budget to Report (B2R) value stream.

| **Built in the GovERP Solution** | **Not yet built in the GovERP Solution** |
| --- | --- |
| * Cost Management * General Ledger * Funds Management * Project Accounting * Tax Management * Asset Accounting * Management Reporting * Statutory Reporting | * Budgeting & Planning * Lease Accounting * Inventory Accounting * Commonwealth Reporting |

GovERP aligned solution components to implementation of the B2R value stream as follows

Budgeting and Planning:

* SAP Analytics Cloud Planning – Budgeting and Planning
* SAP Analytics Cloud Analytics

General Ledger:

* SAP S/4HANA General Ledger
* SAP S/4HANA Financial Closing Cockpit
* SAP S/4HANA Master Data Governance Central
* SAP Cloud Platform Integration

Cost Management:

* SAP S/4HANA Cost Management (Overhead Accounting)
* SAP S/4HANA Master Data Governance Central
* SAP S/4HANA Master Data Governance Embedded
* SAP Cloud Platform Integration

Funds Management:

* SAP S/4HANA Funds Management
* SAP Cloud Platform Integration (interim)

Asset accounting:

* SAP S/4HANA Asset Accounting

Lease accounting:

* SAP S/4HANA Contract Lease Management

Project accounting:

* SAP S/4HANA Project Accounting
* SAP Analytics Cloud Planning
* SAP Cloud Platform Integration

Tax management:

* SAP S/4HANA
* SAP S/4HANA Tax Management – Advanced Compliance Reporting (Basic Version)

Commonwealth reporting:

* SAP S/4HANA General Ledger (Data Source)
* SAP S/4HANA Funds Management (Data Source)
* SAP S/4HANA Banking and Cash Management (Data Source)
* SAP S/4HANA Analytics Cloud
* SAP S/4HANA Analytics Cloud Budgeting and Planning

Management Reporting:

* SAP S/4HANA General Ledger (Data Source)
* SAP S/4HANA Funds Management (Data Source)
* SAP S/4HANA Cost Accounting (Data Source)
* SAP S/4HANA Asset Accounting (Data Source)
* SAP S/4HANA Project Accounting (Data Source)
* SAP S/4HANA Lease Accounting (Data Source)
* SAP S/4HANA Banking and Cash Management (Data Source)
* SAP S/4HANA Accounts Payable (Data Source)
* SAP S/4HANA Accounts Receivable (Data Source)
* SAP S/4HANA Analytics Cloud

SAP S/4HANA Analytics Cloud Budgeting and Planning Statutory Reporting:

* SAP S/4HANA General Ledger (Data Source)
* SAP S/4HANA Funds Management (Data Source)
* SAP S/4HANA Banking and Cash Management (Data Source)
* SAP S/4HANA Accounts Payable (Data Source)
* SAP S/4HANA Purchasing (Data Source)
* Expense8 Travel Management (Data Source)
* Expense8 Expense Management (Data Source)
* SAP S/4HANA Analytics Cloud
* SAP S/4HANA Analytics Cloud Budgeting and Planning

### Revenue to Bank

Following is the high-level overview of the GovERP Finance solution as it relates to the Revenue to Bank (R2B) value stream.

| **Built in the GovERP Solution** | **Not yet built in the GovERP Solution** |
| --- | --- |
|  | * Accounts Receivable * Banking and Cash Management * Sales Management |

GovERP aligned solution components to implementation of the R2B value stream as follows:

Accounts receivables:

* SAP S/4HANA Accounts Receivable
* SAP S/4HANA Accounts Receivable – FSCM Collections and Disputes
* SAP S/4HANA Business Partner
* SAP S/4HANA Banking and Cash Management
* SAP Master Data Governance
* SAP S/4HANA Embedded Master Data Governance

Banking and Cash Management:

* SAP S/4HANA Banking and Cash Management including Bank Communication Manager
* SAP S/4HANA Funds Management
* SAP S/4HANA Accounts Payable
* SAP S/4HANA Accounts Receivable

## Whole of Government Customisation and Configuration

Customisation and configuration refer to specific enhancements made to the base products to understand the deviations from the standard ‘out-of-the-box’ configuration grouped into Workflows, Report, Interfaces, Conversions, Enhancements and Forms known as WRICEFs. In respect of the WRICEFs, each have been classified into the below scale of effort to maintain:

* Low – Configuration changes only.
* Medium – Development support required to adjust code (e.g. Business Add-in) and support enhancements.
* High – Full development support required (e.g. solutions implemented via SAP note where code has been written.

The following provides a summary of these WRICEF’s in B2R for whole of government solution:

| **Capability** | **Workflow** | **Report** | **Interfaces+ Integration** | **Conversion** | **Enhancement** | **Form** | **Total** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Accounts Payable** |  |  |  |  | 2 |  | 2 |
| **Asset Accounting** | 1 | 1 |  |  | 2 |  | 4 |
| **Budget & Planning** |  |  | 1 |  |  |  | 1 |
| **Cost Management** |  |  | 4 |  | 2 |  | 6 |
| **Funds Management** | 3 |  |  |  | 5 |  | 8 |
| **General Ledger** |  | 1 | 5 |  | 4 |  | 10 |
| **Project Accounting** |  |  | 1 |  | 2 |  | 3 |
| **Statutory Reporting** |  | 29 |  |  |  |  | 29 |
| **Total** | 4 | 31 | 11 | 0 | 17 | 0 | 63 |

The following provides a summary of these WRICEF’s in R2B for whole of government solution:

| **Capability** | **Workflow** | **Report** | **Interfaces+ Integration** | **Conver-sion** | **Enhance-ment** | **Form** | **Total** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Accounts Receivable** | 1 |  | 2 |  | 10 |  | 13 |
| **Banking & Cash Management** |  | 1 | 7 |  | 5 |  | 13 |
| **Total** | 1 | 1 | 9 | 0 | 15 | 0 | 26 |

The WRICEFs documents are available in a repository held by the Digital Transformation Agency. An entity can request access to the repository by emailing [architecture@dta.gov.au](mailto:architecture@dta.gov.au).



**AGA Code:** DES156



**Type:** Design





**Linked to:** CAP24
