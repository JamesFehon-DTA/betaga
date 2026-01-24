---
layout: resource
style: 'ct-vertical-spacing--bottom ct-basic-content'

title: 'Blockchain overview: Australian Government guide'
description: 'This guide was last updated in 2019 and should be considered as outdated, pending further revision on Blockchain capability in 2026. The DTA does not currently hold a formal position on the use of Blockchain technology.'
url: '/resource/blockchain-overview-australian-government-guide'
aga_code: 'DES182'
type: 'Design'
category: ''
---


## Details

Responsible agency: **Digital Transformation Agency**  
Last updated: **12 February 2019**

**This guide was last updated in 2019 and should be considered as outdated, pending further revision on Blockchain capability in 2026. The DTA does not currently hold a formal position on the use of Blockchain technology.**

The *Blockchain overview: Australian Government guide* provided high-level guidance for Commonwealth government entities considering the adoption of blockchain technology.

We’ve written this reader’s guide for Australian Government executives who operate directly or indirectly in technology roles. As part of the guide, we have referenced research carried out by the [National Institute of Standards and Technology (NIST)](https://www.nist.gov/), which is part of the Department of Commerce in the United States.

Our research into blockchain supports the findings of the [Blockchain Technology Overview](https://nvlpubs.nist.gov/nistpubs/ir/2018/nist.ir.8202.pdf), published by the US Government’s *National Institute of Standards and Technology (NIST)*. Rather than duplicate the NIST publication, we have developed the guidance below to help interested government organisations localise NIST’s advice for the Australian context.

In Australia, the conversation around blockchain tends to promote its short-term potential, reflecting NIST’s observation that:

*“… the technology is not well understood. It is not magical; it will not solve all problems. As with all new technology, there is a tendency to want to apply it to every sector in every way imaginable.” (p. iv)*

It is also common for blockchain’s advocates to overlook its limitations, especially around important questions of governance:

*“...there are operational and governance issues that affect the behavior of the network. For example, in permissioned blockchain networks... there are design issues surrounding what entity or entities will operate and govern the network for the intended user base.” (p. v)*

Blockchain is only one of a number of data storage and exchange solutions, and other proven alternatives are ready for immediate use. Depending on the business needs, using more mature solutions allows agencies to move beyond the experimentation or prototyping to real-world applications.

We recommend agencies focus on the problem they are facing before applying any solution, including blockchain:

*Blockchain technology is still new and should be investigated with the mindset of “how could blockchain technology potentially benefit us?” rather than “how can we make our problem fit into the blockchain technology paradigm?”. Organisations should treat blockchain technology like they would any other technological solution at their disposal and use it in appropriate situations. (p. vi)*

## Governance and ownership

Agencies must understand the governance arrangements of any proposed blockchain.

There are additional risks and considerations when using permissioned consortium blockchains, where leading users often in effect control the blockchain. This usually removes the perceived benefits of decentralisation.

*“The governance of blockchain networks deals with the rules, practices and processes by which the blockchain network is directed and controlled. A common misconception is that blockchain networks are systems without control and ownership. The phrase “no one controls a blockchain!” is often exclaimed.” (p. 35)*

*“For permissioned blockchain networks, control and governance is driven by members of the associated owner or consortium. The consortium can govern who can join the network, when members are removed from the network, coding guidelines for smart contracts, etc.” (p. 35)*

## Trust

While agencies may find blockchain’s claimed ability to exchange data with low-trust external organisations attractive, it is important to remember that it is not a “trustless” system. Users still need to trust the technology itself, the software developers, the dispute mediation process, and the behaviour of other users. Should that trust be misplaced, there is little recourse for agencies trying to use blockchain to create new and innovative solutions to problems.

*Another common misinterpretation comes from people hearing that there is no “trusted third party” in a blockchain and assuming blockchain networks are “trustless” environments. While there is no trusted third party certifying transactions in permissionless blockchain networks (in permissioned systems it is less clear, as administrators of those systems act as an administrator of trust by granting users admission and permissions), there is still a great deal of trust needed to work within a blockchain network. (p. 38)*

## Encryption and access

Agencies should pay particular consideration to the blockchain’s use of encryption. Blockchains are not encrypted by default and the data is available to all users, whether users within the network – in the case of private blockchains, or the broader public – for public blockchains. There are permissioned blockchains which can restrict some access, however conventionally speaking, data is not encrypted by default.

## Correcting errors

Blockchains are by definition *append-only*. This means users can only add data to the blockchain, not edit or delete existing data. This makes it impossible to completely erase incorrect data, in the way a database record can be changed or deleted.

This may cause significant issues, for example, if sensitive personal details are misrecorded against the wrong person or if the need arises to delete someone’s personal details.

*Consider scenarios where data may be governed by policy or regulations (such as Personally Identifiable Information (PII) or General Data Protection Regulation (GDPR) regulations). Data such as this may or may not be appropriate to store even within a permissioned blockchain network. (p. 44)*

Agencies must consider how their processes and procedures can account for this new way of thinking: when it comes to blockchain implementations, mistakes, and their corrections, no matter how small or large, become available to all users with access. While in some cases this may be acceptable or even desirable, agencies must consider the possible risk to trust and agency reputation with this approach.

## Conclusion

* The DTA believes blockchain is still an emerging technology and agencies should be pragmatic when assessing its applications.
* The DTA supports agencies in finding new and innovative responses to challenges and blockchain may be part of future solutions.
* Agencies should objectively compare blockchain solutions to alternative technologies when solving business problems.
* The limitations of blockchain should be carefully weighed against any unique benefits provided by a blockchain-specific solution for government.
* Agencies should focus on the problems they need to solve, rather than start from a specific technology solution.
* Agencies should continue to monitor blockchain developments, looking for opportunities to enhance service delivery that this technology may unlock in the future.

## Further reading

### Blockchain technology overview (NIST)

[This paper provides strategic advice](https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf) for executives who are increasingly expected to have a position on what blockchain may mean for their organisation. It also looks at the technology in enough technical detail to identify the practical considerations and implications.

### Risks and opportunities for systems using blockchain & smart contracts

This paper was commissioned by The Treasury and [identifies key risks and opportunities associated with blockchain in the context of the Australian Government](https://webarchive.nla.gov.au/awa/20180313154647/http://www.data61.csiro.au/en/Our-Work/Safety-and-security/Secure-Systems-and-Platforms/Blockchain). It is also a useful primer for relevant terminology related to blockchain technology.

### Blockchains Unchained - Blockchain Technology and Its Use in the Public Sector (OECD)

[This paper](http://dx.doi.org/10.1787/3c32c429-en) developed by the OECD Observatory of Public Sector Innovation (OPSI) in collaboration with the Working Party of Senior Digital Government Officials (E-Leaders) provides a guide on Blockchains and how they may (and may not) apply to government.

### Block by block (Mercy Corps)

This is a more technical paper that [provides a useful comparison of popular blockchain protocols](https://www.mercycorps.org/research/block-block) such as Hyperledger Fabric and Ethereum by not-for-profit Mercy Corps.

### Hyperledger architecture, volume 1 (Hyperledger Architecture Working Group)

This paper is the first in a series of papers from the Hyperledger Architecture Working Group. [It contains an introduction to Hyperledger protocols](https://www.hyperledger.org/wp-content/uploads/2017/08/Hyperledger_Arch_WG_Paper_1_Consensus.pdf), which are useful in public sector experiments. It also describes the differences between lottery and vote based approaches to consensus.



**AGA Code:** DES182



**Type:** Design





**Linked to:** CAP59
