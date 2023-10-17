"use client";

import Statistics from "@/app/home/sections/statistics";
import Guides from "@/app/home/sections/guides";
import Answers from "@/app/home/sections/answers";
import Banner from "@/app/home/sections/banner";
import FAQ from "@/app/home/sections/faq";
import Cover from "@/app/home/sections/cover";
import Lottie from "lottie-react";
import Confetti from "@/animations/confetti.json";
import { useLottie } from "@/providers/LottieProvider";

const HomePage = () => {
  const { activeLottie, setActiveLottie, clearActiveLottie } = useLottie();

  return (
    <div className="pb-[36px] lg:pb-[100px] pt-[100px] lg:pt-5">
      <Cover />
      <Guides />
      <Statistics />
      <Answers />
      <FAQ />
      <Banner />
      {activeLottie === "cover" && (
        <div className="absolute top-0 h-screen w-full  z-[9999] pointer-events-none">
          <Lottie
            className="h-screen w-full"
            animationData={Confetti}
            loop={false}
            onComplete={() => {
              clearActiveLottie();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
