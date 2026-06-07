import { PERSONAL_INFO } from "../data/portfolioData";
import { EnvelopeIcon } from "./icons";
import { FaTelegramPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { RiFlashlightFill } from "react-icons/ri";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-24"
    >

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          title="Let's Connect"
          description="Available for projects, internships, and collaborations."
          align="center"
          className="mb-16"
        />

        {/* TOP SMALL BADGES */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Online
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2">
            <RiFlashlightFill className="text-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Creative Developer
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2">
            <HiSparkles className="text-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Open For Work
            </span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          
          {/* EMAIL */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/40 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40"
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div>

            {/* Hover Effect */}
            <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent"></div>
            </div>

            {/* TOP */}
            <div className="relative z-10 flex items-start justify-between">
              
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <EnvelopeIcon className="h-7 w-7 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                    EMAIL
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Send Message
                  </h3>
                </div>
              </div>

              <div className="text-cyan-400 transition-all duration-300 group-hover:translate-x-1">
                →
              </div>
            </div>

            {/* EMAIL */}
            <div className="relative z-10 mt-8 rounded-2xl border border-slate-800 bg-slate-950/80 px-5 py-4">
              <p className="text-sm font-medium text-slate-300">
                {PERSONAL_INFO.email}
              </p>
            </div>

            {/* BOTTOM */}
            <div className="relative z-10 mt-6 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400"></div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Usually replies within a few hours
              </p>
            </div>
          </a>

          {/* TELEGRAM */}
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/40 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40"
          >
            {/* Glow */}
            <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div>

            {/* Hover Effect */}
            <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 via-transparent to-transparent"></div>
            </div>

            {/* TOP */}
            <div className="relative z-10 flex items-start justify-between">
              
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <FaTelegramPlane className="h-7 w-7 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                    TELEGRAM
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Quick Chat
                  </h3>
                </div>
              </div>

              <div className="text-cyan-400 transition-all duration-300 group-hover:translate-x-1">
                →
              </div>
            </div>

            {/* USERNAME */}
            <div className="relative z-10 mt-8 rounded-2xl border border-slate-800 bg-slate-950/80 px-5 py-4">
              <p className="text-sm font-medium text-slate-300">
                @pheangkakada
              </p>
            </div>

            {/* BOTTOM */}
            <div className="relative z-10 mt-6 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400"></div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Fast communication & updates
              </p>
            </div>
          </a>
        </div>

        {/* BOTTOM MINI TEXT */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Designed & Built with{" "}
            <span className="text-cyan-400">React</span> and{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;