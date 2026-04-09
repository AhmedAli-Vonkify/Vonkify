---
title: "User Management System"
company: "Heijmans"
companyUrl: "https://www.heijmans.nl"
period: "September 2021 – September 2022"
role: "Senior Developer / Full-Stack"
roleNl: "Senior Developer / Full-Stack"
summary: "Fine-grained authorization and user management system for Heijmans employees, providing single sign-on and role-based access control across multiple internal applications."
summaryNl: "Gedetailleerd autorisatie- en gebruikersbeheersysteem voor Heijmans-medewerkers, met single sign-on en rolgebaseerde toegangscontrole voor meerdere interne applicaties."
tech: ["C#", "ASP.NET Core", "Angular", "TypeScript", "MediatR", "Entity Framework Core", "SQL Server", "Microsoft Graph", "NgRx", "RxJS", "OAuth 2.0", "Swagger"]
featured: false
category: "Backend"
order: 5
achievements:
  - "Built centralized authorization system serving 3+ internal applications"
  - "Microsoft Graph integration for Azure AD user and group synchronization"
  - "Fine-grained role-based access control preventing unauthorized data access"
  - "Clean API design with full Swagger documentation"
achievementsNl:
  - "Gecentraliseerd autorisatiesysteem gebouwd voor 3+ interne applicaties"
  - "Microsoft Graph-integratie voor Azure AD gebruikers- en groepssynchronisatie"
  - "Gedetailleerde rolgebaseerde toegangscontrole ter voorkoming van ongeautoriseerde datatoegang"
  - "Clean API-ontwerp met volledige Swagger-documentatie"
---

## Overview

A centralized identity and access management platform for Heijmans' internal applications. The system integrates with Azure Active Directory via Microsoft Graph for user synchronization and provides fine-grained, application-specific role assignments.

**Key Features:**
- Azure AD / Microsoft Graph integration for automatic user provisioning
- Application-specific role management (per-app permissions)
- Admin dashboard for IT teams to manage access
- OAuth 2.0 compliant API for application integration
- Audit logging for all permission changes

## Technical Implementation

- **Backend**: ASP.NET Core with CQRS (MediatR), Entity Framework Core
- **Auth**: OAuth 2.0 with Azure AD B2C
- **Directory**: Microsoft Graph API for user/group sync
- **Frontend**: Angular with NgRx for admin dashboard
