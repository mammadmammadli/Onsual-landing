import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const PhoneNumber = () => {
  const baseText = "50 539 62 90" as string;
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  return (
    <div
      className="flex-1 px-4 py-3 min-h-[48px] bg-light-surface-high dark:bg-dark-surface-high border border-light-brand-primary dark:border-dark-brand-primary transition-all rounded-xl flex items-center"
      onMouseEnter={() => {
        animate(count, baseText.length, {
          duration: 3,
          ease: "easeInOut",
        });
      }}
    >
      <motion.span className="text-light-utility-high dark:text-dark-utility-high transition-all text-lg">
        {displayText}
      </motion.span>
      <motion.div
        variants={cursorVariants}
        animate="blinking"
        className="inline-block h-[14px] w-[1px] bg-light-brand-primary dark:bg-dark-brand-primary"
      />
    </div>
  );
};

export default PhoneNumber;
