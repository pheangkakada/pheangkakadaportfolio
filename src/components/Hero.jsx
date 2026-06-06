import { PERSONAL_INFO } from "../data/portfolioData";
import { CodeIcon, ExternalLinkIcon, GithubIcon, LinkedinIcon, TerminalIcon } from "./icons";

const stack = ["React", "Node.js", "TypeScript", "PostgreSQL"];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-slate-900 bg-slate-950 pb-16 pt-28 text-slate-200 md:pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-950/20 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="text-left lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-400/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-300 sm:text-xs">
                Available for Summer 2027 Internship
              </span>
            </div>

            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Full-Stack Engineer & Designer
            </p>
            <h1 className="max-w-4xl font-mono text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building useful digital products with
              <span className="text-cyan-400"> clean systems.</span>
            </h1>

            <p className="mt-7 max-w-2xl font-sans text-base leading-8 text-slate-400 md:text-lg">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wide text-slate-950 transition-colors hover:bg-cyan-300"
              >
                View Projects
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wide text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-slate-800 pt-6">
              <div>
                <p className="font-mono text-xl font-bold text-white">{PERSONAL_INFO.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">Phnom Penh, Cambodia</p>
              </div>
              <div className="hidden h-9 w-px bg-slate-800 sm:block"></div>
              <div className="flex gap-2">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-slate-800 bg-slate-900/50 p-2.5 text-slate-400 transition-colors hover:border-cyan-500/40 hover:text-cyan-300">
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-slate-800 bg-slate-900/50 p-2.5 text-slate-400 transition-colors hover:border-cyan-500/40 hover:text-cyan-300">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/70 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">portfolio.tsx</span>
                <CodeIcon className="h-4 w-4 text-cyan-400" />
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-5 grid grid-cols-[96px_1fr] items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-3 sm:grid-cols-[120px_1fr] sm:gap-5 sm:p-4">
                  <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-slate-900">
                    <img
                      src="/profile.png"
                      alt={`${PERSONAL_INFO.name} profile`}
                      className="aspect-[4/5] w-full object-cover object-top"
                      loading="eager"
                    />
                    <span className="absolute bottom-2 right-2 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400"></span>
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                      Developer Profile
                    </p>
                    <h2 className="mt-2 truncate font-mono text-lg font-bold text-white sm:text-xl">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-slate-400 sm:text-sm">
                      {PERSONAL_INFO.role}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-400">
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 font-mono text-xs leading-7 sm:text-sm">
                  <p><span className="text-violet-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-slate-500">=</span> {"{"}</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">focus:</span> <span className="text-emerald-400">"Scalable products"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400">"Available"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">gpa:</span> <span className="text-amber-400">"{PERSONAL_INFO.gpa}"</span></p>
                  <p>{"};"}</p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <TerminalIcon className="mb-3 h-5 w-5 text-cyan-400" />
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Projects</p>
                    <p className="mt-1 font-mono text-2xl font-bold text-white">10+</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <CodeIcon className="mb-3 h-5 w-5 text-emerald-400" />
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Certificates</p>
                    <p className="mt-1 font-mono text-2xl font-bold text-white">7+</p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">Core Stack</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    {stack.map((item) => (
                      <span key={item} className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-center font-mono text-[10px] text-slate-400">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
