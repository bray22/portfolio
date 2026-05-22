import {
  ShoppingCart,
  HeartPulse,
  Smartphone,
  BookOpen,
} from "lucide-react";
import type { ComponentType } from "react";

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
