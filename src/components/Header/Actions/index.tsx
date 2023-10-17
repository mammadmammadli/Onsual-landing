"use client";

import LanguageSwitcher from "@/components/Header/Actions/LanguageSwitcher";
import Button from "@/components/Button";
import IconButton from "@/components/Button/IconButton";
import { useTheme } from "next-themes";

const HeaderActions = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-3">
      <LanguageSwitcher />
      <div className="hidden lg:block">
        <IconButton
          size="lg"
          icon={theme === "dark" ? "sun" : "moon"}
          className="fill-light-utility-high dark:fill-dark-utility-high"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
      </div>
      <Button mode="dark" className="pl-4 pr-4 py-[10px]">İndi yüklə</Button>
    </div>
  );
};

export default HeaderActions;
