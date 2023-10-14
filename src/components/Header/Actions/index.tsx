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
      <IconButton
        size="lg"
        icon={theme === "dark" ? "sun" : "moon"}
        className="fill-light-utility-high dark:fill-dark-utility-high"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
      <Button mode="dark">Indi yükle</Button>
    </div>
  );
};

export default HeaderActions;
