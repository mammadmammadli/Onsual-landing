import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Features from "@/app/[lang]/home/sections/cover/features";
import Demo from "@/app/[lang]/home/sections/cover/demo";
import AppleStore from "@/components/Button/AppleStore";
import GooglePlay from "@/components/Button/GooglePlay";
import { useTranslation } from "@/app/i18n/client";
import AnimatedEllipses from "../../components/AnimatedEllipses";

const Cover = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper classname="relative z-10">
      <Container>
        <div className="flex flex-col gap-2 mb-10 lg:mb-[64px]">
          <h1 className="font-bold text-light-utility-high dark:text-dark-utility-high transition-all text-4xl lg:text-7xl text-center">
            <div
              dangerouslySetInnerHTML={{
                __html: t("get-started"),
              }}
            ></div>
          </h1>

          <p className="text-light-utility-medium dark:text-dark-utility-medium transition-all text-xl text-center">
            {t("get-started-subtitle")}
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
