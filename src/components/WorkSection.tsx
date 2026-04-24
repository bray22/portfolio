import { motion } from "framer-motion";
import type { FC } from "react";
import { ArrowRight } from "lucide-react";

import PageSection from "./PageSection";
import AnimatedSectionInner from "./AnimatedSectionInner";
import LightCard from "./cards/LightCard";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "../animations/motion";
import { caseStudies } from "../data/caseStudies";

const WorkSection: FC = () => {
  return (
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
          <SectionHeading eyebrow="Selected Work" title="Systems I’ve Built" />

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
                  <LightCard className="h-full border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="h-7 w-7" />
                    </div>

                    <p className="mb-2 text-sm text-slate-500">
                      {item.company}
                    </p>

                    <h3 className="text-xl font-semibold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-200 pt-5">
                      {item.metrics.map((metric) => {
                        const firstWord = metric.split(" ")[0];
                        const rest = metric.replace(firstWord, "").trim();

                        return (
                          <div key={metric}>
                            <p className="text-lg font-semibold text-emerald-600">
                              {firstWord}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {rest}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </LightCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatedSectionInner>
    </PageSection>
  );
};

export default WorkSection;