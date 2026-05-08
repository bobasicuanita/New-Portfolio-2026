"use client";
import { GoDownload } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeStaggerContainer, fadeUpItem } from "../_utils/animations";
import ScrollIndicator from "./ScrollIndicator";
import useHandleDownload from "../_hooks/useDownloadResume";
import useContact from "../_hooks/useContact";

export default function Hero() {
  const { ripples, createRippleAndDownload } = useHandleDownload();
  const { setIsContactModalOpen } = useContact();
  return (
    <section
      id="home"
      className="min-h-dvh flex items-center justify-center text-center -translate-y-30 px-6 relative"
    >
      <div className="relative z-10 w-full md:w-[70%] lg:w-[80%] xl:w-[90%] flex flex-col items-center gap-4 cursor-default">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2,
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="relative overflow-hidden rounded-full bg-[#00BB7D]/10 border border-(--green-color) text-(--green-color) w-fit mx-auto px-4 py-1.5 flex items-center mb-2 gap-2"
        >
          <motion.div
            className="absolute inset-0 shimmer-light"
            animate={{ x: ["-120%", "120%"] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background:
                "linear-gradient(120deg, transparent 0%, var(--green-glow) 50%, transparent 100%)",
            }}
          />

          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 0px rgba(0,0,0,0)",
                "0 0 10px var(--green-glow)",
                "0 0 0px rgba(0,0,0,0)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-(--green-color)" />
            Open to opportunities
          </div>
        </motion.div>
        <motion.div
          variants={fadeStaggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUpItem}
            className="mt-4 text-[12px] md:text-xs lg:text-lg font-roboto font-light text-(--secondary-color) uppercase mb-4 tracking-widest"
          >
            Frontend-focused engineer with experience building fullstack
            applications.
          </motion.p>
          <h1 className="text-xl sm:text-4xl md:text-4xl lg:text-6xl 2xl:text-8xl font-bold font-[Nasalization] text-center my-8">
            <div className="w-full ">
              <div className="inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 dark:bg-linear-to-r dark:from-cyan-300 dark:via-cyan-500 dark:to-cyan-600">
                <TypeAnimation
                  sequence={["Konstantinos Karasavvas"]}
                  cursor={false}
                />
                <span className="ml-1 animate-pulse text-(--gray-color) dark:text-(--white-color)">
                  _
                </span>
              </div>
            </div>
          </h1>
          <motion.p
            variants={fadeUpItem}
            className="mt-6 sm:text-[12px] md:text-[14px] lg:text-md 2xl:text-xl text-(--secondary-color) mb-4"
          >
            I build user-centered web applications, combining thoughtful
            frontend architecture with a focus on clarity, usability and
            real-world impact.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-fit mt-4"
        >
          <button
            onClick={() => setIsContactModalOpen(true)}
            className={`relative cursor-pointer py-4 sm:py-2 px-3 text-sm font-[Nasalization] sm:inline-flex rounded-3xl capitalize transition duration-200 text-(--white-color) bg-slate-500 dark:bg-[#3D3D40] dark:hover:text-cyan-500`}
          >
            <div className="absolute inset-0 bg-slate-500 dark:bg-[#3D3D40] rounded-3xl z-0" />
            <div className="absolute inset-0 rounded-3xl pointer-events-none z-10 [background:radial-gradient(ellipse_at_top,rgba(255,255,255,0.5),transparent_40%)] blur-sm" />
            <span className="relative z-10 text-md uppercase">
              Let&apos;s Connect
            </span>
          </button>
          <motion.button
            onClick={createRippleAndDownload}
            whileHover={{
              y: -4,
              scale: 1.03,
              boxShadow: "0 8px 25px rgba(37,99,235,0.35)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="relative overflow-hidden py-4 sm:py-2 px-3 rounded-3xl uppercase font-[Nasalization] font-bold bg-blue-600 dark:bg-cyan-500 text-sm cursor-pointer flex justify-center items-center text-white"
          >
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute rounded-full bg-white/40 pointer-events-none"
                style={{
                  width: 200,
                  height: 200,
                  top: ripple.y,
                  left: ripple.x,
                }}
              />
            ))}

            <GoDownload size={16} />
            <div className="ml-1">Get my Resume</div>
          </motion.button>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
