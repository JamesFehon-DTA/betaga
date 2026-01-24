---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'enterprise-resource-planning-finance'
title: 'Enterprise resource planning (ERP) finance'
url: '/'
toc: ''
content_top: true
aga_code: 'STA42'
type: 'AGA Standard'
---

This standard is limited to the Finance sub-capability within Enterprise Resource Planning, and should be viewed within the context of the overarching [Enterprise Resource Planning (ERP) Standard](https://architecture.digital.gov.au/enterprise-resource-planning-standard), and alongside standards aligned to the other defined ERP value streams:

* [ERP Human Capital Management (HCM) Standard](https://architecture.digital.gov.au/erp-human-capital-management-standard)
* [ERP Procurement Standard](https://architecture.digital.gov.au/erp-procurement-standard)
* [ERP Travel and Expense Management System (TEMS) Standard](https://architecture.digital.gov.au/erp-travel-expense-management-system-standard)

The ERP Finance capability is essential for the responsible management of public resources, ensuring transparency, and supporting alignment with government objectives. It encompasses a comprehensive suite of tools and functionalities. A Financial Management Information System (FMIS) may be deployed through various commercial platform solutions, which are available via BuyICT, Whole-of-Australian-Government contracts, or as entity-implemented solutions based on approved platforms.

ERP Finance capability enables Commonwealth entities to achieve multiple key outcomes, including:

* **Regulatory Compliance**: Ensures alignment with government financial regulations, policies, and frameworks, such as the CFMF and the Public Governance, Performance and Accountability Act 2013 (PGPA Act), across budgeting, accounting, procurement, and reporting.
* **Effective Budget Management**: Supports comprehensive budgeting processes, including preparation, allocation, monitoring, and adherence to government priorities and fiscal constraints.
* **Transparent Financial Reporting**: Delivers accurate financial reports for internal management, parliamentary oversight, and public transparency, aiding accountability and informed decision-making.
* **Robust Controls and Auditability**: Incorporates strong internal controls and audit trails to maintain data integrity and meet audit requirements.
* **System Integration**: Enables seamless data exchange with central government systems (e.g., CBMS) for consistent reporting and compliance.
* **Governance and Oversight**: Establishes mechanisms for financial oversight, risk management, and performance improvement.
* **Staff Training and Capacity Building**: Provides training and skill development for finance staff to enhance proficiency and effectiveness in financial management systems.
* **Continuous Improvement and Innovation**: Drives process optimisation, promotes the adoption of modern technologies, and fosters digital transformation and innovation.
* **Process Efficiency**: Streamlines and automates financial processes to reduce manual effort, minimise errors, and optimise workflows.
* **Informed Decision-Making**: Provides timely and accurate financial information to support strategic planning, budgeting, and resource allocation.
* **Cost Effectiveness**: Achieves cost savings through increased efficiency, reduced administrative overheads, and optimised resource use.
* **Risk Management**: Identification, assessment and management of financial risks through improved data governance, security measures, improved auditability and internal controls.

## Enterprise Resource Planning (ERP) Finance standard statements

The GovERP reuse assessment is part of the new APS ERP approach and it provides detail on all value streams and definitions - [Enterprise Resource Planning (ERP) \| digital.gov.au](https://www.digital.gov.au/initiatives/enterprise-resource-planning).

[Reusable components](https://www.digital.gov.au/initiatives/enterprise-resource-planning/erp-reuse-assessment) have been provided as part of this standard.

Entities should:

* ensure that their ERP Finance solution delivers capabilities as grouped into the two defined value streams of:
  + **Budget to Report (B2R):** Manages entities’ financial lifecycle from budgeting to financial statement release, covering external and internal budgeting, ledger aggregation, consolidation, closure, and reporting.
  + **Revenue to Bank (R2B):** Handles revenue generation operations to banking and treasury functions, including agreement proposals, formalisation, service delivery, invoicing, receipt management, and reporting.
* document their implementation in a way that maps modules to the capabilities and processes specified in this standard, enabling traceability and future reuse.

## Budget to Report (B2R) value stream

The Budget to Report (B2R) value stream is realised through the following capabilities:

* Cost Management
* General Ledger
* Budgeting and Planning
* Funds Management
* Lease Accounting
* Project Accounting
* Tax Management
* Inventory Accounting
* Asset Accounting
* Management Reporting
* Statutory Reporting

### Cost Management

The process of planning and controlling the budget at cost centre level (or relevant cost management structure) within an entity.

#### Processes and Definitions

* **Maintain Cost Management Master Data** by creation, change and block/deletion of Cost Management/Controlling Master Data.
* **Perform Cost Planning** including allocating budget to cost centres and periods.
* **Capture Actual Costs** through either statistical or real postings, manually or automated. Maintenance of activity-based costing/full costing models for Benchmarking/cost control.
* **Distribute Costs** including allocating and distributing overheads from one object to one or many others (including cost centres, profit centres).
* **Maintain Plan Data** includes maintenance of activity planning, cost centre planning etc.
* **Execute Cost Management Reports** includes a variety of regular and ad-hoc internal and external reports, reporting of activity-based costing/full costing models for Benchmarking/ cost control.

### General Ledger

A general ledger (GL) is a record-keeping system of entities’ financial data. The GL serves as a central repository for all financial transactions and data transferred from all sub-ledgers, such as accounts payable, accounts receivable, cash management, fixed assets, purchasing and projects.

#### Processes and Definitions

* **Maintain Finance Master Data** includes creation, change and block/deletion of General Ledger Master Data.
* **Manage GL Journal Entries** including scheduling recurring entries, accrual reversal jobs etc.
* **Perform GL Clearing** including manual or automated clearing as per defined entity rules/configuration.
* **Process GL Documents** includes preparing, parking, posting, reversing and deleting journal and accrual entries. This also incorporates posting from interfaces (e.g. edge systems, payroll and external systems: grants, Payment Utility, Revenue Receipting, Border Receipting).
* **Perform Exchange Rate Processing** including the posting of exchange gains/ losses.
* **Perform GL Reconciliations** including the reconciliation of accounts to the sub-ledgers, reports on variances, etc.
* **Manage Financial Reporting Period** including rollover of GL balances and close and open financial reporting periods.

### Budgeting and Planning

**Planning** outlines the entity's financial direction and expectations for the budget period. **Budgeting** documents how the overall plan will be executed month to month, specifying expenditures.

#### Processes and Definitions

* **Manage Budgeting Master Data** includes creation, change and block/deletion of Budget and Planning Master Data.
* **Manage External Budget** including operational and capital budgets, management of activity-based costing/full costing models for external budgeting e.g. Visa Funding models etc.
* **Manage Internal Budget** including operational and capital budgets, management of activity-based costing/full costing models for internal budgeting e.g. shared services models, capability allocation/CAPF, etc.
* **Manage Forecast** including forecasts for operational and capital budgets.
* **Report of Financial Results** includes the reporting of actual results against budgets (internal and external, operational and capital), including the identification of variances.
* **Analyse Financial Results** including manual and automated analysing of budgeting and actual data.

### Funds Management

Support entities in managing their appropriation funding and reporting requirements including Special Accounts, Departmental, Administered Funds, Outcome, Program and Appropriation types. Funds Management (FM) integrates to all other financial components and allows for the concurrent budgeting, funding, management and tracking of funds-relevant items and structures. Financial processes are aligned in FM with concepts relating to the source of funds, budgets, how funds relate to areas of responsibility and usage of the funds.

#### Processes and Definitions

* **Manage Funds Master Data** includes creation, change and block/deletion of Funds Management Master Data.
* **Manage Appropriation Funding** includes the allocation of appropriation balances to funds, transfer of budgets, supplement and return budgets, maintain earmarked funds, etc.
* **Manage Availability Control** includes activation and management of limits.

### Lease Accounting

A lease is a contract, or part of a contract, which conveys the right to control the use of an identified asset for a defined period of time, in exchange for consideration. Entities entered into leases are required to recognise those leases on the balance sheet through a lease liability and corresponding Right-of-use (ROU).

#### Processes and Definitions

* **Manage Lease Master Data** includes creation, change and block/deletion of Lease Master Data.
* **Manage Lease Contract** includes creation and change of Lease Contracts data.
* **Perform Valuations or Adjustments to Lease Contract** includes valuations as per lease negotiations etc.
* **Perform Posting for Lease Contract** includes posting to the Assets Sub-Ledger or the General Ledger.
* **Close Contract** includes cessation of lease contract data including interface to asset sub-ledger to de-recognise the Right of Use asset.

### Project Accounting

Primarily focuses on the financial transactions relating to managing a project. This includes initiating, planning, budgeting and monitoring costs and revenue of a project. It also provides project cost collector tool through the work-breakdown structure (WBS) to support the overview management of a project.

#### Processes and Definitions

* **Manage Project Master Data** includes creation, change and block/ deletion of Project Accounting Master Data (including maintenance of settlement rules).
* **Plan Project Budget** including allocation of budget to WBS elements within a project, and phasing across financial planning periods.
* **Capture Project Costs** including through manual and automated postings, and directly or via interfaces (e.g. contractor management edge solution).
* **Settle Project** individually or in bulk, manually or automated on schedules.
* **Close Project** including Lock/Block of individual WBS elements or Projects.
* **Report on Project** includes various internal and external reporting.

### Tax Management

Capture, integration, management and reporting of tax obligations and posting according to federal legislation and regulation. Tax management integrates into Financial Accounting to provide straight-through tax data management and submission.

#### Processes and Definitions

* **Conduct Taxation Accounting** includes capture, integration and management of tax obligations and posting according to federal legislation and regulation.
* **Execute Compliance Reporting** includes reporting to meet tax obligations such as Business Activity Statements, Taxable Payments Annual Report, etc.

### Inventory Accounting

Manage the valuation and accounting for changes in inventoried assets.

#### Processes and Definitions

* **Manage Inventory Valuation** includes annual or periodic revaluations, write downs, etc.
* **Conduct Inventory Accounting** including posting from Work in Progress (WIP) accounts.
* **Conduct Stocktake** including reporting on existing inventory/assets, found, lost etc.

### Asset Accounting

Manage the non-financial (fixed) asset lifecycle from acquisition through to retirement, including management of assets under construction, assets transfers, revaluations, disposals, and reporting.

#### Processes and Definitions

* **Maintain Asset Master Data** includes creation, change and block/deletion of Asset Master Data.
* **Acquire Assets** includes acquisition from cost centres, projects and/or purchasing, etc.
* **Value Assets** includes annual or periodic revaluations/ impairments etc. of tangible, intangible and Right Of Use assets.
* **Retire Assets** includes retirements/write offs/disposals, etc.
* **Perform End of Reporting Period Processing** includes activities like depreciation runs, etc.
* **Report on Fixed Assets** includes various internal and external reporting, including Senate Estimates Briefs, Questions on Notice, and Ad-hoc reporting.

### Commonwealth Reporting

The ability for entities to comply with mandatory reporting to the Australian Government and other accountable authorities within government.

#### Processes and Definitions

* **Prepare Commonwealth Reports** includes mandatory and ad-hoc Commonwealth reports.

### Management Reporting

Reports that support executives in the management of the day-to-day operation of the entity, including supporting strategic directions and monitoring progress.

#### Processes and Definitions

* **Prepare Management Reports** includes Internal Executive reports, ad-hoc management reporting, etc.

### Statutory Reporting

Mandatory reporting requirements from entities, e.g. Financial Statements, Annual Reports, etc.

#### Processes and Definitions

* **Prepare Statutory Reports** includes Mandatory reporting to meet statutory requirements.

## Revenue to Bank (R2B) value stream

The Revenue to Bank (R2B) value stream is realised through the following enterprise functional capabilities:

* Accounts Receivable
* Banking and Cash Management
* Sales Management

### Accounts Receivable (AR)

Manage and record accounting data relating to all customers. It handles customer invoices, approvals, payments and other related activities. Enables the sending of e-Invoices according to mandated standards.

#### Processes and Definitions

* **Manage AR Master Data** includes creating, changing, and blocking Accounts Receivable Master Data.
* **Manage AR Invoices** includes creating, changing, and deleting accounts receivable invoices. This function enables the sending of e-Invoices according to mandated standards.
* **Manage Receipts** may include automated or manual assignment of receipts to accounts receivable invoices (including interfaces), including partial receipts.
* **Conduct AR Clearing** may include automated, or manual clearing where tolerance levels for clearance of invoices have/have not been defined.
* **Manage Customer Debt write-off/Waiver and Disputes** includes cancellation of accounts receivable invoices.
* **Manage Credit Notes, Chargebacks and Refunds** may include manual or automated assignment or matching of credit notes/ chargebacks/ refunds to invoices or customer accounts.
* **Perform AR Periodic Activities** includes ageing of accounts receivable invoices.
* **Perform Collection Activities** includes the transfer of accounts receivable invoice or customer balances to a debt collection agency.
* **Conduct AR Reporting Activities for Management and Statutory Bodies** includes various internal and external reporting, including Senate Estimates Briefs, Questions on Notice, and ad-hoc reporting.

### Banking & Cash Management

Manage accounting transactions that interact with the bank. It includes the management of bank master data, cash balance management and the creation and processing of incoming and outgoing payments.

#### Processes and Definitions

* **Manage Banking Master Data** includes the creation, change and block of Banking and Cash Master Data.
* **Manage Drawdowns and Deposit Receipts** includes creation of entries to recognise incoming payments. May be automated via bank statement or other interface/s or manual through journals.
* **Maintain, Void & Re-issue Payments** include creation of entries to recognise outgoing payments. May be automated via payment runs, bank statements (e.g. bank fees) or other interface/s or manual through journals.
* **Reconcile Bank Accounts** includes management of clearing accounts, management of open items, etc.
* **Inter-agency, Departmental & Administered Transfers** may include inter-entity bank transfers.
* **Banking and Treasury Reports** includes various internal and external reporting, including Senate Estimates Briefs, Questions on Notice, and ad-hoc reporting.

### Sales Management

Manage sales processes of an entity, from selling a product/service to recording of billings. This includes core sales processes, shipping/delivery services and billing creations.

#### Processes and Definitions

* **Manage Sales Master Data** includes creation, change and block/deletion of Sales Master Data.
* **Manage Sales Contracts** includes the management of Sales Document Types/ Contracts.
* **Manage Sales Orders** includes creation, change and block/deletion of sales orders.
* **Supply Goods and/or Services** manage core sales processes, shipping/delivery services and billing creations.
* **Prepare Sales Reports** includes various internal and external reporting, including Senate Estimates Briefs, Questions on Notice, and ad-hoc reporting.