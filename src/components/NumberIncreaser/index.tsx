import NumberIncreaseAnimation from "@/components/NumberIncreaser/NumberIncreaserAnimation";

const NumberIncrease = () => {
  return (
    <div className="flex gap-[62px]">
      <div className="flex">
        <div className="relative h-[140px] w-[67.4px] overflow-hidden">
          <span className="text-[140px] font-bold leading-[140px] text-light-brand-primary dark:text-dark-brand-primary transition-all">
            1
          </span>
        </div>
        <NumberIncreaseAnimation duration={6} number={0} />
        <NumberIncreaseAnimation duration={4} number={0} />
      </div>

      <span className="text-[140px] font-bold leading-[140px] text-light-brand-primary dark:text-dark-brand-primary transition-all">
        AZN
      </span>
    </div>
  );
};

export default NumberIncrease;
