---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'web-content-management'
title: 'Web Content Management'
url: '/'
toc: 'auto_sticky_nested'
content_top: true
aga_code: 'STA71'
type: 'AGA Standard'
---

Web Content Management encompasses the full spectrum of content processes, covering aspects such as creation, categorisation, quality, protection, and oversight. It is often achieved through implementation of a Content Management System (CMS).

A CMS helps an entity create, publish, manage, store, and modify their digital content, generally comprising:

* a flexible interface that allows for the presentation of content to the user through an approval functionality, typically known as publishing
* an administrative backend linked to a persistent database, where an administrator can create, organise, and publish content available to the user interface, as well as undertaking other administrative functions.

The CMS backend is generally managed through a web interface, enabling the administrative or designated user to publish, update, or delete content with minimal need for code modifications.

## Comply with legislation and regulation

Entities must:

* comply with relevant Commonwealth legislation including (but not limited to):
  + *Archives Act 1983* (Cth)
  + *Data Availability and Transparency (DAT) Act 2002* (Cth)
  + [*Disability Discrimination Act 1992*](https://www.legislation.gov.au/Series/C2004A04426)(Cth)
  + *Freedom of Information Act 1982* (Cth)
  + *Privacy Act 1988* (Cth)
* comply with any other legislation applicable to specific functions and circumstances.

## Align to guidelines and standards

Entities must:

* meet the requirements of the [Hosting Certification Framework](https://www.hostingcertification.gov.au/) (please refer to [Hosting](https://architecture.digital.gov.au/hosting) for more information)
* meet the [Digital Experience Policy (DX Policy)](https://architecture.digital.gov.au/digital-experience-policy) and its standards
* adhere to the [Australian Government Style Manual](https://www.stylemanual.gov.au/), that sets the criteria for Australian Government writing and editing
* align to the [Australian Government Branding Guidelines](https://www.pmc.gov.au/resources/australian-government-branding-guidelines)
* meet [Web Content Accessibility Guidelines](https://architecture.digital.gov.au/web-content-accessibility-guidelines-wcag) (WCAG) 2.2 Level AA
* meet the standards set by the [Australian Cyber Security Centre](https://www.cyber.gov.au/resources-business-and-government/governance-and-user-education/secure-by-design) for hosting web content
* apply the principles and requirements of the [Protective Security Policy Framework](https://architecture.digital.gov.au/protective-security-policy-framework-pspf) throughout their organisation, including in the context of web content management.

Entities should:

* define internal, entity-wide mandatory standards, and associated templates, to ensure consistency between different outputs and channels
* ensure human-centred design practices are applied when writing, hosting, and managing content
* leverage Australian Government technology options and anticipate how emerging technologies, such as artificial intelligence impact, will impact web content accessibility
* ensure compatibility with assistive technologies such as keyboard inputs, voice commands and screen readers
* use automated accessibility testing where appropriate, in addition to testing content with individuals
* produce clear, coherent, and inclusive content that serves the users' needs.

## Deliver web content on digital channels

Entities should:

* create an entity-wide channel strategy that considers user needs and entity-wide strategic direction in clearly directing content to specific channels
* avoid the proliferation of digital channels by consolidating like-type services onto single platforms
* improve government content by adopting a digital-first approach such as publishing informational content through entities websites as a primary option
* offer content in different mediums, such as text, images and audio and segment long documents or tutorials into chunks
* provide human-validated multilingual support for important information
* where multiple channels exist, support users to move between them at boundary points
* incorporate user-centred design in the evaluation, deployment/development, and testing of content and platforms, particularly with users who depend on assistive technology.

## Develop a content strategy

The APSC’s Digital Profession provides reference materials for development of a content strategy: [Content Strategy Guide \| Digital Profession](https://www.digitalprofession.gov.au/content-strategy)

Entities should:

* define an entity-wide, service, or topic-centric content strategy, that covers:
  + an overarching approach that consolidates and clarifies the roles of different digital channels
  + appropriate alignment of content to different digital channels
  + an overarching governance model, including alignment of responsibilities between technical and business teams
* define universal content rules in line with common conventions across government
* set expectations for specific governance of individual digital channels
* work towards a content governance model to improve and report on outcomes and efficiencies
* apply this content strategy when building new services or redesigning content, or for substantial changes such as machinery-of-government updates
* manage content across its lifecycle (the people, workflow, skills, and tasks involved in producing content)
* establish roles and responsibilities for content management to promote balanced collaboration among various subject matter experts within the government.

## Align business, operational, and technological needs

There are numerous CMS available, and each has its own unique user experience and feature set. Because current CMS facilitates the creation and management of content with little to no coding, it is important to identify the right CMS to address the business requirements.

Entities must implement a CMS with:

* the ability to create, edit, revise, audit and publish content in line with [Archives Act 1983](https://www.naa.gov.au/information-management/disposing-information/retaining-managing-and-disposing-data-and-datasets)
* the ability to have roles-based access control to minimise risk to both content administration and user access, in line with [identity management best practice](https://blueprint.asd.gov.au/design/platform/identity/roles/) and [Permissions \| aga (digital.gov.au)](https://architecture.digital.gov.au/permissions)
* committed ongoing support in the form of continuous security updates and patches. Refer to [Application Security Standard \| aga (digital.gov.au)](https://architecture.digital.gov.au/application-security-standard).

Entities should:

* clearly determine the purpose of a service and form a set of business requirements in advance of any procurement or development activities
* minimise bespoke customisation of any chosen CMS, instead prioritising appropriate procurement and utilisation of a suited solution
* where customisation is needed, develop modules in a manner that suits broad utilisation across government, and make these available to other entities
* prioritise solutions with integrated reporting and analytics functionality, to gain insights for tailoring content and presentation according to the [Digital Service Standard](https://architecture.digital.gov.au/digital-service-standard-v2)
* consider the functionality needed in the CMS workflow to support the roles involved in content management
* consider content categorisation as a vital step in both mapping out the content and scaling the content management process.
* conduct routine website audit and standardised inventory to effectively categorise entity’s content
* use information architecture (IA) to help individuals and businesses navigate a website, making it clear where they are and how to find what they need, utilising resources such as [Improve your IA \| Digital Profession](https://www.digitalprofession.gov.au/content-strategy/information-architecture)
* focus on developing a coherent taxonomy to organise content in a structured, hierarchical manner based on shared characteristics
* consider CMS that can generate online traffic through search engine optimisation in accordance with [SEO guidelines](https://www.digitalprofession.gov.au/content-strategy/search-engine-optimisation)
* implement content maintenance process to ensure continuous value for the user. [Content maintenance plan \| Digital Profession](https://www.digitalprofession.gov.au/content-strategy/manage-content-requests/maintain-improve-content/maintain-plan).

## Prioritise and enable integration and interoperability

Entities should:

* develop a robust and scalable data/content model that suits immediate and future needs, including scaling, potential re-platforming, or combining with other platforms/data sets. See [Information Asset Management](https://architecture.digital.gov.au/information-management)
* ensure the CMS can integrate with other systems, through an [Application Programming Interface (API)](https://architecture.digital.gov.au/application-programming-interfaces-apis-standard) or other interoperation
* develop and deploy services in a manner that allows present and future interoperation with other governmental services
* consider suitability of API-enabled CMS, storing all content and assets and offering flexibility to distribute to multiple channels via a content API.

## Consider onboarding to GovCMS

Entities must:

* consult with the Department of Finance about their requirements, and determine whether GovCMS (as administered by the Department of Finance) is appropriate for their needs before moving forward with procurement
* leverage existing whole of government sourcing arrangements.

Entities should:

* consider the GovCMS **Software as a Service** solution as the first option, as a highly functional, customisable, secure, and highly resilient offering. The Department of Finance are responsible for the CMS application and related security upgrades
* consider the GovCMS **Platform as a Service** solution when business needs are distinct and require significant customisation, and when entity teams are staffed to handle maintenance and security responsibilities
* where GovCMS is identified as a suitable platform, but there is an anticipated delay to its implementation, any interim solutions should be structured to allow seamless transition to GovCMS
* where a GovCMS offering is *not* suitable, clearly document specific requirements, solution selection, and customisations, and make these available for other entities to reuse.

## Apply AI ethics principles and policy when AI enables content

AI is increasingly of relevance to Web Content Management, including in content generation and through the likes of AI Chatbots that aide navigation.

Entities must:

* comply with the [policy for responsible use of AI in government](https://architecture.digital.gov.au/responsible-use-of-AI-in-government) where there is AI involved at any point in content management.

Entities should:

* consider opportunities to utilise emerging technologies, such as AI, to improve content personalisation, SEO, long-form contents, or product descriptions
* align to applicable guidance within [Artificial Intelligence (AI) \| aga (digital.gov.au)](https://architecture.digital.gov.au/ai)
* apply [Australia’s 8 Artificial Intelligence (AI) Ethics Principles](https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework/australias-ai-ethics-principles) when curating content for citizens and businesses using AI
* ensure AI inclusions are developed and used in a way that provides benefits while minimising the risk of negative impact to people, groups, and wider society
* transparently identify where and how AI has been utilised at any point of end-to-end content management.

## Adhere to reuse principles

The Australian Government Architecture provides information for entities on [Reuse](https://architecture.digital.gov.au/reuse-operating-model).

Entities should:

* consider web content management-specific functional and non-functional requirements prior to solution design or consideration of technology choice, including:
  + types of content to be hosted
  + user needs
  + broader system and entity purpose
  + performance and availability requirements
  + privacy/sensitivity concerns
* meet the requirements of the whole-of-government reuse policy
* source via the Digital Marketplace on [BuyICT](https://www.buyict.gov.au/sp?id=marketplace_landing&marketplace=cbb1ec15db617b0031d7413b3a96190b&path=buying), including taking advantage of whole-of-government arrangements.
