import React from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import WebGLBackground from './components/WebGLBackground'
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Monitor,
  ShoppingCart,
  HeartPulse,
  Smartphone,
  BookOpen,
  Code2,
  Users,
  Rocket,
  Database,
  Server,
  BarChart3,
} from "lucide-react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

type CaseStudy = {
  icon: React.ComponentType<any>;
  title: string;
  company: string;
  description: string;
  metrics: string[];
};

const caseStudies: CaseStudy[] = [
  {
    icon: ShoppingCart,
    title: "B2B E-Commerce Platform",
    company: "Trimark USA",
    description:
      "Built scalable applications for 10K+ SKUs and complex B2B workflows, improving reliability through stronger validation and data handling.",
    metrics: ["10K+ SKUs", "40% fewer inconsistencies"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare Data Platform",
    company: "Verana Health",
    description:
      "Engineered high-performance React + TypeScript dashboards for analysts and researchers working with large-scale healthcare data.",
    metrics: ["30% faster dashboards", "Data-rich UX"],
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Systems",
    company: "First Help Financial",
    description:
      "Led web and mobile development with shared component libraries that accelerated feature delivery and consistency.",
    metrics: ["25% faster delivery", "Shared design systems"],
  },
  {
    icon: BookOpen,
    title: "Education Platform",
    company: "Rosetta Stone",
    description:
      "Built accessible learning interfaces and contributed to the launch of a hybrid iOS educational experience.",
    metrics: ["K–12 at scale", "Accessible by design"],
  },
];

const tech: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "AWS",
  "PostgreSQL",
  "Docker",
  "Vercel",
  "Jest",
];

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.82-2.05 3.74-2.05C21 8.59 21 11 21 14.11V21h-4v-6.11c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.6-2.35 3.23V21h-4V9Z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.18c-3.2.7-3.88-1.35-3.88-1.35-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.53-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.8 1.19 1.83 1.19 3.09 0 4.45-2.71 5.42-5.29 5.7.42.36.79 1.05.79 2.12v3.15c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function BRMonogram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="br-gradient" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="0.5" stopColor="#818CF8" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="rgba(255,255,255,0.04)" />
      <rect x="4.5" y="4.5" width="55" height="55" rx="17.5" stroke="rgba(255,255,255,0.12)" />
      <path d="M20 16H33C40.18 16 44 19.2 44 24.88C44 28.95 41.78 31.56 37.68 32.4C42.43 33.02 45 35.92 45 40.72C45 46.9 40.61 50 32.48 50H20V16ZM27.45 21.76V29.98H31.52C35.42 29.98 37.21 28.57 37.21 25.93C37.21 23.19 35.39 21.76 31.52 21.76H27.45ZM27.45 35.36V44.24H32.1C36.48 44.24 38.31 42.73 38.31 39.86C38.31 36.92 36.43 35.36 31.96 35.36H27.45Z" fill="url(#br-gradient)" />
      <path d="M39.5 41.5L47 49" stroke="url(#br-gradient)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

type Strength = {
  icon: React.ComponentType<any>;
  title: string;
  text: string;
};

const strengths: Strength[] = [
  {
    icon: Code2,
    title: "Engineering Excellence",
    text: "Clean architecture, performance thinking, and frontend systems that scale with teams and products.",
  },
  {
    icon: Users,
    title: "Collaborative Leadership",
    text: "Strong partnership with product, design, and engineering through mentorship, reviews, and ownership.",
  },
  {
    icon: Rocket,
    title: "Impact Driven",
    text: "Focused on building software that reduces friction, improves reliability, and creates measurable business value.",
  },
];

const SectionHeading: FC<{ eyebrow?: string; title: string; action?: string }> = ({ eyebrow, title, action }) => {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-blue-300/70">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      </div>
      {action ? <p className="hidden text-sm text-blue-300 md:block">{action}</p> : null}
    </div>
  );
};

const GlassCard: FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
};

