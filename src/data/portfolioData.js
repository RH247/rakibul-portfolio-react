/* ==========================================================================
   PORTFOLIO MASTER DATA CONFIGURATION (portfolioData.js)
   Project: Personal Portfolio React Template
   Architecture: ThemeForest Standard Centralized Data Architecture
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. PERSONAL IDENTITY & BIO
   -------------------------------------------------------------------------- */
export const personalData = {
  name: "Rakibul Hasan",
  firstName: "Rakibul",
  lastName: "Hasan",
  role: "Frontend Developer",
  shortIntro: "Hi, I'm",
  bio: "I build premium websites with clean code, smooth interactions and modern user experiences.",
  avatar: "/assets/images/profile/197541e38725837dbcabb36c567b4aa6.jpg",
  cvLink: "#",
  availableForWork: true,
};

/* --------------------------------------------------------------------------
   2. HERO INTERACTIVE SLIDES
   -------------------------------------------------------------------------- */
export const heroSlides = [
  {
    iconName: "CodeXml",
    title: "Frontend Developer",
    text: "Building clean and modern web experiences.",
  },
  {
    iconName: "Palette",
    title: "UI / UX Focused",
    text: "Beautiful interfaces with smooth interactions.",
  },
  {
    iconName: "Zap",
    title: "Performance First",
    text: "Fast, optimized and scalable websites.",
  },
  {
    iconName: "GraduationCap",
    title: "Always Learning",
    text: "C#, ASP.NET and modern frontend technologies.",
  },
];

/* --------------------------------------------------------------------------
   3. HERO STATS & METRICS
   -------------------------------------------------------------------------- */
export const heroStats = [
  { value: 2, suffix: "y+", label: "Learning" },
  { value: 15, suffix: "+", label: "Projects" },
  { value: 100, suffix: "%", label: "Responsive" },
];

/* --------------------------------------------------------------------------
   4. MASTER SOCIAL LINKS
   -------------------------------------------------------------------------- */
