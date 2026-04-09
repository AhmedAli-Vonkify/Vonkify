---
---

## De uitdaging

De digitale producten van Eneco — waaronder hun consumentenenergieportaal en mobiele app — hadden een betrouwbare, performante middlewarelaag nodig om te communiceren met hun complexe backendsystemen. De bestaande integratiebenadering was sterk gekoppeld, moeilijk te onderhouden en schaalbaar niet goed tijdens piekperioden (koude wintermaanden, prijswaarschuwingen, etc.).

Belangrijkste uitdagingen:

- **Prestaties op schaal**: Verkeerspieken van 10x de normale belasting opvangen tijdens piekperioden
- **Legacy-integratie**: Moderne REST-API's verbinden met oudere SOAP-gebaseerde backenddiensten
- **Betrouwbaarheid**: Zero-downtime vereisten voor een kritieke energieinfrastructuurdienst
- **Onderhoudbaarheid**: De codebase uitbreidbaar maken voor een team van 8+ ontwikkelaars

## De oplossing

Ik hielp een schoon, gelaagd middlewareplatform te bouwen met ASP.NET Core en strikte DDD- en Clean Architecture-principes:

**API-laag:**

- ASP.NET Core Web API met Swagger/OpenAPI-documentatie
- Verzoekvalidatie met FluentValidation
- Gestandaardiseerde foutafhandeling en probleemdetails (RFC 7807)

**Cachingstrategie:**

- L1-cache: Fusion Cache (in-memory) voor veelgevraagde data
- L2-cache: Redis gedistribueerde cache voor gedeelde status over instanties
- Cache-invalidatie via Azure Service Bus-events

**Datalaag:**

- Entity Framework Core voor relationele data (SQL Server)
- Azure Table Storage voor grootschalige logging en eventdata
- Repository-patroon met Unit of Work

**Infrastructuur:**

- Azure Functions voor asynchrone verwerking
- Azure DevOps-pipelines voor CI/CD
- Application Insights voor monitoring

## Mijn rol

Ik werkte als backend engineer en droeg bij aan het gehele platform:

- Nieuwe domeinfeatures implementeren met CQRS en MediatR
- De cachingstrategie ontwerpen en implementeren
- Unit- en integratietests schrijven
- Code reviews en architectuurdiscussies
- On-call ondersteuning bij productieproblemen
