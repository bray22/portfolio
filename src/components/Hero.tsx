import React, { useState } from "react";
import type { PointerEvent } from "react";
import { motion } from "framer-motion";

type MousePosition = {
  x: number;
  y: number;
};

const focusAreas = [
  "Frontend architecture",
  "Design systems",
  "Product UI",
  "Performance delivery",
];

const systemLayers = [
  { label: "Design System", value: "Reusable UI patterns" },
  { label: "Architecture", value: "Typed React boundaries" },
  { label: "Experience", value: "Clear product flows" },
];

function Hero() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  return (
    <section className="relative overflow-hidden rounded-[36px] bg-transparent px-8 py-16 lg:px-16">
      {/* Background glow */}
     
      {/* Layout */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-200">
            <span className="h-2 w-2 rounded-full " />
            SENIOR SOFTWARE ENGINEER
          </div>

          <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
            I build scalable systems behind{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              intuitive interfaces.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            20+ years building high-performance web platforms across e-commerce,
            healthcare, and financial services using React, TypeScript, Node.js,
            and modern cloud technologies.
          </p>
        </div>

        {/* RIGHT SIDE MOCKUP */}
        <motion.div
          className="relative mx-auto hidden w-full max-w-[500px] lg:block"
          animate={{
            rotateY: mousePosition.x * 5,
            rotateX: -mousePosition.y * 3,
            y: [0, -8, 0],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 0.25 },
            rotateY: { duration: 0.25 },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative rounded-[32px] border border-white/20 bg-white/[0.07] p-6 text-white shadow-2xl shadow-black/40 backdrop-blur-2xl">
            
            {/* Glow overlay */}
            {/* <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[linear-gradient(135deg,rgba(255,255,255,0.24),transparent_32%,rgba(236,72,153,0.16)_72%,transparent)]" /> */}

            <div className="relative">
              {/* Header */}
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-200/70">
                    Product System
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    Interfaces, thoughtfully built
                  </h3>
                </div>

                <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold tracking-[0.24em] text-emerald-200">
                  LIVE
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-12 gap-4">
                
                {/* Focus */}
                <div className="col-span-7 rounded-2xl border border-white/15 bg-white/[0.09] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">
                    Focus Areas
                  </p>

                  <div className="mt-4 space-y-3">
                    {focusAreas.map((area) => (
                      <div key={area} className="flex items-center gap-3">
                        <span className="h-5 w-5 rounded-full border border-cyan-300/40 bg-cyan-300/10 text-center text-xs text-cyan-200">
                          ✓
                        </span>
                        <span className="text-sm text-white/80">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="col-span-5 rounded-2xl border border-white/15 bg-white/[0.09] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">
                    Delivery
                  </p>

                  <div className="mt-4 text-4xl font-bold">20+</div>
                  <p className="text-sm text-white/60">Years building</p>

                  <div className="mt-4 space-y-3">
                    <Metric label="Architecture" value="92" />
                    <Metric label="Design Systems" value="84" />
                  </div>
                </div>

                {/* System */}
                <div className="col-span-12 rounded-2xl border border-white/15 bg-white/[0.07] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">
                    System Behind the Interface
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {systemLayers.map((layer) => (
                      <div
                        key={layer.label}
                        className="rounded-xl border border-white/10 bg-black/10 p-3"
                      >
                        <p className="text-sm font-semibold">{layer.label}</p>
                        <p className="text-xs text-white/50">{layer.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(6,2,24,0.45)_100%)]" />
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-white/60">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/15">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-300"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default Hero;