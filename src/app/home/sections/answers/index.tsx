import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import AnswerRow from "@/app/home/sections/answers/AnswerRow";

const Answers = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-3xl lg:text-5xl font-bold text-light-utility-high dark:text-dark-utility-high transition-all">
              ONSUALIN CAVABLARI
            </h3>
            <span className="text-light-utility-medium dark:text-dark-utility-medium text-lg font-normal transition-all">
              Sualları görmək istəyirsən? Onsualı elə indi yüklə!
            </span>
          </div>
          <div className="bg-light-surface-high dark:bg-dark-surface-high rounded-3xl lg:rounded-[32px] py-8 lg:py-[48px] relative overflow-hidden transition-all">
            <div className="h-full w-[64px] lg:w-[200px] absolute top-0 left-0 bg-gradient-light-left dark:bg-gradient-dark-left transition-all z-[10]" />
            <div className="h-full w-[64px] lg:w-[200px] absolute top-0 right-0 bg-gradient-light-right dark:bg-gradient-dark-right transition-all z-[10]" />

            <div className="relative w-full max-w-full overflow-x-hidden flex items-center gap-2 lg:gap-4">
              <AnswerRow />
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Answers;
