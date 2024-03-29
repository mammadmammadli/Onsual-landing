"use client";

import Icon from "@/components/Icons";
import { useBattery } from "react-use";
import { useEffect, useState } from "react";
import IconButton from "@/components/Button/IconButton";
import Quiz from "@/components/Quiz";

const Screen = () => {
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState<number>();
  const battery = useBattery();
  const [batteryLevel, setBatteryLevel] = useState(100);

  useEffect(() => {
    if (battery.isSupported && battery.fetched) {
      setBatteryLevel(Math.round(battery.level * 100));
    }
  }, [setBatteryLevel, batteryLevel, battery]);

  useEffect(() => {
    const timeUpdate = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      setHours(hours);
      setMinutes(minutes);
    };

    const timer = setInterval(timeUpdate, 1000 * 60);

    timeUpdate();

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="absolute top-0 h-[400px] bg-light-background-primary dark:bg-dark-background-primary transition-all w-[calc(100%-30px)] z-[1] left-[15px] rounded-[50px] pt-4 px-[10px]">
      <div className="flex justify-between items-center h-[30px]">
        {minutes !== undefined && hours !== undefined && (
          <div className="pl-[14px]">
            <span className="text-light-utility-high dark:text-dark-utility-high text-xs font-semibold">
              {hours > 12 ? hours - 12 : hours}:
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
          </div>
        )}
        <div>
          <Icon
            batteryLevel={batteryLevel}
            name="iphone-actions"
            className="fill-light-utility-high dark:fill-dark-utility-high transition-all"
          />
        </div>
      </div>

      <div className="pt-2 flex justify-between items-center px-0.5">
        <IconButton
          icon="close"
          size="sm"
          iconClassName="fill-light-utility-low dark:fill-dark-utility-low"
          className="!bg-light-surface-high dark:!bg-dark-surface-high pl-2 pt-2 pr-2 pb-2 hover:!bg-light-surface-medium dark:hover:!bg-dark-surface-medium"
        />

        <div className="p-2 bg-light-surface-high dark:bg-dark-surface-high transition-all rounded-full gap-1 flex">
          <Icon
            name="star"
            className="fill-light-brand-primary dark:fill-dark-brand-primary transition-all"
          />

          <span className="text-sm font-medium dark:text-dark-utility-high text-light-utility-high transition-all">
            120.23
          </span>
        </div>
      </div>

      <Quiz lottieSection="cover" />
    </div>
  );
};
export default Screen;
