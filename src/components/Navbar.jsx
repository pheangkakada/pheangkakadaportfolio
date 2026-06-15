import { useEffect, useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { BarsIcon, TimesIcon } from "./icons";
import { Link } from "react-router-dom";
import { FileText, Download, X } from "lucide-react";

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
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
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
        <div
          className="
            fixed inset-0 z-[999999]
            flex items-center justify-center
            bg-black/80
            backdrop-blur-xl
            p-4
          "
        >
          {/* BACKDROP */}
          <div
            className="absolute inset-0"
            onClick={() => setShowResumePreview(false)}
          />

          {/* MODAL */}
          <div
            className="
              relative
              w-full
              max-w-7xl
              h-[92vh]
              overflow-hidden
              rounded-[36px]
              border border-cyan-400/20
              bg-[#050816]
              shadow-[0_0_60px_rgba(34,211,238,0.18)]
            "
          >
            {/* TOPBAR */}
            <div
              className="
                flex items-center justify-between
                border-b border-slate-800
                bg-slate-900/80
                px-6 py-5
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    border border-cyan-400/20
                    bg-cyan-500/10
                  "
                >
                  <FileText className="h-6 w-6 text-cyan-300" />
                </div>

                <div>
                  <h2 className="text-xl font-black text-white">
                    Resume Preview
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Kakada Resume.pdf
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* DOWNLOAD */}
                <a
                  href="/resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex items-center gap-2
                    rounded-2xl
                    border border-cyan-400/20
                    bg-cyan-500/10
                    px-5 py-3
                    text-sm font-semibold
                    text-cyan-300
                    transition-all duration-300
                    hover:scale-105
                    hover:bg-cyan-500/20
                  "
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>

                {/* CLOSE */}
                <button
                  onClick={() => setShowResumePreview(false)}
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    border border-slate-700
                    bg-slate-900
                    text-slate-300
                    transition-all duration-300
                    hover:rotate-90
                    hover:bg-red-500/20
                    hover:text-red-300
                  "
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PDF PREVIEW */}
            <div className="relative h-[calc(92vh-88px)] w-full bg-black">
              {/* MOBILE FALLBACK */}
              <div className="absolute inset-0 flex md:hidden flex-col items-center justify-center bg-slate-950 px-6 text-center">
                <div
                  className="
        mb-6
        flex h-24 w-24 items-center justify-center
        rounded-3xl
        border border-cyan-400/20
        bg-cyan-500/10
      "
                >
                  <FileText className="h-10 w-10 text-cyan-300" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Resume Preview
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                  Mobile browsers may block embedded PDF previews. Open or
                  download the resume below.
                </p>

                <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
                  {/* OPEN */}
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          flex items-center justify-center gap-2
          rounded-2xl
          bg-cyan-500
          px-5 py-4
          font-semibold
          text-slate-950
          transition-all duration-300
          hover:scale-105
        "
                  >
                    <FileText className="h-5 w-5" />
                    Open Resume
                  </a>

                  {/* DOWNLOAD */}
                  <a
                    href="/resume.pdf"
                    download
                    className="
          flex items-center justify-center gap-2
          rounded-2xl
          border border-cyan-400/20
          bg-cyan-500/10
          px-5 py-4
          font-semibold
          text-cyan-300
          transition-all duration-300
          hover:bg-cyan-500/20
        "
                  >
                    <Download className="h-5 w-5" />
                    Download PDF
                  </a>
                </div>
              </div>

              {/* DESKTOP PDF VIEWER */}
              <iframe
                src="/resume.pdf#toolbar=0"
                title="Resume Preview"
                className="hidden md:block h-full w-full bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
