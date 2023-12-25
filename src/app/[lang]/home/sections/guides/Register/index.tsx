import Icon from "@/components/Icons";
import PhoneNumber from "@/app/[lang]/home/sections/guides/Register/PhoneNumber";
import CountrySelector from "@/app/[lang]/home/sections/guides/Register/CountrySelector";
import { useTranslation } from "@/app/i18n/client";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
      <Icon name="login" />

      <div className="flex flex-col gap-2 flex-1">
        <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
          {t("guides.register.title")}
        </span>
        <div className="flex items-center flex-1">
          <span
            className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium"
            dangerouslySetInnerHTML={{
              __html: t("guides.register.description"),
            }}
          />
        </div>
      </div>
      <div className="rounded-2xl bg-light-background-primary dark:bg-dark-background-primary overflow-hidden transition-all flex items-center max-h-[200px] mt-auto h-[200px]">
        <div className="flex flex-col gap-1 translate-x-[40px] lg:translate-x-[64px] w-full">
          <div>
            <span className="text-light-utility-medium dark:text-dark-utility-medium transition-all text-base font-normal">
              Mobil nömrənizi daxil edin
            </span>
          </div>

          <div className="flex gap-1 items-center">
            <CountrySelector />
            <PhoneNumber />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
