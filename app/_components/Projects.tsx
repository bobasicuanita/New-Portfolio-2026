"use client";

import { motion } from "framer-motion";
import { fadeStaggerContainer, fadeUpItem } from "../_utils/animations";
import Image from "next/image";
import { frontendFlowFeatures, frontendFlowTech } from "../_lib/constants";
import Badge from "./Badge";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full relative py-24 px-4 sm:px-8 lg:py-30 lg:px-30"
    >
      <div>
        <h6 className="text-center md:text-left font-thin w-full text-sm text-(--gray-color) font-[nasalization] mb-16">
          004 | Projects
        </h6>

        <motion.div
          variants={fadeStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeUpItem} className="w-full">
              <div className="w-full rounded-4xl p-8 bg-(--background-tile) border border-gray-200 dark:border-white/5 shadow-lg shadow-[inset 0 1px 0 rgba(255,255,255,0.03),0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset 0 1px 0 rgba(255,255,255,0.03),0 0 0 1px rgba(0,0,0,0.4)]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
                  <h2 className="text-xl text-blue-600 dark:text-cyan-500 leading-tight text-center md:text-left">
                    v0 by Vercel mini Clone: FrontendFlow
                  </h2>

                  <div className="flex justify-center md:justify-end items-center gap-4 w-full md:w-auto">
                    <motion.a
                      href="https://frontend-flow-beta.vercel.app/"
                      target="_blank"
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
                      className="relative overflow-hidden py-3 sm:py-2 px-3 rounded-3xl uppercase font-[Nasalization] font-bold bg-blue-600 dark:bg-cyan-500 text-sm cursor-pointer flex justify-center items-center text-white"
                    >
                      <div className="ml-1">View live</div>
                    </motion.a>
                    <a
                      href="https://github.com/bobasicuanita/frontend-flow"
                      target="_blank"
                      className="flex items-center justify-center text-black dark:text-(--white-color) transition-transform duration-300 hover:rotate-10"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>
                </div>
                <p className="text-center sm:text-left text-(--gray-color) text-sm mt-1">
                  Curious about how AI chat applications work under the hood, I
                  decided to experiment with Vercel&apos;s AI SDK by building a
                  mini clone of v0. Through this project, I learned how to
                  handle streaming AI responses, manage chat state, and design
                  an intuitive conversational interface.
                </p>
                <div className="flex flex-col justify-start md:flex-row gap-6 mt-6 items-stretch">
                  <div className="w-full md:w-1/2">
                    <div className="relative w-full h-full min-h-[320px] rounded-xl overflow-hidden bg-neutral-100 dark:bg-white/5">
                      <Image
                        src="/frontendflow.png"
                        alt="FrontendFlow Screenshot"
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="h-full flex flex-col">
                      <h2 className="text-sm font-semibold text-(--white-color) mb-3">
                        Features:
                      </h2>
                      <ul className="flex flex-col justify-between flex-1 gap-2 text-sm text-(--gray-color) dark:text-(--white-color)">
                        {frontendFlowFeatures.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-[8px] rounded-full bg-(--gray-color) dark:bg-white shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2 text-xs mt-4">
                  {frontendFlowTech.map((item: string, index) => {
                    return (
                      <li key={index}>
                        <Badge>
                          <span className="text-violet-500">{item}</span>
                        </Badge>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="flex flex-col items-center justify-center mt-12">
          <h1 className="text-center text-xl text-blue-600 dark:text-cyan-500">
            More awesome projects coming soon...
          </h1>
          <p className="text-center text-xs text-(--gray-color) dark:text-(--white-color)">
            You can check some educational and WIP projects on{" "}
            <a
              className="underline"
              href="https://github.com/bobasicuanita"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
