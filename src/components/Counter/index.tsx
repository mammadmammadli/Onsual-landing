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
          className="stroke-light-brand-primary dark:stroke-dark-brand-primary"
          d={path}
          fill="none"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          strokeDasharray={pathLength}
          strokeDashoffset={isPlaying || isPaused ? strokeDashoffset : 0}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="text-light-brand-primary dark:text-dark-brand-primary font-semibold transition-all text-xl">
          {isPaused || isPlaying ? remainingTime : 10}
        </span>
      </div>
    </div>
  );
};

export default Counter;
