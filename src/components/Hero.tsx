import { useState, type PointerEvent } from "react";
import { motion } from "framer-motion";
import backgroundUis from "../images/background-uis.png";

type MousePosition = {
  x: number;
  y: number;
};

function Hero() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const resetMousePosition = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[560px] px-0 py-16 lg:px-16">
      <div className="relative flex items-center justify-between gap-12">
        {/* LEFT TEXT */}
        <div className="relative z-10 max-w-[600px] translate-y-6">
          {/* Soft vignette behind text */}
          <div className="pointer-events-none absolute inset-[-80px] -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(5,8,22,0.45)_0%,rgba(5,8,22,0.25)_45%,transparent_80%)] blur-2xl" />

          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-200">
            SENIOR SOFTWARE ENGINEER
          </div>

          <h1 className="text-5xl font-bold leading-[1.1] text-white lg:text-6xl">
            I build scalable systems behind{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              intuitive interfaces.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            20+ years building high-performance platforms across e-commerce, healthcare, and fintech.
Specialized in React, TypeScript, Node.js, and cloud-native systems.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          onPointerMove={handlePointerMove}
          onPointerLeave={resetMousePosition}
          className="absolute right-[-30px] top-[-150px] z-0 hidden w-[620px] lg:block"
          animate={{
              rotateY: mousePosition.x * 3,
  rotateX: -mousePosition.y * 2,
            y: [0, -8, 0],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 0.2 },
            rotateY: { duration: 0.2 },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={backgroundUis}
            alt="Portfolio UI collage"
            draggable={false}
            className="w-full object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;