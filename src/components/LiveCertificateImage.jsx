import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
  }),
};

const LiveCertificateImage = ({ cert }) => {
  const images =
    cert.images?.length > 0 ? cert.images : cert.image ? [cert.image] : [];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!images.length) return null;

  const next = (e) => {
    e?.stopPropagation();
    setDirection(1);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = (e) => {
    e?.stopPropagation();
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          alt={cert.title}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
          className="w-full h-full object-contain"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-8 h-2 bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
                    : "w-2 h-2 bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 rounded-xl bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default LiveCertificateImage;
