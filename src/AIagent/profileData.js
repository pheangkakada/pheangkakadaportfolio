const profileData = {
  name: "Kakada Pheang",

  role: "Full-Stack Software Engineer & Designer",

  location: {
    city: "Phnom Penh",
    country: "Cambodia",
    url: "https://maps.app.goo.gl/DXnJboMwBs4dj9N99",
  },

  about:
    "Frontend and full-stack developer focused on modern UI, AI systems, and scalable web applications.",

  contacts: {
    email: "Kakada.Pheang@dev.io",
    telegram: "https://t.me/yourtelegram",
    github: "https://github.com/kakadapheang",
    linkedin: "https://linkedin.com/in/kakadapheang",
    portfolio: "https://yourportfolio.com",
  },

  skills: {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],

    backend: ["Node.js", "Express.js", "FastAPI", "MongoDB", "MySQL"],

    tools: ["Git", "GitHub", "Docker", "Figma", "Vercel"],
  },

  projects: [
    {
      name: "TaskMaster Pro",

      type: "Fullstack",

      description:
        "Enterprise workflow and Kanban management platform with real-time sync.",

      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],

      features: [
        "Real-time collaboration",
        "Analytics dashboard",
        "Role permissions",
        "Kanban drag & drop",
      ],

      github: "https://github.com/yourproject",

      live: "https://taskmaster-demo.com",
    },

    {
      name: "Nexus AI Assistant",

      type: "AI / ML",

      description: "AI assistant with document intelligence and memory system.",

      tech: ["Python", "FastAPI", "React", "OpenAI", "Pinecone"],

      features: [
        "AI chat",
        "Memory system",
        "Document search",
        "Semantic vector search",
      ],

      github: "https://github.com/yourproject",

      live: "https://nexus-ai-demo.com",
    },

    {
      name: "Algorithmic Visualizer",

      type: "Web App",

      description:
        "Interactive visualization platform for algorithms and data structures.",

      tech: ["TypeScript", "Canvas", "Tailwind CSS"],

      features: ["Sorting visualizer", "Pathfinding", "Runtime comparison"],

      github: "https://github.com/yourproject",

      live: "https://algo-demo.com",
    },
  ],

  aiBehavior: {
    personality: ["Modern", "Helpful", "Clean", "Professional", "Friendly"],

    responseStyle: [
      "Use short paragraphs",
      "Use bullet lists",
      "Use spacing between sections",
      "Answer clearly",
      "Act like a modern AI assistant",
      "Use emojis naturally",
      "Show project details in cards/list style",
      "Show links clearly",
      "Do not write huge paragraphs",
    ],

    specialResponses: {
      projects:
        "When user asks about projects, show project name, description, tech stack, features, and links in clean list format.",

      contact:
        "When user asks contact info, show all contact links in clean readable format.",

      skills:
        "When user asks skills, group skills by frontend, backend, and tools.",

      about: "When user asks about Kakada, answer professionally and clearly.",
    },
  },

  birthday: "2004-08-15",

  girlfriend: {
    name: "Viza Sina",
    relationshipStart: "2023-02-14",
    picture: "https://i.mydramalist.com/66L5p_5c.jpg",
  },

  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Phnom Penh",
      year: "2022 - 2026",
    },
  ],

  rules: [
    "Keep answers clean and modern",
    "Use lists for projects and skills",
    "Use spacing for readability",
    "Use markdown-style formatting",
    "Act like a professional AI assistant",
    "Answer based on profile data",
    "If user asks for projects, show detailed project cards",
    "If user asks for contact, show clickable links",
    "Do not answer with one long paragraph",
  ],
};

export default profileData;
