import { CodeIcon, PaletteIcon, TerminalIcon } from "../components/icons";
import cert1 from "../assets/cerfificateImage/fortinet.png";
import { VscVscode } from "react-icons/vsc";

export const PERSONAL_INFO = {
  name: "Kakada Pheang",
  role: "Full-Stack Software Engineer & Designer",
  tagline:
    "Computer Science major passionate about designing highly scalable web systems, intuitive UI/UX experiences, and robust API architectures. Actively seeking a Software Engineering Internship for Summer 2027.",
  email: "oookakda@gmail.com",
  github: "https://github.com/pheangkakada",
  linkedin: "https://linkedin.com",
  resumeLink: "#",
  githubUsername: "kakadapheang",
  discordUsername: "kakadapheang#1337",
  gpa: "3.85 / 4.00",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio AI Assistant",
    description:
      "An AI assistant integrated into my portfolio that provides interactive project walkthroughs, answers technical questions about my work, and offers insights into my development process using a custom-trained LLM and vector database for fast semantic retrieval.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "LLMs"],
    category: "Fullstack",
    github: "#",
    live: "https://pheangkakadaportfolio.vercel.app/AiagentUI",
    previewImage: "/project-previews/portfolioAiPre.png",
    status: "PROD_ACTIVE",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    isFeatured: true,
    telemetry: {
      performance: "98.2%",
      coverage: "94.0%",
      bundleSize: "142 kB",
      queryLatency: "12ms",
    },
    topologyNodes: [
      { id: "lb", label: "Edge Proxy Load Balancer", x: 120, y: 50 },
      { id: "api", label: "Asynchronous Node API Engine", x: 120, y: 150 },
      { id: "db", label: "MongoDB Replicated Cluster", x: 60, y: 250 },
      { id: "redis", label: "Redis Key-Value Sync Cache", x: 180, y: 250 },
    ],
  },
  {
    id: 2,
    title: "Espresso POS System",
    description:
      "Highly responsive environmental tracker calculating localized carbon footprint analytics, target settings, and secure database caching profiles.",
    tech: ["HTML5", "CSS","Javascript", "MongoDB", "Render"],
    category: "Fullstack",
    github: "https://github.com/pheangkakada/EspressoPOS/issues/1",
    live: "https://github.com/pheangkakada/EspressoPOS/issues/1",
    previewImage: "/project-previews/esspresoPosPre.png",
    status: "STABLE",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    isFeatured: false,
    telemetry: {
      performance: "96.5%",
      coverage: "91.2%",
      bundleSize: "88 kB",
      queryLatency: "34ms",
    },
    topologyNodes: [
      { id: "dns", label: "Vercel Edge Network DNS", x: 120, y: 50 },
      { id: "next", label: "NextJS React Server Actions", x: 120, y: 150 },
      { id: "fb", label: "Google Firebase Auth/Datastore", x: 120, y: 250 },
    ],
  },
  {
    id: 3,
    title: "Classroom Management System",
    description:
      "Modern Classroom Management System built with C# WinForms and MySQL, featuring student management, attendance tracking, assignments, permission requests, and cloud database integration with Railway.",
    tech: ["C#", "Railway", "MySQL", "Design Patterns"],
    category: "Windows Form",
    github: "https://github.com/pheangkakada/ClassroomManagementSystem.git",
    live: "https://github.com/pheangkakada/ClassroomManagementSystem.git",
    previewImage: "/project-previews/classroomMsPre.png",
    status: "NOMINAL",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    isFeatured: false,
    telemetry: {
      performance: "99.1%",
      coverage: "88.5%",
      bundleSize: "45 kB",
      queryLatency: "2ms",
    },
    topologyNodes: [
      { id: "dom", label: "Strict Local Client DOM View", x: 120, y: 50 },
      { id: "canvas", label: "Highly Performant HTML5 Canvas", x: 120, y: 150 },
      {
        id: "workers",
        label: "Native Multi-thread Web Workers",
        x: 120,
        y: 250,
      },
    ],
  },
  {
    id: 4,
    title: "Khmer Learning Duolingo Clone",
    description:
      "An AI document intelligence assistant. Employs custom LLM pipelines, vector databases for fast semantic lookups, and stream-based chat interfaces with memory.",
    tech: ["Flutter", "FastAPI", "Render", "MongoDB"],
    category: "Mobile App",
    github: "https://github.com/pheangkakada/BrainApp.git",
    live: "https://github.com/pheangkakada/BrainApp/releases/tag/Demo",
    previewImage: "/project-previews/brainAppPre.png",
    status: "STANDBY",
    gradient: "from-rose-500 via-orange-500 to-amber-500",
    isFeatured: true,
    telemetry: {
      performance: "94.8%",
      coverage: "86.1%",
      bundleSize: "210 kB",
      queryLatency: "145ms",
    },
    topologyNodes: [
      { id: "gw", label: "FastAPI Routing Router Gateway", x: 120, y: 50 },
      { id: "llm", label: "OpenAI Completion Pipelines", x: 60, y: 150 },
      {
        id: "pinecone",
        label: "Pinecone High-Speed Vector DB",
        x: 180,
        y: 150,
      },
      { id: "mem", label: "Context Window Dialogue History", x: 120, y: 250 },
    ],
  },
  {
    id: 5,
    title: "Clothing Shop Brands",
    description:
      "Modern clothing e-commerce platform with product management and online shopping features.",
    tech: ["React.js", "Tailwind CSS"],
    category: "Under Development",
    github: "https://github.com/pheangkakada/clothingshopbrand.git",
    live: "https://clothingshopbrands.vercel.app/",
    previewImage: "/project-previews/cothingPre.png",
    status: "PROD_ACTIVE",
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
    isFeatured: false,
    telemetry: {
      performance: "99.6%",
      coverage: "95.4%",
      bundleSize: "14.2 MB",
      queryLatency: "3ms",
    },
    topologyNodes: [
      { id: "ingress", label: "gRPC High-Performance Ingress", x: 120, y: 50 },
      { id: "limiter", label: "Redis Bucket Token Limiter", x: 120, y: 150 },
      { id: "prom", label: "Prometheus Exporter Core Node", x: 120, y: 250 },
    ],
  },
  
];

