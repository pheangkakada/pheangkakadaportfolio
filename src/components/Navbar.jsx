import { useEffect, useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { BarsIcon, TimesIcon } from "./icons";
import { Link } from "react-router-dom";
import { FileText, Download, X } from "lucide-react";
// import ResumePreview from "./ResumePreview";

const SunIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0-1.414-1.414M7.05 7.05 5.636 5.636M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
    />
  </svg>
);

const MoonIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z"
    />
  </svg>
);

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [showResumePreview, setShowResumePreview] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showResumePreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showResumePreview]);

  const navLinks = [
    { name: "About & Edu", href: "#about" },
    { name: "Studio Matrix", href: "#skills" },
    { name: "Deployments Hub", href: "#projects" },
    { name: "Credentials", href: "#credentials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg py-4 border-b border-slate-900"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between px-5 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
          {/* LOGO */}
          <a
            href="#"
            className="text-2xl font-bold text-white tracking-tighter hover:text-cyan-400 transition-colors flex items-center gap-1 relative"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute inline-flex"></span>

            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 relative"></span>

            <span className="ml-2 font-mono">
              {PERSONAL_INFO.name.split(" ")[0]}
            </span>

            <span className="text-cyan-400 font-mono">.dev</span>
          </a>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  hover:text-cyan-400
                  transition-all
                  hover:-translate-y-0.5
                  relative
                  group
                "
              >
                {link.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-0.5
                    bg-cyan-400
                    transition-all
                    group-hover:w-full
                  "
                ></span>
              </a>
            ))}

            {/* AI BUTTON */}
            <Link
              to="/AiagentUI"
              className="
                px-5 py-2
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-slate-950
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
                shadow-cyan-500/30
              "
            >
              AI Agent
            </Link>

            {/* RESUME BUTTON */}
            <button
              onClick={() => setShowResumePreview(true)}
              className="
                group
                relative
                overflow-hidden
                px-5 py-2.5
                rounded-full
                border border-cyan-400/30
                bg-cyan-500/10
                text-cyan-300
                transition-all duration-300
                hover:scale-105
                hover:border-cyan-400
                hover:bg-cyan-500/20
                shadow-[0_0_20px_rgba(34,211,238,0.15)]
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                <FileText className="h-4 w-4" />

                <span className="font-mono text-xs uppercase tracking-[0.2em]">
                  Resume.pdf
                </span>
              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
              </div>
            </button>

            {/* THEME BUTTON */}
            <button
              onClick={onToggleTheme}
              className="
                inline-flex items-center gap-2
                rounded-full border border-slate-700
                bg-slate-950/70
                px-4 py-2
                font-mono text-xs font-bold
                text-slate-300
                transition-colors
                hover:border-cyan-400/50
                hover:text-cyan-400
              "
              aria-label="Toggle light mode"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}

              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>

          {/* MOBILE */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="
                rounded-full
                border border-slate-700
                bg-slate-950/70
                p-2
                text-slate-300
                transition-colors
                hover:text-cyan-400
              "
              aria-label="Toggle light mode"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <button
              className="text-slate-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <TimesIcon className="w-6 h-6" />
              ) : (
                <BarsIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
              lg:hidden
              absolute top-full left-0
              w-full
              bg-slate-950
              shadow-2xl
              border-b border-slate-900
              py-6
              flex flex-col
              items-center
              space-y-5
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-slate-300
                  hover:text-cyan-400
                  text-lg
                  transition-colors
                  w-full
                  text-center
                  py-2
                "
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <Link
              to="/AiagentUI"
              className="
                px-8 py-3
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-slate-950
                font-semibold
                hover:scale-105
                transition-all
                text-center
                w-2/3
              "
              onClick={() => setIsOpen(false)}
            >
              AI Agent
            </Link>

            {/* MOBILE RESUME */}
            <button
              onClick={() => {
                setShowResumePreview(true);
                setIsOpen(false);
              }}
              className="
                px-8 py-3
                rounded-full
                bg-cyan-500/10
                border border-cyan-400
                text-cyan-400
                hover:bg-cyan-400
                hover:text-slate-950
                transition-all
                text-center
                w-2/3
              "
            >
              Resume.pdf
            </button>

            <button
              onClick={onToggleTheme}
              className="
                inline-flex w-2/3
                items-center justify-center gap-2
                rounded-full
                border border-slate-700
                px-8 py-3
                text-slate-300
                transition-colors
                hover:text-cyan-400
              "
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}

              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        )}
      </nav>

     {/* RESUME PREVIEW MODAL */}
      {showResumePreview && (
        <div className="fixed inset-0 z-[999999] flex flex-col bg-slate-950/60 backdrop-blur-2xl transition-all duration-300">
          {/* AMBIENT GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 opacity-50 blur-[120px]" />

          {/* HEADER */}
          <div className="relative z-10 flex flex-shrink-0 items-center justify-between border-b border-white/5 bg-slate-950/50 px-4 py-3 md:px-6 md:py-4">
            {/* LEFT: File Info */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                <FileText className="h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-sm md:text-base font-semibold text-slate-200">
                  Pheang_Kakada_Resume.pdf
                </h2>
                <p className="text-xs text-slate-500">
                  PDF Document • 1 Page
                </p>
              </div>
            </div>

            {/* RIGHT: Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* OPEN IN NEW TAB */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden sm:flex items-center gap-2
                  rounded-lg bg-white/5 px-4 py-2 md:py-2.5
                  text-sm font-medium text-slate-300
                  transition-colors hover:bg-white/10 hover:text-white
                "
              >
                <FileText className="h-4 w-4" />
                Open
              </a>

              {/* DOWNLOAD */}
              <a
                href="/resume.pdf"
                download
                className="
                  flex items-center gap-2
                  rounded-lg bg-cyan-500
                  px-4 py-2 md:py-2.5
                  text-sm font-medium text-slate-950
                  transition-all hover:bg-cyan-400
                  shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]
                "
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:block">Download</span>
              </a>

              <div className="mx-1 hidden h-6 w-px bg-white/10 sm:block" />

              {/* CLOSE */}
              <button
                onClick={() => setShowResumePreview(false)}
                className="
                  flex h-9 w-9 md:h-10 md:w-10 items-center justify-center
                  rounded-lg text-slate-400
                  transition-colors hover:bg-rose-500/10 hover:text-rose-400
                "
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
          </div>

          {/* PDF CONTAINER */}
          <div className="relative z-10 flex flex-1 items-center justify-center overflow-hidden p-4 md:p-8">
            <div className="h-full w-full max-w-5xl overflow-hidden rounded-xl md:rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl ring-1 ring-white/5">
              <object
                data="/resume.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="h-full w-full"
              >
                {/* FALLBACK UI */}
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/50 shadow-inner">
                    <FileText className="h-8 w-8 text-slate-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-200">
                    Unable to preview PDF
                  </h3>
                  
                  <p className="mt-2 max-w-sm text-sm text-slate-400">
                    Your browser restricts direct PDF rendering. You can safely open or download the file instead.
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    >
                      Open in Browser
                    </a>
                    <a
                      href="/resume.pdf"
                      download
                      className="rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-400"
                    >
                      Download File
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
