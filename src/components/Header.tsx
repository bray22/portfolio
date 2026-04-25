import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
//import BRMonogram from "./icons/BRMonogram";
import brLogo from "../images/br-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const links = ["Work", "Experience", "Expertise", "About", "Contact"];

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 40) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden && !open ? -96 : 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-4 py-3"
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#08051a]/75 backdrop-blur-xl px-5 py-3 text-white shadow-2xl backdrop-blur-xl">
        <a href="#" className="flex items-center gap-3">
          <img
  src={brLogo}
  alt="Ben Ray logo"
  className="h-12 w-auto shrink-0"
/>
         
        </a>

        <nav className="hidden gap-8 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors hover:text-blue-400"
            >
              {link}
            </a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <div className="absolute left-0 top-full z-50 w-full px-2 pt-4 md:hidden">
            <div className="rounded-3xl border border-white/10 bg-[#08051a]/95 p-6 text-white backdrop-blur-xl">
              <nav className="flex flex-col gap-6 text-lg">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;