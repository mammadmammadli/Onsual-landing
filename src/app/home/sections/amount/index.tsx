import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import NumberIncrease from "@/components/NumberIncreaser";

const Amount = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="lg:px-[64px]">
          <div className="flex flex-col gap-1 lg:gap-4 items-center">
            <NumberIncrease />
            <span className="text-light-utility-medium dark:text-dark-utility-medium transition-all font-medium text-2xl lg:text-3xl">
              Gündəlik maksimal mükafat fondumuz
            </span>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Amount;
