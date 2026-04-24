import type { FC, ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  variant?: "white" | "soft" | "dark";
  id?: string;
};

const PageSection: FC<PageSectionProps> = ({
  children,
  variant = "white",
  id,
}) => {
  const variants = {
    white: "bg-white text-slate-950",
    soft: "bg-slate-50 text-slate-950",
    dark: "bg-slate-950 text-white",
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden pt-20 pb-12 md:pt-20 md:pb-14 ${variants[variant]}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
};

export default PageSection;