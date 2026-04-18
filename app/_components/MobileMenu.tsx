"use client";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navLinks: string[];
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function MobileMenu({
  open,
  onClose,
  navLinks,
  handleNavClick,
  theme,
  toggleTheme,
}: MobileMenuProps) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-99999"
        >
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/60"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-3xlbg-[#252527] border border-white/10 shadow-xl p-8 flex flex-col items-center gap-6 text-xl font-[Nasalization]"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link: string) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  handleNavClick(e, link);
                  onClose();
                }}
                className="text-white hover:text-cyan-400 transition capitalize"
              >
                {link}
              </a>
            ))}
            <div className="w-10 h-10 flex items-center justify-center">
              <button
                onClick={toggleTheme}
                className="cursor-pointer text-white transition-all duration-200 ease-out hover:scale-105 hover:text-cyan-400"
              >
                {theme == "dark" && <MdOutlineLightMode size={20} />}
                {theme == "light" && <MdOutlineDarkMode size={20} />}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
