"use client";
import { motion } from "framer-motion";
import { fadeStaggerContainer, fadeUpItem } from "../_utils/animations";
import SkillBar from "./Skillbar";
import {
  feSkills,
  beSkills,
  feSecondarySkills,
  methodologies,
} from "../_lib/constants";
import Badge from "./Badge";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-dvh w-full relative py-24 px-4 sm:px-8 lg:py-30 lg:px-30 mb-16 sm:mb-0"
    >
      <div>
        <h6 className="text-center md:text-left font-thin w-full text-sm text-(--gray-color) font-[nasalization] mb-16">
          002 | SKILLS
        </h6>
        <motion.div
          variants={fadeStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeUpItem} className="w-full">
              <div className="w-full rounded-4xl p-8 bg-(--background-tile) border border-gray-200 dark:border-white/5 shadow-lg shadow-[inset 0 1px 0 rgba(255,255,255,0.03),0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(0,0,0,0.4)]">
                <div>
                  <h2 className="text-center sm:text-left text-xl text-black dark:text-(--white-color)">
                    Technical Proficiency
                  </h2>
                  <p className="text-center sm:text-left text-(--gray-color) text-sm mt-1">
                    What began as curiosity turned into a career—I’m a
                    self-directed software engineer who learned the craft
                    through courses and real-world experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <div className="w-full md:w-1/2">
                      <h3 className="text-center sm:text-left uppercase tracking-widest text-black dark:text-(--white-color)">
                        Frontend
                      </h3>
                      <ul className="flex flex-col gap-4 mt-4">
                        {feSkills.map((skill) => {
                          return (
                            <li key={skill.name}>
                              <SkillBar
                                name={skill.name}
                                level={skill.level}
                                icon={skill.icon}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                      <h3 className="text-center sm:text-left uppercase tracking-widest text-black dark:text-(--white-color)">
                        Backend
                      </h3>
                      <ul className="flex flex-col gap-4 mt-4">
                        {beSkills.map((skill) => {
                          return (
                            <li key={skill.name}>
                              <SkillBar
                                name={skill.name}
                                level={skill.level}
                                icon={skill.icon}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8">
                    <ul className="flex flex-wrap gap-2 text-xs mt-4 items-start cursor-default">
                      {feSecondarySkills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                          <li key={skill.name} className="w-fit">
                            <Badge>
                              <Icon className="text-violet-500" size={16} />
                              <span className="text-violet-500">
                                {skill.name}
                              </span>
                            </Badge>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUpItem} className="w-full">
              <div className="w-full rounded-4xl p-8 bg-(--background-tile) border border-gray-200 dark:border-white/5 shadow-lg shadow-[inset 0 1px 0 rgba(255,255,255,0.03),0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(0,0,0,0.4)]">
                <div>
                  <h2 className="text-center sm:text-left text-xl text-black dark:text-(--white-color)">
                    Methodologies & Approaches
                  </h2>
                  <p className="text-center sm:text-left text-(--gray-color) text-sm mt-1">
                    A set of engineering principles I apply to ensure systems
                    remain scalable, maintainable, and user-focused as they
                    evolve.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 cursor-default">
                    {methodologies.map((m) => (
                      <motion.div
                        key={m.name}
                        initial={{ y: 0, scale: 1 }}
                        whileHover={{
                          y: -4,
                          scale: 1.02,
                          boxShadow: "0 8px 25px rgba(37,99,235,0.15)",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        className="relative p-5 rounded-2xl bg-(--white-color) dark:bg-white/5 border border-gray-200 dark:border-white/10 text-blue-600 dark:text-cyan-500"
                      >
                        <motion.div
                          className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <p className="relative text-sm leading-relaxed text-center">
                          {m.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
