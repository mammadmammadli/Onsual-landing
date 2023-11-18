import { useTranslation } from "@/app/i18n/client";

const Features = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-[1]">
      <div className="rounded-[20px] lg:rounded-[32px] bg-light-background-secondary dark:bg-dark-background-secondary transition-all flex flex-col md:flex-row px-6 md:px-[64px] py-8 md:py-[48px] gap-[40px] md:gap-4">
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 items-center">
          <div>
            <img src="/images/icons/glass.png" alt="medal" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h6 className="font-medium text-xl lg:text-2xl text-light-utility-high dark:text-dark-utility-high">
              {t("features.1.title")}
            </h6>

            <span className="text-lg text-light-utility-medium dark:text-dark-utility-medium text-center">
              {t("features.1.description")}
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 items-center">
          <div>
            <img src="/images/icons/types=brain.png" alt="medal" />
            {/* <Icon name="light" /> */}
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h6 className="font-medium text-xl lg:text-2xl text-light-utility-high dark:text-dark-utility-high">
              {t("features.2.title")}
            </h6>

            <span className="text-lg text-light-utility-medium dark:text-dark-utility-medium text-center">
              {t("features.2.description")}
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 items-center">
          <div>
            <img src="/images/icons/types=win.png" alt="medal" />

            {/* <Icon name="medal" /> */}
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h6 className="font-medium text-xl lg:text-2xl text-light-utility-high dark:text-dark-utility-high">
              {t("features.3.title")}
            </h6>

            <span className="text-lg text-light-utility-medium dark:text-dark-utility-medium text-center">
              {t("features.3.description")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
