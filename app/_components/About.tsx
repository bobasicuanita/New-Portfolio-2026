"use client";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoDownload } from "react-icons/go";
import { fadeStaggerContainer, fadeUpItem } from "../_utils/animations";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import Badge from "./Badge";
import ScrollIndicator from "./ScrollIndicator";

type Ripple = {
  x: number;
  y: number;
  id: number;
};

export default function About() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const size = 200;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center text-center -translate-y-30 relative py-24 px-8 lg:py-30 lg:px-30"
    >
      <div>
        <h6 className="text-center md:text-left font-thin w-full text-sm text-(--gray-color) font-[nasalization] mb-16">
          001 | ABOUT
        </h6>
        <motion.div
          variants={fadeStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUpItem}
            className="flex flex-col lg:flex-row gap-8"
          >
            <div className=" w-full lg:h-auto lg:w-1/3 aspect-square relative overflow-hidden rounded-4xl border border-gray-200 dark:border-white/5 shadow-lg shadow-[inset 0 1px 0 rgba(255,255,255,0.03),0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(0,0,0,0.4)]">
              <div className="absolute z-10 inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0.85)_100%)]" />
              <Image
                src="/me.png"
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={100}
                className="object-cover"
              />
              <div className="absolute z-10 bottom-4 left-8">
                <motion.div className="relative overflow-hidden rounded-full bg-[#00BB7D]/10 border border-[#00BB7D] text-[#00BB7D] w-fit mx-auto px-4 py-1 flex items-center mb-4 gap-2">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 0%, rgba(0,187,125,0.25) 50%, transparent 100%)",
                    }}
                  />

                  <div className="relative z-10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00BB7D]" />
                    Open to opportunities
                  </div>
                </motion.div>
                <div className="flex flex-row items-center gap-2 text-left">
                  <IoLocationOutline />
                  <span className="font-light tracking-wider">
                    Thessaloniki, Greece
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 rounded-4xl p-8 bg-(--background-tile) border border-gray-200 dark:border-white/5 shadow-lg shadow-[inset 0 1px 0 rgba(255,255,255,0.03),0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(0,0,0,0.4)]">
              <div className="text-left text-(--gray-color) dark:text-(--white-color) text-sm font-light dark:font-thin">
                <p className="pb-4">
                  <span className="font-semibold text-black dark:text-(--white-color)">
                    Frontend engineer
                  </span>{" "}
                  with 5+ years of experience building scalable,
                  production-ready web applications. I focus on{" "}
                  <span className="font-semibold text-black dark:text-(--white-color)">
                    React
                  </span>
                  , clean architecture, and systems that don’t break as they
                  grow.
                </p>
                <p className="pb-4">
                  I’ve modernized legacy codebases, raised code quality
                  standards, and shipped impactful features, including AI-driven
                  ones. I take ownership, move things forward, and care about
                  delivering work that’s both fast and built to last.
                </p>
                <p>
                  No shortcuts. No unnecessary complexity. Just solid
                  engineering and real impact.
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 text-left mt-4">
                <div className="flex gap-2 items-center">
                  <Badge>
                    <ReactCountryFlag
                      countryCode="GR"
                      svg
                      className="w-4 h-4 rounded-sm"
                    />
                    <span className="text-sm text-black dark:text-white">
                      Greek{" "}
                      <span className="text-(--gray-color) dark:text-white/50 font-light">
                        (Native)
                      </span>
                    </span>
                  </Badge>

                  <Badge>
                    <ReactCountryFlag
                      countryCode="GB"
                      svg
                      className="w-4 h-4 rounded-sm"
                    />
                    <span className="text-sm text-black dark:text-white">
                      English{" "}
                      <span className="text-(--gray-color) dark:text-white/50 font-light">
                        (C2)
                      </span>
                    </span>
                  </Badge>
                </div>
              </div>
              <div className="w-full h-px bg-gray-300 dark:bg-white/10 my-6" />
              <div className="flex flex-row gap-4 justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-4xl text-black dark:text-(--white-color) font-bold">
                    5+
                  </span>
                  <span className="text-(--gray-color) font-light tracking-widest uppercase">
                    years exp
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-4xl text-black dark:text-(--white-color) font-bold">
                    20+
                  </span>
                  <span className="text-(--gray-color) font-light tracking-widest uppercase">
                    Projects
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-4xl text-black dark:text-(--white-color) font-bold">
                    10+
                  </span>
                  <span className="text-(--gray-color) font-light tracking-widest uppercase">
                    Courses
                  </span>
                </div>
              </div>
              <div className="w-full h-px bg-gray-300 dark:bg-white/10 my-6" />
              <div className="flex flex-col sm:flex-row w-full">
                <div className="w-full sm:w-1/2 flex flex-col">
                  <div className="uppercase text-xs tracking-widest text-blue-600 dark:text-cyan-500 text-center sm:text-left pb-4">
                    Connect
                  </div>
                  <div className="flex gap-4 justify-center sm:justify-start">
                    <div className="py-2 flex gap-2 items-center">
                      <a
                        href="https://www.linkedin.com/in/konstantinos-karasavvas-webdev/"
                        target="_blank"
                        className="transform text-black dark:text-(--white-color) transition-transform duration-300 hover:rotate-10"
                      >
                        <FaLinkedin size={30} />
                      </a>
                    </div>
                    <div className="py-2 flex flex-row gap-2 items-center">
                      <a
                        href="https://github.com/bobasicuanita"
                        target="_blank"
                        className="transform text-black dark:text-(--white-color) transition-transform duration-300 hover:rotate-10"
                      >
                        <FaGithub size={30} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col mt-4 sm:mt-0">
                  <div className="uppercase text-xs tracking-widest text-blue-600 dark:text-cyan-500 text-center sm:text-left pb-4">
                    Resume
                  </div>
                  <motion.button
                    onClick={handleClick}
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
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUpItem}
            className="flex flex-col lg:flex-row gap-8 mt-8"
          >
            <div
              className="w-full lg:w-1/3 rounded-4xl flex flex-col gap-4 px-8 py-6 bg-(--background-tile) border text-left border-gray-200 dark:border-white/5 shadow-lg shadow-[inset 0 1px 0 rgba(255,255,255,0.03),
