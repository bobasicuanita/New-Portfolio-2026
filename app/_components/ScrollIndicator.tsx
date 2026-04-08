import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 2,
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-100">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col justify-center items-center"
        >
          <div className="uppercase text-(--gray-color) dark:text-(--white-color) mb-2 text-xs font-[Nasalization] ">
            Scroll
          </div>
          <div className="w-px h-12 bg-linear-to-b from-(--gray-color) dark:from-(--white-color) to-transparent"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
