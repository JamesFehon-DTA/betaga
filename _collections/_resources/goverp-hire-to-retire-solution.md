---
layout: resource
style: 'ct-vertical-spacing--bottom ct-basic-content'

title: 'GovERP hire-to-retire (H2R) solution'
description: 'Under the whole-of-government ERP solution review, SAP’s SuccessFactors software as a service (SaaS) solution was developed for the H2R value stream. SAP SuccessFactors is a suite of human resource management system (HRMS) products that connect core human resources (HR) and payroll, talent management, sales performance management, people analytics, and workforce planning. Functional overview Following is the high-level overview of the GovERP HR solution related to the H2R value stream:'
url: '/resource/goverp-hire-to-retire-solution'
aga_code: 'DES157'
type: 'Design'
category: ''
---


## Details

Under the whole-of-government ERP solution review, SAP’s SuccessFactors software as a service (SaaS) solution was developed for the H2R value stream. SAP SuccessFactors is a suite of human resource management system (HRMS) products that connect core human resources (HR) and payroll, talent management, sales performance management, people analytics, and workforce planning.

## Functional overview

Following is the high-level overview of the GovERP HR solution related to the H2R value stream:

| **Built in the GovERP solution** | **Not yet built in the GovERP solution** |
| --- | --- |
| * Organisational management * On-boarding * Recruitment * Learning management * Performance and goals management * Off-boarding * Time sheet recording and management * Leave and absence management * Work time & attendance | * Manager self-service * Employee self-service * Employee management * Concurrent employment * Payroll services * Compensation management * Succession and career development * Global employment * Work health and safety * Workforce planning * HR case management * Schedule rostering * Workplace relations |

GovERP aligned solution components to implementation of the H2R value stream as follows:

* SuccessFactors Employee Central – Core HR
* SuccessFactors Employee Central – Time Tracking – Time and attendance
* SuccessFactors Employee Central Time off – Leave management
* SuccessFactors Employee Central Payroll
* SuccessFactors Recruitment and Onboarding 2.0
* SuccessFactors Learning Management
* SuccessFactors Performance and Goals
* SuccessFactors Integration Center

SAP SuccessFactors cannot be ‘picked up’ and used as a Tier 1 reuse product in isolation. This is due to current configuration reliance on S/4HANA and SAP Sovereign Cloud. The product cannot be componentised and deployed without some build effort. However, SAP SuccessFactors blueprints/patterns can be reused in their current state once requirements and implementation planning has been undertaken by interested entities.

Given the SAP SuccessFactors build’s reliance on other SAP product suite for operation, SAP recommends logical module groupings that can be deployed in phased approach(s):

* EC (core), ECP & Time Tracking
* Recruitment and Onboarding
* Performance & Goals and Learning
* Succession & Development

By componentising these modules and implementing them in phases, SAP advice is that development impost is potentially reduced. Suitability of these groupings will, however, need to be assessed based on entity requirements at the time of product consideration.

## Whole-ofgovernment customisation and configuration

Customisation and configuration refer to specific enhancements made to the base products to understand the deviations from the standard ‘out-of-the-box’ configuration. These are grouped into workflows, reports, interfaces, conversions, enhancements and forms, known as WRICEFs. Each WRICEF has been classified into the below scale of effort to maintain:

* Low – configuration changes only.
* Medium – development support required to adjust code (e.g. Business Add-in) and support enhancements.
* High – full development support required (e.g. solutions implemented via SAP note where code has been written).

The following provides a summary of these WRICEFs in H2R for a whole-of-government solution:

| **Capability** | **Workflow** | **Report** | **Interfaces + integration** | **Conversion** | **Enhancement** | **Form** | **Total** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Payroll services** |  | 2 | 3 |  | 4 | 1 | 10 |
| **Employee management** |  | 1 | 3 |  |  |  | 4 |
| **Leave management** |  |  | 1 |  | 1 |  | 2 |
| **Organisational management** |  |  | 1 |  |  |  | 1 |
| **Time and attendance** |  |  | 1 |  |  |  | 1 |
| **TOTAL** | 0 | 3 | 9 | 0 | 5 | 1 | 18 |

These WRICEF documents are available in the DTA AGA Repository. Request access to the repository by emailing [architecture@dta.gov.au](mailto:architecture@dta.gov.au).



**AGA Code:** DES157



**Type:** Design





**Linked to:** CAP24
