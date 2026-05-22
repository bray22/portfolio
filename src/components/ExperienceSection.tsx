import type { FC } from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";

import PageSection from "./PageSection";
import AnimatedSectionInner from "./AnimatedSectionInner";
import SectionHeading from "./SectionHeading";

const experience = [
  {
    type: "work",
    role: "Senior Software Engineer / Analyst",
    org: "Trimark USA",
    location: "Mansfield, MA",
    date: "May 2023 — Present",
    detail: "Built full-stack SaaS platforms with React, Next.js, Remix, TypeScript, Node.js, and AWS for complex B2B ecommerce workflows. Designed REST/GraphQL contracts, ETL pipelines, and PostgreSQL-backed services managing 10K+ SKUs.",
  },
  {
    type: "work",
    role: "JavaScript Software Engineer",
    org: "Verana Health",
    location: "Remote",
    date: "Feb 2022 — Apr 2023",
    detail: "Delivered React and TypeScript features across healthcare Data-as-a-Service platforms, including analytics workflows for large clinical datasets. Improved dashboard load performance by 30% and strengthened quality with Jest testing.",
  },
  {
    type: "work",
    role: "Senior Front End Engineer",
    org: "First Help Financial",
    location: "Newton, MA",
    date: "Apr 2020 — Jan 2022",
    detail: "Led React and React Native development for web and mobile applications supporting sales and customer service teams. Built shared component libraries and responsive systems that reduced new feature delivery time by 25%.",
  },
  {
    type: "work",
    role: "Senior JavaScript Engineer",
    org: "Rosetta Stone",
    location: "Concord, MA",
    date: "Aug 2018 — Mar 2020",
    detail: "Developed React-based K-12 learning platforms including Core5 and PowerUp. Built responsive, accessible UI components with React, Redux, SASS, and Webpack, and contributed to the PowerUp hybrid iOS launch.",
  },
  {
    type: "work",
    role: "Senior Software Engineer (Contract)",
    org: "Fidelity Investments",
    location: "Merrimack, NH",
    date: "Jul 2017 — Jul 2018",
    detail: "Led frontend development for a customer-facing financial and HR SaaS platform serving enterprise users. Delivered accessible, mobile-responsive UI components and maintained modern JavaScript tooling and deployment workflows.",
  },
  {
    type: "work",
    role: "Software Engineer",
    org: "Dell Technologies",
    location: "Hopkinton, MA",
    date: "Oct 2015 — Jun 2017",
    detail: "Designed internal dashboards for product testing and performance analytics. Built and optimized REST APIs, improved system reliability and throughput, and partnered with UX teams on production UI improvements.",
  },
  {
    type: "work",
    role: "Senior Web Developer / Web Developer / Analyst",
    org: "Hasbro, Sun Life Financial, Babson College",
    date: "Additional Software Engineering Experience",
    detail: "Built and maintained customer-facing web applications, enterprise CMS systems, global brand sites, backend integrations, and content-driven platforms for high-traffic web environments.",
  },
  {
    type: "education",
    role: "M.S. Computer Science",
    org: "Vanderbilt University",
    logo: "/portfolio/logos/vanderbilt.png",
    detail: "Focus: Machine Learning, Systems Architecture, and AI Engineering.",
  },
  {
    type: "education",
    role: "B.A. Communications",
    org: "Framingham State University",
    logo: "/portfolio/logos/framingham-state.png",
    detail: "Undergraduate study in communications.",
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
              const iconSlot = item.logo ? (
                <img src={item.logo} alt={item.org} className="max-h-14 max-w-16 object-contain" />
              ) : (
                <Icon className="h-5 w-5" />
              );

              return (
                <motion.div
                  key={`${item.org}-${item.role}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
                  className="group relative grid gap-4 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/50 backdrop-blur transition-all hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-blue-100 md:grid-cols-[96px_1fr_auto]"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/10 text-blue-600">
                    {iconSlot}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {item.org}
                      {item.location && <span className="text-slate-400"> | {item.location}</span>}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-950">{item.role}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{item.detail}</p>
                  </div>

                  {item.date && (
                    <p className="text-sm font-medium text-slate-500 md:text-right">{item.date}</p>
                  )}
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
