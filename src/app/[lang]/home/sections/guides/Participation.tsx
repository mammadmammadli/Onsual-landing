import Icon from "@/components/Icons";
import Quiz from "@/components/Quiz";
import { useLottie } from "@/providers/LottieProvider";
import Lottie from "lottie-react";
import Confetti from "@/animations/confetti.json";
import { useTranslation } from "@/app/i18n/client";

const Participation = () => {
  const { activeLottie, clearActiveLottie } = useLottie();
  const { t } = useTranslation();

  return (
    <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
      <Icon name="target" />

      <div className="flex flex-col gap-2 flex-1">
        <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
          {t("guides.participation.title")}
        </span>
        <div className="flex items-center flex-1">
          {" "}
          <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
            {t("guides.participation.description")}
          </span>
        </div>
      </div>

      <div className="rounded-2xl bg-light-background-primary dark:bg-dark-background-primary px-7 lg:px-[80px] pt-[10px] overflow-hidden transition-all relative h-[200px] max-h-[200px] mt-auto">
        <Quiz lottieSection={"guide-item"} />

        {activeLottie === "guide-item" && (
          <div className="absolute top-0 left-0 h-full w-full z-[9999] pointer-events-none">
            <Lottie
              className="h-full w-full"
              animationData={Confetti}
              loop={false}
              onComplete={() => {
                clearActiveLottie();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Participation;
