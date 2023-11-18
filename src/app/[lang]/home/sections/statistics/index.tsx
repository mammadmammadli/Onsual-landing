import { useTranslation } from "@/app/i18n/client";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import useVisibility from "@/hooks/useVisibility";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Statistics = () => {
  const { t } = useTranslation();
  const dailyQuestionsCountRaw = useMotionValue(0);
  const usersCountRaw = useMotionValue(0);
  const winnersCountRaw = useMotionValue(0);
  const dailyQuestionsCount = useTransform(
    dailyQuestionsCountRaw,
    (latest) => `${Math.round(latest) / 10} mln`
  );
  const usersCount = useTransform(usersCountRaw, (latest) =>
    Math.round(latest)
  );
  const winnersCount = useTransform(winnersCountRaw, (latest) =>
    Math.round(latest)
  );
  const { ref, isVisible } = useVisibility<HTMLDivElement>();

  useEffect(() => {
    if (isVisible) {
      animate(dailyQuestionsCountRaw, 24, {
        duration: 2,
        ease: "easeInOut",
      });

      animate(usersCountRaw, 1000, {
        duration: 2,
        ease: "easeInOut",
      });

      animate(winnersCountRaw, 40, {
        duration: 2,
        ease: "easeInOut",
      });
    }
  }, [isVisible]);

  return (
    <SectionWrapper>
      <Container>
        <div className="lg:px-[64px] flex flex-col gap-4 lg:gap-6" ref={ref}>
          <h3 className="text-3xl lg:text-5xl font-bold text-light-utility-high dark:text-dark-utility-high transition-all uppercase">
            {t("statistics.title")}
          </h3>

          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <div className="rounded-[20px] lg:rounded-[32px] bg-light-surface-high dark:bg-dark-surface-high p-6 lg:p-8 flex flex-col justify-between h-[200px] lg:h-[248px] transition-all">
                <motion.h2 className="text-light-brand-primary dark:text-dark-brand-primary text-5xl lg:text-6xl font-medium">
                  {dailyQuestionsCount}
                </motion.h2>
                <span className="text-xl font-normal text-light-utility-high dark:text-dark-utility-high">
                  {t("statistics.daily-questions")}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-[20px] lg:rounded-[32px] bg-light-surface-high dark:bg-dark-surface-high p-6 lg:p-8 flex flex-col justify-between h-[200px] lg:h-[248px] transition-all">
                <motion.h2 className="text-light-brand-primary dark:text-dark-brand-primary text-5xl lg:text-6xl font-medium">
                  {usersCount}
                </motion.h2>
                <span className="text-xl font-normal text-light-utility-high dark:text-dark-utility-high">
                  {t("statistics.users")}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-[20px] lg:rounded-[32px] bg-light-surface-high dark:bg-dark-surface-high p-6 lg:p-8 flex flex-col justify-between h-[200px] lg:h-[248px] transition-all">
                <motion.h2 className="text-light-brand-primary dark:text-dark-brand-primary text-5xl lg:text-6xl font-medium">
                  {winnersCount}
                </motion.h2>
                <span className="text-xl font-normal text-light-utility-high dark:text-dark-utility-high">
                  {t("statistics.winners")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Statistics;
