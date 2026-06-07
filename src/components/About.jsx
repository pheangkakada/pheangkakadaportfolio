import { useState } from 'react';
import { MILESTONES, PERSONAL_INFO } from '../data/portfolioData';
import { ActivityIcon, ChevronRightIcon, CpuIcon, ShieldAltIcon, TerminalIcon } from './icons';
import SectionHeader from './SectionHeader';

const About = () => {
  const [activeNodeId, setActiveNodeId] = useState(MILESTONES[0].id);
  const activeNode = MILESTONES.find((m) => m.id === activeNodeId) || MILESTONES[0];
  const loadGraphData = [35, 75, 45, 90, 65, 100, 55, 85, 40, 70, 30, 60, 80, 45];

  return (
    <section id="about" className="py-24 bg-slate-950  relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader  
          title="About Me & Education"
          description="A quick look at my academic path, engineering focus, and current software development readiness."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <div className="md:col-span-2 bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-2xl border border-slate-700/50 p-8 shadow-xl relative overflow-hidden group hover:border-cyan-500/50 transition-colors duration-500">
            <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-110">
              <ShieldAltIcon className="w-48 h-48 text-cyan-400" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-[10px] font-mono tracking-widest uppercase mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Primary Directive
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight leading-snug max-w-lg">
                Architecting robust systems at the intersection of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  theory and production.
                </span>
              </h3>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                I am a driven Computer Science major dedicated to mastering complex computational logic, system architectures, and modern full-stack development. By merging academic frameworks with rigorous independent software building, I deploy clean, secure, and production-ready systems.
              </p>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-800/80">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Current Status</span>
                  <span className="text-emerald-400 text-sm font-mono font-bold flex items-center gap-2 mt-1">
                    <ActivityIcon className="w-4 h-4" />
                    Available for Deployment
                  </span>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Readiness</span>
                  <span className="text-cyan-400 text-sm font-mono font-bold flex items-center gap-2 mt-1">
                    <TerminalIcon className="w-4 h-4" />
                    Preparing Systems
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col gap-6">
            <div className="bg-slate-900/60 rounded-2xl border border-slate-700/50 p-6 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-center group hover:border-indigo-500/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
              <h4 className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <CpuIcon className="w-3.5 h-3.5" />
                Operative Intel
              </h4>
              <ul className="space-y-4 relative z-10">
                <li className="flex justify-between items-end border-b border-slate-800/80 pb-2">
                  <span className="text-xs text-slate-500 font-mono">Specialization</span>
                  <span className="text-sm text-slate-300 font-medium text-right font-mono">Full-Stack Arch</span>
                </li>
                <li className="flex justify-between items-end border-b border-slate-800/80 pb-2">
                  <span className="text-xs text-slate-500 font-mono">Network_ID</span>
                  <span className="text-sm text-slate-300 font-medium text-right font-mono">{PERSONAL_INFO.discordUsername}</span>
                </li>
                <li className="flex justify-between items-end pb-2">
                  <span className="text-xs text-slate-500 font-mono">Clearance</span>
                  <span className="text-sm text-indigo-300 font-medium font-mono text-right">Level-3 (Dev)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-cyan-950 to-indigo-950 rounded-2xl border border-cyan-800/50 p-6 shadow-xl shadow-cyan-900/20 relative overflow-hidden flex-1 flex flex-col justify-center group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full group-hover:bg-cyan-500/30 transition-colors"></div>

              <div className="relative z-10">
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 border border-cyan-400 rounded-sm flex items-center justify-center">
                    <span className="w-0.5 h-0.5 bg-cyan-400"></span>
                  </span>
                  Target Placement
                </div>
                <div className="text-xl font-bold text-white leading-tight drop-shadow-md">
                  Summer 2027 <br />
                  <span className="text-cyan-300 font-mono text-[17px] font-medium tracking-tight mt-1 inline-block">
                    Software Engineer Intern
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-slate-900/30 border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-2xl text-left">
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 p-4 text-[9px] font-mono text-cyan-400/40 tracking-widest">
              TELEMETRY_INSPECTOR_V4.0
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 border-b border-slate-800/80 pb-5 mb-6">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-700/80 text-cyan-400 shadow-inner relative group">
                  <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CpuIcon className="w-6 h-6 relative z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-widest">SYSTEM DIAGNOSTICS</span>
                  <h3 className="text-lg md:text-xl font-bold font-mono text-white leading-none mt-1 shadow-black drop-shadow-md">
                    Cognitive HUD Engine
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
                {Object.entries(activeNode.specStats).map(([key, value]) => {
                  const formatName = key.replace(/([A-Z])/g, " $1").trim();
                  const radius = 24;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset = circumference - (value / 100) * circumference;

                  return (
                    <div key={key} className="flex flex-col items-center bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 shadow-inner group">
                      <div className="relative w-16 h-16 flex items-center justify-center mb-3">
                        <svg className="w-full h-full transform -rotate-90 origin-center absolute inset-0">
                          <circle cx="32" cy="32" r={radius} fill="transparent" stroke="#0f172a" strokeWidth="3" />
                          <circle cx="32" cy="32" r={radius} fill="transparent" stroke="url(#hudGradient)" strokeWidth="3.5" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                          <defs>
                            <linearGradient id="hudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                              <stop offset="100%" stopColor="#818cf8" stopOpacity="1" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="absolute text-[11px] font-mono font-bold text-white drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] z-10">
                          {value}%
                        </span>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest text-center block leading-tight group-hover:text-cyan-300 transition-colors">
                        {formatName}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-5">
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800/80 font-mono text-xs text-slate-300 shadow-inner relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end justify-between px-2 opacity-20 pointer-events-none">
                    {loadGraphData.map((val, idx) => (
                      <div key={idx} className="w-2 bg-cyan-400 rounded-t-sm" style={{ height: `${val}%` }} />
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[10px] border-b border-slate-800 pb-3 mb-4 relative z-10">
                    <span className="text-slate-500 tracking-widest">KPI_VERIFICATION_KEYS</span>
                    <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                      STABLE PROFILE
                    </span>
                  </div>

                  <div className="space-y-3 relative z-10">
                    <div className="flex justify-between items-end">
                      <span className="text-slate-500">Academic_Standing:</span>
                      <span className="text-cyan-300 font-bold border-b border-slate-800 border-dashed pb-0.5">{activeNode.gpa}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-slate-500">Timeline_Scope:</span>
                      <span className="text-slate-300 border-b border-slate-800 border-dashed pb-0.5">{activeNode.period}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-slate-500">Verification_Hash:</span>
                      <span className="text-slate-500 truncate w-32 text-right border-b border-slate-800 border-dashed pb-0.5">0x{activeNode.id}a7f92b4</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <ActivityIcon className="w-3.5 h-3.5 text-cyan-400" />
                    Focus Curriculum Modules
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.coursework.map((course, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-[10px] font-mono text-cyan-100 bg-cyan-950/40 border border-cyan-800/40 rounded-md hover:border-cyan-500/60 hover:bg-cyan-900/60 transition-colors shadow-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex justify-between items-center text-[10px] font-mono text-slate-500 tracking-wider">
              <span>STATUS: ACCESS LEVEL APPROVED</span>
              <span className="text-emerald-500/70 font-bold">VERIFIED OK</span>
            </div>
          </div>

          <div className="lg:col-span-7 relative flex flex-col text-left py-2">
            <div className="absolute left-6 md:left-[35px] top-6 bottom-6 w-px bg-slate-800 hidden md:block z-0"></div>

            <div className="space-y-4 relative z-10">
              {MILESTONES.map((milestone) => {
                const isActive = activeNodeId === milestone.id;
                return (
                  <div key={milestone.id} onClick={() => setActiveNodeId(milestone.id)} className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 overflow-hidden backdrop-blur-sm border ${isActive ? "border-cyan-500/50 bg-slate-900/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-cyan-900/10" : "border-slate-800/60 bg-slate-900/20 hover:border-slate-600/80 hover:bg-slate-900/40"}`}>
                    {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-l-2xl"></div>}

                    <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-6 mt-1 relative z-10">
                      <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${isActive ? "border-cyan-400 bg-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.8)] scale-125" : "border-slate-700 bg-slate-900 group-hover:border-slate-500"}`}></div>
                    </div>

                    <div className="md:w-32 shrink-0">
                      <span className={`text-xs font-mono font-bold block mb-1 transition-colors ${isActive ? "text-slate-300" : "text-slate-500"}`}>{milestone.period}</span>
                      <span className={`text-sm font-mono font-extrabold block mb-2 transition-colors ${isActive ? "text-cyan-400 drop-shadow-md" : "text-slate-400"}`}>{milestone.gpa}</span>
                      <span className={`px-2 py-1 rounded border text-[9px] font-mono font-bold tracking-widest uppercase inline-block shadow-sm ${milestone.tagColor}`}>{milestone.tag}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className={`text-base md:text-lg font-mono font-bold transition-colors leading-tight mb-2 tracking-tight ${isActive ? "text-white drop-shadow-md" : "text-slate-300 group-hover:text-slate-200"}`}>
                        {milestone.title}
                      </h4>
                      <p className={`text-xs md:text-sm leading-relaxed font-sans mb-3 transition-colors ${isActive ? "text-slate-300" : "text-slate-400"}`}>
                        {milestone.summary}
                      </p>
                      <div className={`transition-all duration-500 overflow-hidden ${isActive ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"}`}>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-sans border-t border-slate-700/50 pt-4 bg-slate-950/30 p-3 rounded-lg border-l-2 border-l-indigo-500/50">
                          {milestone.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 mt-3">
                        <span className="uppercase tracking-wider">Execute:</span>
                        <span className={`transition-all ${isActive ? "text-cyan-400 underline decoration-cyan-400/30" : "text-slate-400 group-hover:text-cyan-400/80"}`}>
                          {isActive ? "./collapse_logs.sh" : "./inspect_logs.sh"}
                        </span>
                        <ChevronRightIcon className={`w-3 h-3 transition-transform duration-300 ${isActive ? "rotate-90 text-cyan-400" : "group-hover:translate-x-1 text-slate-400"}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
