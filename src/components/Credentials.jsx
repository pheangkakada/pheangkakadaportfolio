import { useEffect, useMemo, useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { CERTIFICATES } from "../data/certificateData";
import { motion } from "framer-motion";
import { Grid2X2, Rows3 } from "lucide-react";
import { AwardIcon, CodeIcon, SearchIcon, TimesIcon } from "./icons";
import LiveCertificateImage from "./LiveCertificateImage";
import SectionHeader from "./SectionHeader";
import ScrollReveal, { revealItem, staggerContainer } from "./ScrollReveal";

const issuerLabel = (issuer) => {
  if (issuer.includes("Amazon")) return "AWS";
  if (issuer.includes("Meta")) return "Meta";
  if (issuer.includes("MongoDB")) return "MongoDB";
  if (issuer.includes("EnterpriseDB")) return "PostgreSQL";
  if (issuer.includes("Google")) return "GCP";
  if (issuer.includes("CNCF")) return "Kubernetes";
  if (issuer.includes("IBM")) return "IBM";
  return issuer;
};

const matchesIssuer = (selected, issuer) => {
  if (selected === "All") return true;
  if (selected === "AWS") return issuer.includes("Amazon");
  if (selected === "Meta") return issuer.includes("Meta");
  if (selected === "MongoDB") return issuer.includes("MongoDB");
  if (selected === "PostgreSQL") return issuer.includes("EnterpriseDB");
  if (selected === "GCP") return issuer.includes("Google");
  if (selected === "Kubernetes") return issuer.includes("CNCF");
  if (selected === "IBM") return issuer.includes("IBM");
  return issuer.includes(selected);
};

const parseDate = (dateStr) => {
  const [month, year] = dateStr.split(" ");
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  return new Date(Number.parseInt(year, 10), months[month] || 0);
};

const Credentials = () => {
  const [activeId, setActiveId] = useState(CERTIFICATES[0]?.id);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [decryptProgress, setDecryptProgress] = useState(100);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState("All");
  const [layoutMode, setLayoutMode] = useState("list");
  const [sortBy, setSortBy] = useState("newest");

  const availableIssuers = useMemo(() => {
    return [
      "All",
      ...new Set(CERTIFICATES.map((cert) => issuerLabel(cert.issuer))),
    ];
  }, []);

  const filteredCertificates = useMemo(() => {
    const filtered = CERTIFICATES.filter((cert) => {
      const skills = cert.skills || [];
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.level.toLowerCase().includes(q) ||
        skills.some((skill) => skill.toLowerCase().includes(q));
      const matches = matchesIssuer(selectedIssuer, cert.issuer);
      return matchesSearch && matches;
    });
    return filtered.sort((a, b) => {
      if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
      if (sortBy === "oldest") return parseDate(a.date) - parseDate(b.date);
      return parseDate(b.date) - parseDate(a.date);
    });
  }, [searchQuery, selectedIssuer, sortBy]);

  const activeCert =
    CERTIFICATES.find((cert) => cert.id === activeId) || CERTIFICATES[0];

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
    <section id="credentials" className="relative py-20 sm:py-24">
      <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl"></div>

      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* HEADER */}
        <ScrollReveal className="mb-10 sm:mb-12 flex flex-col gap-6">
          <SectionHeader
            title="Verified Certificates"
            description="Browse verified certificates and explore professional achievements."
          />
          <div className="flex items-center gap-4 self-start">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Registry Telemetry
            </span>
            <div className="rounded-full border border-indigo-500/35 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-bold text-indigo-400">
              LOADED: {CERTIFICATES.length}
            </div>
          </div>
        </ScrollReveal>

        {/* CONTROLS */}
        <ScrollReveal className="mb-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-4 sm:p-6 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* SEARCH */}
            <div className="relative flex-1 w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                <SearchIcon className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-colors duration-300 focus:border-indigo-500/70"
              />
            </div>

            {/* ACTIONS */}
            <div className="relative flex items-center rounded-2xl border border-slate-800/70 bg-slate-900/30 p-1.5 backdrop-blur-xl overflow-hidden self-stretch lg:self-auto">
              <motion.div
                layoutId="layoutToggleBg"
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="absolute top-1.5 bottom-1.5 rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-blue-400/10 shadow-[0_0_25px_rgba(34,211,238,0.22)] backdrop-blur-xl"
                style={{
                  width: "calc(50% - 6px)",
                  left: layoutMode === "grid" ? "6px" : "calc(50% + 0px)",
                }}
              />
              <button
                onClick={() => setLayoutMode("grid")}
                className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 sm:min-w-[120px] sm:px-5 sm:py-3 text-center text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-300 ${layoutMode === "grid" ? "text-cyan-200" : "text-slate-400 hover:text-slate-200"}`}
              >
                <Grid2X2 className="h-4 w-4" />
                Grid
              </button>
              <button
                onClick={() => setLayoutMode("list")}
                className={`relative z-10 flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold tracking-wide transition-all duration-300 ${layoutMode === "list" ? "text-cyan-200" : "text-slate-400 hover:text-slate-200"}`}
              >
                <Rows3 className="h-4 w-4" />
                Showcase
              </button>
            </div>
          </div>

          {/* FILTERS */}
          <div className="mt-6 border-t border-slate-800/70 pt-6">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {availableIssuers.map((issuer) => {
                const isActive = selectedIssuer === issuer;
                return (
                  <button
                    key={issuer}
                    onClick={() => setSelectedIssuer(issuer)}
                    className={`relative overflow-hidden rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-500 group ${isActive ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400"}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCredentialFilter"
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 24,
                        }}
                        className="absolute inset-0 rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-cyan-500/10 shadow-[0_0_30px_rgba(99,102,241,0.25)] backdrop-blur-xl"
                      />
                    )}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/[0.03]" />
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl border transition-colors duration-300 ${isActive ? "border-transparent" : "border-slate-800 group-hover:border-slate-700"}`}
                    />
                    <span className="relative z-10">{issuer}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* GRID MODE */}
        {layoutMode === "grid" && (
          <motion.div
            className="
      mx-auto
      max-w-7xl
      grid
      grid-cols-1
      md:grid-cols-3
      gap-5
      lg:gap-6
    "
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
          >
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={revealItem}
                className="
          group
          flex
          flex-col
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-slate-800/60
          bg-slate-900/40
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-500/30
          hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]
        "
              >
                {/* IMAGE */}
                <div
                  onClick={() => {
                    setActiveId(cert.id);
                    setIsLightboxOpen(true);
                  }}
                  className="
            relative
            h-[180px]
            sm:h-[200px]
            lg:h-[220px]
            overflow-hidden
            bg-slate-950
            cursor-zoom-in
            border-b
            border-slate-800/50
            flex
            items-center
            justify-center
          "
                >
                  <div className="scale-105 transition-transform duration-700 group-hover:scale-115">
                    <LiveCertificateImage
                      cert={cert}
                      recipientName={PERSONAL_INFO.name}
                    />
                  </div>

                  <div className="absolute inset-0 bg-slate-950/0 transition-all duration-500 group-hover:bg-slate-950/30" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="rounded-full border border-slate-700/70 bg-slate-900/90 px-4 py-2 backdrop-blur-xl">
                      <span className="text-xs font-semibold text-white">
                        View Certificate
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${cert.accentColor}`}
                    >
                      <span className="block max-w-[120px] truncate">
                        {cert.issuer}
                      </span>
                    </span>

                    <span className="text-[11px] text-slate-500 shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold leading-tight text-white line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                    {cert.level}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-2">
                      {(cert.skills || []).slice(0, 2).map((skill, index) => (
                        <span
                          key={index}
                          className="
                    rounded-xl
                    border
                    border-slate-700/50
                    bg-slate-800/30
                    px-3
                    py-1.5
                    text-xs
                    text-slate-300
                  "
                        >
                          {skill}
                        </span>
                      ))}

                      {(cert.skills || []).length > 2 && (
                        <span
                          className="
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-3
                    py-1.5
                    text-xs
                    text-cyan-300
                  "
                        >
                          +{cert.skills.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveId(cert.id);
                      setIsLightboxOpen(true);
                    }}
                    className="
              mt-5
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-800/30
              py-3
              text-sm
              font-semibold
              text-slate-200
              transition-all
              duration-300
              hover:border-cyan-500/40
              hover:bg-cyan-500/10
              hover:text-cyan-300
            "
                  >
                    Preview Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* SHOWCASE MODE */}
        {layoutMode === "list" && (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {/* SIDEBAR */}
            <motion.div
              variants={revealItem}
              className="lg:col-span-4 xl:col-span-3"
            >
              <div className="flex gap-3 overflow-x-auto pb-3 lg:max-h-[700px] xl:max-h-[850px] lg:flex-col lg:overflow-y-auto w-full pr-1">
                {filteredCertificates.map((cert) => {
                  const isSelected = activeId === cert.id;
                  return (
                    <button
                      key={cert.id}
                      onClick={() => handleCertSelect(cert.id)}
                      className={`group relative flex min-w-[260px] sm:min-w-[280px] items-center gap-4 overflow-hidden rounded-3xl border p-4 text-left transition-all duration-300 lg:w-full shrink-0 ${isSelected ? "border-indigo-500/40 bg-indigo-500/10" : "border-slate-800/70 bg-slate-900/30 hover:border-slate-700"}`}
                    >
                      <div
                        className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border text-xl sm:text-2xl ${isSelected ? "border-indigo-500/40 bg-indigo-500/10" : "border-slate-800 bg-slate-950"}`}
                      >
                        {cert.badgeIcon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-semibold text-white">
                          {cert.title}
                        </h3>
                        <p className="mt-1 truncate text-xs text-slate-400">
                          {cert.issuer}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* MAIN SHOWCASE */}
            <motion.div
              variants={revealItem}
              className="lg:col-span-8 xl:col-span-9"
            >
              {isDecrypting ? (
                <div className="flex min-h-[400px] lg:min-h-[500px] items-center justify-center rounded-[32px] border border-slate-800 bg-slate-900/30">
                  <div className="text-center">
                    <div className="mb-4 text-sm text-indigo-400 animate-pulse">
                      Loading Certificate...
                    </div>
                    <div className="text-xs text-slate-500">
                      {decryptProgress}%
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 items-start">
                  {/* LEFT / TOP */}
                  <div className="xl:col-span-7">
                    <div className="group overflow-hidden rounded-[28px] border border-slate-800/70 bg-slate-900/40 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.45)]">
                      <div className="flex items-center justify-between gap-4 border-b border-slate-800/70 bg-gradient-to-r from-slate-950/70 to-slate-900/40 px-4 sm:px-6 lg:px-7 py-4">
                        <div className="flex items-center gap-4 min-w-0">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xl"
                            style={{
                              borderColor: activeCert.sealColor,
                              background: `${activeCert.sealColor}10`,
                            }}
                          >
                            {activeCert.badgeIcon}
                          </div>
                          <div className="min-w-0">
                            <h2 className="truncate text-sm sm:text-base font-bold text-white">
                              {activeCert.title}
                            </h2>
                            <p className="truncate text-xs text-slate-400 mt-1">
                              {activeCert.issuer}
                            </p>
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 shrink-0">
                          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                          <span className="text-[10px] sm:text-xs font-semibold text-emerald-400">
                            VERIFIED
                          </span>
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div
                        onClick={() => setIsLightboxOpen(true)}
                        className="relative cursor-zoom-in bg-slate-950"
                      >
                        <div className="relative overflow-hidden max-h-[50vh] sm:max-h-[60vh] xl:max-h-[75vh]">
                          <LiveCertificateImage
                            cert={activeCert}
                            recipientName={PERSONAL_INFO.name}
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-all duration-500 group-hover:bg-slate-950/35">
                          <div className="translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/90 px-5 py-2.5 backdrop-blur-xl">
                              <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400" />
                              <span className="text-xs sm:text-sm font-semibold text-white">
                                Open Fullscreen
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FOOTER */}
                      <div className="flex flex-row items-center justify-between gap-4 border-t border-slate-800/70 bg-slate-950/40 px-4 sm:px-6 lg:px-7 py-4 sm:py-5">
                        <div>
                          <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-slate-500 font-mono">
                            Issue Date
                          </p>
                          <p className="text-xs sm:text-sm font-semibold text-slate-200">
                            {activeCert.date}
                          </p>
                        </div>
                        <button
                          onClick={() => setIsLightboxOpen(true)}
                          className="flex items-center gap-2 rounded-xl sm:rounded-2xl bg-indigo-600 px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 shrink-0"
                        >
                          <SearchIcon className="h-4 w-4" />{" "}
                          <span className="hidden sm:inline">Preview</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT / BOTTOM */}
                  <div className="xl:col-span-5 flex flex-col gap-5 lg:gap-6">
                    <div className="rounded-[28px] border border-slate-800/70 bg-slate-900/30 p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="min-w-0">
                          <span
                            className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-3 sm:mb-4 ${activeCert.accentColor}`}
                          >
                            {activeCert.issuer}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold leading-tight text-white">
                            {activeCert.title}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-slate-400">
                            {activeCert.level}
                          </p>
                        </div>
                      </div>
                      <div className="h-px bg-slate-800 mb-5"></div>
                      <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
                        This credential verifies professional-level technical
                        competencies and hands-on implementation experience in{" "}
                        <span className="font-semibold text-white">
                          {activeCert.title}
                        </span>
                        .
                      </p>
                    </div>

                    <div className="rounded-[28px] border border-slate-800/70 bg-slate-900/30 p-5 sm:p-6">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-indigo-500/10">
                          <CodeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-white">
                            Skills Verified
                          </h4>
                          <p className="text-[10px] sm:text-xs text-slate-400">
                            Technical competencies
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(activeCert.skills || []).map((skill, index) => (
                          <span
                            key={index}
                            className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* LIGHTBOX */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-3 sm:p-4 backdrop-blur-xl"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl sm:rounded-[32px] border border-slate-800 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/70 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-center gap-3 min-w-0">
                <AwardIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400 shrink-0" />
                <span className="truncate text-xs sm:text-sm text-slate-300">
                  {activeCert.issuer} — {activeCert.title}
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="rounded-xl p-1.5 sm:p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white shrink-0"
              >
                <TimesIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="flex items-center justify-center bg-slate-950 p-2 sm:p-6 lg:p-10">
              <div className="max-h-[85vh] w-full overflow-auto rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900">
                <LiveCertificateImage
                  cert={activeCert}
                  recipientName={PERSONAL_INFO.name}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Credentials;
