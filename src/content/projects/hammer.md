---
title: "Hammer — Asphalt Quality Dashboard"
company: "Heijmans"
companyUrl: "https://www.heijmans.nl"
period: "September 2021 – September 2022"
role: "Senior Developer / Team Coach"
roleNl: "Senior Developer / Teamcoach"
summary: "Web application for presenting quality data regarding asphalt condition. Used by Heijmans to optimize asphalt maintenance schedules and detect anomalies early, preventing costly road deterioration."
summaryNl: "Webapplicatie voor het presenteren van kwaliteitsdata over asfaltconditie. Gebruikt door Heijmans om onderhoudsschema's te optimaliseren en anomalieën vroegtijdig te detecteren, waardoor kostbare wegverslechtering wordt voorkomen."
tech: ["C#", "ASP.NET Core", "Angular", "TypeScript", "DDD", "Onion Architecture", "TDD", "MediatR", "WCF", "Entity Framework Core", "SQL Server", "Terraform", "NgRx", "RxJS", "ECharts", "Azure Maps"]
featured: false
category: "Full-Stack"
order: 4
achievements:
  - "Enabled early anomaly detection reducing emergency maintenance costs significantly"
  - "Introduced ESLint and frontend code standards across the Angular codebase"
  - "Implemented interactive ECharts visualizations for asphalt condition trend analysis"
  - "Integrated with WCF services from legacy data collection systems"
achievementsNl:
  - "Vroegtijdige anomaliedetectie mogelijk gemaakt, waarmee noodreparatiekosten aanzienlijk daalden"
  - "ESLint en frontend codestandaarden geïntroduceerd in de Angular codebase"
  - "Interactieve ECharts-visualisaties geïmplementeerd voor trendanalyse van asfaltconditie"
  - "Geïntegreerd met WCF-services van legacy dataverzamelingssystemen"
---

## The Challenge

Heijmans needed to make sense of large volumes of asphalt quality sensor data to proactively identify road sections requiring maintenance. Without a unified dashboard, project managers were working with disconnected spreadsheets and couldn't see the full picture until problems became critical and expensive.

## The Solution

A data-driven web application that aggregates asphalt quality measurements, visualizes trends over time, and alerts on anomalies:

**Backend:**
- ASP.NET Core API with DDD domain model for road sections and quality measurements
- WCF client for legacy measurement system integration
- MediatR for CQRS command/query handling
- Entity Framework Core with SQL Server

**Frontend (Angular):**
- Interactive geospatial map (Azure Maps) showing road condition heatmap
- ECharts trend visualizations for quality metrics over time
- Alerting dashboard for anomaly thresholds
- NgRx state management for complex filter/view state

## My Role

Senior developer and team coach — implementing backend features, reviewing frontend code, introducing unit testing, and coaching team members on best practices.
