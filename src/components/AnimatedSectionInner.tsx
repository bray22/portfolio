import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { FC, ReactNode } from "react";
import { useRef } from "react";

type AnimatedSectionInnerProps = {
  children: ReactNode;
};

const AnimatedSectionInner: FC<AnimatedSectionInnerProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 0.15, 1], [70, 0, 0]);

  const y = useSpring(yRaw, {
    stiffness: 75,
    damping: 28,
    mass: 1,
  });

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSectionInner;