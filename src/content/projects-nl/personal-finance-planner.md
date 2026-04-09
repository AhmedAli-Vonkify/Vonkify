---
---

## Overzicht

Een geavanceerde financiële planningsapplicatie voor Nederlandse financieel adviseurs. Het hulpmiddel stelt adviseurs in staat complexe financiële scenario's te modelleren, waaronder hypotheekberekeningen, pensioenprojecties en beleggingsplanning — met interactieve visualisaties en PDF-rapportgeneratie.

**Belangrijkste functies:**

- Complexe financiële berekeningsmotor met configureerbare regelsets
- Interactieve D3.js-grafieken voor inkomsten, uitgaven en projecties
- Scenariovergelijking (beste/verwachte/slechtste geval)
- PDF-rapportgeneratie voor klantpresentaties
- Azure Table Storage voor schaalbare dataopslag

## Technische aanpak

Geïmplementeerd met Domain-Driven Design en een rijk domeinmodel voor financiële entiteiten (hypotheken, pensioenen, vermogen). De berekeningsmotor gebruikt het Chain of Responsibility-patroon voor samengestelde financiële regels. Frontend gebouwd met Angular + NgRx voor complex statusbeheer, D3.js voor aangepaste visualisaties en Cypress voor E2E-testen.
