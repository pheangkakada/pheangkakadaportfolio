import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AiAgent from './AIagent/AiagentUI';

function Home({ theme, toggleTheme, portfolioMode, setPortfolioMode }) {
  const selectionClass =
    portfolioMode === "overclock"
      ? "selection:bg-fuchsia-500/30 selection:text-rose-200"
      : portfolioMode === "hyper"
        ? "selection:bg-indigo-500/30 selection:text-indigo-200"
        : "selection:bg-cyan-500/30 selection:text-cyan-200";

  return (
    <div
      data-theme={theme}
      data-portfolio-mode={portfolioMode}
      className={`min-h-screen bg-slate-950 text-slate-200 font-sans ${selectionClass}`}
    >
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero activeMode={portfolioMode} onModeChange={setPortfolioMode} />
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

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );
  const [portfolioMode, setPortfolioMode] = useState(
    () => localStorage.getItem("portfolio-mode") || "stable"
  );

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-mode", portfolioMode);
  }, [portfolioMode]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            theme={theme}
            toggleTheme={toggleTheme}
            portfolioMode={portfolioMode}
            setPortfolioMode={setPortfolioMode}
          />
        }
      />

      <Route
        path="/AiagentUI"
        element={<AiAgent />}
      />
    </Routes>
  );
}
