import clsx from "clsx";
import {
  Props as CountdownProps,
  useCountdown,
} from "react-countdown-circle-timer";
import Check from "../Icons/Check";

type Props = {
  isPaused?: boolean;
  countdownProps?: CountdownProps;
  isChecked: boolean;
};

const defaultCountdownConfig: CountdownProps = {
  isPlaying: true,
  duration: 10,
  rotation: "counterclockwise",
  isSmoothColorTransition: true,
  colors: "#fff",
};

const Counter = ({ countdownProps, isPaused, isChecked = false }: Props) => {
  const {
    path,
    pathLength,
    size,
    strokeWidth,
    remainingTime,
    strokeDashoffset,
  } = useCountdown(countdownProps || defaultCountdownConfig);

  const strokeClasses = clsx({
    "stroke-light-brand-primary dark:stroke-dark-brand-primary":
      remainingTime > 7,
    "stroke-light-source-warning dark:stroke-dark-source-warning":
      remainingTime <= 7 && remainingTime > 2,
    "stroke-light-source-error dark:stroke-dark-source-error":
      remainingTime <= 2,
  });

  const textClasses = clsx("font-semibold transition-all text-xl", {
    "text-light-brand-primary dark:text-dark-brand-primary": remainingTime > 7,
    "text-light-source-warning dark:text-dark-source-warning":
      remainingTime <= 7 && remainingTime > 2,
    "text-light-source-error dark:text-dark-source-error": remainingTime <= 2,
  });

  return (
    <div className="relative h-[48px] w-[48px]">
      {isChecked ? (
        <Check className="fill-light-brand-primary stroke-light-brand-primary  dark:fill-dark-brand-primary dark:stroke-dark-brand-primary" />
      ) : (
        <>
          <svg
            className="stroke-amber-200 h-[48px] w-[48px]"
            viewBox={`0 0 ${size} ${size}`}
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={strokeClasses}
              d={path}
              fill="none"
              strokeLinecap="round"
              strokeWidth={strokeWidth}
              strokeDasharray={pathLength}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className={textClasses}>{remainingTime}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Counter;
