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

function CaseStudyHeroMockup() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="relative h-[620px] w-full overflow-hidden rounded-[36px]"
    >
      {/* glow behind mockup */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(236,72,153,0.32),transparent_36%),radial-gradient(circle_at_35%_30%,rgba(124,58,237,0.28),transparent_38%)]" />

      {/* subtle grid / system texture */}
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

      {/* floating architecture nodes */}
      <div className="absolute inset-0">
        {[...Array(26)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(103,232,249,0.7)]"
            style={{
              left: `${12 + ((index * 19) % 78)}%`,
              top: `${14 + ((index * 29) % 66)}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.25, 0.85, 0.25],
            }}
            transition={{
              duration: 4 + (index % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.08,
            }}
          />
        ))}
      </div>

      {/* main product system card */}
      <motion.div
        className="absolute right-[5%] top-1/2 z-10 w-[560px] -translate-y-1/2 rounded-[32px] border border-white/18 bg-white/[0.075] p-6 text-white shadow-2xl shadow-black/35 backdrop-blur-2xl"
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
        <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[linear-gradient(135deg,rgba(255,255,255,0.24),transparent_32%,rgba(236,72,153,0.16)_72%,transparent)]" />

        <div className="relative">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-200/70">
                Product System
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                Interfaces, thoughtfully built
              </h3>
            </div>

            <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold tracking-[0.24em] text-emerald-200">
              LIVE
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7 rounded-3xl border border-white/14 bg-white/[0.09] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                Focus Areas
              </p>

              <div className="mt-5 space-y-4">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-xs text-cyan-200">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-white/78">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-5 rounded-3xl border border-white/14 bg-white/[0.09] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                Delivery Value
              </p>

              <div className="mt-5">
                <div className="text-5xl font-bold">20+</div>
                <p className="mt-1 text-sm text-white/55">Years building products</p>
              </div>

              <div className="mt-6 space-y-4">
                <Metric label="Architecture" value="92" />
                <Metric label="Design Systems" value="84" />
              </div>
            </div>

            <div className="col-span-12 rounded-3xl border border-white/14 bg-white/[0.07] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                System Behind the Interface
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {systemLayers.map((layer) => (
                  <div
                    key={layer.label}
                    className="rounded-2xl border border-white/10 bg-black/10 p-4"
                  >
                    <p className="text-sm font-bold text-white">{layer.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">{layer.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* foreground vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(6,2,24,0.45)_100%)]" />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs text-white/60">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/12">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default CaseStudyHeroMockup;