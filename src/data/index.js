export const data = {
  name: "Prasetyo Edi Pamungkas",
  shortName: "prasetyo",
  role: "Full Stack Software Engineer",
  email: "prasetyoedi451@gmail.com",
  phone: "+62 831-3433-9542",
  location: "Sleman, Yogyakarta, Indonesia",
  github: "https://github.com/prasetyoedi",
  linkedin: "https://www.linkedin.com/in/prasetyo-edi-pamungkas-4426611b0/",
  portfolio: "https://myportofolio-iota-red.vercel.app/",
  whatsapp: "https://wa.me/6283134339542",

  availability: {
    status: "Available for projects",
    role: "Full Stack Engineer",
    company: "PT EbyB Global Marketplace",
  },

  about: {
    headline: "Engineering high-throughput microservices, enterprise digital workflows, and closed-loop AI systems.",
    summary:
      "Full Stack Software Engineer with hands-on experience architecting enterprise web applications, high-throughput microservices, and AI-driven automation systems. Proficient across the entire software development lifecycle—from business process modeling (UML/BPMN) and scalable backend architecture (Go, C# .NET 8, PHP) to modern responsive frontends (React.js, Next.js, DevExtreme). Proven production track record cutting database query latencies by 99.08%, streamlining enterprise workflow lifecycles by 54.5%, and deploying financial-guardrailed AI tool calling in production.",
    approach: [
      {
        title: "Clean Architecture & Scalable Systems",
        desc: "Repository pattern, distributed locks, async HTTP 202 worker queues, and 100% unit/integration test coverage.",
      },
      {
        title: "Mission-Critical API Integrations",
        desc: "Google Ads API v25 (GAQL), TikTok Marketing API v1.3, OAuth 2.0, and 15-minute zero-throttle synchronization pipelines.",
      },
      {
        title: "Database & Extreme Caching Tuning",
        desc: "In-memory caching (IMemoryCache) slashing query latency by 99.08%, PostgreSQL JSONB indexing, and Microsoft SQL Server relational architecture.",
      },
      {
        title: "Enterprise Workflow & UX Engineering",
        desc: "Requirements modeling with UML & BPMN 2.0, high-density DevExtreme virtualized DataGrids with 99/100 Google Lighthouse scores, and modern React/Next.js interfaces.",
      },
    ],
  },

  education: [
    {
      institution: "Universitas Gadjah Mada",
      location: "Yogyakarta, Indonesia",
      degree: "Bachelor of Applied Computer in Software Engineering",
      gpa: "3.85 / 4.00 (Cum Laude)",
      period: "2022 – 2026",
      finalProject:
        "Design and Development of a Web-Based Service Parts Sales Order Information System with Digital Multilevel Approval at PT HMMI.",
      courses: [
        "Algorithms & Data Structures",
        "Database & Advanced Database",
        "Software Requirements Engineering",
        "Software Architecture & Design",
        "Software Verification & Validation",
        "Cloud Computing & AI",
      ],
    },
    {
      institution: "SMK Negeri 2 Depok Sleman",
      location: "Yogyakarta, Indonesia",
      degree: "Network Informatics Systems and Applications",
      period: "2018 – 2022",
    },
  ],

  experience: [
    {
      company: "PT EbyB Global Marketplace",
      role: "Full Stack Engineer",
      period: "September 2026 – Present",
      location: "Yogyakarta, Indonesia",
      type: "Full-Time",
      description:
        "Architecting enterprise backend microservices and automated AdTech pipelines using Go (Golang), Gin, and PostgreSQL, orchestrating high-velocity advertising across TikTok and Google Ads APIs.",
      highlights: [
        "Google Ads Automation Engine: Architected and deployed a multi-account campaign auditing and budget realignment service via Go, Gin, and Google Ads API v25 & GAQL.",
        "TikTok Marketing API Microservice: Built a high-throughput microservice integrating TikTok Marketing API (v1.3) with dual processing modes (async HTTP 202 workers vs. sync HTTP 200) and conflict-handling locks, achieving 100% test coverage.",
        "Closed-Loop 1-Tap AI Action System: Implemented LLM function calling to convert diagnostics into safe real-time mutations (negative keywords, zero-sum budget reallocations) with strict financial risk guardrails.",
        "Symmetrical Impact Measurement: Formulated a PostgreSQL JSONB before-vs-after comparison engine; cut client wasted ad spend by 16.5% (~Rp 1M/week on test campaigns) and eliminated 100% of irrelevant search traffic.",
        "Zero-Throttle Sync: Established a 15-minute timezone-resilient synchronization pipeline handling high-volume daily metrics without hitting API rate limits.",
      ],
      tech: ["Go (Golang)", "Gin Framework", "Google Ads API (GAQL)", "TikTok Marketing API", "PostgreSQL (JSONB)", "Async HTTP 202", "LLM Tool Calling", "OAuth 2.0"],
    },
    {
      company: "PT Hino Motors Manufacturing Indonesia",
      role: "Software Engineering Intern",
      period: "August 2025 – February 2026",
      location: "Purwakarta, Indonesia",
      type: "Enterprise Internship",
      description:
        "Designed and built an enterprise web-based Service Parts Sales Order System using ASP.NET Core v8 (MVC), C#, SQL Server, and DevExtreme, replacing legacy multi-file Excel workflows for international service parts.",
      highlights: [
        "Workflow & Lead Time Reduction: Streamlined the order fulfillment lifecycle by 54.5% (slashing operational steps from 11 manual stages to 5 digital stages) and reduced order drafting time by ~90% (from 20–30 mins to <3 mins) via automated master-data validation.",
        "Hierarchical 2-Tier Approval: Digitized approval workflows across Department Head and Division Head levels featuring Role-Based Access Control (RBAC), rejection audit logs, and automated SMTP email dispatching.",
        "Extreme Caching Optimization: Built an IMemoryCache analytical layer that slashed query latency by 99.08% (from 976 ms to 9 ms) and boosted throughput by 2,744% (up to 412 req/s) with a 0.00% error rate under load testing.",
        "Frontend Performance: Achieved a near-perfect 99/100 Google Lighthouse Performance Score (FCP 0.58s, LCP 0.70s, TBT < 70ms) on data-heavy virtualized DevExtreme DataGrids.",
        "Stakeholder Acceptance: Facilitated iterative User Acceptance Testing (UAT) with division leadership, achieving a 98.7% overall acceptance rate.",
      ],
      tech: ["ASP.NET Core v8", "C#", "SQL Server", "EF Core", "IMemoryCache", "DevExtreme", "Bootstrap 5", "Google Lighthouse (99/100)", "UML / BPMN"],
    },
    {
      company: "Senyumin (Denteksi)",
      role: "Web Developer Intern",
      period: "August 2024 – January 2025",
      location: "Yogyakarta, Indonesia",
      type: "Internship",
      description:
        "Developed full-stack modules for a pediatric dental screening web application using Laravel (PHP), MySQL, and Bootstrap to support AI-assisted early detection in children.",
      highlights: [
        "Client Image Pipeline: Integrated CropperJS for aspect ratio normalization and client-side compression, cutting image payloads by 40% prior to cloud storage and AI inference.",
        "Data Integrity & Concurrency: Designed relational MySQL schemas and eliminated race conditions/duplicate submissions during concurrent form submissions using compound unique constraints and JWT-authenticated REST APIs.",
        "Inference Coordination: Integrated frontend workflows with backend RESTful endpoints to coordinate asynchronous machine learning inference pipelines.",
      ],
      tech: ["Laravel", "PHP", "MySQL", "CropperJS", "RESTful API", "Bootstrap 5", "JavaScript", "GitHub"],
    },
  ],

  projects: [
    {
      id: "eby-ads-platform",
      title: "Multi-Channel Ad Management & Metrics Engine",
      category: "Backend & API Integration",
      context: "PT EbyB Global Marketplace",
      year: "2026",
      problem:
        "Managing high-velocity advertising across TikTok Ads and Google Ads required constant manual intervention, lacked centralized telemetry, and suffered from unoptimized wasted ad spend.",
      solution:
        "Architected Go (Gin) microservices integrating Google Ads (GAQL v25) and TikTok Marketing API v1.3 with async HTTP 202 workers, conflict-handling locks, and a Closed-Loop 1-Tap AI Action engine protected by strict financial risk guardrails.",
      previewType: "ads-engine",
      highlights: [
        "Symmetrical Impact Engine cut client wasted ad spend by 16.5% (~Rp 1M/week) and eliminated 100% of irrelevant search traffic",
        "Dual processing modes (async HTTP 202 polling workers vs. sync HTTP 200) with 100% unit & integration test coverage",
        "15-minute timezone-resilient synchronization pipeline handling high-volume daily metrics without rate throttling",
        "Closed-loop LLM function calling converting diagnostics into safe, real-time mutations with financial risk controls",
      ],
      tech: ["Go (Golang)", "Gin Framework", "Google Ads API (GAQL)", "TikTok Marketing API", "PostgreSQL (JSONB)", "Async HTTP 202", "LLM Tool Calling"],
      github: null,
      demo: null,
      badge: "Production Microservice · 16.5% Spend Cut",
    },
    {
      id: "hmm-sales-order",
      title: "Hino Motors Service Parts Sales Order System",
      category: "Enterprise System & Digital Workflow",
      context: "PT Hino Motors Manufacturing Indonesia · Final Project",
      year: "2025",
      problem:
        "International service parts sales orders previously relied on manual 11-stage physical paper routing across management tiers, resulting in approval bottlenecks (20–30 mins drafting) and untracked order statuses.",
      solution:
        "Architected an enterprise ASP.NET Core v8 web system featuring 2-tier RBAC multilevel digital approvals, automated master-data validation, and an IMemoryCache layer with interactive DevExtreme virtualized grids.",
      previewType: "enterprise-dashboard",
      highlights: [
        "Extreme caching layer slashed query latency by 99.08% (976 ms to 9 ms) and boosted throughput by 2,744% (up to 412 req/s) with 0.00% error rate",
        "Streamlined fulfillment lifecycle by 54.5% (11 manual stages to 5 digital stages) and slashed drafting time by ~90% (<3 mins)",
        "Achieved near-perfect 99/100 Google Lighthouse Performance Score on complex virtualized DataGrids (FCP 0.58s, LCP 0.70s, TBT < 70ms)",
        "Facilitated iterative UAT with Department and Division leadership, achieving a 98.7% overall acceptance rate",
      ],
      tech: ["ASP.NET Core v8", "C#", "SQL Server", "EF Core", "IMemoryCache", "DevExtreme", "Bootstrap 5", "Lighthouse 99/100"],
      github: null,
      demo: null,
      badge: "Enterprise Production · 99.08% Latency Cut",
    },
    {
      id: "calmind",
      title: "CalMind — Mental Health Consultation & Telehealth",
      category: "Full Stack Web Application",
      context: "Alterra Academy Capstone Project · Studi Independen Batch 7",
      year: "2024",
      problem:
        "Access to mental health support required fragmented services across appointment scheduling, professional doctor triage, automated triage screening, and payment processing.",
      solution:
        "Led cross-functional frontend development for a unified platform supporting three distinct role portals (User, Doctor, Admin), featuring automated Midtrans payment processing and Gemini AI virtual consultation triage.",
      previewType: "telehealth-app",
      highlights: [
        "Served as Team Leader & Front-End Lead across Scrum sprint cycles, achieving 99.5% API uptime during live evaluation",
        "Architected role-based client-side routing & Zustand state stores across User, Doctor, and Admin portals",
        "Integrated Midtrans Snap payment gateway with SHA-512 webhook verification and Google Gemini AI API",
      ],
      tech: ["React.js", "Tailwind CSS", "Zustand", "Midtrans", "Gemini AI", "Axios", "Golang Backend"],
      github: "https://github.com/Kelompok-6-capstone/Front-End",
      demo: null,
      badge: "Team Lead & Architecture · 99.5% Uptime",
    },
    {
      id: "denteksi",
      title: "Senyumin (Denteksi) — AI Dental Screening Workflow",
      category: "HealthTech & Computer Vision Pipeline",
      context: "Senyumin Internship",
      year: "2024",
      problem:
        "Dental photo uploads from mobile clinics had inconsistent aspect ratios and lighting, degrading early dental disease detection accuracy in ML models.",
      solution:
        "Engineered an interactive CropperJS pre-processing interface integrated into a Laravel web platform, validating photo resolution and framing before batch AI processing.",
      previewType: "ai-screening",
      highlights: [
        "Integrated CropperJS client-side processing, cutting image payloads by 40% prior to cloud upload and AI inference",
        "Designed normalized MySQL relational schemas with compound unique constraints, eliminating race conditions and duplicate submissions",
      ],
      tech: ["Laravel", "PHP", "MySQL", "CropperJS", "RESTful API", "Bootstrap 5"],
      github: null,
      demo: null,
      badge: "HealthTech Pipeline · 40% Payload Cut",
    },
    {
      id: "cinurawa",
      title: "PT Citra Numusi Birawa (CINURAWA) CMS",
      category: "Content Management System",
      context: "Corporate CMS Development",
      year: "2024",
      problem:
        "Corporate marketing staff could not publish company announcements or update product catalogues without requiring manual code changes by engineers.",
      solution:
        "Developed a modular Laravel 10 CMS utilizing the Filament Admin Panel, giving non-technical administrators granular control over pages, banners, and digital media.",
      previewType: "cms-admin",
      highlights: [
        "Filament Admin Panel with role-based permission control",
        "Relational database structure on MySQL with automated media handling",
      ],
      tech: ["Laravel 10", "Filament", "MySQL", "PHP", "Bootstrap 5"],
      github: "https://github.com/Haikal-Adityo/Cinurawa",
      demo: null,
      badge: "Client CMS",
    },
    {
      id: "gelex-ugm",
      title: "Gelanggang Expo UGM 2023 Official Portal",
      category: "High-Traffic Event Platform",
      context: "Universitas Gadjah Mada Annual Event",
      year: "2023",
      problem:
        "Thousands of incoming university students required a responsive, low-latency mobile portal to explore student activity units, event timelines, and campus community directories.",
      solution:
        "Designed and deployed a mobile-first web interface using Next.js and Tailwind CSS, prioritizing zero layout shift, component reusability, and instant mobile touch responsiveness.",
      previewType: "event-portal",
      highlights: [
        "Mobile-first architecture built for concurrent student traffic surges",
        "Achieved 95+ Mobile Lighthouse rating with zero Cumulative Layout Shift (CLS) and optimized SSG asset caching",
      ],
      tech: ["Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
      github: null,
      demo: null,
      badge: "Campus Production · 95+ Lighthouse",
    },
  ],

  skills: {
    backend: [
      { name: "Go (Golang)", detail: "Gin Gonic, Microservices, Async HTTP 202 Workers, Distributed Locks" },
      { name: "C# / .NET", detail: ".NET Core v8, Entity Framework Core, MVC, Clean Architecture" },
      { name: "PHP", detail: "Laravel 10, CodeIgniter, Eloquent ORM, RESTful APIs" },
      { name: "Microservices", detail: "Domain Isolation, Idempotency, Concurrency Control, Event Handlers" },
    ],
    frontend: [
      { name: "React.js", detail: "Hooks, Context API, Zustand, Component Architecture" },
      { name: "Next.js", detail: "App Router, SSR, SSG, Lighthouse 99/100 Optimization" },
      { name: "Tailwind CSS", detail: "Preline UI, daisyUI, shadcn/ui, flowbite" },
      { name: "DevExtreme / DevExpress", detail: "Virtualized DataGrids, Data Visualizations, Sub-Second Rendering" },
      { name: "Bootstrap 5 & jQuery", detail: "Enterprise & Legacy Systems, Responsive Mobile Layouts" },
    ],
    apis_ai: [
      { name: "APIs & Protocols", detail: "Google Ads API (v25 GAQL), TikTok Marketing API (v1.3), OAuth 2.0, OpenAPI / Swagger, Scalar UI" },
      { name: "AI & Automation", detail: "LLM Tool Calling, Gemini AI API, Financial Guardrails, 1-Tap AI Action System, Symmetrical Impact Engine" },
      { name: "Webhooks & Sync", detail: "Resilient Webhook Queues, 15-Minute Zero-Throttle Sync, SHA-512 Verification" },
    ],
    database: [
      { name: "PostgreSQL", detail: "JSONB Schemas, Telemetry Storage, Query Tuning, Indexing" },
      { name: "Microsoft SQL Server", detail: "T-SQL, EF Core Migrations, Table Indexing, SSMS" },
      { name: "MySQL", detail: "Schema Design, Compound Unique Constraints, Triggers" },
      { name: "IMemoryCache", detail: "Extreme In-Memory Caching, 99.08% Latency Cut, 9ms Response" },
      { name: "golang-migrate", detail: "Database Versioning, Safe Migration Pipelines, Rollbacks" },
    ],
    languages: [
      { name: "TypeScript & JavaScript", detail: "TypeScript, JavaScript (ES6+), Web Standards, Async Architecture" },
      { name: "Core Languages", detail: "Go (Golang), C#, PHP, SQL, HTML5, CSS3" },
      { name: "BPMN 2.0", detail: "Enterprise Approval Workflows, Business Process Modeling" },
      { name: "UML Modeling", detail: "Use Case, Activity, Sequence, Swimlane, Database ERD" },
    ],
    devops: [
      { name: "Docker & Linux CLI", detail: "Docker Containers, Linux CLI, Bash Scripting, Server Deployment" },
      { name: "Git & Version Control", detail: "Git, GitHub, GitLab, Trunk & Branching Workflows" },
      { name: "API & DB Tools", detail: "Postman, DBeaver, Swagger UI, Scalar UI" },
      { name: "Performance & QA", detail: "Google Lighthouse 99/100, Postman Automated Tests, 100% Test Coverage" },
    ],
  },

  certifications: [
    {
      title: "Associate Data Engineer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "2025 – 2028",
      id: "ADE-BNSP",
      pdf: "/certificates/sertifikat-ADE-BNSP.pdf",
    },
    {
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "2025 – 2028",
      id: "JWD-BNSP",
      pdf: "/certificates/sertifikat-JWD-BNSP.pdf",
    },
    {
      title: "ReactJS Mastery For Green Tech Front-End Engineers",
      issuer: "Alterra Academy",
      period: "2024",
      id: "ALTERRA-REACT",
      pdf: "/certificates/alterra.pdf",
    },
    {
      title: "Belajar Fundamental Front-End Web Development",
      issuer: "Dicoding Indonesia",
      period: "2024",
      id: "DICODING-FE-FUNDAMENTAL",
      pdf: "/certificates/Belajar-Fundamental-FrontEnd-Web-Development.pdf",
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Indonesia",
      period: "2024",
      id: "DICODING-FE-PEMULA",
      pdf: "/certificates/Belajar-Membuat-Front-End-Web-untuk-Pemula.pdf",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      period: "2024",
      id: "DICODING-JS",
      pdf: "/certificates/Belajar-Dasar-Pemrograman-JavaScript.pdf",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      period: "2024",
      id: "DICODING-WEB",
      pdf: "/certificates/Belajar-Dasar-Pemrograman-Web.pdf",
    },
  ],

  achievements: [
    {
      title: "Silver Medal Winner — Poster PKM-K",
      event: "Pekan Ilmiah Mahasiswa Nasional Ke-37 (PIMNAS 37)",
      issuer: "Kemendikbudristek RI",
      year: "2024",
      badge: "National Level",
      pdf: "/certificates/sertifikat-perak-pimnas-2024.pdf",
    },
    {
      title: "Gold Medal Winner — Poster PKM-K",
      event: "Pekan Ilmiah Mahasiswa Nasional Ke-36 (PIMNAS 36)",
      issuer: "Kemendikbudristek RI",
      year: "2023",
      badge: "National Level",
      pdf: "/certificates/sertifikat-emas-pimnas-2023.pdf",
    },
    {
      title: "3rd Place — Website Design Competition",
      event: "National Website Design Competition",
      issuer: "Universitas Sebelas Maret (UNS)",
      year: "2023",
      badge: "Competition Winner",
      pdf: null,
    },
  ],

  organization: [
    {
      role: "Transportation Sub-Division Coordinator",
      event: "Ramadhan Di Kampus (RDK UGM 1445H)",
      period: "2024",
      description: "Coordinated transport logistics and operational dispatch schedules for guests and university VIP delegations.",
    },
  ],
};
