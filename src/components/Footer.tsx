import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-500 md:flex-row">
        
        <p>© {new Date().getFullYear()} Ben Ray</p>

        <div className="flex items-center gap-6">
          <a href="#work" className="hover:text-slate-900">Work</a>
          <a href="#experience" className="hover:text-slate-900">Experience</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-900">LinkedIn</a>
          <a href="#" className="hover:text-slate-900">GitHub</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;