"use client";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  length: number;
  y: any;
};

const NumberIncreaser = ({ length, y }: Props) => {
  const elements = Array.from({ length }, (_, i) => i % 10);
  const ref = useRef(null);
  const controls = useAnimationControls();
  const [isAnimated, setAnimated] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const element = ref.current as HTMLElement;
      const top = element.offsetTop;

      const height = element.offsetHeight;

      if (window.scrollY + window.innerHeight >= top && !isAnimated) {
        controls.set({
          y: "0",
        });

        controls.start({
          y,
          transition: {
            ease: "easeOut",
            duration: 3,
            times: [0, 0.8, 1],
          },
        });

        setAnimated(true);
      } else if (
        (window.scrollY + window.innerHeight < top ||
          window.scrollY > top + height) &&
        isAnimated
      ) {
        setAnimated(false);

        controls.set({
          y: "0",
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAnimated, setAnimated]);

  return (
    <div className="relative h-[140px] overflow-hidden" ref={ref}>
      <AnimatePresence>
        <motion.div
          inherit={false}
          key="first"
          className="flex flex-col items-center gap-8"
          initial={{
            y: "0",
          }}
          animate={controls}
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

export default NumberIncreaser;
