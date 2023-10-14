import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import AppleStore from "@/components/Button/AppleStore";
import GooglePlay from "@/components/Button/GooglePlay";
import Image from "next/image";

const Banner = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="relative rounded-[32px] overflow-hidden">
          <div className="lg:px-[64px] py-[64px] px-6 lg:py-[80px] relative z-[1]">
            <div className="max-w-[544px] flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <h3 className="text-3xl lg:text-5xl text-light-source-white dark:text-dark-source-white font-bold	transition-all">
                  ELƏ İNDİ YÜKLƏ!
                </h3>

                <span className="text-lg text-light-source-white dark:text-dark-source-white transition-all font-normal">
                  Onsualı istifadə etmək üçün mobil tətbiqi Apple Store və ya
                  Google Play-dən yükləyin
                </span>
              </div>

              <div className="flex gap-3 justify-center lg:justify-start">
                <AppleStore mode="transparent" />
                <GooglePlay mode="transparent" />
              </div>
            </div>
          </div>
          <Image
            src="/images/banners/coins.png"
            alt="Banner"
            fill
            priority
            className="z-[0] object-cover"
          />
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Banner;
