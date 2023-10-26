import Increaser from "@/components/NumberIncreaser/NumberIncreaserAnimation";
import { useEffect, useRef, useState } from "react";

const NumberIncrease = () => {

  return (
    <div className="flex gap-[62px] overflow-hidden">
      <div className="flex">
        <Increaser
          length={2}
          y={[null, "calc(-100% + 100px)", "calc(-100% + 140px)"]}
        />
        <Increaser
          length={11}
          y={[
            null,
            "calc(-100% + 10px)",
            "calc(-100% + 180px)",
            "calc(-100% + 140px)",
          ]}
        />
        <Increaser
          length={101}
          y={[
            null,
            "calc(-100% + 100px)",
            "calc(-100% + 160px)",
            "calc(-100% + 140px)",
          ]}
        />
      </div>

      <span className="text-[199px] font-bold leading-[136px] text-light-brand-primary dark:text-dark-brand-primary transition-all">
        AZN
      </span>
    </div>
  );
};

export default NumberIncrease;