export const MILESTONES = [
  {
    id: "m-1",
    period: "2022 - 2023",
    title: "Year 1: Foundations of Computer Science",
    tag: "Core Principles",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    summary:
      "Building a strong computational core with C/C++ and discrete mathematics.",
    gpa: "3.42 GPA",
    coursework: [
      "Object-Oriented Programming (OOP) with C/C++",
      "Mathematics for Computer Science",
      "21st Century Computing",
      "Computer Fundamentals and Technology",
    ],
    specStats: {
      codeEfficiency: 80,
      problemSolving: 85,
      systemArchitecture: 65,
    },
    description:
      "Laid the groundwork for software engineering principles. Developed efficient algorithms in C/C++, mastered core data structures, and built a strong mathematical foundation in discrete math and logic.",
  },
  {
    id: "m-2",
    period: "2023 - 2024",
    title: "Year 2: Database Systems & OOP",
    tag: "Design Paradigms",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    summary: "Deep-dive into engineering architectures.",
    gpa: "Null GPA",
    coursework: [
      "Java Programming & OOP",
      "Relational Database with SQL",
      "Data Structures & Algorithm",
      "English Composition for Computer Science",
    ],
    specStats: {
      codeEfficiency: 88,
      problemSolving: 90,
      systemArchitecture: 78,
    },
    description:
      "Transitioned to complex engineering blueprints. Programmed robust asynchronous multithreaded systems, implemented standard software design patterns (Factory, Observer, Singleton), and structured database indexing algorithms.",
  },
  {
    id: "m-3",
    period: "2025 - 2026",
    title: "Year 3: Web Systems & API Design",
    tag: "Web Systems",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    summary:
      "Focused on full-stack web development, API design, and scalable system architectures.",
    gpa: "Null GPA",
    coursework: [
      "Frontend Web Development ",
      "C# Programming & .NET",
      "ISADD",
      "Data Mining",
    ],
    specStats: {
      codeEfficiency: 92,
      problemSolving: 92,
      systemArchitecture: 85,
    },
    description:
      "Immersed in the world of web systems. Built dynamic client-side applications, designed RESTful APIs with secure authentication layers, and architected scalable web services with cloud deployment strategies.",
  },
  {
    id: "m-4",
    period: "2026 - 2027",
    title: "Year 4: Production Software Engineering",
    tag: "Software Dev",
    tagColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    summary:
      "Final year focused on production software engineering and Project management.",
    gpa: "null GPA",
    coursework: [
      "MIS",
      "Information Technology Project Management",
      "System Administration (Windows/Linux)",
      "Dart & Flutter Mobile Development",
      "OOAD Programming",
      "Design Patterns & Software Architecture",
    ],
    specStats: {
      codeEfficiency: 95,
      problemSolving: 95,
      systemArchitecture: 90,
    },
    description:
      "Capstone year focused on production software engineering principles. Led a team project to build a full-stack web application, implemented CI/CD pipelines for automated testing and deployment, and mastered system administration for both Windows and Linux environments.",
  },
];

