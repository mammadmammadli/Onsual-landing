import IconButton from "@/components/Button/IconButton";
import { useTheme } from "next-themes";
import useResponsive from "@/hooks/useResponsive";
import { useTransition } from "react";

const LightModeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { device } = useResponsive();
  const [, startTransition] = useTransition();


  return (
    <IconButton
      size={device === "sm" ? "md" : "lg"}
      icon={theme === "dark" ? "sun" : "moon"}
      className="fill-light-utility-high dark:fill-dark-utility-high"
      onClick={(e) => {
        e.stopPropagation();
        startTransition(() => {
          setTheme(theme === "dark" ? "light" : "dark");
        });
      }}
    />
  );
};

export default LightModeSwitcher;
