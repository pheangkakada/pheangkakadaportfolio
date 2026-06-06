import { useRef } from "react";

const CircularGallery = ({ items = [], onSelect }) => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-4 py-6 scrollbar-hide"
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect?.(item)}
          className="
            snap-center
            shrink-0
            w-[280px]
            rounded-3xl
            overflow-hidden
            border
            border-slate-800
            bg-slate-900/50
            backdrop-blur-xl
            shadow-2xl
            transition-all
            duration-500
            active:scale-95
          "
        >
          <div className="relative">
            <img
              src={item.previewImage}
              alt={item.title}
              className="h-[340px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-4">
                <h3 className="font-mono text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-400">
                  Tap to preview
                </p>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default CircularGallery;