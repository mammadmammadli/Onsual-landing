"use client";

import LanguageSwitcher from "@/components/Header/Actions/LanguageSwitcher";
import Button from "@/components/Button";
import { useTranslation } from "@/app/i18n/client";
import useResponsive from "@/hooks/useResponsive";
import Hamburger from "@/components/Header/Actions/Hamburger";
import LightModeSwitcher from "@/components/Header/Actions/LightModeSwitcher";

const HeaderActions = () => {
  const { t } = useTranslation();
  const { device } = useResponsive();

  return (
    <div className="flex gap-3">
      <div className="hidden lg:block">
        <LanguageSwitcher />
      </div>
      <div className="hidden lg:block">
        <LightModeSwitcher />
      </div>
      <Button mode="dark" className="pl-4 pr-4 py-[10px]">
        {t("download-now")}
      </Button>
      {device === "md" || device === "sm" && <Hamburger />}
    </div>
  );
};

export default HeaderActions;
