import { AnimatePresence, motion } from "framer-motion";

type NumberIncreaserAnimationProps = {
  duration: number;
  number: number;
};

const className =
  "text-[140px] font-bold leading-[140px] left-1/2 -translate-x-1/2 text-light-brand-primary dark:text-dark-brand-primary transition-colors";

const NumberIncreaserAnimation = ({
  number,
  duration,
}: NumberIncreaserAnimationProps) => {
  const transition = {
    type: "just",
    ease: "linear",
    repeat: Infinity,
    duration,
  };

  return (

    <div className="relative h-[140px] w-[95.2px] overflow-hidden">
      <AnimatePresence>
        <motion.span
          className="absolute text-[140px] font-bold leading-[140px] left-1/2 -translate-x-1/2 text-light-brand-primary dark:text-dark-brand-primary transition-colors"
          initial={{
            top: 0,
          }}
          animate={{
            top: "-100%",
            transition,
          }}
        >
          {number}
        </motion.span>
      </AnimatePresence>
      <AnimatePresence>
        <motion.span
          className="absolute text-[140px] font-bold leading-[140px] left-1/2 -translate-x-1/2 text-light-brand-primary dark:text-dark-brand-primary transition-colors"
          initial={{
            top: "100%",
          }}
          animate={{
            top: 0,
            transition,
          }}
        >
          {number}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default NumberIncreaserAnimation;
