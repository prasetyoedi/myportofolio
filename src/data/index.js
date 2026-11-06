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
    headline: "Engineering end-to-end digital workflows, scalable backend APIs, and reactive interfaces.",
    summary:
      "Full Stack Software Engineer with hands-on experience in web application development, system analysis, and business process automation. Experienced in building production-ready RESTful APIs and enterprise platforms using Go (Gin), ASP.NET Core, Laravel, React.js, and Next.js. Specializing in translating complex business processes into structured system architectures with UML/BPMN, optimizing database queries, and integrating AI and third-party advertising APIs.",
    approach: [
      {
        title: "System Architecture & BPMN",
        desc: "Requirements engineering, UML modeling (Use Case, Activity, Swimlane, ERD), and digital workflow mapping for enterprise approval systems.",
      },
      {
        title: "Backend & API Engineering",
        desc: "High-throughput RESTful services in Go (Gin) and ASP.NET Core, OAuth authentications (TikTok/Google Ads), and asynchronous ad metric synchronization.",
      },
      {
        title: "Relational Data Modeling",
        desc: "Database schema design, indexing, and query tuning with PostgreSQL, MySQL, and Microsoft SQL Server for data integrity and high consistency.",
      },
      {
        title: "Enterprise Frontend & UX",
        desc: "Component-driven UIs with React.js, Next.js, and Tailwind CSS. Data-dense interfaces with DevExtreme and Lighthouse-audited performance.",
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
        "Engineered scalable backend microservices and RESTful APIs using Go (Golang) and the Gin framework for multi-channel advertising management applications.",
      highlights: [
        "Implemented TikTok Ads and Google Ads integrations, encompassing TikTok OAuth authentication, campaign/ad group lifecycle workflows, and automated metric synchronization.",
        "Engineered AI-powered advertising analysis algorithms that parse performance metrics to deliver automated campaign optimization recommendations.",
        "Architected relational database schemas and API pipelines, ensuring strong data consistency and zero-drift reporting across ad platform webhooks.",
      ],
      tech: ["Go (Golang)", "Gin Framework", "RESTful API", "TikTok Ads API", "Google Ads API", "SQL", "Git", "GitHub"],
    },
    {
      company: "PT Hino Motors Manufacturing Indonesia",
      role: "Software Engineering Intern",
      period: "August 2025 – February 2026",
      location: "Purwakarta, Indonesia",
      type: "Enterprise Internship",
      description:
        "Designed and built a web-based Service Parts Sales Order System with a multi-tier digital approval workflow, eliminating manual paper routing across administrative divisions.",
      highlights: [
        "Conducted deep business process analysis and translated operational requirements into formal functional specifications using UML diagrams.",
        "Developed full-stack modules using ASP.NET Core v8, C#, Entity Framework Core, SQL Server, and DevExtreme for high-density enterprise data grids.",
        "Collaborated with cross-functional stakeholders (Staff PIC, Department Head, Division Head) through rigorous User Acceptance Testing (UAT).",
        "Executed frontend performance audits with Google Lighthouse, achieving a verified 'Good' performance rating through query tuning and rendering optimization.",
      ],
      tech: ["ASP.NET Core v8", "C#", "SQL Server", "EF Core", "DevExtreme", "jQuery", "Bootstrap 5", "Google Lighthouse", "GitLab"],
    },
    {
      company: "Senyumin (Denteksi)",
      role: "Web Developer Intern",
      period: "August 2024 – January 2025",
      location: "Yogyakarta, Indonesia",
      type: "Internship",
      description:
        "Developed a Laravel & PHP dental screening web application backed by MySQL to support AI-assisted early detection of dental conditions in children.",
      highlights: [
        "Engineered a client-side image-processing workflow utilizing CropperJS to standardize dental image proportions and color profiles prior to AI model submission.",
        "Integrated frontend workflows with backend RESTful endpoints to coordinate asynchronous machine learning inference pipelines.",
        "Designed and normalized MySQL relational structures for screening records, patient demographics, and audit logs while eliminating duplicate submission bugs.",
      ],
      tech: ["Laravel", "PHP", "MySQL", "CropperJS", "RESTful API", "Bootstrap", "JavaScript", "GitHub"],
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
        "Managing high-velocity advertising across TikTok Ads and Google Ads required constant manual intervention and lacked centralized performance intelligence.",
      solution:
        "Built high-performance Go (Gin) REST services integrating TikTok OAuth, campaign CRUD dispatchers, and automated metric synchronization pipelines with AI recommendation feeds.",
      previewType: "ads-engine",
      highlights: [
        "TikTok Ads API & Google Ads API integration via resilient webhook queues",
        "AI-driven telemetry analysis for automated campaign budget re-allocation",
        "High-performance Go backend with optimized relational persistence",
      ],
      tech: ["Go (Golang)", "Gin Framework", "TikTok Ads API", "Google Ads API", "SQL", "REST API"],
      github: null,
      demo: null,
      badge: "Production Microservice",
    },
    {
      id: "hmm-sales-order",
      title: "Hino Motors Service Parts Sales Order System",
      category: "Enterprise System & Digital Workflow",
      context: "PT Hino Motors Manufacturing Indonesia · Final Project",
      year: "2025",
      problem:
        "Critical service parts sales orders previously relied on manual physical paper sign-offs across three management tiers, resulting in approval bottlenecks and untracked order statuses.",
      solution:
        "Architected a centralized ASP.NET Core v8 web system featuring role-based digital multilevel approvals (Staff PIC → Department Head → Division Head), automated audit trails, and interactive DevExtreme data grids.",
      previewType: "enterprise-dashboard",
      highlights: [
        "Multi-tier role-based approval state machine with real-time tracking",
        "Google Lighthouse performance optimization with sub-second page loads",
        "Strict database transaction management on Microsoft SQL Server",
      ],
      tech: ["ASP.NET Core v8", "C#", "SQL Server", "EF Core", "DevExtreme", "Bootstrap 5"],
      github: null,
      demo: null,
      badge: "Enterprise Production",
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
        "Served as Team Leader & Front-End Lead across Scrum sprint cycles",
        "Architected role-based client-side routing & Zustand state stores",
        "Integrated Midtrans Snap payment gateway and Google Gemini AI API",
      ],
      tech: ["React.js", "Tailwind CSS", "Zustand", "Midtrans", "Gemini AI", "Axios", "Golang Backend"],
      github: "https://github.com/Kelompok-6-capstone/Front-End",
      demo: null,
      badge: "Team Lead & Architecture",
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
        "Client-side image cropping and normalization pipeline using CropperJS",
        "Normalized MySQL relational schemas for patient examination histories",
      ],
      tech: ["Laravel", "PHP", "MySQL", "CropperJS", "RESTful API", "Bootstrap 5"],
      github: null,
      demo: null,
      badge: "HealthTech Workflow",
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
        "Optimized asset loading and accessible navigation hierarchy",
      ],
      tech: ["Next.js", "Tailwind CSS", "JavaScript", "Vercel"],
      github: null,
      demo: null,
      badge: "Campus Production",
    },
  ],

  skills: {
    backend: [
      { name: "Go (Golang)", detail: "Gin Framework, Microservices, REST APIs" },
      { name: "C# / .NET", detail: "ASP.NET Core v8, Entity Framework Core" },
      { name: "PHP", detail: "Laravel 10, CodeIgniter, Eloquent" },
      { name: "API Architecture", detail: "RESTful Standards, OAuth 2.0, Webhooks" },
    ],
    frontend: [
      { name: "React.js", detail: "Hooks, Context, Zustand, Router" },
      { name: "Next.js", detail: "App Router, SSR, Optimization" },
      { name: "Tailwind CSS", detail: "Custom Token Systems, Fluid Layouts" },
      { name: "DevExtreme / DevExpress", detail: "Enterprise Grids & Data Visualizations" },
      { name: "Bootstrap 5 & jQuery", detail: "Enterprise & Legacy Systems" },
    ],
    database: [
      { name: "MySQL", detail: "Schema Design, Indexing, Triggers" },
      { name: "Microsoft SQL Server", detail: "T-SQL, EF Core Migrations, SSMS" },
      { name: "PostgreSQL", detail: "Relational Modeling, Query Tuning" },
      { name: "Oracle & SQLite", detail: "Enterprise RDBMS & Embedded Databases" },
    ],
    analysis: [
      { name: "BPMN 2.0", detail: "Digital Workflow & Business Process Design" },
      { name: "UML Modeling", detail: "Use Case, Activity, Sequence, Swimlane" },
      { name: "Database ERD", detail: "Normalized Entity-Relationship Architecture" },
      { name: "Scrum & Agile", detail: "Sprint Planning, Backlogs, Trello" },
    ],
    tools: [
      { name: "Git & Version Control", detail: "GitHub, GitLab, Merge Workflows" },
      { name: "Third-Party APIs", detail: "TikTok Ads, Google Ads, Midtrans, Gemini AI" },
      { name: "Performance & QA", detail: "Google Lighthouse, Postman API Testing" },
      { name: "Analytics & DB Tools", detail: "Looker Studio, Tableau, DBeaver" },
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
