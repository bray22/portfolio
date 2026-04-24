import { motion } from "framer-motion";
import type { FC } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Code2,
  Database,
  Server,
} from "lucide-react";

import GlassCard from "./cards/GlassCard";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import { fadeUp, stagger } from "../animations/motion";

const Hero: FC = () => {
  return (
    <section className="grid items-start gap-10 pt-6 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:pt-10 lg:pb-14">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-200"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />
          Senior Software Engineer
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          I build scalable systems behind intuitive{" "}
          <motion.span
            className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            interfaces.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl"
        >
          20+ years building high-performance web platforms across e-commerce,
          healthcare, and financial services using React, TypeScript, Node.js,
          and modern cloud technologies.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="mt-9 flex flex-wrap gap-4">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="group inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-4 text-sm font-medium text-white shadow-[0_20px_50px_rgba(59,130,246,0.28)] transition"
          >
            Explore My Work
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.03] px-6 py-4 text-sm font-medium text-white/90"
          >
            View My Résumé
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-300" />
            Franklin, MA
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4 text-blue-300" />
            Open to Remote/Hybrid
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-blue-300" />
            bray22@gmail.com
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={5}
          className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/72"
        >
          <a className="inline-flex items-center gap-2 transition hover:text-white" href="#">
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a className="inline-flex items-center gap-2 transition hover:text-white" href="#">
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            className="inline-flex items-center gap-2 transition hover:text-white"
            href="tel:15084944847"
          >
            <Phone className="h-4 w-4" />
            (508) 494-4847
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative"
      >
        <div className="relative mx-auto max-w-[620px]">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-20 z-10 w-[46%]"
          >
            <GlassCard className="overflow-hidden p-0">
              <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-3 px-5 py-5 font-mono text-[11px] leading-6 text-blue-100/80">
                <div>{`{`}</div>
                <div className="pl-4 text-white/70">"orders": [</div>
                <div className="pl-8 text-white/50">{`{ "id": 981, "status": "shipped" },`}</div>
                <div className="pl-8 text-white/50">{`{ "id": 982, "status": "processing" }`}</div>
                <div className="pl-4 text-white/70">],</div>
                <div className="pl-4 text-white/70">"products": {`{`}</div>
                <div className="pl-8 text-emerald-300">"sku": "1001",</div>
                <div className="pl-8 text-sky-300">"stock": 64</div>
                <div className="pl-4 text-white/70">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="absolute inset-0 z-0 hidden lg:block">
            <svg viewBox="0 0 620 520" className="h-full w-full">
              {[120, 180, 240, 300].map((y, i) => (
                <motion.path
                  key={y}
                  d={`M220 ${y} C 310 ${y}, 330 ${120 + i * 70}, 470 ${
                    120 + i * 70
                  }`}
                  fill="transparent"
                  stroke="rgba(96,165,250,0.75)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.9 + i * 0.12 }}
                />
              ))}
            </svg>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative ml-auto w-[54%] pt-2"
          >
            <GlassCard className="p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                    Intuitive Interface
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">Dashboard</h3>
                </div>
                <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04]" />
              </div>

              <div className="space-y-4">
                <GlassCard className="p-4">
                  <p className="text-xs text-white/45">Total Orders</p>
                  <div className="mt-2 flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-semibold">8,842</p>
                      <p className="mt-1 text-xs text-emerald-300">↑ 12.5%</p>
                    </div>

                    <div className="flex h-16 items-end gap-1">
                      {[10, 14, 12, 18, 21, 16, 24].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 6, opacity: 0.4 }}
                          animate={{ height: h * 2, opacity: 1 }}
                          transition={{ duration: 0.7, delay: 1.2 + i * 0.06 }}
                          className="w-2 rounded-full bg-gradient-to-t from-blue-600 to-cyan-300"
                        />
                      ))}
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-4">
                  <p className="mb-3 text-xs text-white/45">Top Products</p>

                  {[64, 42, 38].map((value, i) => (
                    <div key={i} className="mb-3 last:mb-0">
                      <div className="mb-1 flex items-center justify-between text-xs text-white/70">
                        <span>{["Leather Jacket", "Weekender Bag", "Sneakers"][i]}</span>
                        <span>{value}</span>
                      </div>

                      <div className="h-2 rounded-full bg-white/8">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(value / 64) * 100}%` }}
                          transition={{ duration: 0.8, delay: 1.4 + i * 0.08 }}
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-400"
                        />
                      </div>
                    </div>
                  ))}
                </GlassCard>
              </div>
            </GlassCard>
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 pt-15 lg:pt-40">
            {[
              { label: "React", icon: Code2 },
              { label: "TypeScript", icon: Database },
              { label: "Node.js", icon: Server },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 1.3 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <GlassCard className="flex items-center gap-3 px-4 py-3 text-sm text-white/80">
                    <Icon className="h-4 w-4 text-blue-300" />
                    {item.label}
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;