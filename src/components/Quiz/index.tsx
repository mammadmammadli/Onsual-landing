import { useTranslation } from "@/app/i18n/client";
import Counter from "@/components/Counter";
import Icon from "@/components/Icons";
import { LottieSections, useLottie } from "@/providers/LottieProvider";
import { clsx } from "clsx";
import { useState } from "react";

type Props = {
  lottieSection: LottieSections;
  isPaused?: boolean;
};

const Quiz = ({ lottieSection, isPaused = false }: Props) => {
  const { setActiveLottie, previousLotties } = useLottie();
  const [isChecked, setChecked] = useState(false);
  const { t } = useTranslation();

  const descriptionClass = clsx(
    "text-light-utility-high dark:text-dark-utility-high transition-all",
    {
      "font-medium text-base": lottieSection === "guide-item",
      "font-semibold text-lg ": lottieSection === "cover",
    }
  );

  return (
    <div className="pt-6 mt-[14px]">
      <div className="w-full relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1/2 bg-light-surface-high dark:bg-dark-surface-high rounded-full">
          <Counter
            isChecked={isChecked}
            isPaused={isPaused}
            countdownProps={{
              isPlaying: true,
              duration: 10,
              colors: "#fff",
              rotation: "counterclockwise",
              onComplete: () => {
                return {
                  shouldRepeat: true,
                }
              }
            }}
          />
        </div>
        <Icon
          name="quiz-rectangle"
          className="fill-light-surface-high dark:fill-dark-surface-high transition-all h-[48px] w-full"
        />
      </div>
      <div className="flex flex-col gap-1 bg-light-surface-high dark:bg-dark-surface-high transition-all items-center">
        <span className="font-medium text-sm text-light-utility-medium dark:text-dark-utility-medium transition-all">
          {t("question")} 10/10
        </span>
        <span className={descriptionClass}>Niyə Onsual?</span>
      </div>
      <div className="px-3 pt-4 bg-light-surface-high dark:bg-dark-surface-high transition-all">
        <div className="flex flex-col gap-1">
          <div
            onClick={() => {
              setChecked(true);
              setActiveLottie(lottieSection);
            }}
            className="rounded-xl p-3 cursor-pointer bg-light-surface-medium dark:bg-dark-surface-medium hover:bg-light-surface-low hover:dark:bg-dark-surface-low flex items-center transition-all"
          >
            <span className="font-medium text-sm text-light-utility-high dark:text-dark-utility-high transition-all">
              Mükafat qazanırsan
            </span>
          </div>
          <div
            onClick={() => {
              setChecked(true);
              setActiveLottie(lottieSection);
            }}
            className="rounded-xl p-3 cursor-pointer bg-light-surface-medium dark:bg-dark-surface-medium hover:bg-light-surface-low hover:dark:bg-dark-surface-low flex items-center transition-all"
          >
            <span className="font-medium text-sm text-light-utility-high dark:text-dark-utility-high transition-all">
              Xoş vaxt keçirdirsən
            </span>
          </div>
          <div
            onClick={() => {
              setChecked(true);
              setActiveLottie(lottieSection);
            }}
            className="rounded-xl p-3 cursor-pointer bg-light-surface-medium dark:bg-dark-surface-medium hover:bg-light-surface-low hover:dark:bg-dark-surface-low flex items-center transition-all"
          >
            <span className="font-medium text-sm text-light-utility-high dark:text-dark-utility-high transition-all">
              Xoş vaxt keçirdirsən
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
