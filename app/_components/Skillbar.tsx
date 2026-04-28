import { motion } from "framer-motion";
import { IconType } from "react-icons";

export default function SkillBar({
  name,
  level,
  icon: Icon,
}: {
  name: string;
  level: number;
  icon: IconType;
}) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-sm items-center">
        <div className="flex items-center gap-2">
          <Icon className="text-blue-600 dark:text-cyan-500" size={16} />
          <span className="text-black dark:text-(--white-color)">{name}</span>
        </div>
        <span className="text-black dark:text-(--white-color)">{level}%</span>
      </div>

      <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-linear-to-r from-blue-400 to-indigo-500 dark:from-cyan-500 dark:to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
        />
      </div>
    </div>
  );
}
