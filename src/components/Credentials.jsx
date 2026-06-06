import { useEffect, useState } from 'react';
import { CERTIFICATES, PERSONAL_INFO } from '../data/portfolioData';
import { AwardIcon, BarsIcon, CheckCircleIcon, CodeIcon, SearchIcon, ShieldAltIcon, TerminalIcon, TimesIcon } from './icons';
import LiveCertificateImage from './LiveCertificateImage';
import SectionHeader from './SectionHeader';

const Credentials = () => {
  const [activeId, setActiveId] = useState(CERTIFICATES[0].id);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [decryptProgress, setDecryptProgress] = useState(100);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState("All");
  const [layoutMode, setLayoutMode] = useState("list");
  const [sortBy, setSortBy] = useState("newest");

  const availableIssuers = [
    "All",
    ...new Set(
      CERTIFICATES.map((c) => {
        if (c.issuer.includes("Amazon")) return "AWS";
        if (c.issuer.includes("Meta")) return "Meta";
        if (c.issuer.includes("MongoDB")) return "MongoDB";
        if (c.issuer.includes("EnterpriseDB")) return "PostgreSQL";
        if (c.issuer.includes("Google")) return "GCP";
        if (c.issuer.includes("CNCF")) return "Kubernetes";
        if (c.issuer.includes("IBM")) return "IBM";
        return c.issuer;
      }),
    ),
  ];

  const getNormalizeIssuerMatch = (shorthand, certIssuer) => {
    if (shorthand === "All") return true;
    if (shorthand === "AWS") return certIssuer.includes("Amazon");
    if (shorthand === "Meta") return certIssuer.includes("Meta");
    if (shorthand === "MongoDB") return certIssuer.includes("MongoDB");
    if (shorthand === "PostgreSQL") return certIssuer.includes("EnterpriseDB");
    if (shorthand === "GCP") return certIssuer.includes("Google");
    if (shorthand === "Kubernetes") return certIssuer.includes("CNCF");
    if (shorthand === "IBM") return certIssuer.includes("IBM");
    return certIssuer.includes(shorthand);
  };

  const filteredCertificates = CERTIFICATES.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesIssuer = getNormalizeIssuerMatch(selectedIssuer, cert.issuer);

    return matchesSearch && matchesIssuer;
  }).sort((a, b) => {
    if (sortBy === "alphabetical") {
      return a.title.localeCompare(b.title);
    }
    const parseDate = (dateStr) => {
      const [month, year] = dateStr.split(" ");
      const months = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
      };
      return new Date(parseInt(year), months[month] || 0);
    };
    if (sortBy === "oldest") {
      return parseDate(a.date) - parseDate(b.date);
    }
    return parseDate(b.date) - parseDate(a.date);
  });

  const activeCert =
    CERTIFICATES.find((c) => c.id === activeId) || CERTIFICATES[0];

  const handleCertSelect = (id) => {
    if (id === activeId || isDecrypting) return;
    setIsDecrypting(true);
    setDecryptProgress(0);
    setActiveId(id);
  };

  useEffect(() => {
    if (!isDecrypting) return;
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setDecryptProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsDecrypting(false);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [isDecrypting]);

  return (
    <section id="credentials" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col gap-6">
          <SectionHeader
            kicker="04 // Certificates"
            title="Verified Credentials"
            description="Browse verified certificates by issuer, inspect the selected credential, and open the full certificate preview."
          />

          <div className="flex items-center gap-4 self-start">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Registry Telemetry</span>
            <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/35 rounded-full text-indigo-400 font-mono text-xs font-bold shadow-sm shadow-indigo-500/5">
              LOADED: {CERTIFICATES.length} Total
            </div>
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="relative flex-1 text-left">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <SearchIcon className="w-4 h-4" />
              </div>
              <input type="text" placeholder="Query by Title, Issuer, or Skill (e.g. Next.js, Kubernetes, AWS)..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500/70 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 font-mono focus:outline-none transition-colors duration-300" />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors text-xs font-mono">
                  Clear
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 gap-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Sort</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-transparent text-xs text-slate-300 font-mono border-none focus:outline-none focus:ring-0 cursor-pointer">
                  <option value="newest" className="bg-slate-950">Newest First</option>
                  <option value="oldest" className="bg-slate-950">Oldest First</option>
                  <option value="alphabetical" className="bg-slate-950">Alphabetical</option>
                </select>
              </div>

              <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 gap-1">
                <button onClick={() => setLayoutMode("grid")} className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${layoutMode === "grid" ? "bg-indigo-500/10 text-indigo-400 font-bold border border-indigo-500/20" : "text-slate-500 hover:text-slate-300"}`} title="Grid view of Visual Mini Cards">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Visual Cards
                </button>
                <button onClick={() => setLayoutMode("list")} className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${layoutMode === "list" ? "bg-indigo-500/10 text-indigo-400 font-bold border border-indigo-500/20" : "text-slate-500 hover:text-slate-300"}`} title="Index split layout">
                  <BarsIcon className="w-3.5 h-3.5" />
                  Index View
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 mt-5 pt-4 border-t border-slate-800/60 text-left">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mr-2">Issuer Authority:</span>
            {availableIssuers.map((issuer) => (
              <button key={issuer} onClick={() => setSelectedIssuer(issuer)} className={`px-3 py-1 rounded-lg text-xs font-mono border transition-all ${selectedIssuer === issuer ? "bg-indigo-500/15 border-indigo-500/40 text-indigo-300 font-bold" : "bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"}`}>
                {issuer}
              </button>
            ))}
          </div>
        </div>

        {layoutMode === "grid" && (
          <div>
            {filteredCertificates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {filteredCertificates.map((cert) => (
                  <div key={cert.id} className="bg-slate-900/30 border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 group">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/60">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider border uppercase ${cert.accentColor}`}>
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {cert.date}
                        </span>
                      </div>

                      <h3 className="text-base font-bold font-mono text-white mb-1 group-hover:text-indigo-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mb-4">
                        {cert.level}
                      </p>

                      <div onClick={() => { setActiveId(cert.id); setIsLightboxOpen(true); }} className="relative w-full aspect-[1.414/1] rounded-lg overflow-hidden border border-slate-800 group-hover:border-indigo-500/40 cursor-zoom-in transition-colors mb-4 bg-slate-950 scale-100 group-hover:scale-[1.02] transform duration-300">
                        <LiveCertificateImage cert={cert} recipientName={PERSONAL_INFO.name} />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 bg-slate-900/90 text-[10px] text-indigo-400 font-mono px-2.5 py-1.5 rounded border border-indigo-500/30 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            🔍 Quick Zoom
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {cert.skills.map((skill, index) => (
                          <span key={index} className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-[10px] text-slate-400 font-mono rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => handleCertSelect(cert.id)} className="mt-6 w-full py-2.5 bg-slate-950 border border-slate-800 hover:border-indigo-500/40 text-xs font-mono text-indigo-400 hover:text-indigo-300 font-bold rounded-xl transition-all">
                      Inspect Blueprint →
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-slate-800 border-dashed rounded-2xl">
                <ShieldAltIcon className="w-12 h-12 text-slate-600 mb-4 mx-auto animate-pulse" />
                <p className="text-slate-400 font-mono text-sm">
                  No matching credentials found in registry catalog.
                </p>
              </div>
            )}
          </div>
        )}

        {layoutMode === "list" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2 mb-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-indigo-400" />
                  Certificates Index
                </span>
                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20 font-bold shadow-sm">
                  TOTAL: {filteredCertificates.length}
                </span>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-3 lg:max-h-[600px] lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto lg:pr-2">
                {filteredCertificates.map((cert) => {
                  const isSelected = activeId === cert.id;
                  return (
                    <button key={cert.id} onClick={() => handleCertSelect(cert.id)} className={`relative flex min-w-[260px] items-center gap-4 overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 group lg:min-w-0 lg:w-full ${isSelected ? "bg-indigo-900/20 border-indigo-500/40 shadow-[inset_3px_0_0_0_rgba(99,102,241,1)]" : "bg-slate-900/30 border-slate-800/60 hover:bg-slate-800/50 hover:border-slate-700/50"}`}>
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent pointer-events-none"></div>
                      )}

                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border relative z-10 transition-colors ${isSelected ? "bg-indigo-950 border-indigo-500/40 text-xl shadow-inner shadow-indigo-500/20" : "bg-slate-900 border-slate-800 text-lg group-hover:border-slate-700"}`}>
                        {cert.badgeIcon}
                      </div>

                      <div className="flex-1 min-w-0 font-mono relative z-10">
                        <div className={`text-sm font-bold truncate transition-colors tracking-tight ${isSelected ? "text-indigo-50" : "text-slate-300 group-hover:text-slate-200"}`}>
                          {cert.title}
                        </div>
                        <div className={`text-[10px] uppercase tracking-wider truncate mt-0.5 ${isSelected ? "text-indigo-300/70" : "text-slate-500"}`}>
                          {cert.issuer}
                        </div>
                      </div>
                    </button>
                  );
                })}
                {filteredCertificates.length === 0 && (
                  <div className="py-16 text-center border border-slate-800 border-dashed rounded-xl">
                    <ShieldAltIcon className="w-8 h-8 text-slate-600 mb-2 mx-auto animate-pulse" />
                    <p className="text-slate-400 font-mono text-[10px]">
                      No matches found.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-2 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 font-mono text-left shadow-lg">
                <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-2">
                  Verified Digital Records
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  Click on any certificate to load its visual, encrypted document format on the interactive rendering pane.
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[520px] flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/30 p-5 shadow-2xl sm:p-6 md:min-h-[620px] md:p-8 lg:col-span-8">
              {isDecrypting ? (
                <div className="h-full flex flex-col items-center justify-center font-mono text-center absolute inset-0">
                  <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90 origin-center absolute inset-0">
                      <circle cx="40" cy="40" r="34" fill="transparent" stroke="#1e1b4b" strokeWidth="3" />
                      <circle cx="40" cy="40" r="34" fill="transparent" stroke="#6366f1" strokeWidth="3.5" strokeDasharray={2 * Math.PI * 34} strokeDashoffset={2 * Math.PI * 34 - (decryptProgress / 100) * (2 * Math.PI * 34)} />
                    </svg>
                    <span className="text-xl">{activeCert.badgeIcon}</span>
                  </div>
                  <div className="text-sm font-bold text-indigo-400 tracking-widest uppercase animate-pulse mb-1">
                    Updating Document Layout...
                  </div>
                  <div className="text-xs text-slate-500">
                    MODULE SYNCHRONIZING: {decryptProgress}%
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-slate-800/60 pb-6 text-left sm:flex-row">
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-14 h-14 rounded-xl bg-slate-950 border flex items-center justify-center text-2xl shadow-lg" style={{ borderColor: activeCert.sealColor, boxShadow: `inset 0 0 15px ${activeCert.sealColor}20` }}>
                        {activeCert.badgeIcon}
                      </div>
                      <div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider border uppercase mb-1.5 inline-block ${activeCert.accentColor}`}>
                          {activeCert.issuer}
                        </span>
                        <h3 className="text-2xl font-bold font-mono text-white leading-tight drop-shadow-md">
                          {activeCert.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col items-start text-left sm:items-end sm:text-right">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1 font-bold">Issue Date</span>
                      <span className="text-sm font-mono font-bold text-slate-300">{activeCert.date}</span>
                    </div>
                  </div>

                  <div className="grid flex-1 grid-cols-1 gap-8 xl:grid-cols-12">
                    <div className="xl:col-span-7 flex flex-col justify-start">
                      <div onClick={() => setIsLightboxOpen(true)} className="group/preview relative overflow-hidden rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-2xl cursor-zoom-in bg-slate-950 w-full">
                        <LiveCertificateImage cert={activeCert} recipientName={PERSONAL_INFO.name} />
                        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-mono font-bold shadow-xl flex items-center gap-2 transition-all transform translate-y-2 group-hover/preview:translate-y-0">
                            <SearchIcon className="w-4 h-4" />
                            Expand Blueprint Frame
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="xl:col-span-5 flex flex-col text-left">
                      <div className="mb-8">
                        <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-4">
                          <TerminalIcon className="w-3.5 h-3.5 text-slate-600" />
                          Credentials Context
                        </h4>
                        <p className="text-[13px] text-slate-300 font-sans leading-relaxed">
                          This qualification authenticates successful completion and verification of advanced production-level competencies in {activeCert.title} and related software development systems.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-4">
                          <CodeIcon className="w-3.5 h-3.5 text-slate-600" />
                          Skills Verified
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeCert.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1.5 bg-slate-900 border border-slate-700/60 rounded border-b-2 border-b-slate-800/80 text-xs font-mono text-slate-300 shadow-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center gap-4">
                    <button onClick={() => setIsLightboxOpen(true)} className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-[13px] rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20">
                      <SearchIcon className="w-4 h-4" />
                      View Fullscreen Certificate
                    </button>
                    <span className="text-[11px] font-mono text-slate-500 tracking-wide hidden sm:inline-block">
                      || Signed Level-3 Secure Certificate Document
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {layoutMode === "grid" && (
          <div className="mt-12 bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 md:p-8 relative overflow-hidden text-left shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

            {isDecrypting ? (
              <div className="h-[360px] flex flex-col items-center justify-center font-mono text-center">
                <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90 origin-center absolute inset-0">
                    <circle cx="40" cy="40" r="34" fill="transparent" stroke="#1e1b4b" strokeWidth="3" />
                    <circle cx="40" cy="40" r="34" fill="transparent" stroke="#6366f1" strokeWidth="3.5" strokeDasharray={2 * Math.PI * 34} strokeDashoffset={2 * Math.PI * 34 - (decryptProgress / 100) * (2 * Math.PI * 34)} />
                  </svg>
                  <span className="text-xl">{activeCert.badgeIcon}</span>
                </div>
                <div className="text-sm font-bold text-indigo-400 tracking-widest uppercase animate-pulse mb-1">
                  Updating Document Layout...
                </div>
                <div className="text-xs text-slate-500">
                  MODULE SYNCHRONIZING: {decryptProgress}%
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div onClick={() => setIsLightboxOpen(true)} className="group/preview relative overflow-hidden rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors shadow-2xl cursor-zoom-in bg-slate-950 scale-100 hover:scale-[1.01] transform duration-300">
                    <LiveCertificateImage cert={activeCert} recipientName={PERSONAL_INFO.name} />

                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-mono font-bold shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover/preview:translate-y-0">
                        <SearchIcon className="w-4 h-4" />
                        Expand Blueprint Frame
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{activeCert.badgeIcon}</span>
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider border uppercase ${activeCert.accentColor}`}>
                        {activeCert.issuer}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-mono text-white mb-2 leading-tight">
                      {activeCert.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-mono mb-4">
                      {activeCert.level}
                    </p>

                    <div className="h-px bg-slate-800/80 my-4"></div>

                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                      <CodeIcon className="w-3.5 h-3.5" />
                      Verified Skills Profile
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCert.skills.map((skill, index) => (
                        <span key={index} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-xs font-mono text-indigo-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-slate-800/60 justify-between">
                    <div className="font-mono text-xs text-left">
                      <span className="text-slate-500 block text-[9px] uppercase font-bold">REGISTRY ASSIGNED</span>
                      <span className="text-slate-300 font-bold">{activeCert.date}</span>
                    </div>
                    <button onClick={() => setIsLightboxOpen(true)} className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/10">
                      <SearchIcon className="w-4 h-4" />
                      Fullscreen View
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-[100] flex flex-col items-center justify-center p-4 md:p-8" onClick={() => setIsLightboxOpen(false)}>
          <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/60 font-mono text-xs">
              <span className="text-slate-400 flex items-center gap-2">
                <AwardIcon className="w-4 h-4 text-indigo-400" />
                {activeCert.issuer} — {activeCert.title}
              </span>
              <button onClick={() => setIsLightboxOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="Close modal">
                <TimesIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-12 flex items-center justify-center bg-slate-950">
              <div className="w-full max-w-2xl shadow-2xl border-4 border-slate-800/60 rounded-xl overflow-hidden bg-slate-900">
                <LiveCertificateImage cert={activeCert} recipientName={PERSONAL_INFO.name} />
              </div>
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950/60 text-center font-mono text-[10px] text-slate-500">
              Double check digital alignment keys. Verified safe connection. Press ESC or click outside to exit document.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Credentials;
