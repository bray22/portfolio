import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { FC } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

import PageSection from "./PageSection";
import AnimatedSectionInner from "./AnimatedSectionInner";
import LightCard from "./cards/LightCard";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "../animations/motion";
import { caseStudies } from "../data/caseStudies";
import type { CaseStudy } from "../data/caseStudies";

const BrowserFrame: FC<{ src: string; alt: string; caption?: string }> = ({ src, alt, caption }) => (
  <div className="overflow-hidden rounded-2xl bg-[#1e1e24]">
    <div className="flex items-center gap-2 bg-[#2a2a32] px-3 py-2">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e24b4a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ef9f27]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#639922]" />
      </div>
      <div className="flex-1 rounded bg-[#1e1e24] px-2 py-0.5 text-[10px] text-slate-500 font-mono truncate">
        app.rosettastone.com
      </div>
    </div>
    <img src={src} alt={alt} className="block w-full object-cover object-top" />
    {caption && (
      <p className="px-3 py-2 text-[11px] text-slate-400 leading-relaxed">{caption}</p>
    )}
  </div>
);

const CaseStudyModal: FC<{ study: CaseStudy; onClose: () => void }> = ({ study, onClose }) => {
  const cs = study.caseStudy!;
  const Icon = study.icon;
  const shots = cs.screenshots ?? [];
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => (i - 1 + shots.length) % shots.length);
  const next = () => setActiveIdx((i) => (i + 1) % shots.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200/80 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-3xl border-b border-slate-100 bg-white/95 p-6 backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{study.company}</p>
              <h2 className="text-xl font-semibold text-slate-950">{study.title}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:border-slate-300 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Screenshots carousel */}
          {shots.length > 0 && (
            <div className="space-y-3">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <BrowserFrame
                      src={shots[activeIdx].src}
                      alt={shots[activeIdx].caption}
                      caption={shots[activeIdx].caption}
                    />
                  </motion.div>
                </AnimatePresence>

                {shots.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-white backdrop-blur transition hover:bg-slate-900/90"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-white backdrop-blur transition hover:bg-slate-900/90"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Dot indicators + thumbnail strip */}
              {shots.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {shots.map((shot, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`shrink-0 overflow-hidden rounded-lg border-2 transition ${
                        i === activeIdx
                          ? "border-blue-500 opacity-100"
                          : "border-transparent opacity-50 hover:opacity-75"
                      }`}
                    >
                      <img src={shot.src} alt={`Screen ${i + 1}`} className="h-12 w-20 object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cs.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
                <p className="text-base font-semibold text-emerald-600">{h.value}</p>
                <p className="mt-1 text-xs text-slate-500">{h.label}</p>
              </div>
            ))}
          </div>

          {/* Narrative */}
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600/70">Overview</h3>
            <p className="text-sm leading-7 text-slate-600">{cs.overview}</p>
          </div>
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600/70">The Challenge</h3>
            <p className="text-sm leading-7 text-slate-600">{cs.challenge}</p>
          </div>
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600/70">What I Built</h3>
            <p className="text-sm leading-7 text-slate-600">{cs.solution}</p>
          </div>
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600/70">Outcome</h3>
            <p className="text-sm leading-7 text-slate-600">{cs.outcome}</p>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600/70">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {cs.tech.map((t) => (
                <span key={t} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WorkSection: FC = () => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <>
      <PageSection id="work" variant="white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        </div>
        <AnimatedSectionInner>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <SectionHeading eyebrow="Selected Work" title="Systems I've Built" />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {caseStudies.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i}
                    whileHover={{ translateY: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <LightCard className="h-full border border-slate-200/80 bg-white/80 shadow-xl shadow-slate-200/60 backdrop-blur overflow-hidden">
                      {/* Browser preview peek */}
                      {item.previewScreenshot && (
                        <div className="overflow-hidden border-b border-slate-100 bg-[#1e1e24]">
                          <div className="flex items-center gap-1.5 bg-[#2a2a32] px-3 py-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#e24b4a]" />
                            <span className="h-2 w-2 rounded-full bg-[#ef9f27]" />
                            <span className="h-2 w-2 rounded-full bg-[#639922]" />
                            <span className="ml-1 flex-1 rounded bg-[#1e1e24] px-2 py-0.5 text-[9px] text-slate-500 font-mono">
                              app.rosettastone.com
                            </span>
                          </div>
                          <div className="h-32 overflow-hidden">
                            <img
                              src={item.previewScreenshot}
                              alt={`${item.company} preview`}
                              className="w-full object-cover object-top"
                            />
                          </div>
                        </div>
                      )}

                      <div className="p-6">
                        {!item.previewScreenshot && (
                          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <Icon className="h-7 w-7" />
                          </div>
                        )}

                        <p className="mb-2 text-sm text-slate-500">{item.company}</p>
                        <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>

                        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-200 pt-5">
                          {item.metrics.map((metric) => {
                            const firstWord = metric.split(" ")[0];
                            const rest = metric.replace(firstWord, "").trim();
                            return (
                              <div key={metric}>
                                <p className="text-lg font-semibold text-emerald-600">{firstWord}</p>
                                <p className="mt-1 text-xs text-slate-500">{rest}</p>
                              </div>
                            );
                          })}
                        </div>

                        {item.caseStudy ? (
                          <button
                            onClick={() => setActiveStudy(item)}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                          >
                            View Case Study
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        ) : (
                          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                            View Case Study
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    </LightCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatedSectionInner>
      </PageSection>

      <AnimatePresence>
        {activeStudy && activeStudy.caseStudy && (
          <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkSection;
