"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-safe w-full p-12 px-4 sm:px-8 mb-4"
    >
      <div className="flex flex-col justify-center items-center gap-2 text-black dark:text-(--white-color)">
        <h3 className="font-[nasalization] text-(--gray-color) text-lg lg:text-xl">
          Konstantinos Karasavvas
          <span className="animate-pulse text-blue-600 dark:text-cyan-500">
            _
          </span>
        </h3>
        <p className="uppercase tracking-widest font-light text-sm lg:text-md text-blue-600 dark:text-cyan-500">
          Frontend Software Engineer
        </p>
        <div className="text-sm text-(--gray-color) flex items-center gap-1">
          <div className="text-(--gray-color) font-extralight text-sm">
            &copy; {year}. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
