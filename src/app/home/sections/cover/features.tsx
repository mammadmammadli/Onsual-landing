import Icon from "@/components/Icons";

const Features = () => {
  return (
    <div className="relative z-[1]">
      <div className="rounded-[20px] lg:rounded-[32px] bg-light-background-secondary dark:bg-dark-background-secondary transition-all flex flex-col md:flex-row px-6 md:px-[64px] py-8 md:py-[48px] gap-[40px] md:gap-4">
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 items-center">
          <div>
            <Icon name="watch" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h6 className="font-medium text-xl lg:text-2xl text-light-utility-high dark:text-dark-utility-high">
              Vaxt məhdudiyyətsiz
            </h6>

            <span className="text-lg text-light-utility-medium dark:text-dark-utility-medium text-center">
              Yarışmalarda gün ərzində istədiyiniz zaman iştirak edin
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 items-center">
          <div>
            <Icon name="light" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h6 className="font-medium text-xl lg:text-2xl text-light-utility-high dark:text-dark-utility-high">
              Unikal suallar
            </h6>

            <span className="text-lg text-light-utility-medium dark:text-dark-utility-medium text-center">
              Gündəlik bir milyondan çox <br /> unikal suallar bazası
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 lg:gap-6 items-center">
          <div>
            <Icon name="medal" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h6 className="font-medium text-xl lg:text-2xl text-light-utility-high dark:text-dark-utility-high">
              Bilik tələb olunmur
            </h6>

            <span className="text-lg text-light-utility-medium dark:text-dark-utility-medium text-center">
              Sualların əksəriyyətinə cavab vermək üçün heç bir xüsusi bilik
              tələb olunmur
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
