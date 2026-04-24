import {
  ShoppingCart,
  HeartPulse,
  Smartphone,
  BookOpen,
} from "lucide-react";
import type { ComponentType } from "react";

export type CaseStudy = {
  icon: ComponentType<any>;
  title: string;
  company: string;
  description: string;
  metrics: string[];
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
  },
];