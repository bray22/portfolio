import type { FC } from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";

import PageSection from "./PageSection";
import AnimatedSectionInner from "./AnimatedSectionInner";
import SectionHeading from "./SectionHeading";

const experience = [
  {
    type: "work",
    role: "Software Engineer",
    org: "Company Name",
    date: "2024 — Present",
    detail: "Built polished interfaces, scalable frontend systems, and product workflows.",
  },
  {
    type: "work",
    role: "Frontend Developer",
    org: "Company Name",
    date: "2023 — 2024",
    detail: "Created responsive UI systems with React, TypeScript, and modern animation.",
  },
  {
    type: "education",
    role: "B.S. Computer Science",
    org: "University Name",
    date: "2019 — 2023",
    detail: "Focused on software engineering, product systems, and human-centered design.",
  },
];

const ExperienceSection: FC = () => {
  return (
    <PageSection id="experience" variant="soft">
      <AnimatedSectionInner>
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve Worked & Studied"
        />

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/30 via-slate-300 to-purple-500/30 md:block" />

          <div className="space-y-5">
            {experience.map((item, i) => {
              const Icon = item.type === "education" ? GraduationCap : Building2;

              return (
                <motion.div
                  key={`${item.org}-${item.role}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="group relative grid gap-4 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/50 backdrop-blur transition-all hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-blue-100 md:grid-cols-[56px_1fr_auto]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/10 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {item.org}
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-slate-950">
                      {item.role}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                      {item.detail}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-slate-500 md:text-right">
                    {item.date}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSectionInner>
    </PageSection>
  );
};

export default ExperienceSection;