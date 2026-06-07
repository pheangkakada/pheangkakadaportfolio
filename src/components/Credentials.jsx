import { useEffect, useMemo, useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { CERTIFICATES } from "../data/certificateData";
import {
  AwardIcon,
  BarsIcon,
  CheckCircleIcon,
  CodeIcon,
  SearchIcon,
  ShieldAltIcon,
  TerminalIcon,
  TimesIcon,
} from "./icons";
import LiveCertificateImage from "./LiveCertificateImage";
import SectionHeader from "./SectionHeader";
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
      if (sortBy === "alphabetical") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "oldest") {
        return parseDate(a.date) - parseDate(b.date);
      }
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
    <section
      id="credentials"
      className="relative  py-20 sm:py-2"
    >
      {" "}
      <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl"></div>{" "}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-12">
        {" "}
        {/* HEADER */}{" "}
        <div className="mb-10 sm:mb-12 flex flex-col gap-6">
          {" "}
          <SectionHeader
            title="Verified Certificates"
            description="Browse verified certificates and explore professional achievements."
          />{" "}
          <div className="flex items-center gap-4 self-start">
            {" "}
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {" "}
              Registry Telemetry{" "}
            </span>{" "}
            <div className="rounded-full border border-indigo-500/35 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-bold text-indigo-400">
              {" "}
              LOADED: {CERTIFICATES.length}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* CONTROLS */}{" "}
        <div className="mb-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-4 sm:p-6 shadow-xl backdrop-blur-xl">
          {" "}
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            {" "}
            {/* SEARCH */}{" "}
            <div className="relative flex-1">
              {" "}
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                {" "}
                <SearchIcon className="h-4 w-4" />{" "}
              </div>{" "}
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-800 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-colors duration-300 focus:border-indigo-500/70"
              />{" "}
            </div>{" "}
            {/* ACTIONS */}{" "}
            <div className="flex flex-wrap items-center gap-3">
              {" "}
              {/* SORT */}{" "}
              <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3">
                {" "}
                <span className="text-[10px] font-mono uppercase text-slate-500">
                  {" "}
                  Sort{" "}
                </span>{" "}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="cursor-pointer border-none bg-transparent text-xs text-slate-300 outline-none"
                >
                  {" "}
                  <option value="newest"> Newest </option>{" "}
                  <option value="oldest"> Oldest </option>{" "}
                  <option value="alphabetical"> A-Z </option>{" "}
                </select>{" "}
              </div>{" "}
              {/* LAYOUT */}{" "}
              <div className="flex items-center gap-1 rounded-2xl border border-slate-800 bg-slate-950 p-1">
                {" "}
                <button
                  onClick={() => setLayoutMode("grid")}
                  className={`rounded-xl px-4 py-2 text-xs font-medium transition-all ${layoutMode === "grid" ? "bg-indigo-500 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  {" "}
                  Grid{" "}
                </button>{" "}
                <button
                  onClick={() => setLayoutMode("list")}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all ${layoutMode === "list" ? "bg-indigo-500 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  {" "}
                  <BarsIcon className="h-3.5 w-3.5" /> Showcase{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* FILTERS */}{" "}
          <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800/70 pt-5">
            {" "}
            {availableIssuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setSelectedIssuer(issuer)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${selectedIssuer === issuer ? "border-indigo-500/40 bg-indigo-500/15 text-indigo-300" : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-white"}`}
              >
                {" "}
                {issuer}{" "}
              </button>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* GRID MODE */}{" "}
        {layoutMode === "grid" && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-3">
            {" "}
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="group overflow-hidden rounded-[28px] border border-slate-800/70 bg-slate-900/30 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-500/30"
              >
                {" "}
                {/* IMAGE */}{" "}
                <div
                  onClick={() => {
                    setActiveId(cert.id);
                    setIsLightboxOpen(true);
                  }}
                  className="relative cursor-zoom-in overflow-hidden bg-slate-950"
                >
                  {" "}
                  <LiveCertificateImage
                    cert={cert}
                    recipientName={PERSONAL_INFO.name}
                  />{" "}
                  <div className="absolute inset-0 bg-slate-950/0 transition-all duration-500 group-hover:bg-slate-950/30"></div>{" "}
                </div>{" "}
                {/* CONTENT */}{" "}
                <div className="p-5">
                  {" "}
                  <div className="mb-4 flex items-center justify-between gap-3">
                    {" "}
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${cert.accentColor}`}
                    >
                      {" "}
                      {cert.issuer}{" "}
                    </span>{" "}
                    <span className="text-xs text-slate-500">
                      {" "}
                      {cert.date}{" "}
                    </span>{" "}
                  </div>{" "}
                  <h3 className="text-lg font-bold text-white">
                    {" "}
                    {cert.title}{" "}
                  </h3>{" "}
                  <p className="mt-2 text-sm text-slate-400"> {cert.level} </p>{" "}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {" "}
                    {(cert.skills || []).slice(0, 4).map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {" "}
                        {skill}{" "}
                      </span>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>
        )}{" "}
        {/* SHOWCASE MODE */}{" "}
        {layoutMode === "list" && (
          <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6 xl:gap-8 items-start">
            {" "}
            {/* SIDEBAR */}{" "}
            <div className="2xl:col-span-4">
              {" "}
              <div className="flex gap-3 overflow-x-auto pb-3 2xl:max-h-[900px] 2xl:flex-col 2xl:overflow-y-auto">
                {" "}
                {filteredCertificates.map((cert) => {
                  const isSelected = activeId === cert.id;
                  return (
                    <button
                      key={cert.id}
                      onClick={() => handleCertSelect(cert.id)}
                      className={`group relative flex min-w-[280px] items-center gap-4 overflow-hidden rounded-3xl border p-4 text-left transition-all duration-300 2xl:w-full ${isSelected ? "border-indigo-500/40 bg-indigo-500/10" : "border-slate-800/70 bg-slate-900/30 hover:border-slate-700"}`}
                    >
                      {" "}
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl ${isSelected ? "border-indigo-500/40 bg-indigo-500/10" : "border-slate-800 bg-slate-950"}`}
                      >
                        {" "}
                        {cert.badgeIcon}{" "}
                      </div>{" "}
                      <div className="min-w-0 flex-1">
                        {" "}
                        <h3 className="truncate text-sm font-semibold text-white">
                          {" "}
                          {cert.title}{" "}
                        </h3>{" "}
                        <p className="mt-1 truncate text-xs text-slate-400">
                          {" "}
                          {cert.issuer}{" "}
                        </p>{" "}
                      </div>{" "}
                    </button>
                  );
                })}{" "}
              </div>{" "}
            </div>{" "}
            {/* MAIN SHOWCASE */}{" "}
            <div className="2xl:col-span-8">
              {" "}
              {isDecrypting ? (
                <div className="flex min-h-[500px] items-center justify-center rounded-[32px] border border-slate-800 bg-slate-900/30">
                  {" "}
                  <div className="text-center">
                    {" "}
                    <div className="mb-4 text-sm text-indigo-400 animate-pulse">
                      {" "}
                      Loading Certificate...{" "}
                    </div>{" "}
                    <div className="text-xs text-slate-500">
                      {" "}
                      {decryptProgress}%{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ) : (
                <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6 xl:gap-8 items-start">
                  {" "}
                  {/* LEFT */}{" "}
                  <div className="2xl:col-span-7">
                    {" "}
                    <div className="group overflow-hidden rounded-[28px] border border-slate-800/70 bg-slate-900/40 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.45)]">
                      {" "}
                      {/* HEADER */}{" "}
                      <div className="flex items-center justify-between gap-4 border-b border-slate-800/70 bg-gradient-to-r from-slate-950/70 to-slate-900/40 px-4 sm:px-6 lg:px-7 py-4">
                        {" "}
                        <div className="flex items-center gap-4 min-w-0">
                          {" "}
                          <div
                            className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-2xl border text-xl lg:text-2xl"
                            style={{
                              borderColor: activeCert.sealColor,
                              background: `${activeCert.sealColor}10`,
                            }}
                          >
                            {" "}
                            {activeCert.badgeIcon}{" "}
                          </div>{" "}
                          <div className="min-w-0">
                            {" "}
                            <h2 className="truncate text-sm sm:text-lg lg:text-xl font-bold text-white">
                              {" "}
                              {activeCert.title}{" "}
                            </h2>{" "}
                            <p className="truncate text-xs sm:text-sm text-slate-400 mt-1">
                              {" "}
                              {activeCert.issuer}{" "}
                            </p>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
                          {" "}
                          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>{" "}
                          <span className="text-xs font-semibold text-emerald-400">
                            {" "}
                            VERIFIED{" "}
                          </span>{" "}
                        </div>{" "}
                      </div>{" "}
                      {/* IMAGE */}{" "}
                      <div
                        onClick={() => setIsLightboxOpen(true)}
                        className="relative cursor-zoom-in bg-slate-950"
                      >
                        {" "}
                        <div className="relative overflow-hidden max-h-[75vh]">
                          {" "}
                          <LiveCertificateImage
                            cert={activeCert}
                            recipientName={PERSONAL_INFO.name}
                          />{" "}
                        </div>{" "}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-all duration-500 group-hover:bg-slate-950/35">
                          {" "}
                          <div className="translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            {" "}
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/90 px-6 py-3 backdrop-blur-xl">
                              {" "}
                              <SearchIcon className="h-5 w-5 text-indigo-400" />{" "}
                              <span className="text-sm font-semibold text-white">
                                {" "}
                                Open Fullscreen{" "}
                              </span>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      {/* FOOTER */}{" "}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-t border-slate-800/70 bg-slate-950/40 px-4 sm:px-6 lg:px-7 py-5">
                        {" "}
                        <div>
                          {" "}
                          <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-slate-500 font-mono">
                            {" "}
                            Issue Date{" "}
                          </p>{" "}
                          <p className="text-sm sm:text-base font-semibold text-slate-200">
                            {" "}
                            {activeCert.date}{" "}
                          </p>{" "}
                        </div>{" "}
                        <button
                          onClick={() => setIsLightboxOpen(true)}
                          className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500"
                        >
                          {" "}
                          <SearchIcon className="h-4 w-4" /> Preview{" "}
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* RIGHT */}{" "}
                  <div className="2xl:col-span-5 flex flex-col gap-5 lg:gap-6">
                    {" "}
                    {/* INFO */}{" "}
                    <div className="rounded-[28px] border border-slate-800/70 bg-slate-900/30 p-5 sm:p-6 lg:p-7">
                      {" "}
                      <div className="flex items-start justify-between gap-5 mb-6">
                        {" "}
                        <div className="min-w-0">
                          {" "}
                          <span
                            className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4 ${activeCert.accentColor}`}
                          >
                            {" "}
                            {activeCert.issuer}{" "}
                          </span>{" "}
                          <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold leading-tight text-white">
                            {" "}
                            {activeCert.title}{" "}
                          </h3>{" "}
                          <p className="mt-3 text-sm text-slate-400">
                            {" "}
                            {activeCert.level}{" "}
                          </p>{" "}
                        </div>{" "}
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-3xl border text-2xl"
                          style={{
                            borderColor: activeCert.sealColor,
                            background: `${activeCert.sealColor}10`,
                          }}
                        >
                          {" "}
                          {activeCert.badgeIcon}{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="h-px bg-slate-800 mb-6"></div>{" "}
                      <p className="text-sm sm:text-[15px] leading-7 text-slate-300">
                        {" "}
                        This credential verifies professional-level technical
                        competencies and hands-on implementation experience in{" "}
                        <span className="font-semibold text-white">
                          {" "}
                          {activeCert.title}{" "}
                        </span>{" "}
                        .{" "}
                      </p>{" "}
                    </div>{" "}
                    {/* SKILLS */}{" "}
                    <div className="rounded-[28px] border border-slate-800/70 bg-slate-900/30 p-5 sm:p-6 lg:p-7">
                      {" "}
                      <div className="mb-5 flex items-center gap-3">
                        {" "}
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10">
                          {" "}
                          <CodeIcon className="h-5 w-5 text-indigo-400" />{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <h4 className="text-base font-semibold text-white">
                            {" "}
                            Skills Verified{" "}
                          </h4>{" "}
                          <p className="text-sm text-slate-400">
                            {" "}
                            Technical competencies{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="flex flex-wrap gap-2.5">
                        {" "}
                        {(activeCert.skills || []).map((skill, index) => (
                          <span
                            key={index}
                            className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-2.5 text-xs sm:text-sm text-slate-300"
                          >
                            {" "}
                            {skill}{" "}
                          </span>
                        ))}{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              )}{" "}
            </div>{" "}
          </div>
        )}{" "}
      </div>{" "}
      {/* LIGHTBOX */}{" "}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-xl"
          onClick={() => setIsLightboxOpen(false)}
        >
          {" "}
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            {/* HEADER */}{" "}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/70 px-5 py-4">
              {" "}
              <div className="flex items-center gap-3 min-w-0">
                {" "}
                <AwardIcon className="h-5 w-5 text-indigo-400 shrink-0" />{" "}
                <span className="truncate text-sm text-slate-300">
                  {" "}
                  {activeCert.issuer} — {activeCert.title}{" "}
                </span>{" "}
              </div>{" "}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              >
                {" "}
                <TimesIcon className="h-5 w-5" />{" "}
              </button>{" "}
            </div>{" "}
            {/* IMAGE */}{" "}
            <div className="flex items-center justify-center bg-slate-950 p-3 sm:p-6 lg:p-10">
              {" "}
              <div className="max-h-[90vh] overflow-auto rounded-2xl border border-slate-800 bg-slate-900">
                {" "}
                <LiveCertificateImage
                  cert={activeCert}
                  recipientName={PERSONAL_INFO.name}
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </section>
  );
};
export default Credentials;
