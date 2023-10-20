import Icon from "@/components/Icons";
import Quiz from "@/components/Quiz";
import { useLottie } from "@/providers/LottieProvider";
import Lottie from "lottie-react";
import Confetti from "@/animations/confetti.json";
import { useState } from "react";

const Participation = () => {
  const { activeLottie, clearActiveLottie } = useLottie();
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Icon name="target" />

      <div className="flex flex-col gap-2">
        <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
          İştirak
        </span>
        <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
          Gün ərzində təqdim olunan yarışmalarda iştirak edərək xallar qazanın
        </span>
      </div>

      <div className="flex-1 rounded-2xl bg-light-background-primary dark:bg-dark-background-primary px-7 lg:px-[80px] pt-[10px] overflow-hidden transition-all relative">
        <Quiz lottieSection={"guide-item"} isPaused={!isHovered} />

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
