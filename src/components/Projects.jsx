import { useMemo, useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { ExternalLinkIcon, GithubIcon } from "./icons";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiGo,
  SiRedis,
  SiDocker,
  SiRust,
  SiGooglegemini,
  SiSharp,
  SiMysql,
  SiRailway,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiRender,
  SiFlutter,
} from "react-icons/si";

const techIconMap = {
  //Portfolio AI Assistant Icon
  "React.js": <SiReact className="h-4 w-4 text-cyan-400" />,
  "Node.js": <SiNodedotjs className="h-4 w-4 text-green-500" />,
  "LLMs": <SiGooglegemini className="h-4 w-4 text-orange-400" />,
  "Tailwind CSS": <SiTailwindcss className="h-4 w-4 text-sky-400" />,

  //Classroom Management Icon
  "C#": <SiSharp className="h-3 w-3 text-[#02d2f7]" />,
  "MySQL": <SiMysql className="h-5 w-5 text-[#4479A1]" />,
  "Railway": <SiRailway className="h-4 w-4 text-white" />,

  //Espresso POS icon"
  "HTML5": <SiHtml5 className="h-4 w-4 text-orange-400" />,
  "CSS": <SiCss className="h-4 w-4 text-blue-500" />,
  "Javascript": <SiJavascript className="h-4 w-4 text-yellow-300" />,
  "Render": <SiRender className="h-4 w-4 text-white" />,
  
  //Brain App Icon
  "Flutter": <SiFlutter className="h-4 w-4 text-blue-600" />,


   MongoDB: <SiMongodb className="h-4 w-4 text-emerald-500" />,
  "Next.js": <SiNextdotjs className="h-4 w-4 text-slate-900 dark:text-white" />,
  "Firebase Auth": <SiFirebase className="h-4 w-4 text-yellow-400" />,
  TypeScript: <SiTypescript className="h-4 w-4 text-blue-500" />,
  Python: <SiPython className="h-4 w-4 text-yellow-400" />,
  FastAPI: <SiFastapi className="h-4 w-4 text-emerald-400" />,
  Go: <SiGo className="h-4 w-4 text-cyan-500" />,
  Redis: <SiRedis className="h-4 w-4 text-red-500" />,
  Docker: <SiDocker className="h-4 w-4 text-blue-400" />,
  Rust: <SiRust className="h-4 w-4 text-orange-400" />,



};

const categories = [
  "All",
  "Fullstack",
  "Front-End",
  "Mobile App",
  "Windows Form",
  "Under Development"
];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 42, scale: 0.985 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.985,
    transition: { duration: 0.24, ease: "easeOut" },
  },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;

    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      {/* BG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            title="Selected Projects"
            description="A collection of modern products, scalable systems, and immersive digital experiences."
            className="mb-14"
          />
        </motion.div>

        {/* FILTER */}
        <motion.div
          className="mb-16 flex justify-center"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <div
            className="
      flex flex-wrap gap-2
      rounded-3xl
      border border-slate-800
      bg-slate-950/70
      p-2
      backdrop-blur-xl
    "
          >
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {active && (
                    <motion.div
                      layoutId="activeFilter"
                      className="
                absolute inset-0
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
              "
                    />
                  )}

                  <span
                    className={`
              relative z-10 block
              px-6 py-3
              text-xs font-bold uppercase tracking-wider
              ${active ? "text-white" : "text-slate-400"}
            `}
                  >
                    {category}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* CLEAN MODERN LAYOUT */}
        <div className="space-y-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                custom={index}
                layout
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                exit="exit"
                className="
                  group relative overflow-hidden
                  rounded-[32px]
                  border border-slate-800/80
                  bg-slate-900/40
                  backdrop-blur-xl
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <div
                  className="
                    grid items-center
                    lg:grid-cols-[420px_1fr]
                  "
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="
                        aspect-[16/11]
                        h-full w-full object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* CATEGORY */}
                    <div className="absolute left-5 top-5">
                      <div className="rounded-full border border-cyan-500/20 bg-slate-950/80 px-4 py-2 backdrop-blur-xl">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 sm:p-8">
                    {/* TOP */}
                    <div
                      className="
                        flex flex-col gap-5
                        border-b border-slate-800/80
                        pb-6

                        xl:flex-row
                        xl:items-start
                        xl:justify-between
                      "
                    >
                      <div className="max-w-2xl">
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                          FEATURED SYSTEM
                        </p>

                        <h3
                          className="
                            text-3xl font-black tracking-tight
                            text-white transition-colors duration-300
                            group-hover:text-cyan-300
                          "
                        >
                          {project.title}
                        </h3>

                        <p className="mt-5 text-sm leading-relaxed text-slate-400">
                          {project.description}
                        </p>
                      </div>

                      {/* STATS */}
                      <div
                        className="
                          grid grid-cols-3 gap-4
                          rounded-3xl border border-slate-800
                          bg-slate-950/70
                          p-5
                          min-w-full

                          sm:min-w-[340px]
                        "
                      >
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
                            PERF
                          </p>

                          <p className="mt-2 font-mono text-sm font-bold text-cyan-300">
                            {project.telemetry.performance}
                          </p>
                        </div>

                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
                            LATENCY
                          </p>

                          <p className="mt-2 font-mono text-sm font-bold text-slate-300">
                            {project.telemetry.queryLatency}
                          </p>
                        </div>

                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
                            BUNDLE
                          </p>

                          <p className="mt-2 font-mono text-sm font-bold text-slate-300">
                            {project.telemetry.bundleSize}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* TECH STACK */}
                    <div className="mt-6">
                      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                        TECHNOLOGIES
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <div
                            key={tech}
                            className="
                              flex items-center gap-2
                              rounded-2xl
                              border border-slate-800
                              bg-slate-950/70
                              px-4 py-2.5
                              text-sm text-slate-300
                            "
                          >
                            {techIconMap[tech]}

                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
                              relative z-20
                              cursor-pointer
                              flex flex-1 items-center justify-center gap-2
                              rounded-2xl
                              bg-gradient-to-r from-cyan-500 to-blue-500
                              px-5 py-4
                              font-mono text-xs font-bold uppercase tracking-[0.18em]
                              text-white
                              transition-all duration-300
                              hover:scale-[1.02]
                              hover:shadow-lg hover:shadow-cyan-500/25
                            "
                      >
                        Live Preview
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>

                      <a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  className="
    relative z-20
    cursor-pointer

    flex flex-1 items-center justify-center gap-2
    rounded-2xl
    border border-slate-700
    bg-slate-950/80
    px-5 py-4
    font-mono text-xs font-bold uppercase tracking-[0.18em]
    text-slate-300
    transition-all duration-300

    hover:border-cyan-500/30
    hover:text-cyan-300
  "
>
  <GithubIcon className="h-4 w-4" />
  Source Code
</a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
