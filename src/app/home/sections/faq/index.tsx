import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Accordion from "@/components/Accordion";
import { frequentAskedQuestions } from "@/data/faq";

const FAQ = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col gap-6 lg:px-[144px]">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-3xl lg:text-5xl font-bold text-light-utility-high dark:text-dark-utility-high transition-all">
              ƏN ÇOX VERİLƏN SUALLAR
            </h3>
            <span className="text-light-utility-medium dark:text-dark-utility-medium text-lg font-normal transition-all">
              İstifadəçilərimizin Onsual tətbiqini istifadə etdiyi zaman ən çox
              veridiyi suallar
            </span>
          </div>

          <div>
            <Accordion questions={frequentAskedQuestions} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default FAQ;
