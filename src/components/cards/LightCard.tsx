import type { FC, ReactNode } from "react";

type LightCardProps = {
  children: ReactNode;
  className?: string;
};

const LightCard: FC<LightCardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default LightCard;