---
---

## De uitdaging

Heijmans moest grote hoeveelheden asfaltqualiteitssensordata begrijpen om proactief weggedeelten te identificeren die onderhoud nodig hebben. Zonder een unified dashboard werkten projectmanagers met losse spreadsheets en konden ze het volledige beeld niet zien totdat problemen kritiek en kostbaar werden.

## De oplossing

Een data-gedreven webapplicatie die asfaltqualiteitsmetingen aggregeert, trends over tijd visualiseert en anomalieën signaleert:

**Backend:**

- ASP.NET Core API met DDD-domeinmodel voor weggedeelten en kwaliteitsmetingen
- WCF-client voor integratie met legacy meetsystemen
- MediatR voor CQRS command/query-afhandeling
- Entity Framework Core met SQL Server

**Frontend (Angular):**

- Interactieve geospatiale kaart (Azure Maps) met heatmap van wegconditie
- ECharts-trendvisualisaties voor kwaliteitsmetrieken over tijd
- Waarschuwingsdashboard voor anomaliedrempelwaarden
- NgRx-statusbeheer voor complexe filter- en weergavestatus

## Mijn rol

Senior developer en teamcoach — backend-features implementeren, frontend-code reviewen, unit testing invoeren en teamleden coachen over best practices.
