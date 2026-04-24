import { motion } from "framer-motion";
import type { FC } from "react";

const MorphingRetroBackground: FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient base */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(135deg, #14092e 0%, #2d0f5a 30%, #7a145e 60%, #1a093a 100%)",
          backgroundSize: "240% 240%",
        }}
      />

      {/* Blob 1 */}
      <motion.div
        className="absolute -left-24 top-20 h-[520px] w-[520px] rounded-full bg-fuchsia-500/30 blur-3xl"
        animate={{
          x: [0, 80, 20, 0],
          y: [0, -30, 70, 0],
          scale: [1, 1.25, 0.9, 1],
          borderRadius: ["45%", "60%", "38%", "45%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute right-[-120px] top-[-80px] h-[620px] w-[620px] rounded-full bg-violet-600/35 blur-3xl"
        animate={{
          x: [0, -70, -20, 0],
          y: [0, 80, 20, 0],
          scale: [1, 0.85, 1.18, 1],
          borderRadius: ["50%", "35%", "62%", "50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute bottom-[-180px] left-1/3 h-[560px] w-[760px] rounded-[45%] bg-pink-500/20 blur-3xl"
        animate={{
          x: [0, -90, 60, 0],
          y: [0, -40, 30, 0],
          rotate: [0, 8, -6, 0],
          scale: [1, 1.12, 0.96, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"0.4\"/%3E%3C/svg%3E')",
          }}
        />
      </div>

      {/* Halftone dots */}
      <div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 0 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 0 1px, transparent 1px)",
            backgroundSize: "32px 32px, 60px 60px",
          }}
        />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "100% 3px",
          }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.2)_50%,rgba(5,8,22,0.85)_100%)]" />
    </div>
  );
};

export default MorphingRetroBackground;