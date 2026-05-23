export type Tech = {
  name: string;
  logo: string;
  category:
    | "Frontend"
    | "Backend & APIs"
    | "Cloud & Data"
    | "Testing & Tooling"
    | "Integrations";
  featured?: boolean;
};

const logoPath = (file: string) => `${import.meta.env.BASE_URL}logos/tech/${file}`;

export const tech: Tech[] = [
  { name: "React", logo: logoPath("react.svg"), category: "Frontend", featured: true },
  { name: "TypeScript", logo: logoPath("typescript.svg"), category: "Frontend", featured: true },
  { name: "Next.js", logo: logoPath("nextjs.svg"), category: "Frontend", featured: true },
  { name: "Node.js", logo: logoPath("nodejs.svg"), category: "Backend & APIs", featured: true },
  { name: "AWS", logo: logoPath("aws.svg"), category: "Cloud & Data", featured: true },
  { name: "PostgreSQL", logo: logoPath("postgresql.svg"), category: "Cloud & Data", featured: true },
  { name: "React Native", logo: logoPath("react.svg"), category: "Frontend" },
  { name: "Remix", logo: logoPath("remix.svg"), category: "Frontend" },
  { name: "JavaScript", logo: logoPath("javascript.svg"), category: "Frontend" },
  { name: "Redux", logo: logoPath("redux.svg"), category: "Frontend" },
  { name: "Express", logo: logoPath("express.svg"), category: "Backend & APIs" },
  { name: "GraphQL", logo: logoPath("graphql.svg"), category: "Backend & APIs" },
  { name: "Python", logo: logoPath("python.svg"), category: "Backend & APIs" },
  { name: "Docker", logo: logoPath("docker.svg"), category: "Cloud & Data" },
  { name: "Vercel", logo: logoPath("vercel.svg"), category: "Cloud & Data" },
  { name: "Jest", logo: logoPath("jest.svg"), category: "Testing & Tooling" },
  { name: "Webpack", logo: logoPath("webpack.svg"), category: "Testing & Tooling" },
  { name: "Vite", logo: logoPath("vite.svg"), category: "Testing & Tooling" },
  { name: "Shopify", logo: logoPath("shopify.svg"), category: "Integrations" },
  { name: "HubSpot", logo: logoPath("hubspot.svg"), category: "Integrations" },
];

export const techCategories: Tech["category"][] = [
  "Frontend",
  "Backend & APIs",
  "Cloud & Data",
  "Testing & Tooling",
  "Integrations",
];
