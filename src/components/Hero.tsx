import { useEffect, useRef, useState, type PointerEvent } from "react";
import { motion, type PanInfo } from "framer-motion";

import trimark1 from "../images/screenshots/trimark-1.png";
import trimark2 from "../images/screenshots/trimark-2.png";
import trimark3 from "../images/screenshots/trimark-3.png";
import cult1 from "../images/screenshots/cult-1.png";
import cult2 from "../images/screenshots/cult-2.png";
import cult3 from "../images/screenshots/cult-3.png";
import rosetta1 from "../images/screenshots/rosetta-1.png";
import rosetta2 from "../images/screenshots/rosetta-2.png";
import rosetta3 from "../images/screenshots/rosetta-3.png";
import af1 from "../images/screenshots/af-1.png";
import af2 from "../images/screenshots/af-2.png";
import af3 from "../images/screenshots/af-3.png";
import verana1 from "../images/screenshots/verana-1.png";
import verana2 from "../images/screenshots/verana-2.png";
import verana3 from "../images/screenshots/verana-3.png";
import fhf1 from "../images/screenshots/fhf-1.png";
import fhf2 from "../images/screenshots/fhf-2.png";
import fhf4 from "../images/screenshots/fhf-4.png";
import hasbro1 from "../images/screenshots/hasbro-1.png";
import hasbro2 from "../images/screenshots/hasbro-2.png";
import hasbro3 from "../images/screenshots/hasbro-3.png";

