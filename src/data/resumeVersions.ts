export interface ExperienceRole {
  title: string
  description: string
}

export interface ExperienceEntry {
  jobTitle: string
  company: string
  period: string
  isCurrent: boolean
  bullets: string[]
  subRoles?: ExperienceRole[]
}

export interface SkillCategory {
  title: string
  icon: string
  tags: string[]
}

export interface ProjectEntry {
  title: string
  description: string
  tags: string[]
}

export interface ResumeVersion {
  id: string
  route: string
  label: string
  shortLabel: string
  positioningStatement: string
  title: string
  targetRoles: string[]
  summary: string
  experience: ExperienceEntry[]
  skills: SkillCategory[]
  competencies: string[]
  projects: ProjectEntry[]
  certifications: string[]
  migrationReadiness: string[]
  bestFor: string[]
}

const sharedEducation = {
  degree: 'B.Sc. in Computer Science & Engineering',
  institution: 'Rajshahi University of Engineering & Technology',
  period: 'Apr 2014 – Oct 2018',
  location: 'Rajshahi, Bangladesh',
}

export { sharedEducation }

// ─────────────────────────────────────────────
// Version 1 — Senior Full-stack / Tech Lead
// ─────────────────────────────────────────────
const v1: ResumeVersion = {
  id: 'v1-fullstack',
  route: '/',
  label: 'Version 1 — Senior Full-Stack / Tech Lead',
  shortLabel: 'Full-Stack / Tech Lead',
  title: 'Senior Full-Stack Software Engineer',
  positioningStatement:
    'Senior Full-stack Engineer with experience delivering scalable enterprise systems, leading technical decisions, and improving delivery reliability and release velocity.',
  targetRoles: [
    'Senior Software Engineer',
    'Senior Full-stack Engineer',
    'Tech Lead',
    'Technical Lead',
    'Engineering Lead',
    'Lead Developer',
  ],
  summary:
    'Senior Full-Stack Engineer with {years}+ years delivering scalable enterprise systems across banking, streaming, and Web3 domains. Proven ownership of production systems, architectural decisions, and CI/CD pipelines. Experienced in leading engineering teams, mentoring developers, and driving measurable improvements in release velocity and deployment reliability.',
  experience: [
    {
      jobTitle: 'Full-Stack Developer',
      company: 'Inscale Asia Sdn Bhd (Assigned to SEB)',
      period: 'Sep 2024 – Present',
      isCurrent: true,
      bullets: [
        'Owned CI/CD pipeline architecture using GitHub Actions, TFS, Kubernetes, and Red Hat OpenShift, enabling consistent deployments across a multi-service banking platform.',
        'Led production migration from Kubernetes to OpenShift with zero downtime, improving platform governance and operational resilience for a regulated financial environment.',
        'Reduced release cycle time by improving build automation and deployment workflows, enabling safer and more frequent production releases.',
        'Coordinated cross-team technical decisions on deployment strategy, environment stability, and release governance.',
      ],
    },
    {
      jobTitle: 'Front-End Developer',
      company: 'Eagle 3D Streaming, Texas (Remote)',
      period: 'Aug 2023 – Sep 2024',
      isCurrent: false,
      bullets: [
        'Architected the integration of Epic Games Pixel Streaming into React applications, enabling real-time Unreal Engine streaming at scale.',
        'Designed and delivered scalable backend APIs using NestJS and ExpressJS, supporting high-throughput data delivery for streaming clients.',
        'Collaborated directly with Unreal Engine developers to define custom streaming protocols and implement real-time communication features.',
      ],
    },
    {
      jobTitle: 'Software Engineer (Full-Stack)',
      company: 'LiquidX Studio, Singapore (Remote)',
      period: 'Nov 2022 – Aug 2023',
      isCurrent: false,
      bullets: [
        'Designed and built production APIs using NestJS, achieving 95% test coverage through comprehensive unit testing with Jest.',
        'Integrated Web3 functionality using Alchemy APIs and smart contracts, delivering decentralised applications on NextJS.',
        'Made architectural decisions on API design, data modelling, and third-party integration strategy.',
      ],
    },
    {
      jobTitle: 'Software Engineer → Team Lead',
      company: 'SELISE Digital Platforms, Dhaka',
      period: 'Jan 2019 – Nov 2022',
      isCurrent: false,
      bullets: [],
      subRoles: [
        {
          title: 'Team Lead (Nov 2021 – Nov 2022)',
          description:
            'Led a team of 5 engineers across frontend and backend. Owned sprint planning, technical architecture decisions, and delivery responsibility. Enforced development standards and mentored junior developers.',
        },
        {
          title: 'Full-Stack Developer (Jun 2020 – Nov 2021)',
          description:
            'Developed enterprise auditing applications using Angular and .NET Core. Optimised report generation workflows and server-side validation, improving system performance. Mentored junior developers and acted as sub-team lead.',
        },
        {
          title: 'Front-End Developer (Jan 2019 – May 2020)',
          description:
            'Built enterprise web applications using Angular 7+, Material, and RxJS. Designed reusable modular components and dynamic form systems.',
        },
      ],
    },
  ],
  skills: [
    {
      title: 'Frontend',
      icon: 'Monitor',
      tags: ['Angular 2+', 'React / NextJS', 'TypeScript', 'SCSS / CSS3'],
    },
    {
      title: 'Backend',
      icon: 'Server',
      tags: [
        'NodeJS / NestJS',
        'C# / .NET Core',
        'REST / GraphQL',
        'Microservices',
      ],
    },
    {
      title: 'DB & Messaging',
      icon: 'Database',
      tags: ['PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
    },
    {
      title: 'DevOps & Tools',
      icon: 'Terminal',
      tags: ['Docker / Kubernetes', 'OpenShift', 'GitHub Actions', 'Git / TFS'],
    },
    {
      title: 'Leadership',
      icon: 'Users',
      tags: [
        'Team Leadership',
        'Mentoring',
        'Sprint Planning',
        'Architecture Ownership',
      ],
    },
  ],
  competencies: [
    'Production Ownership',
    'Architectural Decision-Making',
    'Cross-Team Coordination',
    'Delivery Responsibility',
    'Mentoring Engineers',
    'Agile Development',
    'Code Reviews',
  ],
  projects: [
    {
      title: 'Enterprise Auditing System',
      description:
        'Led the development of a comprehensive auditing platform with dynamic forms and complex report generation, serving enterprise clients in regulated environments.',
      tags: ['Angular', '.NET Core', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Pixel Streaming Integration',
      description:
        'Architected real-time Unreal Engine streaming in React apps, delivering low-latency interactive 3D experiences at scale.',
      tags: ['React', 'Unreal Engine', 'WebRTC', 'Node.js'],
    },
    {
      title: 'Web3 NFT Marketplace',
      description:
        'Designed and built a decentralised application for minting and trading NFTs with smart contract integration and scalable API layer.',
      tags: ['Next.js', 'Solidity', 'Web3.js', 'Tailwind CSS'],
    },
  ],
  certifications: [
    'AWS Solutions Architect Associate (Planned)',
    'Azure Developer Associate (Planned)',
  ],
  migrationReadiness: [
    'Open to relocation to Melbourne / Brisbane / Sydney',
    'Open to employer sponsorship',
    'Available for virtual interview process',
    'Preparing AWS and Azure cloud certifications',
  ],
  bestFor: [
    'ANZ',
    'REA Group',
    'Seek',
    'Coles',
    'WiseTech',
    'Consulting firms',
  ],
}

// ─────────────────────────────────────────────
// Version 2 — Platform / DevOps / Cloud Engineer
// ─────────────────────────────────────────────
const v2: ResumeVersion = {
  id: 'v2-platform',
  route: '/v2-platform',
  label: 'Version 2 — Platform / DevOps / Cloud Engineer',
  shortLabel: 'Platform / DevOps / Cloud',
  title: 'Platform Engineer',
  positioningStatement:
    'Platform Engineer specialising in Kubernetes, OpenShift migration, CI/CD automation, and cloud-ready platform engineering.',
  targetRoles: [
    'Platform Engineer',
    'DevOps Engineer',
    'Senior DevOps Engineer',
    'Cloud Engineer',
    'Cloud Platform Engineer',
    'Senior Infrastructure / Platform Engineer',
  ],
  summary:
    'Platform Engineer with {years}+ years specialising in container orchestration, CI/CD automation, and cloud-ready infrastructure. Proven track record migrating production workloads to OpenShift, improving deployment governance, and building reliable platform foundations. Focused on developer productivity, system stability, and operational resilience across enterprise environments.',
  experience: [
    {
      jobTitle: 'Platform / DevOps Engineer',
      company: 'Inscale Asia Sdn Bhd (Assigned to SEB)',
      period: 'Sep 2024 – Present',
      isCurrent: true,
      bullets: [
        'Migrated production workloads from Kubernetes to Red Hat OpenShift, improving deployment governance and platform consistency across a multi-service banking environment.',
        'Designed and maintained CI/CD pipelines using GitHub Actions, TFS, and Kubernetes, reducing release cycle time and increasing deployment confidence.',
        'Improved environment reliability by standardising build automation, container orchestration, and release workflows across services.',
        'Established observability and deployment monitoring practices, increasing operational resilience and reducing incident response time.',
      ],
    },
    {
      jobTitle: 'Full-Stack Developer (Infrastructure Focus)',
      company: 'Eagle 3D Streaming, Texas (Remote)',
      period: 'Aug 2023 – Sep 2024',
      isCurrent: false,
      bullets: [
        'Developed scalable backend APIs using NestJS and ExpressJS, supporting high-throughput streaming infrastructure.',
        'Integrated real-time Pixel Streaming library into React applications, requiring infrastructure considerations for WebRTC and low-latency data delivery.',
        'Optimised data pipelines and third-party integrations for reliable content delivery at scale.',
      ],
    },
    {
      jobTitle: 'Software Engineer (Full-Stack)',
      company: 'LiquidX Studio, Singapore (Remote)',
      period: 'Nov 2022 – Aug 2023',
      isCurrent: false,
      bullets: [
        'Built production APIs using NestJS with 95% test coverage, ensuring release confidence and system stability.',
        'Integrated Web3 infrastructure using Alchemy APIs and smart contracts, requiring reliable deployment and monitoring of decentralised services.',
      ],
    },
    {
      jobTitle: 'Software Engineer → Team Lead',
      company: 'SELISE Digital Platforms, Dhaka',
      period: 'Jan 2019 – Nov 2022',
      isCurrent: false,
      bullets: [],
      subRoles: [
        {
          title: 'Team Lead (Nov 2021 – Nov 2022)',
          description:
            'Led a team of 5 developers. Owned sprint planning, delivery pipelines, and environment stability. Drove improvements in CI/CD practices and release workflows.',
        },
        {
          title: 'Full-Stack Developer (Jun 2020 – Nov 2021)',
          description:
            'Developed enterprise auditing applications using Angular and .NET Core. Optimised worker service performance and report generation workflows for production stability.',
        },
        {
          title: 'Front-End Developer (Jan 2019 – May 2020)',
          description:
            'Built enterprise web applications using Angular 7+, supporting deployment into containerised environments.',
        },
      ],
    },
  ],
  skills: [
    {
      title: 'Container Orchestration',
      icon: 'Container',
      tags: ['Kubernetes', 'Red Hat OpenShift', 'Docker', 'Helm'],
    },
    {
      title: 'CI/CD & Automation',
      icon: 'Workflow',
      tags: ['GitHub Actions', 'TFS', 'CI/CD Pipelines', 'Build Automation'],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: 'Cloud',
      tags: ['AWS (Preparing)', 'Azure', 'Linux', 'Networking Basics'],
    },
    {
      title: 'Observability & Reliability',
      icon: 'Activity',
      tags: [
        'Monitoring',
        'Logging',
        'Incident Response',
        'Platform Stability',
      ],
    },
    {
      title: 'Backend & APIs',
      icon: 'Server',
      tags: ['NodeJS / NestJS', 'C# / .NET Core', 'REST APIs', 'Microservices'],
    },
  ],
  competencies: [
    'Container Orchestration',
    'Environment Reliability',
    'Infrastructure Automation',
    'Observability',
    'Developer Productivity',
    'Migration Execution',
    'CI/CD Ownership',
  ],
  projects: [
    {
      title: 'Kubernetes to OpenShift Migration',
      description:
        'Led the migration of production workloads from Kubernetes to Red Hat OpenShift in a banking environment, improving platform consistency and operational resilience.',
      tags: ['Kubernetes', 'OpenShift', 'CI/CD', 'Docker'],
    },
    {
      title: 'Multi-Service CI/CD Platform',
      description:
        'Designed CI/CD pipelines for a multi-service platform using GitHub Actions and Kubernetes, reducing release time and enabling safer daily deployments.',
      tags: ['GitHub Actions', 'Kubernetes', 'TFS', 'Automation'],
    },
    {
      title: 'Streaming Infrastructure',
      description:
        'Built scalable backend infrastructure supporting real-time Pixel Streaming with low-latency data delivery and high availability.',
      tags: ['NestJS', 'WebRTC', 'Node.js', 'Infrastructure'],
    },
  ],
  certifications: [
    'CKA — Certified Kubernetes Administrator (Planned)',
    'AWS Solutions Architect Associate (Planned)',
    'Terraform Associate (Planned)',
  ],
  migrationReadiness: [
    'Open to relocation to Melbourne / Brisbane / Sydney',
    'Open to employer sponsorship',
    'Available for virtual interview process',
    'Preparing CKA and AWS cloud certifications',
  ],
  bestFor: [
    'Rio Tinto',
    'Consultancies',
    'Banks',
    'Enterprise SaaS teams',
    'Internal platform teams',
  ],
}

// ─────────────────────────────────────────────
// Version 3 — .NET / Azure / Enterprise Engineer
// ─────────────────────────────────────────────
const v3: ResumeVersion = {
  id: 'v3-enterprise',
  route: '/v3-enterprise',
  label: 'Version 3 — .NET / Azure / Enterprise Engineer',
  shortLabel: '.NET / Azure / Enterprise',
  title: 'Senior .NET / Enterprise Engineer',
  positioningStatement:
    'Senior Engineer experienced in financial systems modernisation, enterprise integration, and cloud-enabled .NET platform development.',
  targetRoles: [
    'Senior .NET Engineer',
    'Full-Stack .NET Engineer',
    'Banking Platform Engineer',
    'Integration Engineer',
    'Enterprise Software Engineer',
    'Backend Engineer (Financial / Regulated)',
  ],
  summary:
    'Senior Engineer with {years}+ years delivering production-grade .NET and enterprise systems across banking and regulated environments. Experienced in financial systems modernisation, enterprise integration, and building high-availability APIs. Focused on regulatory-grade stability, testing maturity, and reliability under production constraints.',
  experience: [
    {
      jobTitle: 'Full-Stack Developer (Enterprise / Banking)',
      company: 'Inscale Asia Sdn Bhd (Assigned to SEB)',
      period: 'Sep 2024 – Present',
      isCurrent: true,
      bullets: [
        'Delivered high-availability APIs and services supporting financial transaction workflows in a regulated banking environment.',
        'Maintained CI/CD pipelines using GitHub Actions, TFS, and Kubernetes, ensuring deployment reliability and governance for enterprise services.',
        'Migrated production applications from Kubernetes to OpenShift, improving operational resilience and platform consistency in a financial context.',
        'Collaborated with cross-functional teams to ensure integration stability and reduce operational risk across enterprise systems.',
      ],
    },
    {
      jobTitle: 'Full-Stack Developer',
      company: 'Eagle 3D Streaming, Texas (Remote)',
      period: 'Aug 2023 – Sep 2024',
      isCurrent: false,
      bullets: [
        'Developed scalable backend APIs using NestJS and ExpressJS, handling high-throughput data delivery.',
        'Integrated third-party data sources to optimise data pipelines, ensuring reliability and performance.',
      ],
    },
    {
      jobTitle: 'Software Engineer (Full-Stack)',
      company: 'LiquidX Studio, Singapore (Remote)',
      period: 'Nov 2022 – Aug 2023',
      isCurrent: false,
      bullets: [
        'Built production APIs using NestJS with 95% test coverage, demonstrating strong testing maturity and release confidence.',
        'Integrated enterprise-grade third-party services and smart contracts, managing complex integration workflows.',
      ],
    },
    {
      jobTitle: 'Software Engineer → Team Lead',
      company: 'SELISE Digital Platforms, Dhaka',
      period: 'Jan 2019 – Nov 2022',
      isCurrent: false,
      bullets: [],
      subRoles: [
        {
          title: 'Team Lead (Nov 2021 – Nov 2022)',
          description:
            'Led a team of 5 developers delivering enterprise auditing applications. Owned sprint planning, architecture decisions, and quality standards for a production system serving regulated clients.',
        },
        {
          title: 'Full-Stack Developer (Jun 2020 – Nov 2021)',
          description:
            'Developed enterprise auditing applications using Angular and .NET Core. Built backend APIs with C# Fluent API for server-side validation. Optimised report generation and worker service performance for production-grade reliability.',
        },
        {
          title: 'Front-End Developer (Jan 2019 – May 2020)',
          description:
            'Built enterprise web applications using Angular 7+, Angular Material, and RxJS. Designed reusable components and dynamic form systems. Generated PDF reports using DotLiquid and HiQPDF.',
        },
      ],
    },
  ],
  skills: [
    {
      title: '.NET & Backend',
      icon: 'Server',
      tags: ['C# / .NET Core', 'REST APIs', 'Fluent API', 'Microservices'],
    },
    {
      title: 'Frontend',
      icon: 'Monitor',
      tags: ['Angular 2+', 'React / NextJS', 'TypeScript', 'SCSS / CSS3'],
    },
    {
      title: 'Database & Integration',
      icon: 'Database',
      tags: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'RabbitMQ',
        'Enterprise Integration',
      ],
    },
    {
      title: 'Azure & Cloud',
      icon: 'Cloud',
      tags: [
        'Azure (Preparing)',
        'Docker / Kubernetes',
        'OpenShift',
        'CI/CD Pipelines',
      ],
    },
    {
      title: 'Testing & Quality',
      icon: 'Shield',
      tags: ['Jest', 'Unit Testing', '95% Coverage', 'Server-side Validation'],
    },
  ],
  competencies: [
    'Regulatory-Grade Stability',
    'Legacy Modernisation',
    'Enterprise Integration',
    'Testing Maturity',
    'Transaction Scale',
    'Production Reliability',
    'Azure Cloud Readiness',
  ],
  projects: [
    {
      title: 'Enterprise Auditing System',
      description:
        'Developed a comprehensive auditing platform serving regulated enterprise clients, with dynamic forms, complex report generation, and production-grade reliability.',
      tags: ['Angular', '.NET Core', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Financial Platform Services',
      description:
        'Delivered high-availability APIs supporting financial transaction workflows and integration with enterprise services, improving throughput and reducing operational risk.',
      tags: ['.NET Core', 'Kubernetes', 'OpenShift', 'CI/CD'],
    },
    {
      title: 'Web3 Integration Platform',
      description:
        'Built enterprise-grade integration with smart contracts and third-party APIs, managing complex transaction workflows and ensuring system reliability.',
      tags: ['NestJS', 'Web3', 'Alchemy', 'Next.js'],
    },
  ],
  certifications: [
    'Azure Administrator Associate (Planned)',
    'Azure Developer Associate (Planned)',
    'Azure Solutions Architect Expert (Planned)',
  ],
  migrationReadiness: [
    'Open to relocation to Melbourne / Brisbane / Sydney',
    'Open to employer sponsorship',
    'Available for virtual interview process',
    'Preparing Azure cloud certification track',
  ],
  bestFor: [
    'ANZ',
    'Commonwealth Bank',
    'TechnologyOne',
    'Consulting firms',
    'Enterprise internal engineering teams',
  ],
}

export const resumeVersions: ResumeVersion[] = [v1, v2, v3]

export function getVersionByRoute(route: string): ResumeVersion {
  return resumeVersions.find((v) => v.route === route) ?? v1
}
