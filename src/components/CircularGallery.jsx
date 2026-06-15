import { useRef, useState, useEffect } from "react";
import {
  Download,
  X,
  FileText,
  Sparkles,
  Eye,
} from "lucide-react";

const CircularGallery = ({ items = [], onSelect }) => {
  const containerRef = useRef(null);

  const [selectedResume, setSelectedResume] = useState(null);

  useEffect(() => {
    if (selectedResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedResume]);

  return (
    <>
      <div
        ref={containerRef}
        className="
          flex gap-6 overflow-x-auto snap-x snap-mandatory
          px-4 py-8 scrollbar-hide
        "
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedResume(item);
              onSelect?.(item);
            }}
            className="
              group
              relative
              snap-center
              shrink-0
              w-[300px]
              overflow-hidden
              rounded-[32px]
              border border-white/10
              bg-gradient-to-b
              from-slate-900/90
              to-black
              shadow-[0_0_40px_rgba(0,0,0,0.45)]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-400/40
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"></div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.previewImage}
                alt={item.title}
                className="
                  h-[380px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Floating Badge */}
              <div
                className="
                  absolute right-4 top-4
                  flex items-center gap-2
                  rounded-full
                  border border-cyan-400/20
                  bg-black/40
                  px-3 py-1.5
                  backdrop-blur-xl
                "
              >
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Resume
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-black/40
                    p-5
                    backdrop-blur-2xl
                  "
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h3 className="font-mono text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs text-slate-400">
                        Interactive Resume Preview
                      </p>
                    </div>

                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        border border-cyan-400/20
                        bg-cyan-500/10
                        text-cyan-300
                        transition-all duration-500
                        group-hover:scale-110
                        group-hover:rotate-6
                      "
                    >
                      <Eye className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {selectedResume && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-black/80
            backdrop-blur-xl
            p-4
          "
        >
          {/* Background Blur */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedResume(null)}
          />

          {/* Modal Card */}
          <div
            className="
              relative
              flex
              h-[95vh]
              w-full
              max-w-7xl
              flex-col
              overflow-hidden
              rounded-[36px]
              border border-white/10
              bg-[#050816]
              shadow-[0_0_60px_rgba(0,255,255,0.08)]
            "
          >
            {/* Top Bar */}
            <div
              className="
                flex items-center justify-between
                border-b border-white/10
                bg-white/5
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
                  <FileText className="h-7 w-7 text-cyan-300" />
                </div>

                <div>
                  <h2 className="text-xl font-black text-white">
                    {selectedResume.title}
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Professional Resume Preview
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Download */}
                <a
                  href={selectedResume.resumeUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/download
                    flex items-center gap-2
                    rounded-2xl
                    border border-cyan-400/20
                    bg-cyan-500/10
                    px-5 py-3
                    text-sm font-semibold text-cyan-300
                    transition-all duration-300
                    hover:scale-105
                    hover:bg-cyan-500/20
                  "
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover/download:translate-y-0.5" />
                  Download
                </a>

                {/* Close */}
                <button
                  onClick={() => setSelectedResume(null)}
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white/5
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

            {/* PDF Preview */}
            <div className="relative flex-1 bg-black">
              <iframe
                src={selectedResume.resumeUrl}
                title={selectedResume.title}
                className="h-full w-full"
              />

              {/* Bottom Gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CircularGallery;