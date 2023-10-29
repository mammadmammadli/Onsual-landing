import Icon from "@/components/Icons";
import PhoneNumber from "@/app/home/sections/guides/Register/PhoneNumber";
import CountrySelector from "@/app/home/sections/guides/Register/CountrySelector";

const Index = () => {
  return (
    <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
      <Icon name="login" />

      <div className="flex flex-col gap-2">
        <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
          Qeydiyyat
        </span>
        <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
          Sadəcə mobil nömrənizi daxil edərək çox asan şəkildə qeydiyyatdan
          keçin
        </span>
      </div>
      <div className="flex-1 rounded-2xl bg-light-background-primary dark:bg-dark-background-primary overflow-hidden transition-all flex items-center">
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