const screenshots = [
  { src: trimark1, label: "Trimark", tag: "E-commerce" },
  { src: trimark2, label: "Trimark", tag: "E-commerce" },
  { src: trimark3, label: "Trimark", tag: "E-commerce" },
  { src: cult1, label: "Cult Eyewear", tag: "Web app" },
  { src: cult2, label: "Cult Eyewear", tag: "Web app" },
  { src: cult3, label: "Cult Eyewear", tag: "Web app" },
  { src: rosetta1, label: "Rosetta Stone/Lexia", tag: "Platform" },
  { src: rosetta2, label: "Rosetta Stone/Lexia", tag: "Platform" },
  { src: rosetta3, label: "Rosetta Stone/Lexia", tag: "Platform" },
  { src: af1, label: "Agent Flow", tag: "Website" },
  { src: af2, label: "Agent Flow", tag: "Website" },
  { src: af3, label: "Agent Flow", tag: "Website" },
  { src: verana1, label: "Verana Health", tag: "Dashboard" },
  { src: verana2, label: "Verana Health", tag: "Dashboard" },
  { src: verana3, label: "Verana Health", tag: "Dashboard" },
  { src: fhf1, label: "First Help", tag: "Mobile" },
  { src: fhf2, label: "First Help", tag: "Mobile" },
  { src: fhf4, label: "First Help", tag: "Mobile" },
  { src: hasbro1, label: "Hasbro", tag: "Website" },
  { src: hasbro2, label: "Hasbro", tag: "Website" },
  { src: hasbro3, label: "Hasbro", tag: "Website" },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

type MousePosition = {
  x: number;
  y: number;
};

function Hero() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const [items] = useState(() => shuffle(screenshots));
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [direction, setDirection] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const holdInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const wheelLock = useRef(false);

  const next = () => {
    setDirection(1);
    setActive((i) => (i + 1) % items.length);
  };

  const prev = () => {
    setDirection(-1);
    setActive((i) => (i - 1 + items.length) % items.length);
  };

  const stopHolding = () => {
    if (holdInterval.current) {
      clearInterval(holdInterval.current);
      holdInterval.current = null;
    }
  };

  const startHoldingNext = () => {
    stopHolding();
    setPaused(true);
    holdInterval.current = setInterval(next, 850);
  };

  const startHoldingPrev = () => {
    stopHolding();
    setPaused(true);
    holdInterval.current = setInterval(prev, 850);
  };

  useEffect(() => {
    if (paused || dragging) return;

    timerRef.current = setInterval(next, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, dragging, active]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setPaused(true);
        next();
      }

      if (event.key === "ArrowLeft") {
        setPaused(true);
        prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      stopHolding();
    };
  }, []);

  const getOffset = (i: number) => {
    let offset = i - active;

    if (offset > items.length / 2) offset -= items.length;
    if (offset < -items.length / 2) offset += items.length;

    return offset;
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const handleDragStart = () => {
    setDragging(true);
    setPaused(true);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 70;
    const velocityThreshold = 450;

    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      prev();
    }

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      next();
    }

    window.setTimeout(() => {
      setDragging(false);
      setPaused(false);
    }, 80);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (wheelLock.current) return;

    const isHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);

    if (!isHorizontal) return;

    wheelLock.current = true;
    setPaused(true);

    if (event.deltaX > 0) next();
    else prev();

    window.setTimeout(() => {
      wheelLock.current = false;
      setPaused(false);
    }, 650);
  };

  return (
    <section className="relative min-h-[620px] overflow-hidden px-0 pt-8 pb-20 lg:px-16">
      <div className="relative flex min-h-[560px] items-center justify-between gap-4">
        <div className="relative z-20 max-w-[620px] translate-y-0">
          <div className="pointer-events-none absolute inset-[-90px] -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(5,8,22,0.68)_0%,rgba(5,8,22,0.38)_45%,transparent_80%)] blur-2xl" />

          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2 text-xs font-semibold tracking-[0.24em] text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
            SOFTWARE ENGINEER
          </div>

          <h1 className="max-w-[620px] text-5xl font-bold leading-[1.08] text-white lg:text-[68px]">
            I make complex software{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              feel effortless.
            </span>
          </h1>

          <p className="mt-7 max-w-[560px] text-lg leading-8 text-white/70 lg:text-xl">
           Deep experience shipping production systems across e-commerce, healthcare, and fintech. Open to full-time roles and freelance collaborations.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[52%] lg:block">
          <div className="absolute right-[80px] top-[125px] h-[320px] w-[400px] rounded-full bg-violet-500/18 blur-[100px]" />
          <div className="absolute right-[-20px] top-[250px] h-[240px] w-[320px] rounded-full bg-cyan-400/8 blur-[90px]" />

          <div className="absolute right-[145px] top-[125px] h-[155px] w-[260px] rotate-[-8deg] rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl" />
          <div className="absolute right-[-10px] top-[285px] h-[130px] w-[220px] rotate-[7deg] rounded-2xl border border-violet-400/20 bg-violet-500/[0.07] backdrop-blur-xl" />
          <div className="absolute right-[300px] top-[320px] h-[105px] w-[180px] rotate-[5deg] rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] backdrop-blur-xl" />
        </div>

        <motion.div
          className="absolute right-[-100px] top-[52%] z-10 hidden -translate-y-1/2 touch-pan-y select-none lg:block"
          drag="x"
          dragElastic={0.16}
          dragMomentum={false}
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onWheel={handleWheel}
          style={{
            width: 600,
            height: 380,
            transformStyle: "preserve-3d",
            perspective: "1200px",
            cursor: dragging ? "grabbing" : "grab",
          }}
          animate={{
            rotateY: mousePosition.x * 1,
            rotateX: -mousePosition.y * 1.3,
            y: [0, -6, 0],
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 0.2 },
            rotateY: { duration: 0.2 },
          }}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setMousePosition({ x: 0, y: 0 })}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            stopHolding();
            if (!dragging) setPaused(false);
          }}
        >
          <div
            className="relative flex h-full w-full items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            {items.map((item, i) => {
              const offset = getOffset(i);
              const abs = Math.abs(offset);

              if (abs > 2) return null;

              const isPortrait = item.label === "FHF";

              const tx = offset * 220;
              const tz = -abs * 130;
              const ry = -offset * 8;
              const scale = offset === 0 ? 1 : 1 - abs * 0.15;
              const opacity = offset === 0 ? 1 : Math.max(0.14, 1 - abs * 0.45);
              const zIndex = 10 - abs;

              return (
                <div
                  key={`${item.label}-${i}`}
                  onClick={() => {
                    if (!dragging) setActive(i);
                  }}
                  className="pointer-events-auto absolute cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d18] transition-all duration-700"
                  style={{
                    width: isPortrait ? 145 : 430,
                    height: 285,
                    transform: `translateX(${tx + direction * 4}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    filter:
                      abs === 0 ? "none" : "saturate(0.55) brightness(0.58)",
                    boxShadow:
                      offset === 0
                        ? "0 0 0 1.5px rgba(139,92,246,0.42), 0 30px 70px rgba(0,0,0,0.72), 0 0 70px rgba(139,92,246,0.14)"
                        : "0 20px 48px rgba(0,0,0,0.5)",
                  }}
                >
                  {offset === 0 && (
                    <div className="absolute inset-0 -z-10 scale-110 bg-violet-500/16 blur-3xl" />
                  )}

                  {isPortrait ? (
                    /* Mobile status bar */
                    <div className="flex h-7 shrink-0 items-center justify-between border-b border-white/5 bg-[#171827] px-3">
                      <span className="text-[10px] font-medium text-white/50">9:41</span>
                      <div className="h-3 w-14 rounded-full bg-[#0b0d18]" /> {/* notch */}
                      <div className="flex items-center gap-1">
                        {/* signal bars */}
                        <div className="flex items-end gap-[2px]">
                          <span className="h-1 w-[3px] rounded-sm bg-white/40" />
                          <span className="h-1.5 w-[3px] rounded-sm bg-white/40" />
                          <span className="h-2 w-[3px] rounded-sm bg-white/40" />
                          <span className="h-2.5 w-[3px] rounded-sm bg-white/40" />
                        </div>
                        {/* battery */}
                        <div className="relative flex h-2.5 w-5 items-center rounded-[3px] border border-white/40 px-[2px]">
                          <div className="h-1.5 w-[55%] rounded-sm bg-white/50" />
                          <div className="absolute -right-[3px] h-1 w-[3px] rounded-r-sm bg-white/30" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Browser chrome */
                    <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-white/5 bg-[#171827] px-3">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                      <div className="mx-2 h-2.5 flex-1 rounded-full bg-white/5" />
                    </div>
                  )}

                  <img
                    src={item.src}
                    alt={`${item.label} ${item.tag} screenshot`}
                    className="pointer-events-none w-full object-cover object-top"
                    style={{ height: "calc(100% - 28px)" }}
                    draggable={false}
                  />

                  {offset === 0 && (
                    <>
                      <div className="absolute right-3 top-10 rounded-full border border-violet-300/20 bg-violet-500/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-white shadow-lg backdrop-blur-md">
                        FEATURED
                      </div>

                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/25 to-transparent px-4 py-3">
                        <span className="text-sm font-medium text-white/95">
                          {item.label}
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white/65 backdrop-blur-md">
                          {item.tag}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pointer-events-auto absolute bottom-[-34px] left-0 right-0 flex items-center justify-center gap-3">
            <motion.button
              type="button"
              onClick={prev}
              onMouseDown={startHoldingPrev}
              onMouseUp={stopHolding}
              onMouseLeave={stopHolding}
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
              whileTap={{ scale: 0.92 }}
              aria-label="Previous project"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-white/50 transition"
            >
              <motion.span whileHover={{ x: -2 }}>←</motion.span>
            </motion.button>

            <div className="flex items-center gap-1.5">
              {items.map((item, i) => (
                <button
                  key={`${item.label}-dot-${i}`}
                  type="button"
                  aria-label={`View ${item.label}`}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "h-1.5 w-5 bg-violet-400"
                      : "h-1.5 w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              onClick={next}
              onMouseDown={startHoldingNext}
              onMouseUp={stopHolding}
              onMouseLeave={stopHolding}
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
              whileTap={{ scale: 0.92 }}
              aria-label="Next project"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-white/50 transition"
            >
              <motion.span whileHover={{ x: 2 }}>→</motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;