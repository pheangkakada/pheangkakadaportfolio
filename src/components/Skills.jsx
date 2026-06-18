import { Cpu, Database, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiLaravel,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiRender,
  SiCss,
  SiHtml5,
  SiXcode,
  SiOpenai,
  SiDocker,
  SiSpring,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import ScrollReveal, { revealItem, staggerContainer } from "./ScrollReveal";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const learningNow = [
  {
    name: "CSharp",
    icon: <TbBrandCSharp className="text-blue-400 text-2xl" />
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-sky-400 text-xl" />,
  },
  {
    name: "JAVA",
    icon: <FaJava className="text-orange-400 text-2xl" />,
  },
  {
    name: "Spring Framework",
    icon: <SiSpring className="text-green-400 text-xl" />,
  },
];
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Cpu className="w-8 h-8 text-cyan-400" strokeWidth={1.8} />,
    color: "cyan",
    level: 90,
    skills: [
      {
        name: "React",
        icon: <SiReact className="text-cyan-400 text-xl" />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 className="text-orange-400 text-xl" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 text-xl" />,
      },
      {
        name: "CSS",
        icon: <SiCss className="text-blue-400 text-xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400 text-xl" />,
      },
    ],
  },

  {
    title: "Backend Development",
    icon: <Database className="w-8 h-8 text-indigo-400" strokeWidth={1.8} />,
    color: "indigo",
    level: 82,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500 text-xl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400 text-xl" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-500 text-xl" />,
      },
     
    ],
  },

  {
    title: "UI / UX Design",
    icon: <Palette className="w-8 h-8 text-rose-400" strokeWidth={1.8} />,
    color: "rose",
    level: 78,
    skills: [
      {
        name: "Figma",
        icon: <SiFigma className="text-pink-400 text-xl" />,
      },
      {
        name: "Adobe Photoshop",
        icon: <TbBrandAdobePhotoshop className="text-blue-400 text-2xl" />,
      },
      {
        name: "Design Systems",
        icon: <span className="text-xl">🎨</span>,
      },
      {
        name: "Responsive Design",
        icon: <span className="text-xl">📱</span>,
      },
    ],
  },
];

const extraTools = [
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Render", icon: <SiRender /> },
  { name: "Visual Studio Code", icon: <VscVscode /> },
];

const favoriteStack = [
  {
    name: "React",
    icon: <SiReact className="text-cyan-400 text-xl" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-xl" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 text-xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-xl" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-xl" />,
  },
  {
    name: "ChatGPT API",
    icon: <SiOpenai className="text-white text-xl" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="  relative py-24 ">
      <div className="absolute top-1/4 right-0 w-[32rem] h-[32rem] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="absolute bottom-1/3 left-0 w-[32rem] h-[32rem] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 sm:px-6 lg:px-10 xl:px-12">
        <ScrollReveal>
          <SectionHeader
            title="Skills & Technologies"
            description="Technologies and tools I use to build modern web applications, scalable backend systems and user-focused digital experiences."
            className="mb-14"
          />
        </ScrollReveal>

        {/* Categories */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={revealItem}
              className="group bg-slate-900/40 backdrop-blur-xl
              border border-slate-800 rounded-3xl
              overflow-hidden
              hover:border-slate-700
              hover:-translate-y-2
              transition-all duration-300"
            >
              {/* Top */}
              <div className="p-8 border-b border-slate-800">
                <div
                  className="
  w-16 h-16 rounded-2xl
  bg-slate-950
  border border-slate-800
  flex items-center justify-center
  mb-5
  group-hover:scale-110
  transition-all duration-300
  shadow-lg
"
                >
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-400 text-sm">
                    Overall Proficiency
                  </span>

                  <span className="font-bold text-cyan-400">
                    {category.level}%
                  </span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                    style={{ width: `${category.level}%` }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="p-6">
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
  flex items-center gap-4
  p-4 rounded-2xl
  bg-slate-950/80
  border border-slate-800
  hover:border-cyan-500/30
  hover:translate-x-1
  transition-all duration-300
"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900">
                        {skill.icon}
                      </div>

                      <span className="text-slate-200 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools */}
        <ScrollReveal className="mt-14">
          <h3 className="text-xl font-bold text-white mb-6">
            Development Tools
          </h3>

          <div className="flex flex-wrap gap-4">
            {extraTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3
                px-5 py-3
                rounded-2xl
                bg-slate-900/50
                border border-slate-800"
              >
                <div className="text-xl">{tool.icon}</div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
        {/* Fav Stack */}
        <ScrollReveal className="mt-16 rounded-2xl border border-slate-800/80 p-8">
          <h3 className="text-xl font-bold text-white mb-6">Favorite Stack</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {favoriteStack.map((tech) => (
              <div
                key={tech.name}
                className="
flex flex-col items-center
gap-3
p-5
rounded-2xl
border-slate-800/80 bg-slate-900/30  dark:bg-white/5
border border-slate-200 dark:border-slate-800
hover:border-cyan-500/20
hover:-translate-y-1
transition-all duration-300
"
              >
                {tech.icon}

                <span className="text-sm text-slate-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
        {/* Currently Learning */}
        <ScrollReveal className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6">
            Currently Learning
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {learningNow.map((item) => (
              <div
                key={item.name}
                className="
        flex flex-col items-center
        gap-3
        p-5
        rounded-2xl
        bg-slate-900/30
        border border-slate-800/80
        hover:border-emerald-500/20
        transition-all duration-300
        "
              >
                {item.icon}

                <span className="text-slate-300 text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
        {/* Bottom Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
        >
          <motion.div variants={revealItem} className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400">5+</div>
            <div className="text-slate-400 mt-2">Projects Built</div>
          </motion.div>

          <motion.div variants={revealItem} className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-indigo-400">10+</div>
            <div className="text-slate-400 mt-2">Technologies Used</div>
          </motion.div>

          <motion.div variants={revealItem} className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400">2+</div>
            <div className="text-slate-400 mt-2">Years Learning</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
