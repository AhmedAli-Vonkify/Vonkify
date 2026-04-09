---
---

## De uitdaging

Heijmans, één van de grootste infrastructuur- en bouwbedrijven van Nederland, had real-time inzicht nodig in de wegobstructies die hun bouwactiviteiten veroorzaakten. Verkeersstoringen werden handmatig en inconsistent gecommuniceerd, wat leidde tot een slechte rijderservaring en nalevingsproblemen.

Het systeem moest:

- Alle actieve Heijmans-bouwplaatsen en hun obstructies bijhouden
- Real-time data doorsturen naar externe platforms (Waze, Google Maps, DATEX II)
- Een intern dashboard bieden voor projectmanagers
- Geospatiale data verwerken met routeberekeningen

## De oplossing

Ik stapte in als lead architect en senior developer en ontwierp het systeem van de grond op:

**Architectuur:**

- Clean Architecture / Onion Architecture met strikte laagscheiding
- Domain-Driven Design met duidelijk gedefinieerde bounded contexts
- CQRS-patroon met MediatR voor command/query-scheiding
- Event-driven updates via Azure Service Bus

**Backend (.NET Core):**

- Rijke domeinmodel voor wegobstructies, bouwprojecten en geografische zones
- Azure Functions voor geplande synchronisatietaken en webhookmeldingen
- Azure Table Storage voor grootschalige eventlogging

**Frontend (Angular + TypeScript):**

- Interactief kaartdashboard met Azure Maps
- Real-time updates via SignalR
- Datavisualisatie met ECharts voor projectmanageranalytics
- Statusbeheer met NgRx

**Testen:**

- TDD-methodologie geïntroduceerd bij het team
- Unit tests voor domeinlogica, integratietests voor repositories
- Cypress E2E-tests voor kritieke gebruikersstromen

## Mijn rol

Als oplossingsarchitect en senior developer was ik verantwoordelijk voor:

- Initiële systeemarchitectuur en technologiekeuzes
- Leiding over het ontwikkelteam (4 developers)
- Invoeren en handhaven van TDD-praktijken
- Developer coaching via pair programming en code reviews
- Interne kennisdelingssessies over DDD en clean architecture
