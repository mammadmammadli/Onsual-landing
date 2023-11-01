"use client";

import { useTranslation } from "@/app/i18n/client";

const FooterCopyRight = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <div className="flex justify-between flex-col md:flex-row gap-4">
      <span className="text-xl font-medium text-light-utility-high dark:text-dark-utility-high transition-all">
        {t("footer.copyright", {
          year,
        })}
      </span>
      <span className="text-xl font-medium text-light-utility-high dark:text-dark-utility-high">
        {t("footer.message")}️
      </span>
    </div>
  );
};

export default FooterCopyRight;
