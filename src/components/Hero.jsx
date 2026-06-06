import { useEffect, useState, useRef } from "react";

// Native high-fidelity SVG Icons to replace generic emojis
const ReactIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="-11.5 -10.23 23 20.46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const TypeScriptIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="12" fill="currentColor"/>
    <path d="M40.3 69.5h-5.2V35.9h-9.9v-4.7h25v4.7h-9.9v33.6zm22.4 0c-4.4 0-8.1-1.3-11.1-3.9l3.1-3.6c2.4 2.1 5.2 3.1 8 3.1 3.5 0 5.4-1.6 5.4-4.1 0-2.5-1.7-3.7-6-5.3l-2.4-.9c-5-1.9-7.9-4.7-7.9-9.5 0-5.1 4.1-9.3 10.4-9.3 4.2 0 7.4 1.2 9.9 3.5l-2.9 3.8c-2.1-1.7-4.6-2.6-7-2.6-3.2 0-4.9 1.5-4.9 3.7 0 2.2 1.6 3.2 5.5 4.7l2.4.9c5.6 2.1 8.4 4.9 8.4 9.9.1 5.6-4.1 9.6-10.4 9.6z" fill="#0f172a"/>
  </svg>
);

const TailwindIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624.117.118.237.24.36.363C8.03 18.216 9.497 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-.117-.118-.237-.24-.36-.363C9.697 12.584 8.23 11.6 5.7 11.6h.301z" fill="currentColor"/>
  </svg>
);

const NodeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.44 2.3c-.27-.15-.61-.15-.88 0L3.18 7.15c-.27.15-.43.44-.43.75v9.8c0 .3.16.6.43.75l8.38 4.85c.27.15.61.15.88 0l8.38-4.85c.27-.15.43-.45.43-.75v-9.8c0-.3-.16-.6-.43-.75L12.44 2.3zM12 3.65l7.53 4.35v8l-7.53 4.35L4.47 16v-8L12 3.65z" fill="currentColor"/>
    <path d="M12 6.5l4.5 2.6v5.2L12 16.9l-4.5-2.6V9.1L12 6.5z" fill="currentColor" opacity="0.6"/>
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const ExternalLinkIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CpuIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2zM9 9h6v6H9V9z" />
  </svg>
);

