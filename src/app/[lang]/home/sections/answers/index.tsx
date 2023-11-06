import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import AnswerRow from "@/app/[lang]/home/sections/answers/AnswerRow";

const mockAnswers = {
  first: [
    '"batika" sözündə ilk "b" hərfi neçənci hərfdir?"',
    "Vilayet landing ne vaxta hazir olar?",
    "1028",
    "2 ay 15 gün",
    "% & + $",
    "Fidan androidi tezden bashladi cumlesi neche herflidi?",
  ],
  second: [
    "Aşağıdakılardan hansı ən kiçik ədəddir?",
    "-186",
    "Vilayet dizaynin superdi amma dagildim 🫶🏻",
    "5 simvollu sözü seçin",
    "En pis gunumuz bele kecsin",
  ],
  third: [
    "Samitlə başlayıb saitlə bitən sözü seçin",
    "185 482",
    "Backendden response niye 10 ile gelir?",
    "1700.12",
    "Uğurlu",
    "Memmed YEK",
    "Uzeryinden nifret eden 1 milyon nefer axtarirdiq",
  ],
  fourth: [
    '"elektrooptiki" sözündə 3-cü hərfi böyük olan cavabı seçin"',
    "! - . %",
    "Ayxan tapdi!",
    "GÜVƏN",
    "Teymur bilmedim sene ne yazam 🤣",
  ],
};

const Answers = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-3xl lg:text-5xl font-bold text-light-utility-high dark:text-dark-utility-high transition-all">
              ONSUALIN CAVABLARI
            </h3>
            <span className="text-light-utility-medium dark:text-dark-utility-medium text-lg font-normal transition-all text-center">
              Sualları görmək istəyirsən? Onsualı elə indi yüklə!
            </span>
          </div>
          <div className="bg-light-surface-high dark:bg-dark-surface-high rounded-3xl lg:rounded-[32px] py-8 lg:py-[48px] relative overflow-hidden transition-all">
            <div className="h-full w-[64px] lg:w-[200px] absolute top-0 left-0 bg-gradient-light-left dark:bg-gradient-dark-left transition-all z-[10]" />
            <div className="h-full w-[64px] lg:w-[200px] absolute top-0 right-0 bg-gradient-light-right dark:bg-gradient-dark-right transition-all z-[10]" />

            <div className="relative w-full max-w-full overflow-x-hidden flex flex-col items-center gap-2 md:gap-4">
              {Object.entries(mockAnswers).map(([, answers], i) => {
                return (
                  <AnswerRow
                    key={i}
                    answers={answers}
                    direction={i % 2 === 0 ? "right" : "left"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Answers;
