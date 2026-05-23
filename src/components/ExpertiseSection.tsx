import { motion } from "framer-motion";
import type { FC } from "react";

import PageSection from "./PageSection";
import AnimatedSectionInner from "./AnimatedSectionInner";
import LightCard from "./cards/LightCard";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "../animations/motion";
import { tech, techCategories } from "../data/tech";

const featuredTech = tech.filter((item) => item.featured);

const ExpertiseSection: FC = () => {
  return (
    <PageSection id="expertise" variant="soft">
      <AnimatedSectionInner>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <SectionHeading
            eyebrow="Technology"
            title="Technologies I Work With"
            action="Organized by workflow"
          />

          <div className="grid gap-5 lg:grid-cols-[1fr_1.35fr]">
            <motion.div variants={fadeUp}>
              <LightCard className="h-full overflow-hidden border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/60">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600/70">
                      Core stack
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      Built for SaaS, data, and integrations.
                    </h3>
                  </div>
                </div>

                <div className="grid gap-x-5 sm:grid-cols-2">
                  {featuredTech.map((item, i) => (
                    <motion.div
                      key={item.name}
                      variants={fadeUp}
                      custom={i}
                      whileHover={{ translateY: -4 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className="flex min-h-16 items-center gap-3 border-t border-slate-100 py-3 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-50">
                        <img
                          src={item.logo}
                          alt={`${item.name} logo`}
                          loading="lazy"
                          className="max-h-7 max-w-8 object-contain"
                        />
                      </div>
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5 text-center">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{tech.length}</p>
                    <p className="text-xs text-slate-500">Tools</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{techCategories.length}</p>
                    <p className="text-xs text-slate-500">Categories</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-950">Full</p>
                    <p className="text-xs text-slate-500">Stack</p>
                  </div>
                </div>
              </LightCard>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {techCategories.map((category, i) => {
                const items = tech.filter((item) => item.category === category);

                return (
                  <motion.div
                    key={category}
                    variants={fadeUp}
                    custom={i + featuredTech.length}
                    whileHover={{ translateY: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <LightCard className="h-full border border-slate-200/80 bg-white/80 p-5 shadow-lg shadow-slate-200/50 backdrop-blur">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {category}
                        </h3>
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                          {items.length}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item.name}
                            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm"
                          >
                            <img
                              src={item.logo}
                              alt=""
                              loading="lazy"
                              aria-hidden="true"
                              className="h-5 w-5 object-contain"
                            />
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </LightCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </AnimatedSectionInner>
    </PageSection>
  );
};

export default ExpertiseSection;
