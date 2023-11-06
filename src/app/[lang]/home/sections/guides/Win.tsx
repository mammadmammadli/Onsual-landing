import Icon from "@/components/Icons";
import { motion, useAnimationControls } from "framer-motion";
import Lottie from "lottie-react";
import Confetti from "@/animations/confetti.json";
import { useEffect } from "react";

const Win = () => {
  const firstControl = useAnimationControls();
  const secondControl = useAnimationControls();
  const thirdControl = useAnimationControls();

  const handleAnimationControl = () => {
    firstControl.set({
      opacity: 0,
      y: 40,
    });
    firstControl.start({
      opacity: 1,
      y: 0,
    });

    secondControl.set({
      opacity: 0,
      y: 40,
    });

    secondControl.start({
      opacity: 1,
      y: 0,
    });

    thirdControl.set({
      opacity: 0,
      x: -120,
    });

    thirdControl.start({
      opacity: 1,
      x: 0,
    });
  };

  const resetAnimations = () => {
    setTimeout(() => {
      firstControl.start({
        opacity: 0,
        y: 40,
        transition: {
          delay: 1,
          duration: 0.5
        }
      });

      secondControl.start({
        opacity: 0,
        y: 40,
        transition: {
          delay: 0.5,
          duration: 0.5,
        },
      });

      thirdControl.start({
        opacity: 0,
        x: -120,
        transition: {
          delay: 0,
          duration: 0.5,
        }
      })
    }, 8000);
  };

  useEffect(() => {
    handleAnimationControl();
  }, []);

  return (
    <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
      <Icon name="bank-note" />

      <div className="flex flex-col gap-2">
        <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
          Mükafat qazan
        </span>
        <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
          Yr pin narwhal poutine readymade tile semiotics on santo viral. Tumblr
          tumeric plant disrupt sriracha chicken.
        </span>
      </div>

      <div className="bg-light-background-primary dark:bg-dark-background-primary flex-1 rounded-2xl flex items-center justify-center overflow-hidden relative transition-all">
        <motion.div>
          <div className="overflow-hidden">
            <motion.span
              className="text-3xl text-light-utility-high dark:text-dark-utility-high block text-center"
              animate={firstControl}
              transition={{
                duration: 0.5,
              }}
              onAnimationComplete={resetAnimations}
            >
              Təbrik edirik!
            </motion.span>
          </div>
          <div className="overflow-hidden flex items-center">
            <motion.span
              animate={secondControl}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="text-3xl text-light-utility-high dark:text-dark-utility-high inline-block"
            >
              Müfakat məbləği: &nbsp;
            </motion.span>
            <div className="inline-block overflow-hidden">
              <motion.span
                className="text-3xl text-light-brand-primary dark:text-dark-brand-primary inline-block font-bold"
                animate={thirdControl}
                transition={{
                  delay: 1,
                  duration: 0.5,
                }}
              >
                100 AZN
              </motion.span>
            </div>
          </div>
        </motion.div>
        <div className="absolute h-full w-full top-0 left-0 z-[9999] pointer-events-none">
          <Lottie
            className="h-full w-full"
            animationData={Confetti}
            loop
            onLoopComplete={() => {
              handleAnimationControl();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Win;
