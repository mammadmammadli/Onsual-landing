"use client";

import { AnimatePresence, CustomValueType, motion } from "framer-motion";

type Props = {
  length: number;
  y: any;
};

const NewIncreaser = ({ length, y }: Props) => {
  const elements = Array.from({ length }, (_, i) => i % 10);

  return (
    <div className="relative h-[140px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          inherit={false}
          key="first"
          className="flex flex-col items-center gap-8"
          initial={{
            y: "0",
          }}
          animate={{
            y
          }}
          transition={{
            ease: "easeOut",
            duration: 3,
            times: [0, 0.8, 1],
          }}
        >
          {elements.map((element, i) => (
            <span
              key={i}
              className="text-[190px] font-bold leading-[142px] text-light-brand-primary dark:text-dark-brand-primary transition-all"
            >
              {element}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NewIncreaser;
