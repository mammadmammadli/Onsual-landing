import IconButton from "@/components/Button/IconButton";
import { useState } from "react";
import LightModeSwitcher from "@/components/Header/Actions/LightModeSwitcher";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSwitcher from "@/components/Header/Actions/LanguageSwitcher";

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);

  const hamburgerIconClasses = clsx(
    "fill-light-utility-high dark:fill-dark-utility-high"
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="h-screen w-screen fixed top-0 left-0 z-0 bg-light-source-opacity-black-0.64 dark:bg-dark-source-opacity-black-0.64"
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              ease: "linear",
              duration: 0.2,
            }}
            onClick={(e) => {
              setOpen(false);
            }}
          >
            <div className="absolute top-4 right-4 gap-3">
              <motion.div
                className="absolute right-0"
                initial={{
                  opacity: 0,
                  top: 16,
                }}
                animate={{ opacity: 1, top: 52 }}
                transition={{
                  delay: 0.1,
                  ease: "linear",
                  duration: 0.2,
                }}
                exit={{
                  opacity: 0,
                  top: 16,
                }}
              >
                <LightModeSwitcher onClose={() => setOpen(false)} />
              </motion.div>
              <motion.div
                className="absolute right-0"
                initial={{
                  opacity: 0,
                  top: 16,
                }}
                animate={{ opacity: 1, top: 104 }}
                transition={{
                  delay: 0.1,
                  ease: "linear",
                  duration: 0.2,
                }}
                exit={{
                  opacity: 0,
                  top: 16,
                }}
              >
                <LanguageSwitcher />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <IconButton
        className="pl-[10px] pr-[10px] z-10"
        iconClassName={hamburgerIconClasses}
        icon={isOpen ? "close" : "hamburger"}
        onClick={() => {
          setOpen(!isOpen);
        }}
      />
    </>
  );
};

export default Hamburger;