const App: FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* <WebGLBackground /> */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,107,255,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(120,64,255,0.16),transparent_25%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_25%)]" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at center, black, transparent 78%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-md" />
              <BRMonogram className="relative h-12 w-12 drop-shadow-[0_8px_24px_rgba(96,165,250,0.24)]" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-white/95">BENJAMIN RAY</p>
              <p className="text-xs text-white/50">Senior Software Engineer</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a className="transition hover:text-white" href="#work">Work</a>
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#expertise">Expertise</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </nav>

          <motion.button
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="rounded-2xl border border-blue-400/30 bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)]"
          >
            Let&apos;s Connect
          </motion.button>
        </motion.header>

        <section className="grid items-start gap-10 pt-6 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:pt-10 lg:pb-14">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
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
              20+ years building high-performance web platforms across e-commerce, healthcare, and financial services using React, TypeScript, Node.js, and modern cloud technologies.
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
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-300" />Franklin, MA</div>
              <div className="flex items-center gap-2"><Monitor className="h-4 w-4 text-blue-300" />Open to Remote/Hybrid</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-300" />bray22@gmail.com</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/72"
            >
              <a className="inline-flex items-center gap-2 transition hover:text-white" href="#"><LinkedInIcon className="h-4 w-4" />LinkedIn</a>
              <a className="inline-flex items-center gap-2 transition hover:text-white" href="#"><GitHubIcon className="h-4 w-4" />GitHub</a>
              <a className="inline-flex items-center gap-2 transition hover:text-white" href="#"><Phone className="h-4 w-4" />(508) 494-4847</a>
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

              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 z-0 hidden lg:block"
              >
                <svg viewBox="0 0 620 520" className="h-full w-full">
                  {[120, 180, 240, 300].map((y, i) => (
                    <motion.path
                      key={y}
                      d={`M220 ${y} C 310 ${y}, 330 ${120 + i * 70}, 470 ${120 + i * 70}`}
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
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative ml-auto w-[54%] pt-2"
              >
                <GlassCard className="p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Intuitive Interface</p>
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

        <motion.section
          id="work"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="pt-10 pb-14"
        >
          <SectionHeading eyebrow="Selected Work" title="Systems I’ve Built" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {caseStudies.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} custom={i} whileHover={{ y: -6 }}>
                  <GlassCard className="h-full p-6">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-200">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mb-2 text-sm text-white/45">{item.company}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/8 pt-5">
                      {item.metrics.map((metric) => (
                        <div key={metric}>
                          <p className="text-lg font-semibold text-emerald-300">{metric.split(" ")[0]}</p>
                          <p className="mt-1 text-xs text-white/45">{metric.replace(metric.split(" ")[0], "").trim()}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-blue-300">
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="expertise"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-10"
        >
          <SectionHeading eyebrow="Technology" title="Technologies I Work With" action="View all skills →" />
          <GlassCard className="p-5 md:p-7">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
              {tech.map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-5 text-center text-sm text-white/80"
                >
                  <div className="mb-3 flex justify-center text-blue-300">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-6 py-14 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={fadeUp}>
            <GlassCard className="h-full p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="h-28 w-28 rounded-full bg-gradient-to-br from-slate-500 to-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" />
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight">Hi, I’m <span className="text-blue-300">Benjamin.</span></h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 md:text-base">
                    I partner with product and design teams to build reliable, performant systems that solve real problems and deliver meaningful impact.
                  </p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-blue-300">
                    More About Me <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {strengths.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} custom={i + 1} whileHover={{ y: -4 }}>
                  <GlassCard className="h-full p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/18 to-violet-500/18 text-blue-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.footer
          id="contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-6 rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-500/14 via-white/[0.04] to-violet-500/14 px-6 py-8 md:px-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-blue-200/70">Let’s build something strong</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">Open to senior frontend and full-stack opportunities.</h3>
              <p className="mt-3 max-w-2xl text-white/62">
                Available for remote and hybrid roles focused on scalable product experiences, frontend architecture, and systems that deliver measurable value.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:bray22@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-6 py-4 text-sm font-medium text-white shadow-[0_20px_50px_rgba(59,130,246,0.25)]"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.03] px-6 py-4 text-sm font-medium text-white/90"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default App;
