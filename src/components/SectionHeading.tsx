import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import type { FC } from "react";
import { useRef } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  action?: string;
  parallax?: boolean;
};

const SectionHeading: FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  action,
  parallax = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // subtle move + lock
  const yRaw = useTransform(scrollYProgress, [0, 0.4, 1], [40, 0, 0]);
  const y = useSpring(yRaw, {
    stiffness: 80,
    damping: 28,
  });

  const Wrapper = parallax ? motion.div : motion.div;

  return (
    <Wrapper
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={parallax ? { y } : undefined}
      className="mb-12 flex items-end justify-between gap-6"
    >
      <div>
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-blue-600/70">
            {eyebrow}
          </p>
        )}

        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>

      {action && (
        <p className="hidden text-sm font-medium text-blue-600 md:block">
          {action}
        </p>
      )}
    </Wrapper>
  );
};

export default SectionHeading;