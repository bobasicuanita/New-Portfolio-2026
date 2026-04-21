import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import { fadeStaggerContainer, fadeUpItem } from "@/app/_utils/animations";

export type TimelineItem = {
  id?: string | number;
  year: string;
  title: string;
  location: string;
  description: string[];
  technology: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <motion.div
      variants={fadeStaggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="relative w-full mx-auto py-20">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-(--gray-color) dark:bg-white/20 -translate-x-1/2" />
        <div className="flex flex-col gap-16">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                variants={fadeUpItem}
                key={item.id ?? index}
                className="relative grid grid-cols-1 md:grid-cols-2 items-center"
              >
                <div
                  className={`hidden md:block pr-10 ${isLeft ? "text-right" : ""}`}
                >
                  {isLeft && <TimelineCard item={item} />}
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                </div>
                <div
                  className={`hidden md:block pl-10 ${!isLeft ? "text-left" : ""}`}
                >
                  {!isLeft && <TimelineCard item={item} />}
                </div>
                <div className="md:hidden flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-500" />
                    <span className="text-xs text-cyan-500 uppercase tracking-widest">
                      {item.year}
                    </span>
                  </div>
                  <TimelineCard item={item} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
