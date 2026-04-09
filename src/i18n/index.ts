export type Lang = 'en' | 'nl';

const ui = {
  en: {
    // ─── Navigation ───────────────────────────────────────────────────────────
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'nav.available': 'Available',
    'nav.availableFull': 'Available for Projects',

    // ─── Hero ─────────────────────────────────────────────────────────────────
    'hero.preheading': '// Senior Software Engineer & AI Integration Specialist',
    'hero.heading': 'I build intelligent software that',
    'hero.headingAccent': 'sparks innovation',
    'hero.subheading': 'Senior .NET & AI Engineer with <strong>10+ years</strong> of experience crafting robust enterprise solutions. Specializing in AI Integration, Cloud Architecture, and Full-Stack Development.',
    'hero.ctaPrimary': "Let's Talk",
    'hero.ctaSecondary': 'View My Work',
    'hero.availability': 'Available for Freelance Projects',

    // ─── Stats ────────────────────────────────────────────────────────────────
    'stats.years': 'Years Experience',
    'stats.projects': 'Enterprise Projects',
    'stats.companies': 'Companies Served',
    'stats.skills': 'Technical Skills',

    // ─── Services ─────────────────────────────────────────────────────────────
    'services.chip': '// What I Do',
    'services.heading': 'My Services',
    'services.subheading': 'From AI integration to cloud architecture — I deliver end-to-end solutions that create real business value.',
    'services.ctaSubtext': 'Have a project in mind? Let\'s discuss how I can help.',
    'services.cta': 'Start a Conversation',

    'service.ai.title': 'AI Integration & LLM Solutions',
    'service.ai.desc': 'Building intelligent applications powered by Azure OpenAI, Amazon Bedrock, and Google Gemini. RAG architectures, AI agents, and MCP implementations for enterprise workflows.',
    'service.backend.title': 'Backend & API Development',
    'service.backend.desc': 'Robust .NET 8 APIs, microservices, and middleware platforms. Domain-Driven Design, CQRS with MediatR, and cloud-native architectures on Azure.',
    'service.fullstack.title': 'Full-Stack Web Applications',
    'service.fullstack.desc': 'End-to-end development with Angular 14+, React 18+, and .NET Core. From responsive frontends to scalable backends with real-time capabilities.',
    'service.cloud.title': 'Cloud Architecture & DevOps',
    'service.cloud.desc': 'Azure Functions, Terraform infrastructure-as-code, Docker/Kubernetes, CI/CD pipelines, and cloud-native solutions designed for scale.',
    'service.testing.title': 'Quality & Testing',
    'service.testing.desc': 'Test-Driven Development advocate. Unit, integration, and E2E testing with comprehensive coverage. Clean code, SOLID principles, and rigorous code reviews.',
    'service.leadership.title': 'Technical Leadership',
    'service.leadership.desc': 'Team coaching, architecture decisions, pair programming, knowledge sharing sessions, and developer training. Certified Scrum Master.',

    // ─── Projects ─────────────────────────────────────────────────────────────
    'projects.chip': '// Featured Work',
    'projects.heading': 'Selected Projects',
    'projects.subheading': 'A selection of my most impactful work — from AI-powered platforms to enterprise infrastructure.',
    'projects.viewAll': 'View All Projects',
    'projects.viewCase': 'View Case Study',
    'projects.portfolio': '// Portfolio',
    'projects.allHeading': 'All Projects',
    'projects.allSubheading': 'projects spanning AI, enterprise backend, full-stack, cloud, blockchain, and healthcare — across 5 major Dutch companies.',
    'projects.back': 'Back to Projects',
    'projects.filter.all': 'All',
    'projects.interested': 'Interested in working together?',

    // ─── Tech Stack ───────────────────────────────────────────────────────────
    'tech.chip': '// Tech Stack',
    'tech.heading': 'Skills & Technologies',
    'tech.subheading': '69 skills across the full software engineering spectrum — from AI to cloud to frontend.',
    'tech.linkedin': 'LinkedIn Skill Assessment Passed',

    // ─── Timeline ─────────────────────────────────────────────────────────────
    'timeline.chip': '// Career Journey',
    'timeline.heading': 'Experience',
    'timeline.subheading': '10+ years building enterprise software across healthcare, energy, construction, finance, and AI sectors.',
    'timeline.current': 'Current Position',

    // ─── About (homepage brief) ───────────────────────────────────────────────
    'about.chip': '// About Me',
    'about.heading': 'About Ahmed',
    'about.p1': "I'm a Senior Software Engineer with over <strong>10 years</strong> of experience building enterprise-grade solutions. Based in <strong>Rotterdam, Netherlands</strong>, I specialize in bridging cutting-edge AI technology with robust software architecture.",
    'about.p2': "Currently at <strong>iO Digital</strong>, I build AI-powered workspaces using Azure OpenAI, Amazon Bedrock, and Google Gemini. My passion lies in making complex technology accessible and delivering solutions that create real business value.",
    'about.p3': "As a full-stack developer, I bring both backend depth (.NET, C#, cloud architecture) and frontend polish (Angular, React) to every project — plus a strong commitment to clean code, TDD, and knowledge sharing.",
    'about.cta': 'Read More About Me',
    'about.attr.ai': 'AI Integration Expert',
    'about.attr.architect': 'Solution Architect',
    'about.attr.scrum': 'Certified Scrum Master',
    'about.attr.nl': 'NL-based, EU Auth.',

    // ─── About (full page) ────────────────────────────────────────────────────
    'about.page.title': 'About Ahmed Ali — Senior .NET & AI Engineer | Vonkify',
    'about.page.desc': 'Learn about Ahmed Ali — a Senior Software Engineer from Rotterdam with 10+ years of enterprise experience in .NET, AI integration, Angular, React, and cloud architecture.',
    'about.journey.heading': 'My Journey',
    'about.journey.p1': 'Born in Egypt, I completed my BSc in Commerce at Mansoura University (2008–2012) before pivoting to follow my true passion: software engineering. I earned a Professional Diploma in Software Engineering from the <strong>Information Technology Institute (ITI)</strong> — accredited by Egypt\'s Ministry of Communications — in 2014-2015.',
    'about.journey.p2': "Since then, I've spent 10+ years building enterprise software across healthcare, energy, construction, finance, and digital sectors. My journey brought me to <strong>the Netherlands</strong>, where I've worked with some of the country's most notable companies.",
    'about.journey.p3': "Today at <strong>iO Digital</strong>, I build AI-powered platforms using Azure OpenAI, Amazon Bedrock, and Google Gemini — including enterprise middleware for <strong>Eneco</strong>, one of the Netherlands' leading energy companies. I'm now transitioning to <strong>full freelance</strong> to bring this expertise directly to clients.",
    'about.philosophy.heading': 'My Philosophy',
    'about.focus.heading': 'Current Focus',
    'about.fun.heading': 'Beyond the Code',
    'about.cta.hire': 'Get In Touch',
    'about.cta.cv': 'View My CV',
    'about.ready': 'Ready to work together?',
    'about.ready.sub': "I'm available for freelance projects. Let's discuss how I can add value to your team.",
    'about.quickfacts': 'Quick Facts',
    'about.download': 'Download CV (PDF)',

    // ─── Testimonials ─────────────────────────────────────────────────────────
    'clients.chip': '// Social Proof',
    'clients.heading': "Companies I've Worked With",
    'clients.subheading': 'Enterprise experience across energy, construction, finance, healthcare, and digital sectors in the Netherlands.',
    'clients.linkedin': 'Recommendations on LinkedIn',
    'clients.linkedin.sub': 'Colleagues and clients have endorsed my work with 7 LinkedIn skill assessments passed and professional recommendations.',
    'clients.linkedin.cta': 'View My LinkedIn Profile',

    // ─── Contact ──────────────────────────────────────────────────────────────
    'contact.chip': '// Get In Touch',
    'contact.heading': "Let's Spark Something",
    'contact.headingAccent': 'Great Together',
    'contact.subheading': "Looking for a senior .NET/AI engineer for your next project? Let's discuss how I can help turn your vision into reality.",
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.location.label': 'Location',
    'contact.location.suffix': '(remote & hybrid)',
    'contact.linkedin.label': 'LinkedIn',
    'contact.response': '💬 I typically respond within 24 hours.',
    'contact.field.name': 'Name',
    'contact.field.email': 'Email',
    'contact.field.company': 'Company',
    'contact.field.projectType': 'Project Type',
    'contact.field.budget': 'Budget Range',
    'contact.field.message': 'Message',
    'contact.ph.name': 'Your full name',
    'contact.ph.email': 'your@email.com',
    'contact.ph.company': 'Your company name',
    'contact.ph.message': "Tell me about your project, timeline, and what you're looking to achieve...",
    'contact.ph.projectType': 'Select type...',
    'contact.ph.budget': 'Select budget...',
    'contact.submit': 'Send Message 🚀',
    'contact.submitting': 'Sending...',
    'contact.success': "✓ Message sent! I'll get back to you within 24 hours.",
    'contact.error': 'Something went wrong. Please try emailing me directly at ahmed@vonkify.nl',
    'contact.page.title': 'Contact — Work with Ahmed Ali | Vonkify',
    'contact.page.desc': 'Get in touch with Ahmed Ali — Senior .NET & AI Engineer available for freelance projects in the Netherlands. Fast response, professional service.',
    'contact.page.heading': 'Get In Touch',
    'contact.page.sub': "Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.",
    'contact.faq.heading': 'Frequently Asked Questions',
    'contact.faq.sub': 'Quick answers to common questions about working together.',

    // ─── Footer ───────────────────────────────────────────────────────────────
    'footer.tagline': 'Senior .NET & AI Engineer based in Rotterdam, Netherlands. Sparking digital innovation through intelligent software.',
    'footer.nav': 'Navigation',
    'footer.contact': 'Get in Touch',
    'footer.available': 'Available for Freelance Projects',
    'footer.copyright': 'KvK registered in the Netherlands',
    'footer.built': 'Built with',

    // ─── 404 ──────────────────────────────────────────────────────────────────
    '404.chip': '// Error 404',
    '404.heading': 'Page Not Found',
    '404.subtext': "Looks like this spark went in the wrong direction. The page you're looking for doesn't exist or has been moved.",
    '404.home': 'Back to Home',
    '404.projects': 'View Projects',

    // ─── CV ───────────────────────────────────────────────────────────────────
    'cv.page.title': 'CV — Ahmed Ali | Senior .NET & AI Engineer',
    'cv.heading': 'Curriculum Vitae',
    'cv.download': 'Download PDF',
    'cv.print': 'Print',
    'cv.available': 'Available for Freelance',
    'cv.summary.heading': 'Professional Summary',
    'cv.summary.text': 'Experienced Software Engineer with over 10 years in programming and technology engineering. Skilled in full-stack development, cloud technologies, and AI integration. Proven track record building robust enterprise applications across healthcare, energy, construction, finance, and digital sectors in the Netherlands. Strong problem-solving abilities and leadership skills with a commitment to clean code, TDD, and knowledge sharing.',
    'cv.experience': 'Work Experience',
    'cv.education': 'Education',
    'cv.skills': 'Technical Skills',
    'cv.languages': 'Languages',
    'cv.certifications': 'Certifications',
  },

  nl: {
    // ─── Navigation ───────────────────────────────────────────────────────────
    'nav.services': 'Diensten',
    'nav.projects': 'Projecten',
    'nav.about': 'Over mij',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'nav.available': 'Beschikbaar',
    'nav.availableFull': 'Beschikbaar voor projecten',

    // ─── Hero ─────────────────────────────────────────────────────────────────
    'hero.preheading': '// Senior Software Engineer & AI Integratiespecialist',
    'hero.heading': 'Ik bouw intelligente software die',
    'hero.headingAccent': 'innovatie aanwakkert',
    'hero.subheading': 'Senior .NET & AI Engineer met <strong>10+ jaar</strong> ervaring in het bouwen van robuuste bedrijfsoplossingen. Gespecialiseerd in AI-integratie, cloudarchitectuur en full-stack ontwikkeling.',
    'hero.ctaPrimary': 'Neem contact op',
    'hero.ctaSecondary': 'Bekijk mijn werk',
    'hero.availability': 'Beschikbaar voor freelanceprojecten',

    // ─── Stats ────────────────────────────────────────────────────────────────
    'stats.years': 'Jaar Ervaring',
    'stats.projects': 'Enterprise Projecten',
    'stats.companies': 'Opdrachtgevers',
    'stats.skills': 'Technische Vaardigheden',

    // ─── Services ─────────────────────────────────────────────────────────────
    'services.chip': '// Wat ik doe',
    'services.heading': 'Mijn diensten',
    'services.subheading': 'Van AI-integratie tot cloudarchitectuur — ik lever end-to-end oplossingen die echte bedrijfswaarde creëren.',
    'services.ctaSubtext': 'Heeft u een project in gedachten? Laten we bespreken hoe ik kan helpen.',
    'services.cta': 'Start een gesprek',

    'service.ai.title': 'AI-integratie & LLM-oplossingen',
    'service.ai.desc': 'Intelligente applicaties bouwen met Azure OpenAI, Amazon Bedrock en Google Gemini. RAG-architecturen, AI-agents en MCP-implementaties voor zakelijke workflows.',
    'service.backend.title': 'Backend & API-ontwikkeling',
    'service.backend.desc': 'Robuuste .NET 8 API\'s, microservices en middlewareplatformen. Domain-Driven Design, CQRS met MediatR en cloud-native architecturen op Azure.',
    'service.fullstack.title': 'Full-Stack Webapplicaties',
    'service.fullstack.desc': 'End-to-end ontwikkeling met Angular 14+, React 18+ en .NET Core. Van responsive frontends tot schaalbare backends met real-time mogelijkheden.',
    'service.cloud.title': 'Cloudarchitectuur & DevOps',
    'service.cloud.desc': 'Azure Functions, Terraform infrastructuur-als-code, Docker/Kubernetes, CI/CD-pipelines en cloud-native oplossingen ontworpen voor schaal.',
    'service.testing.title': 'Kwaliteit & Testen',
    'service.testing.desc': 'Voorvechter van Test-Driven Development. Unit-, integratie- en E2E-testen met uitgebreide dekking. Schone code, SOLID-principes en grondige code reviews.',
    'service.leadership.title': 'Technisch Leiderschap',
    'service.leadership.desc': 'Teamcoaching, architectuurbeslissingen, pair programming, kennisdelingssessies en ontwikkelaarstraining. Gecertificeerd Scrum Master.',

    // ─── Projects ─────────────────────────────────────────────────────────────
    'projects.chip': '// Uitgelicht werk',
    'projects.heading': 'Geselecteerde projecten',
    'projects.subheading': 'Een selectie van mijn meest impactvolle werk — van AI-platformen tot enterprise-infrastructuur.',
    'projects.viewAll': 'Alle projecten bekijken',
    'projects.viewCase': 'Bekijk case study',
    'projects.portfolio': '// Portfolio',
    'projects.allHeading': 'Alle projecten',
    'projects.allSubheading': 'projecten verspreid over AI, enterprise backend, full-stack, cloud, blockchain en gezondheidszorg — bij 5 grote Nederlandse bedrijven.',
    'projects.back': 'Terug naar projecten',
    'projects.filter.all': 'Alles',
    'projects.interested': 'Interesse om samen te werken?',

    // ─── Tech Stack ───────────────────────────────────────────────────────────
    'tech.chip': '// Tech Stack',
    'tech.heading': 'Vaardigheden & Technologieën',
    'tech.subheading': '69 vaardigheden over het volledige software engineering spectrum — van AI tot cloud tot frontend.',
    'tech.linkedin': 'LinkedIn Vaardigheidstoets geslaagd',

    // ─── Timeline ─────────────────────────────────────────────────────────────
    'timeline.chip': '// Loopbaanoverzicht',
    'timeline.heading': 'Werkervaring',
    'timeline.subheading': '10+ jaar enterprise software bouwen in de gezondheidszorg, energie, bouw, financiën en AI-sector.',
    'timeline.current': 'Huidige functie',

    // ─── About (homepage brief) ───────────────────────────────────────────────
    'about.chip': '// Over mij',
    'about.heading': 'Over Ahmed',
    'about.p1': 'Ik ben een Senior Software Engineer met meer dan <strong>10 jaar</strong> ervaring in het bouwen van enterprise-oplossingen. Gevestigd in <strong>Rotterdam, Nederland</strong>, specialiseer ik me in het verbinden van geavanceerde AI-technologie met robuuste softwarearchitectuur.',
    'about.p2': 'Momenteel werk ik bij <strong>iO Digital</strong>, waar ik AI-werkruimten bouw met Azure OpenAI, Amazon Bedrock en Google Gemini. Mijn passie ligt in het toegankelijk maken van complexe technologie en het leveren van oplossingen die echte bedrijfswaarde creëren.',
    'about.p3': 'Als full-stack developer combineer ik backend-diepgang (.NET, C#, cloudarchitectuur) met frontend-finesse (Angular, React) — aangevuld met een sterke toewijding aan schone code, TDD en kennisdeling.',
    'about.cta': 'Lees meer over mij',
    'about.attr.ai': 'AI-integratie Expert',
    'about.attr.architect': 'Oplossingsarchitect',
    'about.attr.scrum': 'Gecertificeerd Scrum Master',
    'about.attr.nl': 'Gevestigd in NL, EU-auth.',

    // ─── About (full page) ────────────────────────────────────────────────────
    'about.page.title': 'Over Ahmed Ali — Senior .NET & AI Engineer | Vonkify',
    'about.page.desc': 'Leer Ahmed Ali kennen — een Senior Software Engineer uit Rotterdam met 10+ jaar enterprise-ervaring in .NET, AI-integratie, Angular, React en cloudarchitectuur.',
    'about.journey.heading': 'Mijn weg',
    'about.journey.p1': 'Geboren in Egypte, rondde ik mijn BSc Handelswetenschappen af aan de Universiteit van Mansoura (2008–2012) voordat ik mijn ware passie volgde: software engineering. In 2014-2015 behaalde ik een Professioneel Diploma Software Engineering aan het <strong>Information Technology Institute (ITI)</strong> — geaccrediteerd door het Egyptische Ministerie van Communicatie.',
    'about.journey.p2': 'Sindsdien heb ik 10+ jaar enterprise software gebouwd in de gezondheidszorg, energie, bouw, financiën en digitale sector. Mijn reis bracht me naar <strong>Nederland</strong>, waar ik werkte voor enkele van de meest prominente bedrijven van het land.',
    'about.journey.p3': 'Momenteel bouw ik bij <strong>iO Digital</strong> AI-platformen met Azure OpenAI, Amazon Bedrock en Google Gemini — inclusief enterprise middleware voor <strong>Eneco</strong>. Ik ga nu over naar <strong>volledig freelance</strong> om deze expertise direct aan klanten aan te bieden.',
    'about.philosophy.heading': 'Mijn filosofie',
    'about.focus.heading': 'Huidige focus',
    'about.fun.heading': 'Buiten de code om',
    'about.cta.hire': 'Neem contact op',
    'about.cta.cv': 'Bekijk mijn CV',
    'about.ready': 'Klaar om samen te werken?',
    'about.ready.sub': 'Ik ben beschikbaar voor freelanceprojecten. Laten we bespreken hoe ik waarde kan toevoegen aan uw team.',
    'about.quickfacts': 'Snelle feiten',
    'about.download': 'CV downloaden (PDF)',

    // ─── Testimonials ─────────────────────────────────────────────────────────
    'clients.chip': '// Referenties',
    'clients.heading': 'Bedrijven waarvoor ik heb gewerkt',
    'clients.subheading': 'Enterprise-ervaring in de energie-, bouw-, financiële, zorg- en digitale sector in Nederland.',
    'clients.linkedin': 'Aanbevelingen op LinkedIn',
    'clients.linkedin.sub': 'Collega\'s en klanten hebben mijn werk bekrachtigd met 7 geslaagde LinkedIn vaardigheidstoetsen en professionele aanbevelingen.',
    'clients.linkedin.cta': 'Bekijk mijn LinkedIn profiel',

    // ─── Contact ──────────────────────────────────────────────────────────────
    'contact.chip': '// Neem contact op',
    'contact.heading': 'Laten we samen iets',
    'contact.headingAccent': 'geweldigs bouwen',
    'contact.subheading': 'Op zoek naar een senior .NET/AI-engineer voor uw volgende project? Laten we bespreken hoe ik uw visie kan realiseren.',
    'contact.email.label': 'E-mail',
    'contact.phone.label': 'Telefoon',
    'contact.location.label': 'Locatie',
    'contact.location.suffix': '(remote & hybride)',
    'contact.linkedin.label': 'LinkedIn',
    'contact.response': '💬 Ik reageer doorgaans binnen 24 uur.',
    'contact.field.name': 'Naam',
    'contact.field.email': 'E-mail',
    'contact.field.company': 'Bedrijf',
    'contact.field.projectType': 'Projecttype',
    'contact.field.budget': 'Budgetrange',
    'contact.field.message': 'Bericht',
    'contact.ph.name': 'Uw volledige naam',
    'contact.ph.email': 'uw@email.nl',
    'contact.ph.company': 'Naam van uw bedrijf',
    'contact.ph.message': 'Vertel me over uw project, tijdlijn en wat u wilt bereiken...',
    'contact.ph.projectType': 'Selecteer type...',
    'contact.ph.budget': 'Selecteer budget...',
    'contact.submit': 'Bericht verzenden 🚀',
    'contact.submitting': 'Verzenden...',
    'contact.success': '✓ Bericht verzonden! Ik reageer binnen 24 uur.',
    'contact.error': 'Er is iets misgegaan. Stuur mij direct een e-mail op ahmed@vonkify.nl',
    'contact.page.title': 'Contact — Werk met Ahmed Ali | Vonkify',
    'contact.page.desc': 'Neem contact op met Ahmed Ali — Senior .NET & AI Engineer beschikbaar voor freelanceprojecten in Nederland. Snelle reactie, professionele service.',
    'contact.page.heading': 'Neem contact op',
    'contact.page.sub': 'Heeft u een project in gedachten? Ik hoor er graag over. Stuur mij een bericht en ik reageer binnen 24 uur.',
    'contact.faq.heading': 'Veelgestelde vragen',
    'contact.faq.sub': 'Snelle antwoorden op veelgestelde vragen over samenwerken.',

    // ─── Footer ───────────────────────────────────────────────────────────────
    'footer.tagline': 'Senior .NET & AI Engineer gevestigd in Rotterdam, Nederland. Digitale innovatie ontketenen met intelligente software.',
    'footer.nav': 'Navigatie',
    'footer.contact': 'Contact opnemen',
    'footer.available': 'Beschikbaar voor freelanceprojecten',
    'footer.copyright': 'KvK geregistreerd in Nederland',
    'footer.built': 'Gebouwd met',

    // ─── 404 ──────────────────────────────────────────────────────────────────
    '404.chip': '// Fout 404',
    '404.heading': 'Pagina niet gevonden',
    '404.subtext': 'Deze vonk is de verkeerde kant opgegaan. De pagina die u zoekt bestaat niet of is verplaatst.',
    '404.home': 'Terug naar home',
    '404.projects': 'Bekijk projecten',

    // ─── CV ───────────────────────────────────────────────────────────────────
    'cv.page.title': 'CV — Ahmed Ali | Senior .NET & AI Engineer',
    'cv.heading': 'Curriculum Vitae',
    'cv.download': 'CV downloaden',
    'cv.print': 'Afdrukken',
    'cv.available': 'Beschikbaar voor freelance',
    'cv.summary.heading': 'Professionele samenvatting',
    'cv.summary.text': 'Ervaren Software Engineer met meer dan 10 jaar ervaring in programmeren en technologie-engineering. Bedreven in full-stack ontwikkeling, cloudtechnologieën en AI-integratie. Bewezen staat van dienst in het bouwen van robuuste enterprise-applicaties in de gezondheidszorg, energie, bouw, financiën en digitale sector in Nederland. Sterke probleemoplossende vaardigheden en leiderschapskwaliteiten met een toewijding aan schone code, TDD en kennisdeling.',
    'cv.experience': 'Werkervaring',
    'cv.education': 'Opleiding',
    'cv.skills': 'Technische vaardigheden',
    'cv.languages': 'Talen',
    'cv.certifications': 'Certificeringen',
  },
} as const;

export type TranslationKey = keyof typeof ui['en'];

export function useTranslations(lang: Lang = 'en') {
  return function t(key: TranslationKey): string {
    const langMap = ui[lang] as Record<string, string>;
    const enMap = ui['en'] as Record<string, string>;
    return langMap[key] ?? enMap[key] ?? key;
  };
}

/** Returns the URL for the alternate language version of the current path */
export function getAlternateLangUrl(lang: Lang, pathname: string): string {
  if (lang === 'nl') {
    const stripped = pathname.replace(/^\/nl/, '') || '/';
    return stripped;
  } else {
    return `/nl${pathname === '/' ? '' : pathname}`;
  }
}
