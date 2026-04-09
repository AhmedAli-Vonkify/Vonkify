---
---

## Overzicht

Een gecentraliseerd identity- en toegangsbeheersplatform voor de interne applicaties van Heijmans. Het systeem integreert met Azure Active Directory via Microsoft Graph voor gebruikerssynchronisatie en biedt gedetailleerde, applicatiespecifieke rollenassignaties.

**Belangrijkste functies:**

- Azure AD / Microsoft Graph-integratie voor automatische gebruikersprovisioning
- Applicatiespecifiek rollenbeheer (per-app-rechten)
- Beheerdashboard voor IT-teams voor toegangsbeheer
- OAuth 2.0-conforme API voor applicatie-integratie
- Auditlogging voor alle rechtenmutaties

## Technische implementatie

- **Backend**: ASP.NET Core met CQRS (MediatR), Entity Framework Core
- **Auth**: OAuth 2.0 met Azure AD B2C
- **Directory**: Microsoft Graph API voor gebruikers- en groepssynchronisatie
- **Frontend**: Angular met NgRx voor beheerdashboard
