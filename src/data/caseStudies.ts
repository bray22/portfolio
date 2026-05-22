import {
  ShoppingCart,
  HeartPulse,
  Smartphone,
  BookOpen,
} from "lucide-react";
import type { ComponentType } from "react";

import trimark1 from "../images/screenshots/trimark-1.png";
import trimark2 from "../images/screenshots/trimark-2.png";
import trimark3 from "../images/screenshots/trimark-3.png";
import verana1 from "../images/screenshots/verana-1.png";
import verana2 from "../images/screenshots/verana-2.png";
import verana3 from "../images/screenshots/verana-3.png";
import fhf1 from "../images/screenshots/fhf-1.png";
import fhf2 from "../images/screenshots/fhf-2.png";
import fhf3 from "../images/screenshots/fhf-3.png";
import rosetta1 from "../images/screenshots/rosetta-1.png";
import rosetta2 from "../images/screenshots/rosetta-2.png";
import rosetta3 from "../images/screenshots/rosetta-3.png";

export type CaseStudy = {
  icon: ComponentType<any>;
  title: string;
  company: string;
  description: string;
  metrics: string[];
  previewScreenshot?: string;
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    outcome: string;
    tech: string[];
    highlights: { label: string; value: string }[];
    screenshots?: { src: string; caption: string }[];
  };
};

