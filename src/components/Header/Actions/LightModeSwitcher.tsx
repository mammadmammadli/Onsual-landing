import IconButton from "@/components/Button/IconButton";
import { useTheme } from "next-themes";
import useResponsive from "@/hooks/useResponsive";

const LightModeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { device } = useResponsive();

  return (
    <IconButton
      size={device === "sm" ? "md" : "lg"}
      icon={theme === "dark" ? "sun" : "moon"}
      className="fill-light-utility-high dark:fill-dark-utility-high"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    />
  );
};

export default LightModeSwitcher;
