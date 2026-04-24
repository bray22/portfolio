import { motion } from "framer-motion";
import type { FC } from "react";
import { Mail } from "lucide-react";

import LinkedInIcon from "./icons/LinkedInIcon";

const ContactSection: FC = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mt-6 rounded-[32px] border border-slate-200 bg-gradient-to-r from-blue-50 via-white to-violet-50 px-6 py-8 md:px-8"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left Content */}
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-blue-600/70">
            Let’s build something strong
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Open to senior frontend and full-stack opportunities.
          </h3>

          <p className="mt-3 max-w-2xl text-slate-600">
            Available for remote and hybrid roles focused on scalable product
            experiences, frontend architecture, and systems that deliver
            measurable value.
          </p>
        </div>

        {/* Right Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:bray22@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-medium text-white shadow-md hover:bg-blue-700"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;