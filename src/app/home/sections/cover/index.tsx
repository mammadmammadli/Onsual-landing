import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Features from "@/app/home/sections/cover/features";
import Demo from "@/app/home/sections/cover/demo";
import AppleStore from "@/components/Button/AppleStore";
import GooglePlay from "@/components/Button/GooglePlay";

const Cover = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col gap-2 mb-10 lg:mb-[64px]">
          <h1 className="font-bold text-light-utility-high dark:text-dark-utility-high transition-all text-4xl lg:text-7xl text-center">
            <span className="block lg:inline">SİZƏ</span>{" "}
            <span className="text-light-brand-primary lg:text-dark-brand-primary transition-all">
              ONSUALIMIZ
            </span>
            VAR
          </h1>

          <p className="text-light-utility-medium dark:text-dark-utility-medium transition-all text-xl text-center">
            İstədiyin zaman oyna, oynadığın zaman qazan. Onsualın müsabiqələrinə
            qoşulun və müxtəlif mükafatlar qazanın!
          </p>

          <div className="hidden lg:flex gap-3 justify-center mt-6">
            <AppleStore mode="success" />
            <GooglePlay mode="success" />
          </div>
        </div>
        <Demo />
        <Features />
      </Container>
    </SectionWrapper>
  );
};

export default Cover;
