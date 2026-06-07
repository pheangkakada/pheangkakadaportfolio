import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div data-theme={theme} className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Credentials />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
