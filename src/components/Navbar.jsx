import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BarsIcon, TimesIcon } from './icons';
import { Link } from "react-router-dom";
import AiAgent from '../AIagent/AiagentUI';

const SunIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0-1.414-1.414M7.05 7.05 5.636 5.636M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
  </svg>
);

const MoonIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z" />
  </svg>
);

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About & Edu", href: "#about" },
    { name: "Studio Matrix", href: "#skills" },
    { name: "Deployments Hub", href: "#projects" },
    { name: "Credentials", href: "#credentials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg py-4 border-b border-slate-900"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-white tracking-tighter hover:text-cyan-400 transition-colors flex items-center gap-1 relative"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute inline-flex"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 relative"></span>
          <span className="ml-2 font-mono">{PERSONAL_INFO.name.split(" ")[0]}</span>
          <span className="text-cyan-400 font-mono">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-all hover:-translate-y-0.5 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}

          <Link
            to="/AiagentUI"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            AI Agent
          </Link>

          <a
            href={PERSONAL_INFO.resumeLink}
            className="px-5 py-2 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 shadow-md shadow-cyan-400/5"
          >
            Resume.pdf
          </a>

          <button
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 font-mono text-xs font-bold text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
            aria-label="Toggle light mode"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            className="rounded-full border border-slate-700 bg-slate-950/70 p-2 text-slate-300 transition-colors hover:text-cyan-400"
            aria-label="Toggle light mode"
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <TimesIcon className="w-6 h-6" /> : <BarsIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 shadow-2xl border-b border-slate-900 py-6 flex flex-col items-center space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 text-lg transition-colors w-full text-center py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <Link
            to="/AiagentUI"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold hover:scale-105 transition-all text-center w-2/3"
            onClick={() => setIsOpen(false)}
          >
            AI Agent
          </Link>

          <Link
            to={PERSONAL_INFO.resumeLink}
            className="px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-all text-center w-2/3"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </Link>

          <button
            onClick={onToggleTheme}
            className="inline-flex w-2/3 items-center justify-center gap-2 rounded-full border border-slate-700 px-8 py-3 text-slate-300 transition-colors hover:text-cyan-400"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;