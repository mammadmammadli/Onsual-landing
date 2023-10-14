import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Features from "@/app/home/sections/cover/features";
import Demo from "@/app/home/sections/cover/demo";

const Cover = () => {
  return (
    <SectionWrapper>
      <Container>
        <Demo />
        <Features />
      </Container>
    </SectionWrapper>
  );
};

export default Cover;
