---
title: "Layered Energy System — Blockchain Grid Management"
company: "ICT Group / Stedin"
companyUrl: "https://www.stedin.net"
period: "November 2018 – September 2019"
role: "Software Engineer"
roleNl: "Software Engineer"
summary: "Market solution for a local energy community using Ethereum blockchain, enabling peer-to-peer energy trading and preventing grid congestion through intelligent flex management for Dutch grid operator Stedin."
summaryNl: "Marktoplossing voor een lokale energiegemeenschap via Ethereum blockchain, die peer-to-peer energiehandel mogelijk maakt en netcongestie voorkomt via intelligent flexbeheer voor Nederlandse netbeheerder Stedin."
tech: ["C#", "ASP.NET Core", "Blockchain", "Ethereum", "Nethereum", "Azure Functions", "Azure Logic Apps", "Unit Testing", "Entity Framework Core", "USEF Framework"]
featured: true
featuredOrder: 4
category: "Blockchain"
order: 7
achievements:
  - "Designed and implemented the blockchain integration layer using Nethereum and Ethereum smart contracts"
  - "Built congestion prevention algorithms based on the USEF (Universal Smart Energy Framework)"
  - "Created Azure Functions for automated flex management and demand-response events"
  - "Implemented peer-to-peer energy trading mechanism for local community members"
achievementsNl:
  - "Blockchain-integratielaag ontworpen en gebouwd met Nethereum en Ethereum smart contracts"
  - "Congestiepreventie-algoritmen gebouwd op basis van het USEF (Universal Smart Energy Framework)"
  - "Azure Functions aangemaakt voor geautomatiseerd flexbeheer en vraagresponse-events"
  - "Peer-to-peer energiehandelmechanisme geïmplementeerd voor lokale gemeenschapsleden"
---

## The Challenge

Stedin, one of the Netherlands' major grid operators, faced a growing problem: local energy communities with solar panels and battery storage were creating unpredictable grid congestion. Traditional centralized approaches couldn't respond fast enough to local supply/demand imbalances.

The project explored whether blockchain technology could enable a truly decentralized, peer-to-peer energy trading market within a local community while automatically managing grid congestion.

## The Solution

Working within the USEF (Universal Smart Energy Framework), I built a blockchain-backed energy trading platform:

**Blockchain Layer:**
- Ethereum smart contracts for transparent, immutable energy trades
- Nethereum .NET library for smart contract interaction
- Wallet management for community participants

**Flex Management:**
- Algorithms detecting congestion risk based on weather forecasts and historical consumption
- Automated flex requests sent to participants with surplus energy
- Real-time balancing via Azure Logic Apps workflows

**Backend:**
- ASP.NET Core API for participant management
- Azure Functions for automated scheduled processes
- SQL Server for trade history and analytics

## My Role

I set up the solution architecture for the blockchain integration components and implemented the Nethereum-based smart contract interaction layer, the congestion prevention algorithms, and the Azure Functions for automated grid management.
