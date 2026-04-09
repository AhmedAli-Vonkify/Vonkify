---
title: "Eneco Digital Core — Middleware API Platform"
company: "iO Digital / Eneco"
companyUrl: "https://www.eneco.nl"
period: "August 2022 – July 2024"
role: "Software Engineer"
summary: "Built a high-performance middleware API platform for Eneco — one of the Netherlands' largest energy companies — serving as the integration backbone between Eneco's digital consumer products and backend systems."
tech: ["C#", "ASP.NET Core", ".NET 8", "Redis", "Fusion Cache", "Entity Framework Core", "SQL Server", "Azure Table Storage", "Azure Functions", "Azure DevOps", "Swagger", "SOLID", "Unit Testing", "Integration Testing"]
featured: true
featuredOrder: 2
category: "Backend"
order: 2
achievements:
  - "Designed and implemented high-throughput middleware handling millions of API calls per month"
  - "Reduced response times by 60% through Redis and Fusion Cache layered caching strategy"
  - "Built robust integration testing suite achieving 85%+ code coverage"
  - "Implemented DDD and SOLID principles resulting in a maintainable, extensible codebase"
  - "Delivered critical integrations enabling Eneco's digital transformation roadmap"
---

## The Challenge

Eneco's digital products — including their consumer energy portal and mobile app — needed a reliable, performant middleware layer to communicate with their complex backend systems. The existing integration approach was tightly coupled, difficult to maintain, and didn't scale well during peak demand periods (cold winter months, price alerts, etc.).

Key challenges:
- **Performance at scale**: Handling traffic spikes of 10x normal load during peak periods
- **Legacy integration**: Connecting modern REST APIs with older SOAP-based backend services
- **Reliability**: Zero-downtime requirements for a critical energy infrastructure service
- **Maintainability**: Making the codebase extensible for a team of 8+ developers

## The Solution

I helped build a clean, layered middleware platform using ASP.NET Core with strict DDD and Clean Architecture principles:

**API Layer:**
- ASP.NET Core Web API with Swagger/OpenAPI documentation
- Request validation with FluentValidation
- Standardized error handling and problem details (RFC 7807)

**Caching Strategy:**
- L1 cache: Fusion Cache (in-memory) for hot data
- L2 cache: Redis distributed cache for shared state across instances
- Cache invalidation via Azure Service Bus events

**Data Layer:**
- Entity Framework Core for relational data (SQL Server)
- Azure Table Storage for high-volume logging and event data
- Repository pattern with Unit of Work

**Infrastructure:**
- Azure Functions for async processing
- Azure DevOps pipelines for CI/CD
- Application Insights for monitoring

## My Role

I worked as a backend engineer contributing across the entire platform:
- Implementing new domain features using CQRS with MediatR
- Designing and implementing the caching strategy
- Writing unit and integration tests
- Code reviews and architecture discussions
- On-call support for production issues
