// src/components/WorkPreview.tsx
import { useEffect, useRef, useState } from "react";
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
import fhf3 from "../images/screenshots/fhf-3.png";
import fhf4 from "../images/screenshots/fhf-4.png";
import hasbro1 from "../images/screenshots/hasbro-1.png";
import hasbro2 from "../images/screenshots/hasbro-2.png";
import hasbro3 from "../images/screenshots/hasbro-3.png";

const screenshots = [
  { src: trimark1, label: "Trimark", tag: "E-commerce" },
  { src: trimark2, label: "Trimark", tag: "E-commerce" },
  { src: trimark3, label: "Trimark", tag: "E-commerce" },
  { src: cult1, label: "Cult", tag: "Web app" },
  { src: cult2, label: "Cult", tag: "Web app" },
  { src: cult3, label: "Cult", tag: "Web app" },
  { src: rosetta1, label: "Rosetta", tag: "Platform" },
  { src: rosetta2, label: "Rosetta", tag: "Platform" },
  { src: rosetta3, label: "Rosetta", tag: "Platform" },
  { src: af1, label: "Agent Flow", tag: "Website/SEO" },
  { src: af2, label: "Agent Flow", tag: "Website/SEO" },
  { src: af3, label: "Agent Flow", tag: "Website/SEO" },
  { src: verana1, label: "Verana Health", tag: "Dashboard" },
  { src: verana2, label: "Verana Health", tag: "Dashboard" },
  { src: verana3, label: "Verana Health", tag: "Dashboard" },
  { src: fhf1, label: "First Help", tag: "Mobile" },
  { src: fhf3, label: "First Help", tag: "Mobile" },
  { src: fhf4, label: "First Help", tag: "Mobile" },
  { src: hasbro1, label: "Hasbro", tag: "Website" },
  { src: hasbro2, label: "Hasbro", tag: "Website" },
  { src: hasbro3, label: "Hasbro", tag: "Website" },
];


// shuffle once on mount
function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function WorkPreview() {
  const [items] = useState(() => shuffle(screenshots));
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setActive((i) => (i + 1) % items.length);
  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current!);
  }, [paused, active]);

  const getOffset = (i: number) => {
    let o = i - active;
    if (o > items.length / 2) o -= items.length;
    if (o < -items.length / 2) o += items.length;
    return o;
  };

  return (
    <section className="relative bg-[#050816] pb-20 pt-4 overflow-hidden">
      {/* label */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8 flex items-center justify-between">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/30">
          Selected work
        </p>
        <a
          href="#work"
          className="text-xs text-violet-400/70 hover:text-violet-300 transition"
        >
          View all →
        </a>
      </div>

      {/* stage */}
      <div
        className="relative h-[340px] flex items-center justify-center"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {items.map((item, i) => {
          const offset = getOffset(i);
          const abs = Math.abs(offset);
          if (abs > 2) return null; // only render ±2

          const tx = offset * 310;
          const tz = -abs * 160;
          const ry = -offset * 16;
          const scale = offset === 0 ? 1 : 1 - abs * 0.15;
          const opacity = offset === 0 ? 1 : Math.max(0.2, 1 - abs * 0.4);
          const zIndex = 10 - abs;
          const isPortrait = item.src.includes("fhf");

          return (
            <div
              key={i}
              onClick={() => { setActive(i); }}
              className="absolute cursor-pointer rounded-xl overflow-hidden transition-all duration-700"
              style={{
                width: isPortrait ? 180 : 560,
                height: 320,
                transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                opacity,
                zIndex,
                boxShadow:
                  offset === 0
                    ? "0 0 0 1.5px rgba(139,92,246,0.4), 0 30px 80px rgba(0,0,0,0.8)"
                    : "0 20px 50px rgba(0,0,0,0.6)",
              }}
            >
              {/* browser chrome */}
              <div className="flex items-center gap-1.5 bg-[#1a1a28] px-3 h-8 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="flex-1 h-3.5 bg-white/5 rounded-full mx-2" />
              </div>
              <img
                src={item.src}
                alt={item.label}
                className="w-full object-cover object-top"
                style={{ height: "calc(100% - 32px)" }}
                draggable={false}
              />
              {/* label overlay */}
              {offset === 0 && (
                <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-end">
                  <span className="text-sm font-medium text-white/90">{item.label}</span>
                  <span className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/60 border border-white/10">
                    {item.tag}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition"
        >
          ←
        </button>
        <div className="flex gap-1.5 items-center">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-5 h-1.5 bg-violet-400"
                  : "w-1.5 h-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition"
        >
          →
        </button>
      </div>
    </section>
  );
}
