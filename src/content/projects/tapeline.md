---
title: "Tapeline — Road Construction Monitoring"
company: "Heijmans"
companyUrl: "https://www.heijmans.nl"
period: "September 2021 – September 2022"
role: "Senior Developer / Solution Architect"
summary: "Internal web application monitoring road obstructions from Heijmans construction sites in real-time, communicating data to external navigation platforms including Waze to help drivers avoid delays."
tech: ["C#", "ASP.NET Core", "Angular", "TypeScript", "DDD", "Onion Architecture", "TDD", "MediatR", "Entity Framework Core", "SQL Server", "Terraform", "Azure Table Storage", "Azure Functions", "NgRx", "RxJS", "ECharts", "Azure Maps", "Redux"]
featured: true
featuredOrder: 3
category: "Full-Stack"
order: 3
achievements:
  - "Led architecture decisions using Domain-Driven Design and Onion Architecture patterns"
  - "Introduced Test-Driven Development to the team — going from 0% to 75%+ test coverage"
  - "Mentored 3 junior developers through code reviews, pair programming, and architecture sessions"
  - "Delivered Waze integration enabling real-time road obstruction data for thousands of drivers"
  - "Implemented Azure Maps integration for geospatial road monitoring dashboards"
---

## The Challenge

Heijmans, one of the Netherlands' largest infrastructure and construction companies, needed real-time visibility into the road obstructions caused by their construction activities. Traffic disruptions were being communicated manually and inconsistently, leading to poor driver experience and regulatory compliance issues.

The system needed to:
- Track all active Heijmans road construction sites and their obstructions
- Push real-time data to external platforms (Waze, Google Maps, DATEX II)
- Provide an internal dashboard for project managers
- Handle geospatial data with routing calculations

## The Solution

I joined as the lead architect and senior developer, designing the system from the ground up:

**Architecture:**
- Clean Architecture / Onion Architecture with strict layer separation
- Domain-Driven Design with clearly defined bounded contexts
- CQRS pattern using MediatR for command/query separation
- Event-driven updates using Azure Service Bus

**Backend (.NET Core):**
- Rich domain model for road obstructions, construction projects, and geographical zones
- Azure Functions for scheduled sync jobs and webhook notifications
- Azure Table Storage for high-volume event logging

**Frontend (Angular + TypeScript):**
- Interactive map dashboard using Azure Maps
- Real-time updates via SignalR
- Data visualization with ECharts for project manager analytics
- State management with NgRx

**Testing:**
- Introduced TDD methodology to the team
- Unit tests for domain logic, integration tests for repositories
- Cypress E2E tests for critical user flows

## My Role

As Solution Architect and Senior Developer, I was responsible for:
- Initial system architecture and technology decisions
- Leading the development team (4 developers)
- Introducing and enforcing TDD practices
- Developer coaching through pair programming and code reviews
- Internal knowledge-sharing sessions on DDD and clean architecture
