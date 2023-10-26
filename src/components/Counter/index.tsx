import clsx from "clsx";
import {
  Props as CountdownProps,
  useCountdown,
} from "react-countdown-circle-timer";

type Props = {
  isPaused?: boolean;
  countdownProps?: CountdownProps;
};

const defaultCountdownConfig: CountdownProps = {
  isPlaying: true,
  duration: 10,
  rotation: "counterclockwise",
  colors: "#fff",
  onComplete: () => {
    return {
      shouldRepeat: true,
    };
  },
};

const Counter = ({ countdownProps, isPaused }: Props) => {
  const {
    path,
    pathLength,
    size,
    strokeWidth,
    remainingTime,
    strokeDashoffset,
  } = useCountdown(countdownProps || defaultCountdownConfig);

  const isPlaying = countdownProps?.isPlaying;

  const strokeClasses = clsx("transition-all", {
    "stroke-light-brand-primary dark:stroke-dark-brand-primary":
      remainingTime > 5,
    "stroke-light-source-warning dark:stroke-dark-source-warning":
      remainingTime <= 5 && remainingTime > 2,
    "stroke-light-source-error dark:stroke-dark-source-error":
      remainingTime <= 2,
  });

  const textClasses = clsx("font-semibold transition-all text-xl", {
    "text-light-brand-primary dark:text-dark-brand-primary": remainingTime > 5,
    "text-light-source-warning dark:text-dark-source-warning":
      remainingTime <= 5 && remainingTime > 2,
    "text-light-source-error dark:text-dark-source-error": remainingTime <= 2,
  });

  return (
    <div className="relative h-[48px] w-[48px]">
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
          strokeDashoffset={isPlaying || isPaused ? strokeDashoffset : 0}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className={textClasses}>
          {isPaused || isPlaying ? remainingTime : 10}
        </span>
      </div>
    </div>
  );
};

export default Counter;
