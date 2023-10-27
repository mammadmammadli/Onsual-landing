import Increaser from "@/components/NumberIncreaser/NumberIncreaserAnimation";
import useResponsive from "@/hooks/useResponsive";

const firstAnimationMapper: {
  [key: string]: any;
} = {
  sm: [null, "calc(-100% + 70px)", "calc(-100% + 80px)"],
  md: [null, "calc(-100% + 130px)", "calc(-100% + 140px)"],
  lg: [null, "calc(-100% + 130px)", "calc(-100% + 140px)"],
  xl: [null, "calc(-100% + 130px)", "calc(-100% + 140px)"],
  "2xl": [null, "calc(-100% + 130px)", "calc(-100% + 140px)"],
};

const secondAnimationMapper: {
  [key: string]: any;
} = {
  sm: [null, "calc(-100% + 90px)", "calc(-100% + 80px)"],
  md: [null, "calc(-100% + 180px)", "calc(-100% + 140px)"],
  lg: [null, "calc(-100% + 180px)", "calc(-100% + 140px)"],
  xl: [null, "calc(-100% + 180px)", "calc(-100% + 140px)"],
  "2xl": [null, "calc(-100% + 180px)", "calc(-100% + 140px)"],
}

const thirdAnimationMapper: {
  [key: string]: any;
} = {
  sm: [null, "calc(-100% + 85px)", "calc(-100% + 80px)"],
  md: [null, "calc(-100% + 160px)", "calc(-100% + 140px)"],
  lg: [null, "calc(-100% + 160px)", "calc(-100% + 140px)"],
  xl: [null, "calc(-100% + 160px)", "calc(-100% + 140px)"],
  "2xl": [null, "calc(-100% + 160px)", "calc(-100% + 140px)"],
}

const NumberIncrease = () => {
  const { device } = useResponsive();

  return (
    <div className="flex gap-5 lg:gap-[62px] overflow-hidden">
      <div className="flex">
        {device && (
          <>
            <Increaser length={2} y={firstAnimationMapper[device]} />
            <Increaser
              length={11}
              y={secondAnimationMapper[device]}
            />
            <Increaser
              length={101}
              y={thirdAnimationMapper[device]}
            />
          </>
        )}
      </div>

      <span className="text-7xl lg:text-[199px] font-bold lg:leading-[136px] text-light-brand-primary dark:text-dark-brand-primary transition-all">
        AZN
      </span>
    </div>
  );
};

export default NumberIncrease;
