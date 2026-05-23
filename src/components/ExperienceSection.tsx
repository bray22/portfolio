import type { FC } from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";

import PageSection from "./PageSection";
import AnimatedSectionInner from "./AnimatedSectionInner";
import SectionHeading from "./SectionHeading";

type LogoAsset = {
  src: string;
  alt: string;
};

type ExperienceItem = {
  type: "work" | "education";
  role: string;
  org: string;
  location?: string;
  date?: string;
  detail: string;
  logo?: LogoAsset;
  logos?: LogoAsset[];
};

const logoPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const experience: ExperienceItem[] = [
  {
    type: "work",
    role: "Senior Software Engineer / Analyst",
    org: "Trimark USA",
    location: "Mansfield, MA",
    date: "May 2023 — Present",
    logo: {
      src: logoPath("logos/companies/trimark.webp"),
      alt: "Trimark USA logo",
    },
    detail: "Built full-stack SaaS platforms with React, Next.js, Remix, TypeScript, Node.js, and AWS for complex B2B ecommerce workflows. Designed REST/GraphQL contracts, ETL pipelines, and PostgreSQL-backed services managing 10K+ SKUs.",
  },
  {
    type: "work",
    role: "JavaScript Software Engineer",
    org: "Verana Health",
    location: "Remote",
    date: "Feb 2022 — Apr 2023",
    logo: {
      src: logoPath("logos/companies/verana-health.webp"),
      alt: "Verana Health logo",
    },
    detail: "Delivered React and TypeScript features across healthcare Data-as-a-Service platforms, including analytics workflows for large clinical datasets. Improved dashboard load performance by 30% and strengthened quality with Jest testing.",
  },
  {
    type: "work",
    role: "Senior Front End Engineer",
    org: "First Help Financial",
    location: "Newton, MA",
    date: "Apr 2020 — Jan 2022",
    logo: {
      src: logoPath("logos/companies/first-help-financial.svg"),
      alt: "First Help Financial logo",
    },
    detail: "Led React and React Native development for web and mobile applications supporting sales and customer service teams. Built shared component libraries and responsive systems that reduced new feature delivery time by 25%.",
  },
  {
    type: "work",
    role: "Senior JavaScript Engineer",
    org: "Rosetta Stone",
    location: "Concord, MA",
    date: "Aug 2018 — Mar 2020",
    logo: {
      src: logoPath("logos/companies/rosetta-stone.png"),
      alt: "Rosetta Stone logo",
    },
    detail: "Developed React-based K-12 learning platforms including Core5 and PowerUp. Built responsive, accessible UI components with React, Redux, SASS, and Webpack, and contributed to the PowerUp hybrid iOS launch.",
  },
  {
    type: "work",
    role: "Senior Software Engineer (Contract)",
    org: "Fidelity Investments",
    location: "Merrimack, NH",
    date: "Jul 2017 — Jul 2018",
    logo: {
      src: logoPath("logos/companies/fidelity.svg"),
      alt: "Fidelity Investments logo",
    },
    detail: "Led frontend development for a customer-facing financial and HR SaaS platform serving enterprise users. Delivered accessible, mobile-responsive UI components and maintained modern JavaScript tooling and deployment workflows.",
  },
  {
    type: "work",
    role: "Software Engineer",
    org: "Dell Technologies",
    location: "Hopkinton, MA",
    date: "Oct 2015 — Jun 2017",
    logo: {
      src: logoPath("logos/companies/dell-technologies.svg"),
      alt: "Dell Technologies logo",
    },
    detail: "Designed internal dashboards for product testing and performance analytics. Built and optimized REST APIs, improved system reliability and throughput, and partnered with UX teams on production UI improvements.",
  },
  {
    type: "work",
    role: "Senior Web Developer",
    org: "Sun Life Financial",
    location: "Wellesley, MA",
    date: "May 2012 — Oct 2015",
    logo: {
      src: logoPath("logos/companies/sun-life.png"),
      alt: "Sun Life logo",
    },
    detail: "Built clean customer UIs for benefits management, integrated Java services for financial data, and supported analysts in requirements gathering. Tech: HTML5, CSS3, JavaScript, ExtJS, Flex, SQL.",
  },
  {
    type: "work",
    role: "Senior Web Developer",
    org: "Hasbro",
    location: "Pawtucket, RI",
    date: "Aug 2008 — Apr 2012",
    logo: {
      src: logoPath("logos/companies/hasbro.png"),
      alt: "Hasbro logo",
    },
    detail: "Designed and maintained front-end and back-end systems for high-profile toy product sites, managed redirects and localization across 30+ countries, and built a custom CMS for marketing assets and translations. Tech: HTML5, CSS3, JavaScript, ExtJS, PHP, jQuery, ColdFusion, SQL.",
  },
  {
    type: "work",
    role: "Web Applications Developer / Analyst",
    org: "Sun Life Financial",
    location: "Wellesley, MA",
    date: "Mar 2006 — Aug 2008",
    logo: {
      src: logoPath("logos/companies/sun-life.png"),
      alt: "Sun Life logo",
    },
    detail: "Developed deadline-driven customer web applications, integrated Java services for real-time financial data, and supported analysts through project requirements. Tech: HTML5, CSS3, JavaScript, ExtJS, jQuery, ColdFusion, SQL.",
  },
  {
    type: "work",
    role: "Web Applications Developer",
    org: "Babson College",
    location: "Babson Park, MA",
    date: "Sep 2000 — Sep 2005",
    logo: {
      src: logoPath("logos/companies/babson.svg"),
      alt: "Babson College logo",
    },
    detail: "Developed software supporting administrative and academic programs, advocated for modern web development practices, and implemented core authentication, workflow, and notification services. Tech: HTML, CSS, JavaScript, ColdFusion, SQL.",
  },
  {
    type: "education",
    role: "M.S. Computer Science",
    org: "Vanderbilt University",
    logo: {
      src: logoPath("logos/vanderbilt.png"),
      alt: "Vanderbilt University logo",
    },
    detail: "Focus: Machine Learning, Systems Architecture, and AI Engineering.",
  },
  {
    type: "education",
    role: "B.A. Communications",
    org: "Framingham State University",
    logo: {
      src: logoPath("logos/framingham-state.png"),
      alt: "Framingham State University logo",
    },
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
              const logos = item.logos ?? (item.logo ? [item.logo] : []);
              const iconSlot = logos.length > 0 ? (
                <div
                  className={
                    logos.length > 1
                      ? "grid h-full w-full grid-cols-2 place-items-center gap-1 p-1"
                      : "flex h-full w-full items-center justify-center"
                  }
                >
                  {logos.map((logo) => (
                    <img
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className={
                        logos.length > 1
                          ? "max-h-7 max-w-10 object-contain"
                          : "max-h-14 max-w-16 object-contain"
                      }
                    />
                  ))}
                </div>
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
