import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Rating from "@/app/home/sections/guides/Rating";
import Participation from "@/app/home/sections/guides/Participation";
import Win from "@/app/home/sections/guides/Win";
import Register from "@/app/home/sections/guides/Register";

const Guides = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col gap-6 lg:px-[64px]">
          <h3 className="text-3xl lg:text-5xl font-bold text-light-utility-high dark:text-dark-utility-high transition-all">
            4 ADDIMDA ONSUAL
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Register />
            <Participation />
            <Rating />
            <Win />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Guides;
