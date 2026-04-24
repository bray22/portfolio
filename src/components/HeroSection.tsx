import { motion } from "framer-motion";
import type { FC } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-600/70">
            Portfolio
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
            I build clean systems, sharp interfaces, and measurable products.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            A product-minded builder focused on elegant frontend systems,
            scalable workflows, and polished user experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white">
              View Work
              <ArrowRight className="h-4 w-4" />
            </a>

            <a className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;