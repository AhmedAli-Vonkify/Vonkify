---
title: "MediTop IVM — Electronic Patient Dossier"
company: "ICT Group / MediTop"
companyUrl: "https://www.ictgroup.eu"
period: "September 2019 – September 2020"
role: "C# Developer"
roleNl: "C# Developer"
summary: "Electronic Patient Dossier (EPD) desktop application for safely storing and viewing digital medical documents including X-ray images, scans, MRI, and video captures for medical professionals in Dutch healthcare."
summaryNl: "Elektronisch Patiëntendossier (EPD) desktopapplicatie voor het veilig opslaan en bekijken van digitale medische documenten, waaronder röntgenfoto's, scans, MRI en video-opnames voor medische professionals in de Nederlandse gezondheidszorg."
tech: ["C#", "WPF", "MVVM", "SQL Server", "Entity Framework", "LeadTools", "HL7", "DICOM"]
featured: false
category: "Healthcare"
order: 8
achievements:
  - "Implemented DICOM image viewer for X-ray and scan display using LeadTools"
  - "HL7 integration for patient data exchange with hospital information systems"
  - "Built secure document management with audit logging for compliance"
  - "Improved image loading performance by 40% through progressive rendering"
achievementsNl:
  - "DICOM-beeldviewer geïmplementeerd voor röntgenfoto's en scans via LeadTools"
  - "HL7-integratie voor patiëntgegevensuitwisseling met ziekenhuisinformatiesystemen"
  - "Veilig documentbeheer gebouwd met auditlogboek voor compliance"
  - "Beeldlaadprestaties met 40% verbeterd via progressieve rendering"
---

## Overview

MediTop IVM is a clinical document management system used by Dutch healthcare providers. The application enables medical professionals to securely access, annotate, and manage patient dossiers including radiology images, lab results, and clinical notes.

**Key Features:**
- DICOM medical image viewer (X-ray, CT, MRI, ultrasound)
- HL7 v2 messaging for EHR integration
- Role-based access control for sensitive patient data
- Audit trail for all document access (GDPR compliance)
- Image annotation and measurement tools

## Technical Implementation

Built as a WPF desktop application following the MVVM pattern. Medical imaging was implemented using the LeadTools imaging SDK for DICOM support. The application integrates with hospital information systems via HL7 v2 messaging protocols.

My role involved implementing new viewing features, improving image rendering performance, fixing bugs in the HL7 integration, and writing unit tests for the domain layer.
