import { Code2, Users, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Strength = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const strengths: Strength[] = [
  {
    icon: Code2,
    title: "Engineering Excellence",
    text: "Clean architecture, performance thinking, and frontend systems that scale with teams and products.",
  },
  {
    icon: Users,
    title: "Collaborative Leadership",
    text: "Strong partnership with product, design, and engineering through mentorship, reviews, and ownership.",
  },
  {
    icon: Rocket,
    title: "Impact Driven",
    text: "Focused on building software that reduces friction, improves reliability, and creates measurable business value.",
  },
];