import type { FC, ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

const GlassCard: FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;