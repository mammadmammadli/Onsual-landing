import Icon from "@/components/Icons";
import Image from "next/image";

const Rating = () => {
  return (
    <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
      <Icon name="bar-chart" />

      <div className="flex flex-col gap-2">
        <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
          Sıralama
        </span>
        <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
          Yığdığını xallara uyğun olaraq sıralamada müvafiq yerləri tutun
        </span>
      </div>
      <div className="flex-1 rounded-2xl bg-light-background-primary dark:bg-dark-background-primary px-7 lg:px-[60px] pt-[36px] overflow-hidden transition-all">
        <div className="rounded-xl bg-light-surface-high dark:bg-dark-surface-high pt-2 transition-all">
          <div className="flex gap-2 px-4 py-[10px]">
            <Icon name="medal-first" />

            <Image
              src="/images/avatars/Ellipse 20.svg"
              alt="avatar"
              height={24}
              width={24}
              quality={100}
            />

            <div className="flex gap-1 items-center">
              <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
                memo
              </span>
              <div className="rounded-full px-[6px] py-[2px] bg-light-brand-alpha dark:bg-dark-brand-alpha flex">
                <span className="text-light-brand-primary dark:text-dark-brand-primary font-medium text-xs">
                  SƏN
                </span>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <span className="text-light-utility-high dark:text-dark-utility-high font-medium text-lg">
                0.00
              </span>
            </div>
          </div>
          <div className="flex gap-2 px-4 py-[10px]">
            <Icon name="medal-second" />

            <Image
              src="/images/avatars/Ellipse 21.svg"
              alt="avatar"
              height={24}
              width={24}
              quality={100}
            />

            <div className="flex gap-1 items-center">
              <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
                ayxan
              </span>
            </div>
            <div className="flex-1 flex justify-end">
              <span className="text-light-utility-high dark:text-dark-utility-high font-medium text-lg">
                0.00
              </span>
            </div>
          </div>
          <div className="flex gap-2 px-4 py-[10px]">
            <Icon name="medal-third" />

            <Image
              src="/images/avatars/Ellipse 22.svg"
              alt="avatar"
              height={24}
              width={24}
            />
            <div className="flex gap-1 items-center">
              <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
                fidan
              </span>
            </div>
            <div className="flex-1 flex justify-end">
              <span className="text-light-utility-high dark:text-dark-utility-high font-medium text-lg">
                0.00
              </span>
            </div>
          </div>
          <div className="flex gap-2 px-4 py-[10px]">
            <div className="w-6 flex justify-center items-center">
              <span className="font-medium text-base text-light-utility-medium dark:text-dark-utility-medium">
                4
              </span>
            </div>
            <Image
              src="/images/avatars/Ellipse 20.svg"
              alt="avatar"
              height={24}
              width={24}
              quality={100}
            />
            <div className="flex gap-1 items-center">
              <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
                vily
              </span>
            </div>
            <div className="flex-1 flex justify-end">
              <span className="text-light-utility-high dark:text-dark-utility-high font-medium text-lg">
                0.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