0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(0,0,0,0.4)]"
            >
              <h3 className="uppercase text-xs tracking-widest text-blue-600 dark:text-cyan-500">
                Current Role
              </h3>
              <p className="font-semibold tracking-wide text-black dark:text-(--white-color)">
                Frontend Software Engineer
              </p>
              <p className="text-sm font-light text-(--gray-color) dark:font-thin dark:text-(--white-color)">
                Crafting user interfaces for Transifex by XTM
              </p>
            </div>
            <div
              className="w-full lg:w-1/3 rounded-4xl flex flex-col gap-4 px-8 py-6 bg-(--background-tile) border text-left border-gray-200 dark:border-white/5 shadow-lg shadow-[inset 0 1px 0 rgba(255,255,255,0.03),
0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(0,0,0,0.4)]"
            >
              <h3 className="uppercase text-xs tracking-widest text-blue-600 dark:text-cyan-500">
                Core Stack
              </h3>
              <p className="font-semibold tracking-wide text-black dark:text-(--white-color)">
                React, Next.js, Javascript, Typescript
              </p>
              <p className="text-sm font-light text-(--gray-color) dark:font-thin dark:text-(--white-color)">
                Frontend interfaces for SaaS Applications
              </p>
            </div>
            <div
              className="w-full lg:w-1/3 rounded-4xl flex flex-col gap-4 px-8 py-6 bg-(--background-tile) border text-left border-gray-200 dark:border-white/5 shadow-lg shadow-[inset 0 1px 0 rgba(255,255,255,0.03),
0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(0,0,0,0.4)]"
            >
              <h3 className="uppercase text-xs tracking-widest text-blue-600 dark:text-cyan-500">
                Education
              </h3>
              <p className="font-semibold tracking-wide text-black dark:text-(--white-color)">
                International Hellenic University - IHU, Serres
              </p>
              <p className="text-sm font-light text-(--gray-color) dark:font-thin dark:text-(--white-color)">
                BA in Civil Engineering,
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
