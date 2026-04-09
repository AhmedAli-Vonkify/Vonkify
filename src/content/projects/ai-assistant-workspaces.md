---
title: "AI Assistant Workspaces"
company: "iO Digital"
companyUrl: "https://www.iodigital.com"
period: "July 2024 – Present"
role: "Software Engineer / AI Integration Lead"
summary: "Building enterprise AI assistant workspaces for iO Digital powered by Azure OpenAI, Amazon Bedrock, and Google Gemini — enabling teams to leverage multiple LLM providers in a unified platform."
tech: ["Azure OpenAI", "Amazon Bedrock", "Google Gemini", "Node.js", "React", "TypeScript", "Docker", "Terraform", "MongoDB", "LibreChat", "YAML", "RESTful APIs"]
featured: true
featuredOrder: 1
category: "AI & ML"
order: 1
achievements:
  - "Integrated 3 major LLM providers (Azure OpenAI, Bedrock, Gemini) into a unified API layer"
  - "Built cloud-native infrastructure with Terraform and Docker for reproducible deployments"
  - "Developed React/TypeScript frontend for intuitive AI workspace management"
  - "Implemented provider-agnostic architecture enabling hot-swapping between LLM backends"
  - "Reduced AI response latency by 35% through smart caching and streaming optimizations"
---

## The Challenge

iO Digital needed a scalable, enterprise-grade AI workspace that could leverage the best capabilities from multiple large language model providers without being locked into a single vendor. The platform needed to serve internal teams across different departments with varying AI use cases — from content creation to code review to data analysis.

The key challenges were:
- **Multi-provider complexity**: Each LLM provider (Azure OpenAI, Amazon Bedrock, Google Gemini) has its own API format, authentication model, and capabilities
- **Enterprise security**: All traffic needed to stay within iO's secure cloud environment
- **Scalability**: The platform needed to handle concurrent requests from hundreds of users
- **Observability**: Teams needed insights into usage, costs, and model performance

## The Solution

I designed and built a unified AI gateway layer that abstracts the differences between LLM providers behind a consistent API. The architecture consists of:

**Backend Architecture:**
- A Node.js/TypeScript API gateway that normalizes requests and responses across providers
- Provider-specific adapters implementing a common interface pattern
- MongoDB for conversation history and workspace configurations
- Redis caching layer for frequent prompts and embeddings

**Infrastructure (Terraform + Docker):**
- Containerized microservices deployed on Azure
- Infrastructure-as-code with Terraform for reproducible environments
- Automated CI/CD pipeline with GitHub Actions
- Cost allocation tagging per team/department

**Frontend (React + TypeScript):**
- Workspace management dashboard built on LibreChat (customized)
- Model selector with real-time capability comparison
- Usage analytics and cost dashboards

## My Role

As the lead engineer on the AI integration layer, I was responsible for:
- Designing the multi-provider abstraction architecture
- Implementing the provider adapters (OpenAI, Bedrock, Gemini)
- Setting up Terraform infrastructure modules
- Building the Docker containerization strategy
- Code reviews and technical documentation