export const caseStudies: CaseStudy[] = [
  {
    icon: ShoppingCart,
    title: "B2B E-Commerce Platform",
    company: "Trimark USA",
    description:
      "Built scalable applications for 10K+ SKUs and complex B2B workflows, improving reliability through stronger validation and data handling.",
    metrics: ["10K+ SKUs", "40% fewer inconsistencies"],
    previewScreenshot: trimark2,
    caseStudy: {
      overview:
        "Led a full rebuild of Trimark USA’s B2B ordering platform, delivering a modular React experience for wholesale customers and supply chain teams handling over 10,000 SKUs.",
      challenge:
        "The legacy ordering system was brittle: batch inventory updates failed often, pricing rules were hardcoded, and order entry workflows were slow for high-volume buyers.",
      solution:
        "Built a component-driven React + TypeScript front end with dynamic catalog filtering, role-aware pricing, and resilient form validation. Integrated supplier APIs and created reusable order management components to reduce mismatch risk.",
      outcome:
        "The new platform stabilized order workflows, reduced catalog errors by 40%, and enabled product teams to ship new SKU support and pricing rules much faster.",
      tech: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
      highlights: [
        { label: "Platform", value: "B2B commerce" },
        { label: "SKU coverage", value: "10K+ products" },
        { label: "Quality", value: "40% fewer inconsistencies" },
        { label: "Focus", value: "Data-driven workflows" },
      ],
      screenshots: [
        { src: trimark3, caption: "B2B catalog and dynamic pricing for wholesale buyers." },
        { src: trimark1, caption: "Order entry and SKU selection interface with large inventory support." },
        { src: trimark2, caption: "Supplier dashboard with validation and inventory sync indicators." },
      ],
    },
  },
  {
    icon: HeartPulse,
    title: "Healthcare Data Platform",
    company: "Verana Health",
    description:
      "Engineered high-performance React + TypeScript dashboards for analysts and researchers working with large-scale healthcare data.",
    metrics: ["30% faster dashboards", "Data-rich UX"],
    previewScreenshot: verana1,
    caseStudy: {
      overview:
        "Built enterprise analytics tooling for Verana Health, helping clinicians and research teams explore clinical datasets with responsive, chart-driven dashboards.",
      challenge:
        "The previous reporting tools were slow and cluttered, making it difficult to slice large healthcare datasets and extract meaningful insights quickly.",
      solution:
        "Designed a React dashboard suite with performant chart rendering, advanced filters, and contextual data summaries. Optimized data loading and caching so complex views rendered much faster.",
      outcome:
        "Analysts adopted the new platform immediately; dashboard load times improved by 30%, and stakeholders could explore clinical metrics with greater confidence.",
      tech: ["React", "TypeScript", "D3", "SQL", "Healthcare data"],
      highlights: [
        { label: "Analytics", value: "30% faster dashboards" },
        { label: "UX", value: "Data-rich interface" },
        { label: "Scale", value: "Large clinical datasets" },
        { label: "Focus", value: "Trusted decision support" },
      ],
      screenshots: [
        { src: verana1, caption: "Executive dashboard with treatment and performance summaries." },
        { src: verana3, caption: "Clinical metrics panel with deep insights for hospital performance." },
        { src: verana2, caption: "Interactive trend charts and filter-driven patient cohort exploration." },
      ],
    },
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Systems",
    company: "First Help Financial",
    description:
      "Led web and mobile development with shared component libraries that accelerated feature delivery and consistency.",
    metrics: ["25% faster delivery", "Shared design systems"],
    previewScreenshot: fhf3,
    caseStudy: {
      overview:
        "Delivered a unified product experience for First Help Financial, enabling agents and customers to use the same interaction patterns across mobile and web.",
      challenge:
        "Multiple teams were building inconsistent interfaces for web and mobile, which slowed feature delivery and created confusion across customer journeys.",
      solution:
        "Created a shared UI library and responsive component system in React and React Native, then rebuilt core workflows using shared tokens, reusable patterns, and consistent behavior across platforms.",
      outcome:
        "Development velocity increased by 25%, and the shared system reduced UI drift while making it easier to roll out new financial tools across channels.",
      tech: ["React", "React Native", "TypeScript", "Tailwind CSS", "Design systems"],
      highlights: [
        { label: "Delivery", value: "25% faster" },
        { label: "Consistency", value: "Shared design system" },
        { label: "Scope", value: "Web + mobile" },
        { label: "Focus", value: "Cross-platform reuse" },
      ],
      screenshots: [
        { src: fhf3, caption: "Mobile financial dashboard with quick-access cards and insights." },
        { src: fhf1, caption: "Appointment scheduling and transaction history in the mobile app." },
        { src: fhf2, caption: "Agent-facing mobile tools with consistent navigation and action flows." },
      ],
    },
  },
  {
    icon: BookOpen,
    title: "Education Platform",
    company: "Rosetta Stone",
    description:
      "Built accessible learning interfaces and contributed to the launch of a hybrid iOS educational experience.",
    metrics: ["K–12 at scale", "Accessible by design"],
    previewScreenshot: rosetta3,
    caseStudy: {
      overview:
        "Partnered with Rosetta Stone to evolve their K–12 language learning suite — shipping an accessible, mobile-first redesign and spearheading the launch of a hybrid iOS learning experience used by students across the country.",
      challenge:
        "Rosetta Stone's existing web interfaces weren't keeping pace with how students actually learned — on phones, in short bursts, across wildly different ability levels. Accessibility compliance was inconsistent, iOS engagement was lagging, and the codebase lacked the modularity needed to ship features fast.",
      solution:
        "Rebuilt core learning flows in React Native with a shared component library that ran on both web and iOS. Implemented WCAG 2.1 AA accessibility standards from the ground up — semantic markup, screen reader support, keyboard navigation, and contrast-compliant theming. Designed a lightweight Node.js API layer to serve adaptive lesson content and sync progress across devices in real time.",
      outcome:
        "The hybrid iOS experience launched on schedule, giving K–12 students a seamless cross-device learning path for the first time. Accessibility improvements passed external audit, and the shared component system cut new feature development time significantly.",
      tech: ["React Native", "Node.js", "JavaScript", "iOS", "WCAG 2.1 AA"],
      highlights: [
        { label: "Platform", value: "K–12 at scale" },
        { label: "Accessibility", value: "WCAG 2.1 AA" },
        { label: "Target", value: "iOS + Web" },
        { label: "Focus", value: "Accessible by design" },
      ],
      screenshots: [
        { src: rosetta3, caption: "Student learning dashboard — Word Study, Grammar & Comprehension modules" },
        { src: rosetta1, caption: "Teacher dashboard — Grade 6 ELA class overview with skill tracking" },
        { src: rosetta2, caption: "Lexia PowerUp login screen — accessible entry point for students and teachers" },
      ],
    },
  },
];