export const socialLinks = [
  { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com" },
  { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "https://linkedin.com" },
  { name: "Facebook", icon: "fa-brands fa-facebook-f", url: "https://facebook.com" },
  { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://instagram.com" },
];

/* --------------------------------------------------------------------------
   5. ABOUT SECTION OVERVIEW
   -------------------------------------------------------------------------- */
export const aboutData = {
  eyebrow: "ABOUT ME",
  title: "Passionate about Building Great Web Experiences",
  description:
    "I'm a frontend developer who enjoys turning ideas into beautiful, functional and user-friendly websites. I focus on clean code, responsive layouts, thoughtful interactions and modern technologies.",
  badgeText: "Clean Code",
  badgeSubtext: "Better Websites",
  stats: [
    { value: "2+", label: "Years Learning" },
    { value: "15+", label: "Projects Completed" },
    { value: "30+", label: "Technologies Explored" },
  ],
};

/* --------------------------------------------------------------------------
   6. DETAILED ABOUT & QUALIFICATIONS (Standalone About Page)
   -------------------------------------------------------------------------- */
export const detailedAboutData = {
  aboutJourney:
    "I am a frontend developer dedicated to building responsive, modern, and high-performance web applications. My journey started with pure HTML/CSS, and evolved into mastering modern JavaScript, React, and component architectures. I love crafting clean user interfaces that balance aesthetic design with robust functionality.",
  experienceTimeline: [
    {
      year: "2024 - Present",
      title: "Frontend Developer & UI Specialist",
      company: "Freelance / Open Source",
      description:
        "Building responsive single-page applications, UI components, and modern dashboard layouts using React and modern CSS.",
    },
    {
      year: "2023 - 2024",
      title: "Web Development Learner & Builder",
      company: "Self-Directed Learning",
      description:
        "Mastered JavaScript ES6+, responsive design principles, Git/GitHub, and core frontend libraries through real-world projects.",
    },
  ],
  education: [
    {
      year: "Graduation",
      degree: "BSc / Diploma in Computer Science",
      institution: "University / Institute Name",
      description:
        "Focused on programming fundamentals, software engineering concepts, and algorithms.",
    },
  ],
};

/* --------------------------------------------------------------------------
   7. PROFESSIONAL HORIZONTAL JOURNEY ROADMAP (About Page)
   -------------------------------------------------------------------------- */
export const journeyRoadmapData = {
  badge: "EXPERIENCE",
  title: "My Professional Journey",
  steps: [
    {
      id: 1,
      year: "2022 - 2023",
      title: "Jr Frontend Developer",
      subtitle: "Freelance Projects",
      iconName: "Briefcase",
      completed: true,
    },
    {
      id: 2,
      year: "2023 - 2024",
      title: "Frontend Developer",
      subtitle: "Remote / Freelance",
      iconName: "Laptop",
      completed: true,
    },
    {
      id: 3,
      year: "2024 - Present",
      title: "Frontend Developer",
      subtitle: "Open to Opportunities",
      iconName: "Rocket",
      completed: true,
    },
    {
      id: 4,
      year: "Future Goal",
      title: "Fullstack Engineer",
      subtitle: "Next.js & ASP.NET Core",
      iconName: "Compass",
      completed: false, // Incomplete state for future target milestone
    },
  ],
};

/* --------------------------------------------------------------------------
   8. SKILLS SECTION MASTER DATA
   -------------------------------------------------------------------------- */
export const skillsSectionData = {
  header: {
    badge: "TECHNICAL CAPABILITIES",
    title: "Skills &",
    titleHighlight: "Technologies",
    description:
      "I craft fast, scalable, and responsive web applications using clean code patterns, modern frameworks, and pixel-perfect design standards.",
  },
  categories: [
    {
      id: "core-frontend",
      category: "Core Frontend",
      iconName: "Code2",
      accent: "#38bdf8",
      skills: [
        { name: "HTML5 / Semantic UI", level: "Expert", levelPercent: 95 },
        { name: "CSS3 / Modern Layouts", level: "Expert", levelPercent: 92 },
        { name: "JavaScript (ES6+)", level: "Advanced", levelPercent: 88 },
        { name: "TypeScript", level: "Intermediate", levelPercent: 70 },
      ],
    },
    {
      id: "frameworks-libs",
      category: "Frameworks & State",
      iconName: "Layers",
      accent: "#818cf8",
      skills: [
        { name: "React.js", level: "Advanced", levelPercent: 90 },
        { name: "Next.js", level: "Intermediate", levelPercent: 75 },
        { name: "Tailwind CSS", level: "Advanced", levelPercent: 88 },
        { name: "Redux Toolkit", level: "Intermediate", levelPercent: 72 },
      ],
    },
    {
      id: "backend-learning",
      category: "Backend & Exploration",
      iconName: "Cpu",
      accent: "#22c55e",
      skills: [
        { name: "C# Fundamentals", level: "Learning", levelPercent: 65 },
        { name: "ASP.NET Core", level: "Learning", levelPercent: 60 },
        { name: "RESTful APIs Consumption", level: "Advanced", levelPercent: 85 },
        { name: "SQL & Database Basics", level: "Intermediate", levelPercent: 70 },
      ],
    },
  ],
};

/* --------------------------------------------------------------------------
   9. SKILLS PAGE EXTRA DATA (Tools & Engineering Workflow)
   -------------------------------------------------------------------------- */
export const skillsPageData = {
  toolsSection: {
    badge: "WORK ENVIRONMENT",
    title: "Tools &",
    titleHighlight: "Platforms",
    description: "Everyday development ecosystem, design systems, and deployment workflows.",
    tools: [
      { name: "Git & GitHub", category: "Version Control", iconName: "GitBranch" },
      { name: "VS Code", category: "Code Editor", iconName: "Code" },
      { name: "Figma", category: "UI/UX Design", iconName: "Figma" },
      { name: "Vite", category: "Build Tool", iconName: "Zap" },
      { name: "Postman", category: "API Testing", iconName: "Send" },
      { name: "NPM / Yarn", category: "Package Manager", iconName: "Package" },
      { name: "Vercel / Netlify", category: "Cloud Deployment", iconName: "Cloud" },
      { name: "Chrome DevTools", category: "Debugging", iconName: "Terminal" },
    ],
  },
  workflowSection: {
    badge: "STANDARDS",
    title: "Engineering",
    titleHighlight: "Practices",
    practices: [
      {
        title: "Clean Code & Component Hierarchy",
        desc: "Writing reusable, modular and easily maintainable React architecture.",
      },
      {
        title: "Performance First Mindset",
        desc: "Optimizing bundle size, responsive assets, and minimizing re-renders.",
      },
      {
        title: "Pixel Perfect & Responsive UI",
        desc: "Ensuring fluid user experiences across ultra-wide, laptops, and mobile viewports.",
      },
      {
        title: "RESTful API Integration",
        desc: "Clean asynchronous data fetching with structured error handling states.",
      },
    ],
  },
};


/* ==========================================================================
   PROJECTS PAGE STANDALONE DATA
   ========================================================================== */
export const projectsPageData = {
  architectureSection: {
    badge: "ENGINEERING STANDARDS",
    title: "How I Deliver",
    titleHighlight: "Production Projects",
    description: "Architectural principles, code ethics, and deployment pipelines applied across every software build.",
    standards: [
      {
        id: "arch-1",
        iconName: "Layers",
        title: "Modular Component Architecture",
        desc: "Strict separation of concerns, single-responsibility React hooks, and scalable folder structures ready for enterprise growth."
      },
      {
        id: "arch-2",
        iconName: "Zap",
        title: "Performance & Asset Budgets",
        desc: "Aggressive bundle optimization, image compression, lazy loading, and sub-second paint targets ensuring smooth 60fps UIs."
      },
      {
        id: "arch-3",
        iconName: "ShieldCheck",
        title: "Cross-Platform Precision",
        desc: "Thoroughly tested across Chrome, Firefox, Safari, and diverse mobile viewport matrices with zero layout shift."
      },
      {
        id: "arch-4",
        iconName: "GitMerge",
        title: "Clean Git & Delivery Pipeline",
        desc: "Atomic commit histories, feature branch workflows, and zero-downtime automated production deployments on modern edge CDNs."
      }
    ]
  }
};


/* ==========================================================================
   CONTACT PAGE STANDALONE DATA (5th Item Added for Parallel Alignment)
   ========================================================================== */
export const contactPageData = {
  hubSection: {
    badge: "DIRECT CONNECT & COLLABORATION",
    title: "Let's Engineer",
    titleHighlight: "Something Real",
    description: "Clear communication expectations, working availability, and collaboration terms."
  },
  availabilityMatrix: {
    statusBadge: "AVAILABLE FOR CLIENT WORK",
    timezone: "Dhaka, Bangladesh (UTC+6)",
    responseTime: "< 24 Hours Guaranteed",
    capacity: "Currently accepting 1-2 selected frontend contracts or MVP builds.",
    channels: [
      { id: "ch-1", label: "Direct Inquiries", detail: "Formal briefs & scopes via form above" },
      { id: "ch-2", label: "Real-time Sync", detail: "Slack, Discord & Figma during active sprints" },
      { id: "ch-3", label: "Code Handoff", detail: "Clean Git commits & documented PR reviews" }
    ]
  },
  faqList: [
    {
      id: "faq-1",
      number: "01",
      question: "What is your typical turnaround time for deliverables?",
      answer: "Single-page cyber landing pages typically take 3–5 business days. Full multi-route web applications or architecture migrations usually require 2–3 weeks depending on feature scope."
    },
    {
      id: "faq-2",
      number: "02",
      question: "How do we handle sprint communication and milestone updates?",
      answer: "I deliver atomic, measurable progress with interactive preview URLs, recorded Loom/demo walk-throughs, and transparent daily or bi-weekly syncs via Slack or Discord."
    },
    {
      id: "faq-3",
      number: "03",
      question: "What engagement and pricing models do you support?",
      answer: "I support fixed-price milestone delivery for well-scoped projects, as well as weekly/monthly dedicated retainer engineering for ongoing product iterations."
    },
    {
      id: "faq-4",
      number: "04",
      question: "Do you provide post-delivery maintenance and warranty?",
      answer: "Yes, all production handoffs include a dedicated 14-day warranty period covering bug-fixes, edge-case UI adjustments, and live hosting deployment assistance."
    },
    {
      id: "faq-5",
      number: "05",
      question: "Can you collaborate directly with existing teams & Git repos?",
      answer: "Yes, I regularly collaborate inside existing GitHub/GitLab repositories, adhering strictly to git-flow branches, code reviews, and established styling conventions."
    }
  ]
};