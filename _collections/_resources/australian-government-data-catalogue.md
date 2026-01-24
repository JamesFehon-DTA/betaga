---
layout: resource
style: 'ct-vertical-spacing--bottom ct-basic-content'

title: 'Australian Government data catalogue'
description: 'The Australian Government data catalogue enables users to discover data held by Australian Government agencies. It is accessible on Dataplace.'
url: '/resource/australian-government-data-catalogue'
aga_code: 'DES83'
type: 'Design'
category: 'Data'
---


## Details

Direct link: [*www.datacommissioner.gov.au/find-data*](https://www.datacommissioner.gov.au/find-data)  
Responsible agency: **Office of the Australian Information Commissioner**

The [*Australian Government data catalogue*](https://www.dataplace.gov.au/search/) enables users to discover data held by Australian Government agencies. It is accessible on [Dataplace](https://architecture.digital.gov.au/dataplace).

The catalogue draws on the data inventories of Australian Government agencies, including open and restricted data. Once users have discovered the data they wish to access, they are either directed to available data assets or to make a request to the data custodian.

The catalogue is a core component of the [*Data and digital government strategy*](https://architecture.digital.gov.au/data-and-digital-government-strategy), it contributes to increased transparency, availability, and use of public sector data.

Based upon Azure search, the catalogue is a query and indexing component of the Dataplace solution.

The catalogue provides:

* [indexing](https://learn.microsoft.com/en-us/azure/search/search-what-is-an-index) to load content into a search service and make it searchable
* an indexing add-on that uses [AI enrichment](https://learn.microsoft.com/en-us/azure/search/cognitive-search-concept-intro) through [cognitive skills](https://learn.microsoft.com/en-us/azure/search/cognitive-search-working-with-skillsets)
* [querying](https://learn.microsoft.com/en-us/azure/search/search-query-overview) to search for Australian government data in the catalogue, against metadata standards, via a search index that the Dataplace application controls
* [semantic search](https://learn.microsoft.com/en-us/azure/search/semantic-search-overview) to add language understanding to the processing of search results, placing the most relevant results at the top.

Dataplace is a Microsoft Dynamics Software as a Service (SaaS) solution hosted on an Azure Cloud Tenant. The solution is developed and hosted by the Department of the Prime Minister and Cabinet under the guidance and direction of the Office of the National Data Commissioner.



**AGA Code:** DES83



**Type:** Design



**Category:** Data



**Linked to:** CAP4
