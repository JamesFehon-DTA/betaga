---
layout: resource
style: 'ct-vertical-spacing--bottom ct-basic-content'

title: 'Do you need blockchain?'
description: 'This guide was last updated in 2019 and should be considered as outdated pending further revision on Blockchain capability in 2026. The DTA does not currently hold a formal position on the use of Blockchain technology. The “do you need blockchain?” guide provided high-level guidance for Commonwealth government entities considering the'
url: '/resource/do-you-need-blockchain'
aga_code: 'DES183'
type: 'Design'
category: ''
---


## Details

Responsible agency: **Digital Transformation Agency**  
Last updated: **12 February 2019**

**This guide was last updated in 2019 and should be considered as outdated pending further revision on Blockchain capability in 2026. The DTA does not currently hold a formal position on the use of Blockchain technology.**

The “do you need blockchain?” guide provided high-level guidance for Commonwealth government entities considering the adoption of blockchain technology.

How to decide whether you should invest in blockchain.

We based these questions on a blockchain decision tree developed by the US Department of Homeland Security and published by the National Institute for Standards and Technology (NIST). We’ve made changes to suit an Australian Government context, and included some information about public and private blockchains.

## Do you have multiple peers who need to share and write to the same data store?

For example, an agency is assessing the merit of a common data store for supply chain data. Customs authorities, shipping companies and freight forwarders all use this data.

Blockchain requires more than two peers who need to share and write to the same database. If your use case doesn’t have this requirement, it is worth considering a conventional database.

## Once you write your records, are they never updated or deleted?

For example, an agency may record a transaction against the incorrect welfare participant in a blockchain. This error could only be fixed by appending another, correct record, rather than updating or deleting the original and incorrect record.

If you need to update or delete, rather than add to, records, such as a requirement to delete personal information, conventional databases are probably a better solution, however there are options using append-only data storage.

## Will you add sensitive identifiers to the data store?

Blockchain data is open by default. Even if the blockchain has a set of permissioned users, sensitive records, such as medical records, could be at risk. While a person's identity may not be attached, given the immutability of blockchain, unique data patterns and attributes could, in time, disclose their identity.

Using blockchains for sensitive or in-confidence data presents risks for public sector agencies that require careful considerations. Although some permissioned blockchain protocols allow a concept known as *channels* to restrict access to specific groups, encrypted databases with secure data exchange are well understood and offer a less risky approach.

## Is it difficult for network peers to decide who should control the data store?

For example, it may be hard for a group of nations to decide who should house a centralised data store for sensitive nuclear accounting data.

If there is a clear lead organisation or peer who is trusted to control the data store and able to settle disputes and maintain the rules of the network, a conventional database may be a better solution.

If agencies can implement appropriate governance arrangements, including the need to mediate disputes and the implications of the control of blockchain, then a blockchain solution may be viable.

Note: in many instances a blockchain requires a single entity or a formal governance arrangement to control and administer the network. This may remove any benefits from data decentralisation.

## Do you want a tamper-evident log of all writes to the data store?

For example, the Australian Government may benefit from the ability to prove, through audit, that historical scientific records have not been altered.

Blockchains, just like append-only logs used by entities such as [certificate transparency logs](https://certificate.transparency.dev/), keep a record of all changes to the data. This provides for greater data integrity, but this benefit should be considered against the other requirements of the solution.

## Is there a benefit from removing intermediaries?

For example, cryptocurrencies, such as Bitcoin, rely on the permissionless blockchain protocol to facilitate exchange of money without needing a bank. Such protocols typically use consensus models, such as ‘[Proof of Work](https://en.wikipedia.org/wiki/Proof-of-work_system)’, to remove the need for an intermediary. This is known as a ‘disintermediation benefit’.

Undertaking a proof-of-concept can help uncover possible disintermediation benefits for your use case. On the other hand, if removing intermediaries would prevent your organisation from exercising its statutory authority, then conventional data storage may be more appropriate.

## Public blockchain

A public blockchain allows anyone to interact with the network. By design, these blockchains are decentralised, giving authority to anyone who can demonstrate effective control over the networks.

As a result, when implementing public blockchains, you are effectively providing a permissionless and publicly accessible data publishing and storage solution, with no control over the data once published.

You should also consider that many of the blockchain operators may reside outside of Australia’s jurisdiction and are anonymous, which may lead to increased data privacy and security risks.

If agencies can demonstrate a requirement to prove published data has not been altered, then the concepts of hashing, Merkle trees and widely witnessed media can be used to prove data integrity. These technologies and concepts form the basis of blockchain.

When considering publishing of datasets for public use, we recommend the use of [data.gov.au](https://data.gov.au/).

## Private blockchain

If you meet all of the criteria above, you might consider a private, or permissioned, blockchain. This kind of blockchain restricts actions to certain participants.

If you do not meet all the criteria, then blockchain may not be the best solution to the problem you’re trying to solve.

Generally, if you can satisfy your use case with a conventional centralised data architecture, such as a database or other mature technology, this may be a more attractive option and be faster to implement.

However, it may be valuable for agencies to test smaller-scale uses of blockchain to determine its effectiveness for their particular use case.

## Further considerations for potential blockchain deployments

* Be clear on the governance model of your solution, as centralised governance and control may negate blockchain’s benefits.
* Tackle data standardisation early. The biggest challenge when implementing a blockchain solution or any other data sharing solution is aligning and normalising multiple, historically independent datasets, but this also provides the most benefit.
* Be transparent about your motives. Understand the incentives of each party in the network in the short and long terms. It is crucial to understand the role of trust in a blockchain solution.

## Further reading

[*Do you need a blockchain?*](https://eprint.iacr.org/2017/375.pdf) by Karl Wust (ETH Zurich) and Arthur Gervais (Imperial College London) is a technical assessment of blockchain technology. It is a good starting point for technical professionals and academics.

We have collected some blockchain case studies which may also provide an insight into the possible benefits of a blockchain solution:

* [Blockchain case study: Australian Taxation Office luxury car tax compliance](https://architecture.digital.gov.au/design/blockchain-case-study-australian-taxation-office)
* [Blockchain case study: Commonwealth Bank and the NDIS](https://architecture.digital.gov.au/design/blockchain-case-study-commonwealth-bank-and-ndis)



**AGA Code:** DES183



**Type:** Design





**Linked to:** CAP59
