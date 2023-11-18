import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Accordion from "@/components/Accordion";
import { frequentAskedQuestions } from "@/data/faq";
import { useTranslation } from "@/app/i18n/client";
import IconButton from "@/components/Button/IconButton";

const FAQ = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const questions = frequentAskedQuestions[language as "az" | "ru" | "en"];

  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col gap-6 lg:px-[144px]">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-3xl lg:text-5xl font-bold text-light-utility-high dark:text-dark-utility-high transition-all">
              {t("faq.title")}
            </h3>
            <span className="text-light-utility-medium dark:text-dark-utility-medium text-lg font-normal transition-all">
              {t("faq.description")}
            </span>
          </div>

          <div>
            <Accordion questions={questions} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default FAQ;
