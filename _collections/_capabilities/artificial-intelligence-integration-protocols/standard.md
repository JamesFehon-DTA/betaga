---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'artificial-intelligence-integration-protocols'
title: 'Artificial intelligence integration protocols (position)'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA75'
type: 'AGA Standard'
---

Artificial Intelligence (AI) integration protocols define the structure for communicating with AI tools, system or data sources. The purpose of this standard is to support the development, procurement or deployment of AI models across Australian government, including content generation and large language models.

**There is not yet a universal or globally adopted integration protocol across the AI industry**. As such, **early adoption by agencies should be considered with caution**, and only once the identified security risks and vulnerabilities are addressed before implementation. Furthermore, integration approaches may also require significant vendor commitment to build compatible servers and connectors than relying on native (i.e. direct, built-in) system integrations. Each integration approach must consider the testing on reliability and maintenance on complex AI agents as part of adoption and deployment.

## Applicability

This standard is intended for non-commercial entities engaged in developing, procuring or deploying AI services across the Australian government, including content generation, large language models (LLMs) or AI agents.

Currently there are several AI integration protocols:

* Anthropic’s [Model Context Protocol (MCP)](https://modelcontextprotocol.io) is a widely adopted protocol that provides a standardised mechanism for a LLM or an AI agent to interface with external data sources and tools
* Google’s [Agent-to-Agent Protocol (A2A)](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/) enables communication and collaboration between different agents, and is suitable for complex multi-agent workflows
* IBM’s [Agent Communication Protocol (ACP)](https://www.ibm.com/think/topics/agent-communication-protocol) offers a more flexible approach with multimodal messaging, by leveraging REST-native messaging and asynchronous streaming
* Open source [Agent Network Protocol (ANP)](https://github.com/agent-network-protocol/AgentNetworkProtocol) uses decentralised, agent-centric protocol that enables secure and efficient communication and collaboration among a network of AI agents
* Open source [Agent.json](https://docs.wild-card.ai/agentsjson/introduction) provides a way to optimize API interactions for LLMs, by using OpenAPI specs to describe how API endpoints work and can be executed.

Entities involved in AI work should choose one of these standards in accordance with the specific needs of their AI system and in accordance with the [Policy for the responsible use of AI in government](https://architecture.digital.gov.au/policy/responsible-use-of-ai-in-government) and [Technical standard for government’s use of artificial intelligence](https://www.digital.gov.au/policy/ai/AI-technical-standard).