"use client";
import { motion } from "framer-motion";
import { navLinks } from "../_lib/constants";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useRouter } from "next/navigation";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

interface NavHeaderProps {
  hideMenu: boolean;
}

export default function NavHeader({ hideMenu }: NavHeaderProps) {
  const [selected, setSelected] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (id === "blog") {
      router.push("/blog");
    } else {
      router.push("/");
    }

    if (id === "contact me") {
      return;
    }
    setSelected(id);
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] z-50 flex justify-between items-center cursor-default rounded-2xl">
      <div className="text-(--white-color) text-md font-[Nasalization] flex items-center justify-center">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="flex items-center font-[Nasalization] text-xl cursor-pointer group text-(--gray-color) dark:text-(--white-color)"
        >
          <motion.span
            className="inline-block"
            initial={{ scaleX: -1 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            K
          </motion.span>
          <span>K</span>
        </a>
        <motion.div
          className="ml-1 text-blue-600 dark:text-cyan-400"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          _
        </motion.div>
      </div>
      {!hideMenu && (
        <nav
          className={`hidden md:flex bg-white/80 dark:bg-(--bg-nav-color)/60 backdrop-blur-xl p-1 gap-2 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-md ${hideMenu && "hidden"}`}
        >
          {navLinks.map((link) => {
            const isContact = link === "contact me";
            const isActive = selected === link;

            return (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative py-2 px-3 text-xs font-[Nasalization] inline-flex rounded-3xl capitalize transition duration-200 ${
                  isContact
                    ? "text-(--white-color) dark:text-(--white-color) dark:bg-[#3D3D40] hover:text-blue-600 dark:hover:text-cyan-500"
                    : `${isActive ? "text-(--white-color)" : "text-(--gray-color)"}  dark:text-(--white-color) hover:scale-105`
                }`}
              >
                {!isContact && isActive && (
                  <>
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-slate-500 dark:bg-[#3D3D40] rounded-3xl z-0"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />

                    <motion.div
                      layoutId="nav-light"
                      className="absolute inset-0 rounded-3xl pointer-events-none z-10 [background:radial-gradient(ellipse_at_top,rgba(255,255,255,0.5),transparent_40%)] blur-sm"
                      transition={{ duration: 0.25 }}
                    />
                  </>
                )}
                {isContact && (
                  <>
                    <div className="absolute inset-0 bg-slate-500 dark:bg-[#3D3D40] rounded-3xl z-0" />
                    <div className="absolute inset-0 rounded-3xl pointer-events-none z-10 [background:radial-gradient(ellipse_at_top,rgba(255,255,255,0.5),transparent_40%)] blur-sm" />
                  </>
                )}
                <span className="relative z-10 capitalize">{link}</span>
              </a>
            );
          })}
        </nav>
      )}
      <div className="flex items-center gap-2">
        <button
          className="md:hidden text-(--gray-color) dark:text-white"
          onClick={() => setMenuOpen(true)}
        >
          <CiMenuBurger size={22} />
        </button>

        <div className="cursor-pointer hidden bg-(--white-color) dark:bg-[#252527] w-10 h-10 md:flex items-center justify-center rounded-full border border-white/10 shadow-sm dark:shadow-md">
          <div className=" text-(--gray-color) dark:text-white transition-all duration-200 ease-out hover:scale-105 hover:text-blue-600 dark:hover:text-cyan-500">
            <MdOutlineLightMode size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
