import { motion } from "framer-motion";
import type { FC } from "react";
import { ArrowRight } from "lucide-react";

import PageSection from "./PageSection";
import AnimatedSectionInner from "./AnimatedSectionInner";
import LightCard from "./cards/LightCard";
import { fadeUp, stagger } from "../animations/motion";
import { strengths } from "../data/strengths";
import linkedinPhoto from "../images/linkedin-photo.png";

const AboutSection: FC = () => {
  return (
    <PageSection id="about" variant="white">
      <AnimatedSectionInner>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={fadeUp}>
            <LightCard className="h-full border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full shadow-inner">
                <img
                  src={linkedinPhoto}
                  alt="Ben"
                  className="h-full w-full object-cover"
                />
              </div>

                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-blue-600/70">
                    About
                  </p>

                  <h3 className="text-3xl font-semibold tracking-tight text-slate-950">
                    Hi, I’m <span className="text-blue-600">Benjamin.</span>
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
                    I partner with product and design teams to build reliable,
                    performant systems that solve real problems and deliver
                    meaningful impact.
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                  >
                    More About Me
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </LightCard>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {strengths.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i + 1}
                  whileHover={{ translateY: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <LightCard className="h-full border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/10 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
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

export default AboutSection;