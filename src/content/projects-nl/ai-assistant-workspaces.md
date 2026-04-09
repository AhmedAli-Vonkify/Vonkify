---
---

## De uitdaging

iO Digital had behoefte aan een schaalbare, enterprise-grade AI-werkruimte die de beste mogelijkheden van meerdere large language model providers kon benutten zonder afhankelijk te zijn van één leverancier. Het platform moest interne teams in verschillende afdelingen bedienen met uiteenlopende AI-toepassingen — van contentcreatie tot code-review tot data-analyse.

De belangrijkste uitdagingen waren:

- **Multi-provider complexiteit**: Elke LLM-provider (Azure OpenAI, Amazon Bedrock, Google Gemini) heeft zijn eigen API-formaat, authenticatiemodel en mogelijkheden
- **Enterprise beveiliging**: Al het verkeer moest binnen de beveiligde cloudomgeving van iO blijven
- **Schaalbaarheid**: Het platform moest gelijktijdige verzoeken van honderden gebruikers kunnen verwerken
- **Observability**: Teams hadden inzicht nodig in gebruik, kosten en modelprestaties

## De oplossing

Ik ontwierp en bouwde een unified AI-gatewaylaag die de verschillen tussen LLM-providers verbergt achter een consistente API. De architectuur bestaat uit:

**Backend Architectuur:**

- Een Node.js/TypeScript API-gateway die verzoeken en antwoorden normaliseert over providers heen
- Providerspecifieke adapters die een gemeenschappelijk interfacepatroon implementeren
- MongoDB voor gespreksgeschiedenis en werkruimteconfiguraties
- Redis-cachinglaag voor veelgebruikte prompts en embeddings

**Infrastructuur (Terraform + Docker):**

- Containeriseerde microservices gedeployed op Azure
- Infrastructuur-als-code met Terraform voor reproduceerbare omgevingen
- Geautomatiseerde CI/CD-pipeline met GitHub Actions
- Kostenallocatietagging per team/afdeling

**Frontend (React + TypeScript):**

- Werkruimtebeheerdashboard gebouwd op LibreChat (aangepast)
- Modelselectie met real-time vergelijking van mogelijkheden
- Analytics- en kostendashboards

## Mijn rol

Als lead engineer op de AI-integratielaag was ik verantwoordelijk voor:

- Het ontwerpen van de multi-provider abstractiearchitectuur
- Het implementeren van de provideradapters (OpenAI, Bedrock, Gemini)
- Het opzetten van Terraform-infrastructuurmodules
- Het bouwen van de Docker-containerisatiestrategie
- Code reviews en technische documentatie
