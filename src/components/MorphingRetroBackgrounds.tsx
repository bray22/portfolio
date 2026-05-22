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
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(135deg, #14092e 0%, #2d0f5a 30%, #7a145e 60%, #1a093a 100%)",
          backgroundSize: "320% 320%",
        }}
      />

      {/* Blob 1 */}
      <motion.div
        className="absolute -left-32 top-12 h-[620px] w-[620px] bg-fuchsia-500/45 blur-2xl"
        animate={{
          x: [0, 150, 40, 0],
          y: [0, -80, 120, 0],
          scale: [1, 1.45, 0.82, 1],
          rotate: [0, 16, -10, 0],
          borderRadius: [
            "42% 58% 65% 35%",
            "65% 35% 42% 58%",
            "38% 62% 35% 65%",
            "42% 58% 65% 35%",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute right-[-180px] top-[-120px] h-[720px] w-[720px] bg-violet-500/35 blur-2xl"
        animate={{
          x: [0, -150, -40, 0],
          y: [0, 120, 40, 0],
          scale: [1, 0.72, 1.35, 1],
          rotate: [0, -18, 12, 0],
          borderRadius: [
            "60% 40% 35% 65%",
            "35% 65% 60% 40%",
            "68% 32% 45% 55%",
            "60% 40% 35% 65%",
          ],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute bottom-[-220px] left-[25%] h-[620px] w-[820px] bg-pink-500/32 blur-2xl"
        animate={{
          x: [0, -150, 110, 0],
          y: [0, -90, 70, 0],
          rotate: [0, 18, -14, 0],
          scale: [1, 1.28, 0.9, 1],
          borderRadius: [
            "45% 55% 60% 40%",
            "62% 38% 35% 65%",
            "35% 65% 55% 45%",
            "45% 55% 60% 40%",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Extra morphing highlight */}
      <motion.div
        className="absolute left-[45%] top-[18%] h-[360px] w-[460px] bg-cyan-900/10 blur-2xl"
        animate={{
          x: [0, 90, -60, 0],
          y: [0, 70, -40, 0],
          rotate: [0, -14, 10, 0],
          scale: [1, 1.35, 0.85, 1],
          borderRadius: [
            "55% 45% 35% 65%",
            "35% 65% 60% 40%",
            "70% 30% 45% 55%",
            "55% 45% 35% 65%",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.16)_48%,rgba(5,8,22,0.82)_100%)]" />
    </div>
  );
};

export default MorphingRetroBackground;