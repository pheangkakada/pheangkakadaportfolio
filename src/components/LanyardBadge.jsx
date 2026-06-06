import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldAltIcon } from './icons';

const LanyardBadge = () => {
  const [coords, setCoords] = useState({ rx: 0, ry: 0, px: 50, py: 50 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusOptions = [
    {
      title: "🟢 Available Status",
      detail: "Seeking Summer 2027 SWE Internship",
      color: "bg-emerald-500 text-emerald-400 shadow-emerald-500/20",
    },
    {
      title: "💻 Currently Coding",
      detail: "Building dynamic interactive HUD metrics",
      color: "bg-cyan-500 text-cyan-400 shadow-cyan-500/20",
    },
    {
      title: "🎧 Streaming Audio",
      detail: "Immersive coding soundtrack loops active",
      color: "bg-purple-500 text-purple-400 shadow-purple-500/20",
    },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    const rx = (rect.height / 2 - y) / 10;
    const ry = (x - rect.width / 2) / 10;

    setCoords({ rx, ry, px, py });
  };

  const handleMouseLeave = () => {
    setCoords({ rx: 0, ry: 0, px: 50, py: 50 });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-80 h-[500px] flex items-center justify-center select-none pt-24 pb-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-28 bg-gradient-to-b from-cyan-600 to-indigo-800 rounded-b-md shadow-inner shadow-black/40 flex flex-col items-center justify-end pb-3 border-x border-cyan-500/20 overflow-hidden">
          <div className="text-[6px] font-mono font-bold text-cyan-200/40 rotate-90 select-none whitespace-nowrap tracking-[0.3em] uppercase">
            • INTERN ACCESS • DEVELOPER • INVENTOR •
          </div>
        </div>

        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-8 h-8 flex flex-col items-center z-20">
          <div className="w-5 h-5 rounded-full border-2 border-slate-400/80 bg-slate-900/50 shadow-md"></div>
          <div className="w-4 h-5 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded shadow-md mt-[-4px] flex items-center justify-center border-t border-white/20">
            <div className="w-0.5 h-2 bg-slate-600 rounded"></div>
          </div>
        </div>

        <div className="relative w-72 h-[380px] z-10 cursor-pointer" style={{ perspective: "1000px" }} onClick={() => setIsFlipped(!isFlipped)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="w-full h-full duration-700 ease-out relative shadow-2xl rounded-2xl border border-slate-700/60" style={{ transformStyle: "preserve-3d", transform: `rotateY(${isFlipped ? "180" : "0"}deg) rotateX(${coords.rx}deg) rotateY(${coords.ry}deg)` }}>
            <div className="absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-300" style={{ opacity: isFlipped ? 0 : 0.15, background: `radial-gradient(circle at ${coords.px}% ${coords.py}%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%)`, mixBlendMode: "overlay" }} />

            <div className="absolute inset-0 bg-slate-950 rounded-2xl p-5 flex flex-col justify-between overflow-hidden border border-slate-800/80" style={{ backfaceVisibility: "hidden" }}>
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none"></div>
              <div className="w-10 h-3 bg-slate-900 mx-auto rounded-full border border-slate-800 shadow-inner mb-2"></div>

              <div className="flex justify-between items-center relative z-10 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400"></div>
                  <span className="text-[9px] font-mono tracking-wider text-slate-400 font-bold uppercase">SECURE PASS v3.0</span>
                </div>
                <div className="w-4 h-4 bg-slate-800 rounded-full flex items-center justify-center">
                  <ShieldAltIcon className="w-2.5 h-2.5 text-cyan-400" />
                </div>
              </div>

              <div className="flex flex-col items-center my-4 relative z-10">
                <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-indigo-500 shadow-lg shadow-cyan-500/10">
                  <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <radialGradient id="avatarGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#1e293b" />
                          <stop offset="100%" stopColor="#090d16" />
                        </radialGradient>
                        <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#818cf8" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="48" fill="url(#avatarGrad)" stroke="url(#neonGlow)" strokeWidth="1.5" />
                      <path d="M 22,90 C 22,65 32,55 50,55 C 68,55 78,65 78,90" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                      <path d="M 38,72 L 50,78 L 62,72" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                      <ellipse cx="50" cy="46" rx="16" ry="19" fill="#fbcfe8" />
                      <path d="M 32,42 C 34,30 45,24 50,26 C 55,24 66,30 68,42 C 60,32 50,33 50,33 C 50,33 40,32 32,42" fill="#334155" />
                      <rect x="36" y="41" width="11" height="7" rx="1.5" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" strokeWidth="1.5" />
                      <rect x="53" y="41" width="11" height="7" rx="1.5" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" strokeWidth="1.5" />
                      <line x1="47" y1="44" x2="53" y2="44" stroke="#22d3ee" strokeWidth="1.5" />
                      <path d="M 46,55 Q 50,59 54,55" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 31,46 A 19,19 0 0,1 69,46" fill="none" stroke="#818cf8" strokeWidth="3" />
                      <rect x="27" y="42" width="6" height="11" rx="3" fill="#818cf8" />
                      <rect x="67" y="42" width="6" height="11" rx="3" fill="#818cf8" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[8px] text-cyan-400 font-mono font-bold">★</div>
                </div>

                <div className="text-center mt-3">
                  <h3 className="text-base font-bold text-white tracking-wide font-mono">{PERSONAL_INFO.name}</h3>
                  <div className="text-[10px] text-cyan-400 font-mono uppercase font-bold tracking-widest mt-0.5">{PERSONAL_INFO.role}</div>
                </div>
              </div>

              <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/90 space-y-2 relative z-10 text-left">
                <div className="flex justify-between items-center text-[10px] border-b border-slate-800 pb-1.5">
                  <span className="text-slate-500 font-mono">STATUS DIAGNOSTIC:</span>
                  <div className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full animate-ping ${statusOptions[statusIndex].color.split(" ")[0]}`}></span>
                    <span className={`font-mono font-bold text-[9px] ${statusOptions[statusIndex].color.split(" ")[1]}`}>{statusOptions[statusIndex].title}</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-300 font-mono leading-tight truncate">{statusOptions[statusIndex].detail}</div>
              </div>

              <div className="flex justify-between items-center border-t border-slate-800/80 pt-3 relative z-10">
                <div className="flex flex-col text-left">
                  <span className="text-[7px] text-slate-500 font-mono tracking-widest">AUTHORIZED KEY ID</span>
                  <span className="text-[10px] text-slate-300 font-mono font-bold">#2027-SWE-INTERN</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <svg className="h-6 w-24 text-slate-400 opacity-80" viewBox="0 0 100 20" fill="currentColor">
                    <rect x="0" y="0" width="3" height="20" /><rect x="5" y="0" width="1" height="20" /><rect x="8" y="0" width="2" height="20" /><rect x="12" y="0" width="4" height="20" /><rect x="18" y="0" width="1" height="20" /><rect x="21" y="0" width="3" height="20" /><rect x="26" y="0" width="2" height="20" /><rect x="30" y="0" width="5" height="20" /><rect x="37" y="0" width="1" height="20" /><rect x="40" y="0" width="3" height="20" /><rect x="45" y="0" width="2" height="20" /><rect x="49" y="0" width="4" height="20" /><rect x="55" y="0" width="1" height="20" /><rect x="58" y="0" width="3" height="20" /><rect x="63" y="0" width="2" height="20" /><rect x="67" y="0" width="5" height="20" /><rect x="74" y="0" width="1" height="20" /><rect x="77" y="0" width="3" height="20" /><rect x="82" y="0" width="2" height="20" /><rect x="86" y="0" width="4" height="20" /><rect x="92" y="0" width="1" height="20" /><rect x="95" y="0" width="5" height="20" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-slate-950 rounded-2xl p-5 flex flex-col justify-between border border-slate-800/80" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
              <div className="w-10 h-3 bg-slate-900 mx-auto rounded-full border border-slate-800 shadow-inner mb-2"></div>

              <div className="flex justify-between items-start border-b border-slate-800/80 pb-3 relative z-10">
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-mono text-cyan-400 font-bold">SYSTEM ACCESS APPROVED</span>
                  <span className="text-[7px] font-mono text-slate-500">LEVEL-3 AUTHENTICATION</span>
                </div>
                <div className="w-8 h-6 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-sm p-0.5 border border-amber-400/30 flex flex-wrap gap-[1px]">
                  <div className="w-[8px] h-[4px] border border-amber-900/30 rounded-sm"></div><div className="w-[8px] h-[4px] border border-amber-900/30 rounded-sm"></div><div className="w-[8px] h-[4px] border border-amber-900/30 rounded-sm"></div><div className="w-[8px] h-[4px] border border-amber-900/30 rounded-sm"></div><div className="w-[8px] h-[4px] border border-amber-900/30 rounded-sm"></div><div className="w-[8px] h-[4px] border border-amber-900/30 rounded-sm"></div>
                </div>
              </div>

              <div className="my-3 bg-slate-900/90 rounded-xl p-3 border border-slate-800/80 text-left font-mono text-[8px] space-y-1 overflow-hidden relative z-10">
                <div className="text-cyan-400">alex@SWE-Intern:~$ neofetch</div>
                <div className="text-slate-400"><span className="text-indigo-400">Education:</span> Junior CS, GPA {PERSONAL_INFO.gpa}</div>
                <div className="text-slate-400"><span className="text-indigo-400">Core_Stack:</span> React, TS, Databases, Microservices</div>
                <div className="text-slate-400"><span className="text-indigo-400">Preferred_IDE:</span> NeoVim / VS Code</div>
                <div className="text-slate-400"><span className="text-indigo-400">Core_Mission:</span> Crafting highly robust systems</div>
                <div className="text-emerald-400 animate-pulse mt-2">&gt;_ connection_secured</div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-800/80 pt-3 relative z-10">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded p-1 flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2,2 H8 V8 H2 Z M3,3 V7 H7 V3 Z" /><path d="M16,2 H22 V8 H16 Z M17,3 V7 H21 V3 Z" /><path d="M2,16 H8 V22 H2 Z M3,17 V21 H7 V17 Z" /><rect x="4" y="4" width="2" height="2" /><rect x="18" y="4" width="2" height="2" /><rect x="4" y="18" width="2" height="2" /><rect x="10" y="2" width="2" height="2" /><rect x="10" y="6" width="2" height="4" /><rect x="14" y="10" width="2" height="2" /><rect x="10" y="16" width="4" height="2" /><rect x="16" y="14" width="4" height="2" /><rect x="18" y="18" width="4" height="4" /><rect x="14" y="20" width="2" height="2" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-[7px] text-slate-500 font-mono tracking-widest uppercase">AUTHORIZATION SIGNATURE</div>
                  <div className="text-xs text-slate-300 font-mono italic tracking-wide mt-1 underline decoration-cyan-500/50">{PERSONAL_INFO.name}</div>
                  <div className="text-[6px] text-slate-600 font-mono mt-0.5">Scan to access developer database</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 w-full max-w-xs px-4">
        <button onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }} className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-md shadow-black/10">
          <span>🔄 Tap to flip security badge</span>
        </button>
        <div className="flex gap-1.5 items-center justify-center mt-1">
          <span className="text-[10px] text-slate-500 font-mono">Availability Toggle:</span>
          {statusOptions.map((opt, idx) => (
            <button key={idx} onClick={(e) => { e.stopPropagation(); setStatusIndex(idx); }} className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all text-[8px] ${statusIndex === idx ? "border-cyan-400 bg-cyan-400/20 text-cyan-300" : "border-slate-800 bg-slate-900 text-slate-500 hover:border-slate-700"}`} title={opt.title}>
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanyardBadge;
