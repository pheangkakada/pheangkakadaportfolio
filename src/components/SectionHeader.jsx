const SectionHeader = ({ kicker, title, description, align = "left", className = "" }) => {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center mx-auto" : "text-left"} ${className}`}>
      <div className={`mb-3 flex items-center ${isCenter ? "justify-center" : ""}`}>
        {!isCenter && (
          <div className="mr-4 h-8 w-2 rounded-sm bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        )}
        <div>
          {kicker && (
            <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">
              {kicker}
            </p>
          )}
          <h2 className="font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        </div>
        {!isCenter && <div className="ml-6 hidden h-px flex-1 bg-gradient-to-r from-cyan-900 to-slate-900 md:block"></div>}
      </div>

      {description && (
        <p className={`${isCenter ? "mx-auto" : ""} max-w-2xl font-sans text-sm leading-relaxed text-slate-400 md:text-base`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
