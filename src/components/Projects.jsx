import { useState } from "react";
import { PROJECTS } from '../data/portfolioData';
import { ExternalLinkIcon, GithubIcon } from './icons';
import SectionHeader from './SectionHeader';

// Import the brand icons from react-icons/si (Simple Icons)
import { 
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiNextdotjs, 
  SiFirebase, SiTypescript, SiPython, SiFastapi, SiGo, 
  SiRedis, SiDocker, SiRust 
} from 'react-icons/si';

// Create a mapping dictionary for your tech stack with official brand colors
const techIconMap = {
  "React.js": <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
  "Node.js": <SiNodedotjs className="w-3.5 h-3.5 text-[#339933]" />,
  "MongoDB": <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" />,
  "Tailwind CSS": <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />,
  "Next.js": <SiNextdotjs className="w-3.5 h-3.5 text-white" />,
  "Firebase Auth": <SiFirebase className="w-3.5 h-3.5 text-[#FFCA28]" />,
  "TypeScript": <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" />,
  "Python": <SiPython className="w-3.5 h-3.5 text-[#3776AB]" />,
  "FastAPI": <SiFastapi className="w-3.5 h-3.5 text-[#009688]" />,
  "Go": <SiGo className="w-3.5 h-3.5 text-[#00ADD8]" />,
  "Redis": <SiRedis className="w-3.5 h-3.5 text-[#DC382D]" />,
  "Docker": <SiDocker className="w-3.5 h-3.5 text-[#2496ED]" />,
  "Rust": <SiRust className="w-3.5 h-3.5 text-[#DEA584]" />,
  // Add more mappings here if you add new tech to portfolioData.jsx
};

const categories = ["All", "Fullstack", "Frontend", "Backend", "AI / ML", "Web", "Tools"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);

  const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === filter);
  
  const activeProject = PROJECTS.find((project) => project.id === selectedId) || filteredProjects[0] || PROJECTS[0];

  const handleFilterChange = (nextFilter) => {
    setFilter(nextFilter);
    const nextProjects = nextFilter === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === nextFilter);

    if (nextProjects.length > 0 && !nextProjects.some((project) => project.id === selectedId)) {
      setSelectedId(nextProjects[0].id);
    }
  };

  return (
    <section id="projects" className="border-t border-slate-900 bg-slate-950 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          kicker="03 // Projects"
          title="My Projects"
          description="A simple overview of my work with preview images, technologies, and quick links."
          className="mb-10"
        />

        <div className="mb-8 flex gap-2 overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-900/30 p-2">
          {categories.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 font-mono text-xs transition-colors ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-300 border border-cyan-500/30"
                    : "border border-transparent text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mb-10 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/30 text-left shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-slate-950 p-4">
              <img
                src={activeProject.previewImage}
                alt={`${activeProject.title} preview`}
                className="aspect-[16/10] w-full rounded-xl object-cover"
                loading="eager"
              />
            </div>

            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cyan-800/50 bg-cyan-950/50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    {activeProject.category}
                  </span>
                  <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {activeProject.status.replace("_", " ")}
                  </span>
                </div>

                <h3 className="font-mono text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl">
                  {activeProject.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-slate-400 md:text-base">
                  {activeProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.tech.map((tech) => (
                    <span key={tech} className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 font-mono text-xs text-slate-400 shadow-sm">
                      {techIconMap[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-slate-800 pt-6 sm:grid-cols-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Perf</p>
                  <p className="mt-1 font-mono text-base font-bold text-cyan-400">{activeProject.telemetry.performance}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Coverage</p>
                  <p className="mt-1 font-mono text-base font-bold text-emerald-400">{activeProject.telemetry.coverage}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Latency</p>
                  <p className="mt-1 font-mono text-base font-bold text-slate-300">{activeProject.telemetry.queryLatency}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Size</p>
                  <p className="mt-1 font-mono text-base font-bold text-slate-300">{activeProject.telemetry.bundleSize}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-cyan-300 transition-colors hover:bg-cyan-400/15 hover:text-cyan-200"
                >
                  Live Preview
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-200"
                >
                  <GithubIcon className="h-4 w-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between text-left">
          <h3 className="font-mono text-lg font-bold text-white md:text-xl">All Projects</h3>
          <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">
            {filteredProjects.length} Projects
          </span>
        </div>

       {/* Desktop */}
<div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6">
  {filteredProjects.map((project) => {
    const isSelected = selectedId === project.id;

    return (
      <button
        key={project.id}
        onClick={() => setSelectedId(project.id)}
        className={`group overflow-hidden rounded-2xl border bg-slate-900/30 text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900/45 ${
          isSelected
            ? "border-cyan-400/70 shadow-cyan-950/30"
            : "border-slate-800"
        }`}
      >
        <div className="relative overflow-hidden border-b border-slate-800 bg-slate-950">
          <img
            src={project.previewImage}
            alt={`${project.title} thumbnail`}
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-slate-700 bg-slate-950/85 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-300 backdrop-blur">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-start justify-between gap-4">
            <h4 className="font-mono text-lg font-bold leading-tight text-white transition-colors group-hover:text-cyan-300 md:text-xl">
              {project.title}
            </h4>

            <span
              className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${
                isSelected
                  ? "border border-cyan-500/30 bg-cyan-400/10 text-cyan-300"
                  : "bg-slate-950 text-slate-500"
              }`}
            >
              {isSelected ? "Selected" : "View"}
            </span>
          </div>

          <p className="line-clamp-3 font-sans text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-1 font-mono text-[10px] text-slate-400"
              >
                {techIconMap[tech] || null}
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-800 pt-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                Perf
              </p>

              <p className="mt-1 font-mono text-xs font-bold text-cyan-400">
                {project.telemetry.performance}
              </p>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                Latency
              </p>

              <p className="mt-1 font-mono text-xs font-bold text-slate-300">
                {project.telemetry.queryLatency}
              </p>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                Status
              </p>

              <p className="mt-1 truncate font-mono text-xs font-bold text-slate-400">
                {project.status.replace("_", " ")}
              </p>
            </div>
          </div>
        </div>
      </button>
    );
  })}
</div>

{/* Mobile Circular Gallery */}
<div className="md:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4">
  {filteredProjects.map((project) => (
    <div
      key={project.id}
      onClick={() => setSelectedId(project.id)}
      className={`
        snap-center
        shrink-0
        w-[88vw]
        rounded-3xl
        overflow-hidden
        border
        transition-all
        duration-300
        ${
          selectedId === project.id
            ? "border-cyan-400 shadow-lg shadow-cyan-500/20"
            : "border-slate-800"
        }
      `}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={project.previewImage}
          alt={project.title}
          className="h-[240px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-slate-900 p-5">
        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-800 px-2 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-black"
          >
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl border border-slate-700 px-4 py-3 text-center text-sm text-white"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Projects;
