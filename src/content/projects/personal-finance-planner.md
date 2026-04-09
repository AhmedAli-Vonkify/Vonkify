---
title: "Personal Finance Planner"
company: "Omniplan"
companyUrl: "https://omniplan.nl"
period: "September 2020 – September 2021"
role: "Software Engineer"
roleNl: "Software Engineer"
summary: "Financial planning and calculation tool for businesses in the financial sector. Used by financial advisors to conduct mortgage analyses, retirement planning, and comprehensive financial situation assessments."
summaryNl: "Financiële plannings- en berekeningshulpmiddel voor de financiële sector. Gebruikt door financieel adviseurs voor hypotheekanalyses, pensioenplanning en uitgebreide beoordelingen van financiële situaties."
tech: ["C#", "ASP.NET Core", "Angular", "TypeScript", "DDD", "Onion Architecture", "TDD", "MediatR", "Azure Table Storage", "NgRx", "RxJS", "Nrwl/Nx", "D3.js", "Cypress", "SOLID"]
featured: false
category: "Full-Stack"
order: 6
achievements:
  - "Built complex financial calculation engine handling mortgage, tax, and retirement scenarios"
  - "Implemented D3.js interactive visualizations for financial projection charts"
  - "Achieved 80%+ test coverage with Cypress E2E and unit tests"
  - "Monorepo architecture with Nrwl/Nx for shared business logic"
achievementsNl:
  - "Complexe financiële berekeningsmotor gebouwd voor hypotheek-, belasting- en pensioenscenario's"
  - "D3.js interactieve visualisaties geïmplementeerd voor financiële projectiegrafieken"
  - "80%+ testdekking bereikt met Cypress E2E en unit tests"
  - "Monorepo-architectuur met Nrwl/Nx voor gedeelde bedrijfslogica"
---

## Overview

A sophisticated financial planning application for Dutch financial advisors. The tool allows advisors to model complex financial scenarios including mortgage calculations, retirement projections, and investment planning — with interactive visualizations and PDF report generation.

**Key Features:**
- Complex financial calculation engine with configurable rule sets
- Interactive D3.js charts for income, expenses, and projections
- Scenario comparison (best/expected/worst case)
- PDF report generation for client presentations
- Azure Table Storage for scalable data persistence

## Technical Approach

Implemented using Domain-Driven Design with a rich domain model for financial entities (mortgages, pensions, assets). The calculation engine uses the Chain of Responsibility pattern for composable financial rules. Frontend built with Angular + NgRx for complex state management, D3.js for custom visualizations, and Cypress for E2E testing.
