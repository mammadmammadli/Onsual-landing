import { motion } from "framer-motion";

const AnimatedEllipses = () => {
  return (
    <div className="absolute h-screen top-0 left-0 w-screen z-[-1] hidden lg:block">
      <motion.div
        className="h-[224px] w-[224px] bg-light-brand-primary dark:bg-dark-brand-primary absolute z-0 rounded-full"
        style={{
          filter: "blur(240px)",
          backdropFilter: "blur(240px)",
          WebkitBackdropFilter: "blur(240px)",
        }}
        initial={{
          top: "60%",
          left: "20%",
        }}
        animate={{
          top: [
            "60%",
            "55%",
            "50%",
            "40%",
            "0%",
            "10%",
            "40%",
            "45%",
            "75%",
            "60%",
            "100%",
            "60%",
          ],
          left: [
            "20%",
            "25%",
            "0%",
            "40%",
            "30%",
            "90%",
            "70%",
            "100%",
            "65%",
            "50%",
            "40%",
            "20%",
          ],
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeatType: "loop",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="h-[224px] w-[224px] bg-light-brand-primary dark:bg-dark-brand-primary absolute z-[0] rounded-full"
        style={{
          filter: "blur(240px)",
          backdropFilter: "blur(240px)",
          WebkitBackdropFilter: "blur(240px)",
        }}
        initial={{
          top: "60%",
          right: "20%",
        }}
        animate={{
          top: [
            "60%",
            "65%",
            "90%",
            "80%",
            "100%",
            "60%",
            "50%",
            "45%",
            "20%",
            "0%",
            "0%",
            "30%",
            "60%",
          ],
          right: [
            "20%",
            "25%",
            "20%",
            "40%",
            "50%",
            "65%",
            "90%",
            "70%",
            "100%",
            "50%",
            "20%",
            "30%",
            "20%",
          ],
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeatType: "loop",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default AnimatedEllipses;