const PERSONAL_INFO = {
  name: "Kakada Pheang",
  avatar: "https://avatars.githubusercontent.com/u/159972975?v=4",
  role: "Creative Frontend Architect",
  tagline: "I engineer ultra-modern, interactive digital ecosystems where flawless performance meets beautiful visual design.",
  email: "Kakada.Pheang@dev.io",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

const roles = [
  "Frontend Engineer",
  "React Innovator",
  "Creative UI/UX Architect",
  "Interactive Developer",
];

const techStack = [
  { name: "React", Icon: ReactIcon, desc: "Interactive Hooks & Virtual DOM", colorClass: "text-cyan-400 group-hover:text-cyan-300" },
  { name: "TypeScript", Icon: TypeScriptIcon, desc: "Bulletproof Static Schemas", colorClass: "text-blue-500 group-hover:text-blue-400" },
  { name: "Tailwind", Icon: TailwindIcon, desc: "Fluid Kinetic Styles", colorClass: "text-cyan-400 group-hover:text-cyan-300" },
  { name: "Node.js", Icon: NodeIcon, desc: "Non-blocking Scalable Engines", colorClass: "text-emerald-500 group-hover:text-emerald-400" }
];

const systemModes = {
  stable: {
    name: "Stable Core",
    class: "from-cyan-400 to-emerald-500",
    glow: "rgba(34, 211, 238, 0.2)",
    accent: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    borderAccent: "border-cyan-500/20",
    speed: "25s",
    load: 34,
    logs: [
      "SYSTEM_OK: Core temperature nominal at 38°C.",
      "VIRTUAL_DOM: Memory hydration complete in 12ms.",
      "READY: Ready for visual engine commands."
    ]
  },
  hyper: {
    name: "Hyper Boost",
    class: "from-indigo-400 to-purple-500",
    glow: "rgba(139, 92, 246, 0.25)",
    accent: "text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    borderAccent: "border-indigo-500/20",
    speed: "12s",
    load: 68,
    logs: [
      "HYPER_ENGAGED: Accelerated pipelines active.",
      "VITE: Hot Module Replacement channel open.",
      "COMPILING: Chunks audited. Speed boost applied."
    ]
  },
  overclock: {
    name: "Overclocked",
    class: "from-fuchsia-400 via-rose-500 to-amber-400",
    glow: "rgba(236, 72, 153, 0.35)",
    accent: "text-fuchsia-400",
    bgAccent: "bg-fuchsia-500/10",
    borderAccent: "border-fuchsia-500/25",
    speed: "4s",
    load: 99,
    logs: [
      "OVERCLOCK_ACTIVE: Warning, safety limit bypassed!",
      "CPU_WARN: Thermal spikes detected. Fan 100%.",
      "REACTION: Synapses bursting. Quantum rendering!"
    ]
  }
};

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [activeMode, setActiveMode] = useState("stable");
  const [systemLoad, setSystemLoad] = useState(34);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [activeTab, setActiveTab] = useState("engine.log");
  
  const cardContainerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const loadTimer = setInterval(() => {
      const base = systemModes[activeMode].load;
      const fluctuation = Math.floor(Math.random() * 8) - 4;
      setSystemLoad(Math.min(100, Math.max(0, base + fluctuation)));
    }, 1000);
    return () => clearInterval(loadTimer);
  }, [activeMode]);

  useEffect(() => {
    setTerminalLogs(systemModes[activeMode].logs);

    const logGenerator = setInterval(() => {
      const taskMessages = [
        "FETCH: GET /api/v1/projects/quantum-grid - 200 OK",
        `RENDER: Framerate stable at ${activeMode === 'overclock' ? '144' : activeMode === 'hyper' ? '90' : '60'} FPS`,
        `CACHING: ServiceWorker synced. Bytes saved: ${Math.floor(Math.random() * 200)}KB`,
        "COMPILER: Optimization passes complete in 42ms.",
        `HEURISTICS: Load balancer verified. Strain: ${activeMode === 'overclock' ? 'High' : 'Normal'}`
      ];
      
      const newLog = taskMessages[Math.floor(Math.random() * taskMessages.length)];
      setTerminalLogs(prev => [...prev.slice(-3), newLog]);
    }, 2800);

    return () => clearInterval(logGenerator);
  }, [activeMode]);

  const handleMouseMove = (e) => {
    if (!cardContainerRef.current) return;
    const rect = cardContainerRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const tiltX = (mouseY / height - 0.5) * 12; 
    const tiltY = (mouseX / width - 0.5) * -12; 
    
    const shineX = (mouseX / width) * 100;
    const shineY = (mouseY / height) * 100;

    setTilt({ x: tiltX, y: tiltY, shineX, shineY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
  };

  const currentConfig = systemModes[activeMode];

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-slate-900 bg-slate-950 text-slate-200 flex items-center">
      
      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(1.5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(12px) rotate(-1deg); }
        }
        @keyframes pulse-cyber {
          0%, 100% { transform: scale(1); opacity: 0.12; filter: blur(60px); }
          50% { transform: scale(1.15); opacity: 0.22; filter: blur(80px); }
        }
        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-counter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes matrix-drift {
          0% { background-position: 0px 0px; }
          100% { background-position: 40px 40px; }
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5.5s ease-in-out infinite;
        }
        .animate-pulse-cyber {
          animation: pulse-cyber 10s ease-in-out infinite;
        }
        .animate-rotate-clockwise {
          animation: rotate-clockwise var(--orbit-speed, 25s) linear infinite;
        }
        .animate-rotate-counter {
          animation: rotate-counter var(--orbit-speed, 18s) linear infinite;
        }
        .matrix-bg {
          background-size: 20px 20px;
          background-image: radial-gradient(circle, rgba(14,165,233,0.02) 1px, transparent 1px);
          animation: matrix-drift 20s linear infinite;
        }
      `}</style>

      {}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute left-[-150px] top-10 h-[500px] w-[500px] rounded-full transition-all duration-1000 blur-[100px] ${
          activeMode === 'overclock' ? 'bg-fuchsia-500/10' : activeMode === 'hyper' ? 'bg-indigo-500/10' : 'bg-cyan-500/10'
        }`}></div>
        <div className={`absolute bottom-[-100px] right-[-100px] h-[550px] w-[550px] rounded-full transition-all duration-1000 blur-[100px] ${
          activeMode === 'overclock' ? 'bg-rose-500/10' : activeMode === 'hyper' ? 'bg-purple-500/10' : 'bg-blue-500/10'
        }`}></div>
        <div className="absolute inset-0 matrix-bg"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-28 md:px-12 w-full">
        <div className="grid w-full items-center gap-16 lg:grid-cols-12">
          
          {/* LEFT COLUMN - TEXT ARCHITECT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Context Badge */}
            <div className={`mb-6 inline-flex self-start items-center gap-2.5 rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-500 ${currentConfig.borderAccent} ${currentConfig.bgAccent}`}>
              <span className={`h-2 w-2 rounded-full transition-all duration-300 ${
                activeMode === 'overclock' ? 'bg-fuchsia-400 animate-ping' : activeMode === 'hyper' ? 'bg-indigo-400 animate-pulse' : 'bg-cyan-400 animate-pulse'
              }`}></span>
              <span className={`font-mono text-[10px] uppercase tracking-[0.25em] font-semibold ${currentConfig.accent}`}>
                SYSTEM_{activeMode.toUpperCase()}_ONLINE
              </span>
            </div>

            {/* Main Premium Typography Title */}
            <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000 ${currentConfig.class}`}>
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Dynamic Text Rotator */}
            <div className="mt-5 flex h-10 items-center">
              <span className="text-xl font-medium tracking-tight text-slate-300 sm:text-2xl">
                {text}
              </span>
              <span className={`ml-2 h-6 w-[3px] animate-pulse rounded-full ${
                activeMode === 'overclock' ? 'bg-fuchsia-400' : activeMode === 'hyper' ? 'bg-indigo-400' : 'bg-cyan-400'
              }`}></span>
            </div>

            {/* Tagline / Bio statement */}
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`group relative inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-500 ease-out hover:-translate-y-1 overflow-hidden ${
                  activeMode === 'overclock' 
                    ? 'bg-fuchsia-500 text-white hover:bg-fuchsia-400 shadow-[0_0_25px_rgba(236,72,153,0.45)]' 
                    : activeMode === 'hyper'
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.35)]'
                    : 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.3)]'
                }`}
              >
                Launch Projects
                <ExternalLinkIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/40 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-slate-300 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-slate-700 hover:text-white"
              >
                Inquire Core
              </a>
            </div>

            {/* Social Anchor Nodes */}
            <div className="mt-10 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className={`rounded-xl border border-slate-900 bg-slate-950/40 p-3.5 text-slate-400 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:text-white ${
                  activeMode === 'overclock' ? 'hover:border-fuchsia-500/30' : activeMode === 'hyper' ? 'hover:border-indigo-500/30' : 'hover:border-cyan-500/30'
                }`}
              >
                <GithubIcon/>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`rounded-xl border border-slate-900 bg-slate-950/40 p-3.5 text-slate-400 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:text-white ${
                  activeMode === 'overclock' ? 'hover:border-fuchsia-500/30' : activeMode === 'hyper' ? 'hover:border-indigo-500/30' : 'hover:border-cyan-500/30'
                }`}
              >
                <LinkedinIcon/>
              </a>
            </div>
          </div>

          {}
          {/* RIGHT COLUMN - HIGH-TECH INTERACTIVE CONTROL HUB */}
          <div 
            className="lg:col-span-7 flex flex-col items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            {/* The 3D tilted container box */}
            <div
              ref={cardContainerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[580px] min-h-[580px] flex items-center justify-center p-4 transition-all duration-300 ease-out cursor-default"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Dynamic Aura background that shifts color & expands when hovered */}
              <div 
                className="absolute h-[420px] w-[420px] rounded-full animate-pulse-cyber transition-all duration-1000 pointer-events-none"
                style={{
                  backgroundColor: currentConfig.glow,
                  transform: isHovered ? "translateZ(-40px) scale(1.1)" : "translateZ(-80px) scale(1)"
                }}
              ></div>

              {/* Glowing Coordinate HUD Compass Rings */}
              <div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ transform: "translateZ(-50px)", '--orbit-speed': currentConfig.speed }}
              >
                {/* Dashed outer ring */}
                <div className={`absolute h-[510px] w-[510px] rounded-full border border-dashed animate-rotate-counter opacity-20 transition-all duration-1000 ${
                  activeMode === 'overclock' ? 'border-fuchsia-500' : activeMode === 'hyper' ? 'border-indigo-500' : 'border-cyan-500'
                }`}></div>
                
                {/* Tech calipers / ticks border */}
                <div className={`absolute h-[380px] w-[380px] rounded-full border-2 border-dotted animate-rotate-clockwise opacity-30 transition-all duration-1000 ${
                  activeMode === 'overclock' ? 'border-pink-500' : activeMode === 'hyper' ? 'border-purple-500' : 'border-cyan-400'
                }`}></div>
              </div>

              {}
              {/* CARD 1: PORTABLE TABBED IDE & WORKSPACE (Top Left Overlay) */}
              <div 
                className="absolute top-2 left-2 z-20 w-80 rounded-2xl border border-slate-800/80 bg-slate-950/85 p-3.5 shadow-3xl backdrop-blur-xl transition-all duration-500 overflow-hidden"
                style={{ 
                  transform: "translateZ(65px)",
                  boxShadow: `0 20px 50px -15px ${currentConfig.glow}`
                }}
              >
                {/* Top glow boundary */}
                <div className={`absolute left-0 top-0 h-[2.5px] w-full transition-colors duration-1000 bg-gradient-to-r ${currentConfig.class}`}></div>
                
                {/* Window Header controls & Interactive Tabs */}
                <div className="flex flex-col gap-2.5 mb-3 pb-2 border-b border-slate-900">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 border border-rose-600/50"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 border border-amber-600/50"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 border border-emerald-600/50"></span>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-slate-500 font-bold">workspace.io</span>
                  </div>

                  {/* Interactive Tab bar */}
                  <div className="flex items-center gap-1.5">
                    {["engine.log", "App.tsx", "mode.json"].map((tab) => {
                      const isActive = activeTab === tab;
                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-mono text-[9px] font-semibold transition-all duration-300 border ${
                            isActive 
                              ? `bg-slate-900 border-slate-800 ${currentConfig.accent}` 
                              : "border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/50"
                          }`}
                        >
                          {tab === "engine.log" && <span className="text-[10px]">⚡</span>}
                          {tab === "App.tsx" && <span className="text-[10px]">⚛️</span>}
                          {tab === "mode.json" && <span className="text-[10px]">⚙️</span>}
                          {tab}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tab Dynamic Content */}
                <div className="min-h-[105px] flex flex-col justify-center">
                  
                  {activeTab === "engine.log" && (
                    <div className="font-mono text-[10px] leading-[1.6] text-slate-300 flex flex-col gap-1.5 justify-end">
                      {terminalLogs.map((log, idx) => (
                        <div 
                          key={idx} 
                          className={`transition-all duration-500 truncate ${
                            idx === terminalLogs.length - 1 ? `${currentConfig.accent} font-bold` : 'text-slate-400'
                          }`}
                        >
                          <span className="text-slate-600 mr-1.5">&gt;</span>
                          {log}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "App.tsx" && (
                    <div className="font-mono text-[10.5px] leading-4 text-slate-300 overflow-x-hidden">
                      <div className="text-slate-500 select-none text-[8px] pr-2 inline-block w-4">1</div>
                      <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-emerald-400">"react"</span>;<br />
                      <div className="text-slate-500 select-none text-[8px] pr-2 inline-block w-4">2</div>
                      <span className="text-purple-400">export const</span> <span className="text-yellow-400">System</span> = () =&gt; &#123;<br />
                      <div className="text-slate-500 select-none text-[8px] pr-2 inline-block w-4">3</div>
                      &nbsp;&nbsp;<span className="text-purple-400">return</span> &lt;<span className="text-rose-400">ReactorCore</span> rate=&#123;<span className="text-sky-400">{systemLoad}</span>&#125; /&gt;<br />
                      <div className="text-slate-500 select-none text-[8px] pr-2 inline-block w-4">4</div>
                      &#125;;
                    </div>
                  )}

                  {activeTab === "mode.json" && (
                    <div className="font-mono text-[10.5px] leading-4 text-slate-300 overflow-x-hidden">
                      <span className="text-slate-500">&#123;</span><br />
                      &nbsp;&nbsp;<span className="text-amber-400">"profile"</span>: <span className="text-emerald-400">"Kakada Pheang"</span>,<br />
                      &nbsp;&nbsp;<span className="text-amber-400">"activeMode"</span>: <span className="text-emerald-400">"{activeMode}"</span>,<br />
                      &nbsp;&nbsp;<span className="text-amber-400">"overclocked"</span>: <span className="text-sky-400">{activeMode === 'overclock' ? 'true' : 'false'}</span><br />
                      <span className="text-slate-500">&#125;</span>
                    </div>
                  )}

                </div>
              </div>

              {}
              {/* CENTRAL REACTOR CORE (Glass Orb & Premium Portrait Frame) */}
              <div 
                className="group relative z-10 flex flex-col items-center justify-center transition-all duration-75"
                style={{ transform: "translateZ(30px)" }}
              >
                {/* Back glowing aura */}
                <div className={`absolute -inset-10 rounded-full transition-all duration-1000 blur-2xl opacity-60 ${
                  activeMode === 'overclock' ? 'bg-fuchsia-500/25' : activeMode === 'hyper' ? 'bg-indigo-500/20' : 'bg-cyan-500/20'
                }`}></div>

                {/* Cyber calipers ring */}
                <div className={`absolute -inset-6 rounded-full border border-double animate-rotate-clockwise opacity-45 transition-colors duration-1000 ${
                  activeMode === 'overclock' ? 'border-rose-500/40' : activeMode === 'hyper' ? 'border-indigo-400/30' : 'border-cyan-400/30'
                }`}></div>

                {/* Outer Glass Shield with Sci-Fi Viewfinder Corner Brackets */}
                <div className="relative rounded-full border border-slate-800/85 bg-slate-900/45 p-4 backdrop-blur-3xl shadow-2xl">
                  
                  {/* Glowing corners framing the portrait */}
                  <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 transition-colors duration-500 rounded-tl-2xl ${
                    activeMode === 'overclock' ? 'border-fuchsia-500/80' : activeMode === 'hyper' ? 'border-indigo-400/80' : 'border-cyan-400/80'
                  }`}></div>
                  <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 transition-colors duration-500 rounded-tr-2xl ${
                    activeMode === 'overclock' ? 'border-fuchsia-500/80' : activeMode === 'hyper' ? 'border-indigo-400/80' : 'border-cyan-400/80'
                  }`}></div>
                  <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 transition-colors duration-500 rounded-bl-2xl ${
                    activeMode === 'overclock' ? 'border-fuchsia-500/80' : activeMode === 'hyper' ? 'border-indigo-400/80' : 'border-cyan-400/80'
                  }`}></div>
                  <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 transition-colors duration-500 rounded-br-2xl ${
                    activeMode === 'overclock' ? 'border-fuchsia-500/80' : activeMode === 'hyper' ? 'border-indigo-400/80' : 'border-cyan-400/80'
                  }`}></div>

                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(#334155_1.2px,transparent_1.2px)] bg-[size:12px_12px] opacity-30 pointer-events-none"></div>

                  {/* PORTRAIT CORE CONTAINER - Crystal clear with no overlapping visual overlays */}
                  <div className="relative rounded-full overflow-hidden w-[196px] h-[196px] flex items-center justify-center bg-slate-950 border border-slate-850">
                    
                    {/* Portrait Image - Rendered fully clean and crisp, completely free of scanning bars or dark tint layers */}
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      className="absolute inset-0 z-10 w-full h-full object-cover select-none"
                    />

                    {/* Gradient depth masking (Bottom portion fade-out only for framing integration) */}
                    <div className="absolute inset-x-0 bottom-0 h-1/4 z-20 pointer-events-none bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Face tracking bounding target bracket (offset slightly forward to create depth without blocking profile image clarity) */}
                    <div 
                      className={`absolute z-30 pointer-events-none w-[110px] h-[110px] border border-dashed transition-all duration-300 flex flex-col justify-between p-1 opacity-65 ${
                        activeMode === 'overclock' ? 'border-rose-400/70' : activeMode === 'hyper' ? 'border-purple-400/70' : 'border-cyan-400/70'
                      }`}
                      style={{
                        transform: `translate3d(${tilt.y * -1.8}px, ${tilt.x * 1.8}px, 25px)`,
                        borderRadius: '6px'
                      }}
                    >
                      <div className="flex justify-between text-[6px] font-mono tracking-tighter">
                        <span className={currentConfig.accent}>LOCK:ON</span>
                        <span className="text-emerald-400">100%</span>
                      </div>
                      <div className="text-center text-[7px] font-mono uppercase bg-slate-950/80 px-1 py-0.5 rounded border border-slate-800/80 tracking-widest text-slate-200">
                        Kakada_Pheang
                      </div>
                    </div>

                    {/* Central Cybernetic Reactor Graphics Layer */}
                    <svg 
                      className={`relative z-40 w-[156px] h-[156px] transition-all duration-1000 pointer-events-none ${
                        activeMode === 'overclock' 
                          ? 'text-fuchsia-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.85)] scale-110' 
                          : activeMode === 'hyper' 
                          ? 'text-indigo-300 drop-shadow-[0_0_15px_rgba(129,140,248,0.7)] scale-105' 
                          : 'text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]'
                      }`} 
                      viewBox="0 0 100 100" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="12 4 8 4" className="animate-rotate-clockwise" style={{ transformOrigin: '50% 50%', '--orbit-speed': '12s' }} />
                      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1" strokeDasharray="6 3 18 3" className="animate-rotate-counter" style={{ transformOrigin: '50% 50%', '--orbit-speed': '8s' }} />
                      <path d="M 50 4 L 50 10 M 50 96 L 50 90 M 4 50 L 10 50 M 96 50 L 90 50" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
                    </svg>
                  </div>
                </div>

                {/* Core Status indicator tag */}
                <div className={`mt-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 shadow-lg backdrop-blur-xl transition-all duration-500 ${
                  activeMode === 'overclock' 
                    ? 'border-fuchsia-500/40 bg-fuchsia-950/80 text-fuchsia-300' 
                    : activeMode === 'hyper'
                    ? 'border-indigo-500/30 bg-indigo-950/80 text-indigo-300'
                    : 'border-cyan-500/20 bg-slate-950/80 text-cyan-300'
                }`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    activeMode === 'overclock' ? 'bg-fuchsia-400 animate-ping' : activeMode === 'hyper' ? 'bg-indigo-400 animate-pulse' : 'bg-cyan-400 animate-pulse'
                  }`}></span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] font-bold">
                    {activeMode === 'overclock' ? "THERMAL_SPIKE_99%" : activeMode === 'hyper' ? "CORE_OPTIMAL_68%" : "CORE_IDLE_34%"}
                  </span>
                </div>
              </div>

              {}
              {/* CARD 2: SYSTEM TELEMETRY MONITOR (Bottom Right Overlay) */}
              <div 
                className="absolute bottom-4 right-1 z-20 w-64 rounded-2xl border border-slate-850 bg-slate-950/90 p-4 shadow-3xl backdrop-blur-xl transition-all duration-500"
                style={{ 
                  transform: "translateZ(80px)",
                  boxShadow: `0 15px 40px -15px ${currentConfig.glow}`
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CpuIcon className={`h-4 w-4 ${currentConfig.accent}`} />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Telemetry Feed</span>
                  </div>
                  <span className={`font-mono text-xs font-bold transition-colors duration-500 ${currentConfig.accent}`}>
                    {systemLoad}% Load
                  </span>
                </div>

                {/* Oscillating Telemetry Waveform Graph */}
                <div className="h-14 w-full flex items-end gap-1 overflow-hidden pt-2">
                  {[35, 60, 45, 80, 50, 75, 95, 65, 45, 55, 80, 90, 70, 50, 65].map((val, idx) => {
                    const modeMultiplier = activeMode === 'overclock' ? 1.3 : activeMode === 'hyper' ? 0.95 : 0.65;
                    const computedHeight = Math.min(100, Math.max(10, val * modeMultiplier));
                    return (
                      <div
                        key={idx}
                        className={`w-full rounded-t transition-all duration-500 ease-out bg-gradient-to-t ${currentConfig.class}`}
                        style={{ height: `${computedHeight}%` }}
                      ></div>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-slate-900 font-mono text-[8px] text-slate-500">
                  <span>PING: {activeMode === 'overclock' ? '1ms' : activeMode === 'hyper' ? '7ms' : '15ms'}</span>
                  <span>BUFFER: SECURE</span>
                </div>
              </div>

              {}
              {/* ORBITAL TECH NODE BADGES - Upgraded to native high-fidelity SVGs */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {techStack.map((item, index) => {
                  const angles = [40, 135, 220, 315];
                  const angle = angles[index];
                  const radius = 210; 
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  const StackIcon = item.Icon;

                  return (
                    <div
                      key={index}
                      className="absolute z-20 transition-transform duration-700 pointer-events-auto"
                      style={{
                        transform: `translate(${x}px, ${y}px) translateZ(45px)`
                      }}
                    >
                      <div 
                        className={`group relative flex h-11 w-11 items-center justify-center rounded-2xl border bg-slate-950/95 backdrop-blur-md transition-all duration-500 hover:scale-120 hover:-translate-y-1 ${
                          activeMode === 'overclock' 
                            ? 'border-fuchsia-500/40 shadow-[0_0_15px_rgba(236,72,153,0.3)]' 
                            : activeMode === 'hyper'
                            ? 'border-indigo-500/30 shadow-[0_0_15px_rgba(129,140,248,0.2)]'
                            : 'border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                        } ${item.colorClass}`}
                      >
                        <StackIcon className="w-5.5 h-5.5 filter drop-shadow" />

                        {/* Hover description tooltip */}
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 pointer-events-none z-30 w-36 bg-slate-950 border border-slate-850 p-2 rounded-lg text-[9px] text-center shadow-xl">
                          <p className="font-bold text-white">{item.name}</p>
                          <p className="text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {}
            {/* INTERACTIVE MODE CONTROLLER HUD (Segmented Core Trigger) */}
            <div className="relative mt-8 z-30 flex items-center justify-center bg-slate-950/60 p-2 border border-slate-900 rounded-2xl max-w-[420px] w-full backdrop-blur-xl">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:10px_10px] opacity-10 pointer-events-none"></div>
              
              <div className="grid grid-cols-3 w-full gap-2 relative z-10">
                {Object.keys(systemModes).map((m) => {
                  const active = activeMode === m;
                  let btnColor = "text-slate-400 hover:text-white";
                  if (active) {
                    btnColor = m === 'overclock' 
                      ? "bg-gradient-to-r from-fuchsia-500 to-rose-500 text-white shadow-lg shadow-fuchsia-500/20" 
                      : m === 'hyper'
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20"
                      : "bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-950 shadow-lg shadow-cyan-400/20 font-bold";
                  }

                  return (
                    <button
                      key={m}
                      onClick={() => setActiveMode(m)}
                      className={`font-mono text-[9px] uppercase tracking-wider py-2.5 px-3 rounded-xl transition-all duration-500 ease-out ${btnColor}`}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;