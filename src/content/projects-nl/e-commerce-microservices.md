---
---

## Overzicht

Een volledig functionele e-commerceoplossing met microservicesarchitectuur, gebouwd als portfolioproject om geavanceerde cloudnatieve en distribueerde systeempatronen te demonstreren.

**Geïmplementeerde diensten:**

- **Catalogusdienst**: Productcatalogus met Elasticsearch voor zoekopdrachten
- **Besteldienst**: Bestelverwerking met Saga-patroon voor gedistribueerde transacties
- **Betalingsdienst**: Stripe-betaalintegratie met idempotente verwerking
- **Notificatiedienst**: E-mail/SMS-meldingen via Azure Communication Services
- **API Gateway**: Ocelot-based gateway met auth-middleware

**Infrastructuur:**

- Docker Compose voor lokale ontwikkeling
- Azure Kubernetes Service (AKS) voor productie-orkestratiereferentie
- RabbitMQ voor asynchrone berichtuitwisseling tussen diensten
- Distributed tracing met OpenTelemetry

## Technische aanpak

Elke microservice volgt Clean Architecture intern met zijn eigen database (SQL Server, Elasticsearch of Redis). Inter-dienst-communicatie verloopt via asynchrone berichten (RabbitMQ) voor domeinevents en synchrone HTTP voor query-API's. De implementatie demonstreert de Saga-patroon-implementatie via choreografie voor bestelworkflows, waarbij consistentie wordt gehandhaafd zonder gedistribueerde transacties.
