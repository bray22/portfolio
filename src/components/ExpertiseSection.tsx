import { motion } from "framer-motion";
import type { FC } from "react";
import { BarChart3 } from "lucide-react";

import PageSection from "./PageSection";
import AnimatedSectionInner from "./AnimatedSectionInner";
import LightCard from "./cards/LightCard";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "../animations/motion";
import { tech } from "../data/tech";

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
            action="View all skills →"
          />

          <LightCard className="h-full border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
              {tech.map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ translateY: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-700 shadow-sm"
                >
                  <div className="mb-3 flex justify-center text-blue-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>
          </LightCard>
        </motion.div>
      </AnimatedSectionInner>
    </PageSection>
  );
};

export default ExpertiseSection;