export const THREE_SKILLS_SYSTEM = {
  frontend: {
    title: "FrontEnd Architecture",
    description:
      "Crafting bulletproof client-side architectures with optimized load sequences, state synchronization patterns, and fluid adaptive views.",
    badge: "CLIENT-SIDE STACK",
    gradient: "from-cyan-500 to-blue-600",
    color: "cyan",
    glowColor: "rgba(34,211,238,0.15)",
    icon: <CodeIcon className="w-5 h-5 text-cyan-400" />,
    items: [
      {
        name: "React.js / Next.js",
        level: 95,
        desc: "Server Actions, concurrent render patterns, async routes",
      },
      {
        name: "TypeScript Core",
        level: 88,
        desc: "Strict system interfaces, generics, algebraic definitions",
      },
      {
        name: "Tailwind CSS Integration",
        level: 92,
        desc: "Fluid component layout grids, custom design tokens",
      },
      {
        name: "Dynamic Layout & Performance",
        level: 90,
        desc: "Atomic states, virtualization, bundle compression",
      },
    ],
  },
  backend: {
    title: "BackEnd Engineering",
    description:
      "Architecting scalable data microservices, strict validation gates, optimized database indexes, and fast distributed memory cache layers.",
    badge: "SERVER-SIDE CORE",
    gradient: "from-purple-500 to-indigo-600",
    color: "indigo",
    glowColor: "rgba(129,140,248,0.15)",
    icon: <TerminalIcon className="w-5 h-5 text-indigo-400" />,
    items: [
      {
        name: "Node.js (Express & Nest)",
        level: 88,
        desc: "Asynchronous task loops, multi-thread clustering",
      },
      {
        name: "Python (FastAPI / REST)",
        level: 82,
        desc: "Dependency engines, automatic routers, asyncio workers",
      },
      {
        name: "Relational DB (PostgreSQL)",
        level: 85,
        desc: "B-Tree execution plans, partitions, secure JSONB queries",
      },
      {
        name: "Cloud Pipelines & DevOps",
        level: 80,
        desc: "Multi-stage Docker setups, secure AWS triggers, CD automation",
      },
    ],
  },
  design: {
    title: "Design & UI/UX Systems",
    description:
      "Bridging the gap between code and vector systems. Creating unified typographic hierarchies, dynamic grids, and inspectable design tokens.",
    badge: "VISUAL SYSTEMS",
    gradient: "from-rose-500 to-orange-500",
    color: "rose",
    glowColor: "rgba(244,63,94,0.15)",
    icon: <PaletteIcon className="w-5 h-5 text-rose-400" />,
    items: [
      {
        name: "Figma Prototyping Systems",
        level: 86,
        desc: "Strict auto-layout constraints, nested variable trees",
      },
      {
        name: "Dynamic Layout Redlines",
        level: 90,
        desc: "Fluid pixel layouts, geometric alignment grids",
      },
      {
        name: "Vector Assets & SVG Mathematics",
        level: 88,
        desc: "Mathematical paths, fluid keyframe choreography",
      },
      {
        name: "Interactive Design Systems",
        level: 82,
        desc: "Consistent component states, token maps, standard scales",
      },
    ],
  },
};
