import Image from "next/image";
import Icon from "@/components/Icons";

const CountrySelector = () => {
  return (
    <div className="flex gap-1 items-center bg-light-surface-high dark:bg-dark-surface-high transition-all py-3 pl-4 pr-3 rounded-xl">
      <div className="h-6 w-6 relative">
        <Image src={`/images/flags/az.svg`} alt={`az lang`} fill priority />
      </div>

      <span className="text-light-utility-high dark:text-dark-utility-high transition-all text-lg font-normal">
        +994
      </span>

      <Icon name="chevron-down" />
    </div>
  );
};

export default CountrySelector;
