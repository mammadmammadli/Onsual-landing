import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";

type NumberIncreaserAnimationProps = {
  duration: number;
  number: number;
  repeat: number;
};

const className =
  "text-[140px] font-bold leading-[140px] left-1/2 -translate-x-1/2 text-light-brand-primary dark:text-dark-brand-primary transition-colors";
let iterations = 0;

const NumberIncreaserAnimation = ({
  number,
  duration,
  repeat,
}: NumberIncreaserAnimationProps) => {
  const [increment, setIncrement] = useState(number);
  const [isStopped, setIsStopped] = useState(false);
  const transition = {
    ease: "linear",
    repeat,
    duration,
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    console.log({ isStopped });

    if (!isStopped) {
      timer = setInterval(() => {
        iterations++;

        console.log({ iterations });

        if (iterations === repeat) {
          setIsStopped(true);
          clearInterval(timer);

          return;
        }

        if (increment === 9) {
          setIncrement(0);
        } else {
          setIncrement((prev) => prev + 1);
        }
      }, 1000 * duration);
    }

    return () => {
      clearInterval(timer);
    };
  }, [repeat, isStopped, increment]);

  return (
    <div className="relative h-[140px] w-[95.2px] overflow-hidden">
      <LayoutGroup>
        <motion.span
          key="first-increment"
          className="absolute text-[140px] font-bold leading-[140px] left-1/2 -translate-x-1/2 text-light-brand-primary dark:text-dark-brand-primary transition-colors"
          initial={{
            top: 0,
          }}
          animate={{
            top: "-100%",
            transition: {
              ...transition,
              type: "tween"
            },
          }}
        >
          {increment}
        </motion.span>

        <motion.span
          key="second-increment"
          className="absolute text-[140px] font-bold leading-[140px] left-1/2 -translate-x-1/2 text-light-brand-primary dark:text-dark-brand-primary transition-colors"
          initial={{
            top: "100%",
          }}
          animate={{
            top: 0,
            transition: {
              ...transition,
              repeat: repeat - 1,
              type: "tween"
            },
          }}
        >
          {increment === 9 ? 0 : increment + 1}
        </motion.span>
      </LayoutGroup>
    </div>
  );
};

export default NumberIncreaserAnimation;
