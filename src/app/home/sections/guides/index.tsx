import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Icon from "@/components/Icons";
import Rating from "@/app/home/sections/guides/Rating";

const Guides = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col gap-6 lg:px-[64px]">
          <h3 className="text-3xl lg:text-5xl font-bold text-light-utility-high dark:text-dark-utility-high transition-all">
            4 ADDIMDA ONSUAL
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
              <Icon name="login" />

              <div className="flex flex-col gap-2">
                <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
                  Qeydiyyat
                </span>
                <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
                  Sadəcə mobil nömrənizi daxil edərək çox asan şəkildə
                  qeydiyyatdan keçin
                </span>
              </div>
            </div>
            <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
              <Icon name="target" />

              <div className="flex flex-col gap-2">
                <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
                  İştirak
                </span>
                <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
                  Gün ərzində təqdim olunan yarışmalarda iştirak edərək xallar
                  qazanın
                </span>
              </div>
            </div>
            <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
              <Icon name="bar-chart" />

              <div className="flex flex-col gap-2">
                <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
                  Sıralama
                </span>
                <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
                  Yığdığını xallara uyğun olaraq sıralamada müvafiq yerləri
                  tutun
                </span>
              </div>

              <Rating />
            </div>
            <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
              <Icon name="bank-note" />

              <div className="flex flex-col gap-2">
                <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
                  Mükafat qazan
                </span>
                <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
                  Yr pin narwhal poutine readymade tile semiotics on santo
                  viral. Tumblr tumeric plant disrupt sriracha chicken.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Guides;
