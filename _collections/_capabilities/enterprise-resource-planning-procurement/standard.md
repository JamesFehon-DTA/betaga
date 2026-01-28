---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'enterprise-resource-planning-procurement'
title: 'Enterprise resource planning (ERP) procurement'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA44'
type: 'AGA Standard'
---

Procurement within the Australian Public Service (APS) is enabled through the Procure to Pay (P2P) value stream. P2P refers to the end-to-end process of acquiring vendor services and products such as RFI (Requests for Information), RFPs (Requests for Proposals), RFTs (Requests for Tender), RFOs (Requests for Offer) or RFQs (Requests for Quote) from providing information or proposals through to payment, facilitated by an integrated ERP system.

The P2P value stream encompasses the comprehensive process of managing purchasing and contract lifecycles for acquiring goods and services. P2P covers sourcing, requisition, order processing, payments, and reporting within the framework of Australian Government regulations, policies, and procedures. It involves the coordinated activities of multiple stakeholders including Commonwealth entities, vendors, and financial management entities, facilitated by an integrated ERP solution.

This standard is limited to the Procurement sub-capability, and should be viewed within the context of the overarching [Enterprise Resource Planning (ERP) Standard](https://architecture.digital.gov.au/enterprise-resource-planning-standard), and alongside those aligned to the other defined ERP value streams:

* [ERP Finance Standard](https://architecture.digital.gov.au/erp-finance-standard)
* [ERP Human Capital Management (HCM) Standard](https://architecture.digital.gov.au/erp-human-capital-management-standard)
* [ERP Travel and Expense Management System (TEMS) Standard](https://architecture.digital.gov.au/erp-travel-expense-management-system-standard)

Procure to Pay (P2P) can be implemented through several commercial platform solutions. These platforms may be discovered in multiple ways such as: BuyICT; whole of Australian-Government contracts; and entity implemented solutions underpinned by platforms.

The P2P value stream supports the effective delivery of government programs and services, while safeguarding public funds and promoting good governance. The P2P value stream serves several critical purposes in Commonwealth entities:

* **Procurement and Contract Management**: facilitates transparent, efficient, and accountable procurement practices while ensuring value for money, ensuring adherence to government financial regulations, policies, and frameworks, like the [Commonwealth Resource Management Framework](https://www.finance.gov.au/government/managing-commonwealth-resources) (CRMF) and the [Public Governance, Performance and Accountability Act 2013](https://www.legislation.gov.au/C2013A00123/latest/text) (PGPA Act).
* **Vendor Management:** Efficient management of vendor relationships, including vendor selection, contract management, and performance evaluation, to optimise supplier partnerships and drive value for money.
* **Compliance:** The P2P capability ensures compliance with government procurement regulations, policies, and standards. By embedding regulatory requirements into the procurement process, such as competitive bidding, contract management, and audit trails, Commonwealth entities can mitigate legal and financial risks associated with non-compliance.
* **Transparency and Accountability:** By standardising and automating procurement processes, the P2P capability enhances transparency and accountability in government spending. It provides visibility into procurement activities, ensuring compliance with government regulations and policies while mitigating the risk of fraud, waste, and abuse.
* **Cost Savings:** The P2P capability helps Commonwealth entities identify cost-saving opportunities through centralised procurement, contract management, and vendor performance evaluation. By leveraging volume discounts, negotiating favourable terms, and optimising supplier relationships, Commonwealth entities can achieve significant cost savings and maximise the value of taxpayers' money.
* **Efficiency:** The P2P capability streamlines the entire procurement process, from requisitioning to payment, reducing manual effort, paperwork, and processing time. This efficiency enables Commonwealth entities to acquire goods and services in a timely manner, supporting the smooth operation of government programs and services.
* **Integration:** Seamless integration with government financial management systems, enabling real-time visibility into procurement data, expenditure tracking, and financial reporting.
* **Data-driven Decision-making:** By capturing and analysing procurement data, the P2P capability enables data-driven decision-making in resource allocation, budget planning, and strategic sourcing. Commonwealth entities can leverage insights from procurement analytics to identify trends, forecast demand, and optimise procurement strategies for greater efficiency and effectiveness.

## Standard statements

Entities should:

* ensure their ERP Procurement solution delivers capabilities as specified and defined below
* document their implementation in a way that maps modules to the capabilities and processes specified in this standard, enabling traceability and future reuse.

## Procure to Pay (P2P) value stream

The P2P value stream is realised through the following capabilities:

### Purchasing

Management of purchasing, an entity's attempt to procure goods or services in line with Commonwealth guidelines, primarily low complexity procurement as opposed to high value or complex procurement activities.

#### Processes and definitions

* **Purchase Goods and/or Services** which includes the creation of purchase requisitions, defining goods and/or service details, pricing, delivery schedules, and allocation of costs. It includes the Delegate review and approval process and the creation and transmission of a Purchase Order to a Supplier.
* **Confirmation of Goods or Services Received**, including management of goods receipts and return.

### Report Procurement Activities

The ability for an entity to comply with mandatory procurement reporting requirements to government, and other accountable authorities within government. This includes gazettal and reporting through to Australian Government’s procurement information system, [AusTender](https://www.tenders.gov.au/).

#### Processes and definitions

* **Manage Procurement Framework Reporting** involves publishing and reporting for relevant entities under the [Commonwealth Procurement Framework](https://www.finance.gov.au/government/procurement/commonwealth-procurement-rules/procurement-framework) and other government policies.
* **Manage AusTender (Gazettal)** to report contract notices, new or amended, on AusTender where the expenditure meets the reporting thresholds as defined in the [Commonwealth Procurement Rules](https://www.finance.gov.au/sites/default/files/2024-06/Commonwealth_Procurement_Rules-1-July-2024.pdf) (CPRs).
* **Run & Report Procurement** as per Legislative Requirements, as required, including process for delineating and isolating data where needed.
* **Manage Senate Order Reporting** to report to Senate all Contracts formed through Procurement valued at or above $100,000.

### Contractor Management

Management of outsourced work and a contingent workforce, from procuring resources and services, managing ongoing activities such as time sheeting and invoicing, through to managing the off-boarding of resources at the fulfilment of the contract.

#### Processes and definitions

* **Manage Statement of Work (SOW)** including drafting of terms and conditions, clauses, pricing, term; review, approval, and publishing of the SOW.
* **Manage On-boarding** to enter contractors into various work systems, approval; process inclusive of granting hardware, software, and facilities access.
* **Manage Timesheets** to enter time as per SOW pricing and conditions; approval of timesheets.
* **Manage Recipient Created Tax Invoices** to automate and facilitate timely payment of approved contractor time, as per terms, conditions, and pricing reflected on SOW.

### Inventory Management

The supervision of non-capitalised assets (inventory) and stock items. As a component of supply chain management, inventory management supervises the flow of goods from manufacturers to warehouses and from these facilities to point of sale.

#### Processes and definitions

* **Manage Physical Inventory** including developing stocktake cycles, conducting stocktake and managing discrepancies. Stocktake of physical inventory may be conducted using bar-coding and scanning technology.
* **Perform Inbound Processing** which involves the physical receipt of goods from a Supplier, quality checking and warehousing.
* **Perform Outbound Processing** which involves the physical despatch of goods including order picking, packing, quality check and despatch.

### Sourcing

Management of Sourcing processes in line with [Commonwealth Procurement Guidelines](https://www.finance.gov.au/sites/default/files/2024-06/Commonwealth_Procurement_Rules-1-July-2024.pdf).

#### Processes and definitions

* **Manage Planning of Procurement** to identify suitable Goods and/or Services required to meet a need, and the entity activities to determine a Procurement Method, including defining goods and/or services, determining the Procurement Method and developing a Procurement Plan.
* **Manage Sourcing– Open Approach to Market** whereby a panel (local or whole-of-government) is not available, and therefore an open market approach is used.
* **Manage Sourcing** – Panels whereby goods and/or services are sourced using whole-of-government and Agency Supplier Panels.
* **Maintain Panel Agreements** including creation and sharing of Agency Supplier panel agreements.
* **Manage Purchase Goods and/or Services Low Value** to source goods under a nominated value threshold; supplier quotes may or may not be required.

### Supplier Management

Management of supplier record and collection of relevant supplier data, to enable reporting and management of contracted service and goods providers.

#### Processes and definitions

* **Manage Supplier Registration & Approval** to register supplier details to enable them to respond to RFI (Requests for Information), RFPs (Requests for Propolsals), RFTs (Requests for Tender), RFOs (Requests for Offer) or RFQs (Requests for Quote) and supply Goods and/or Services to an entity.
* **Manage Supplier Master Data**, post supplier-registration, to manage the setup of new Suppliers and amendments to existing Supplier master data, including verifying Supplier information, qualifications and ensuring no duplication of Supplier records.
* **Manage Supplier Performance** including internal and external evaluation processes, mapped to both suppliers and agencies’ Key Performance Indicators (KPIs).

### Asset Management

Captures the systematic management and approach to the governance and realisation of value of things that the entity owns or is responsible for. Note this includes both the digital and physical location and information surrounding the asset.

#### Processes and definitions

* **Manage Asset Master Data** includes create and maintain the master data for asset, equipment.
* **Manage Acquisition and Onboarding of Assets** includes acquisition through purchasing and through projects, and the content management of technical images, warranties, etc.
* **Manage Maintenance Planning and Scheduling** includes planning, scheduling and predictive maintenance and service.
* **Perform Maintenance of Assets** includes execution of work orders and jobs.
* **Manage De-commission and Disposal of Assets** includes de-commissioning and retirement along with disposal of assets.

### e-Procurement

Concerned with the management, linkage to or standing up of Business-to-Business (B2B) networks and processes. Includes Catalogue Integration with B2B Network Providers. Provides the ability to manage an end-to-end procurement on the system without having to resort to manual tools and paper forms.

#### Processes and definitions

* **Manage Catalogue Purchasing (Hosted, Punch-Out)** using internal catalogues available for user selection, and external (punch-out) catalogues for more complex categories.
* **Manage e-Invoicing** either received from external source, or loading of e-invoice to internal system (see [e-Invoicing](https://architecture.digital.gov.au/einvoicing)).
* **Manage Transactions with Suppliers** including contracts, purchase orders, service entry-sheets, invoicing.

### Contract Management

Contract management or contract administration is the management of contracts made with customers, vendors, partners, or employees. Includes processes related to negotiation, management and termination-related to the effective delivery of contracted services and goods.

#### Processes and definitions

* **Manage Contract Negotiations** including goods/services, pricing, payment terms, discounting.
* **Maintain Contract and Contract Terms** including follow-up to contract negotiation, process for creating and approving contracts, and embedding contract terms to ensure internal usage and compliance with negotiated agreement.
* **Manage Contract Amendments** including value amount, quantity, and/or item and service amendments; delegate approvals, activation in-system.
* **Manage Non-Procurement Contracts** for example managing Grants, which may require a payment.

### Whole-of-Government Central Purchasing

Supports the usage of whole-of-government (WofG) procurement arrangements including coordinated and cooperative procurements.

#### Processes and definitions

* **Manage WofG Supplier Panels** including creation and sharing of panel agreements.
* **Manage WofG Contracts** including follow-up to contract negotiation, process for creating and approving contract, and embedding contract terms to ensure internal usage and compliance with negotiated agreement.
* **Manage Transactions Using WofG Contracts** including purchase order, service entry-sheets, invoicing.

### Accounts Payable

Manage and record accounting data relating to all vendors. It handles vendor invoices, approvals, payments, and other activities. In addition, Accounts Payable enables the integration and processing of e-Invoices.

#### Processes and definitions

* **Manage AP Master Data** including creating, changing, and blocking Accounts Payable Master Data.
* **Manage Incoming Invoices** enabling the receipt and verification of Supplier invoices, by email or B2B via [e-Invoicing](https://architecture.digital.gov.au/einvoicing).
* **Manage AP Payment Run and Approval** including the activities to determine Supplier invoices due for payment, creation, correction and approval of payment run proposals and submission of payment details to financial institutions.
* **Perform AP Periodic Activities** including Supplier interest payments, managing General Ledger (GL) reconciliation, and reporting.