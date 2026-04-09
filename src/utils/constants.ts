export const SITE = {
  title: 'Vonkify — Senior .NET & AI Engineer | Freelance Developer Netherlands',
  description:
    'Ahmed Ali — Senior Software Engineer with 10+ years experience. Specializing in .NET, AI Integration (Azure OpenAI, RAG), Angular, React & Cloud Architecture. Available for freelance projects in the Netherlands.',
  url: 'https://vonkify.nl',
  name: 'Vonkify',
  tagline: 'Sparking Digital Innovation',
  author: 'Ahmed Ali',
  email: 'ahmed@vonkify.nl',
  phone: '+31 6 33 252 892',
  location: 'Rotterdam, Netherlands',
  linkedin: 'https://www.linkedin.com/in/ahmed-ali-vonkify',
  github: 'https://github.com/AhmedSameh2020',
  defaultOgImage: '/og-image.png',
};

export const AVAILABILITY = {
  isAvailable: true,
  label: 'Available for Freelance Projects',
  period: 'Q2 2026',
};

export const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '7+', label: 'Enterprise Projects' },
  { value: '5', label: 'Companies Served' },
  { value: '69', label: 'Technical Skills' },
];

export const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES = [
  {
    icon: '🤖',
    title: 'AI Integration & LLM Solutions',
    description:
      'Building intelligent applications powered by Azure OpenAI, Amazon Bedrock, and Google Gemini. RAG architectures, AI agents, and MCP implementations for enterprise workflows.',
    tags: ['Azure OpenAI', 'RAG', 'LLMs', 'AI Agents'],
  },
  {
    icon: '⚙️',
    title: 'Backend & API Development',
    description:
      'Robust .NET 8 APIs, microservices, and middleware platforms. Domain-Driven Design, CQRS with MediatR, and cloud-native architectures on Azure.',
    tags: ['.NET 8', 'CQRS', 'Microservices', 'DDD'],
  },
  {
    icon: '🖥️',
    title: 'Full-Stack Web Applications',
    description:
      'End-to-end development with Angular 14+, React 18+, and .NET Core. From responsive frontends to scalable backends with real-time capabilities.',
    tags: ['Angular', 'React', '.NET Core', 'SignalR'],
  },
  {
    icon: '☁️',
    title: 'Cloud Architecture & DevOps',
    description:
      'Azure Functions, Terraform infrastructure-as-code, Docker/Kubernetes, CI/CD pipelines, and cloud-native solutions designed for scale.',
    tags: ['Azure', 'Terraform', 'Docker', 'Kubernetes'],
  },
  {
    icon: '🧪',
    title: 'Quality & Testing',
    description:
      'Test-Driven Development advocate. Unit, integration, and E2E testing with comprehensive coverage. Clean code, SOLID principles, and rigorous code reviews.',
    tags: ['TDD', 'Jest', 'Cypress', 'SOLID'],
  },
  {
    icon: '👥',
    title: 'Technical Leadership',
    description:
      'Team coaching, architecture decisions, pair programming, knowledge sharing sessions, and developer training. Certified Scrum Master.',
    tags: ['Scrum', 'Architecture', 'Mentoring', 'Agile'],
  },
];

export const TECH_CATEGORIES = [
  {
    name: 'Languages',
    items: ['C#', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'C++', 'XML', 'SASS'],
    assessments: ['C#', 'JavaScript'],
  },
  {
    name: 'Backend',
    items: ['.NET 8', 'ASP.NET Core', 'Node.js', 'Entity Framework', 'MediatR', 'SignalR', 'WCF', 'Swagger'],
    assessments: ['.NET 8', 'Node.js'],
  },
  {
    name: 'Frontend',
    items: ['Angular 14+', 'React 18+', 'Redux', 'NgRx', 'RxJS', 'Bootstrap', 'Kendo UI', 'D3.js'],
    assessments: ['jQuery'],
  },
  {
    name: 'AI & ML',
    items: ['Azure OpenAI', 'Amazon Bedrock', 'Google Gemini', 'RAG', 'LLMs', 'AI Agents', 'MCP', 'Vector DBs'],
    assessments: [],
  },
  {
    name: 'Cloud & DevOps',
    items: ['Azure Functions', 'Azure Logic Apps', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD'],
    assessments: ['Git'],
  },
  {
    name: 'Databases',
    items: ['SQL Server', 'MongoDB', 'Redis', 'Azure Table Storage', 'Vector Databases', 'Fusion Cache'],
    assessments: [],
  },
  {
    name: 'Architecture',
    items: ['Microservices', 'DDD', 'Onion Architecture', 'SOLID', 'REST', 'CQRS', 'OAuth 2.0', 'WebSockets'],
    assessments: ['OOP'],
  },
  {
    name: 'Testing',
    items: ['TDD', 'Unit Testing', 'Integration Testing', 'Cypress', 'Jest', 'E2E Testing'],
    assessments: [],
  },
];

export const EXPERIENCE = [
  {
    company: 'iO Digital',
    url: 'https://www.iodigital.com',
    location: 'Utrecht, Netherlands',
    period: 'Sep 2022 – Present',
    title: 'Software Engineer',
    description: 'Building AI-powered solutions and enterprise middleware platforms for major Dutch companies including Eneco.',
    highlight: 'Azure OpenAI · Amazon Bedrock · Google Gemini · .NET 8 · React',
    current: true,
  },
  {
    company: 'Heijmans',
    url: 'https://www.heijmans.nl',
    location: 'Netherlands',
    period: 'Sep 2021 – Sep 2022',
    title: 'Senior Developer / Solution Architect',
    description: 'Led 3 enterprise applications (Tapeline, Hammer, User Management). Introduced TDD and coached team members.',
    highlight: 'Angular · .NET Core · DDD · Terraform · Azure Maps',
  },
  {
    company: 'Omniplan',
    url: 'https://omniplan.nl',
    location: 'Netherlands',
    period: 'Sep 2020 – Sep 2021',
    title: 'Software Engineer',
    description: 'Built Personal Finance Planner — a calculation tool for financial advisors. Implemented DDD, TDD, and D3.js visualizations.',
    highlight: 'Angular · .NET Core · D3.js · DDD · Cypress',
  },
  {
    company: 'ICT Group Netherlands',
    url: 'https://www.ictgroup.eu',
    location: 'Netherlands',
    period: 'Sep 2018 – Sep 2020',
    title: 'Software Engineer',
    description: 'Medical EPD system (MediTop), Blockchain energy system (Stedin), and AR/VR harbor management application.',
    highlight: 'C# · Blockchain · Nethereum · Unity 3D · Azure',
  },
  {
    company: 'Razy Technology',
    url: '#',
    location: 'Egypt / Netherlands',
    period: 'Jun 2015 – Sep 2018',
    title: 'Software Engineer',
    description: 'Built 7+ client applications including customer loyalty platforms, medical systems, and archiving solutions.',
    highlight: 'ASP.NET MVC · SQL Server · Kendo UI · SignalR',
  },
  {
    company: 'ITI — Information Technology Institute',
    url: '#',
    location: 'Egypt',
    period: 'Oct 2014 – Jun 2015',
    title: 'Software Engineer Trainee',
    description: 'Professional diploma in Software Engineering. Built foundational enterprise projects during intensive program.',
    highlight: 'ASP.NET · SQL Server · Entity Framework · jQuery',
  },
];

export const PROJECT_CATEGORIES = ['All', 'AI & ML', 'Backend', 'Full-Stack', 'Cloud', 'Blockchain', 'Healthcare'];
