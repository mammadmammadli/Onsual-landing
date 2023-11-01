import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

const Statistics = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="lg:px-[64px] flex flex-col gap-4 lg:gap-6">
          <h3 className="text-3xl lg:text-5xl font-bold text-light-utility-high dark:text-dark-utility-high transition-all">
            RƏQƏMLƏRLƏ BİZ
          </h3>

          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <div className="rounded-[20px] lg:rounded-[32px] bg-light-surface-high dark:bg-dark-surface-high p-6 lg:p-8 flex flex-col justify-between h-[200px] lg:h-[248px] transition-all">
                <h2 className="text-light-brand-primary dark:text-dark-brand-primary text-5xl lg:text-6xl font-medium">
                  2.4 mln
                </h2>
                <span className="text-xl font-normal text-light-utility-high dark:text-dark-utility-high">
                  Gündəlik sual sayı
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-[20px] lg:rounded-[32px] bg-light-surface-high dark:bg-dark-surface-high p-6 lg:p-8 flex flex-col justify-between h-[200px] lg:h-[248px] transition-all">
                <h2 className="text-light-brand-primary dark:text-dark-brand-primary text-5xl lg:text-6xl font-medium">
                  1000
                </h2>
                <span className="text-xl font-normal text-light-utility-high dark:text-dark-utility-high">
                  Onsual istifadəçi sayı
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-[20px] lg:rounded-[32px] bg-light-surface-high dark:bg-dark-surface-high p-6 lg:p-8 flex flex-col justify-between h-[200px] lg:h-[248px] transition-all">
                <h2 className="text-light-brand-primary dark:text-dark-brand-primary text-5xl lg:text-6xl font-medium">
                  40
                </h2>
                <span className="text-xl font-normal text-light-utility-high dark:text-dark-utility-high">
                  Onsualda qaliblərin sayı
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Statistics;
