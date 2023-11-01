"use client";

import LanguageSwitcher from "@/components/Header/Actions/LanguageSwitcher";
import Button from "@/components/Button";
import IconButton from "@/components/Button/IconButton";
import { useTheme } from "next-themes";
import { useTranslation } from "@/app/i18n/client";

const HeaderActions = () => {
  const { theme, setTheme } = useTheme();
  const {t} = useTranslation()

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
      <Button mode="dark" className="pl-4 pr-4 py-[10px]">
        {t("download-now")}
      </Button>
    </div>
  );
};

export default HeaderActions;
