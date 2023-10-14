"use client";

import Statistics from "@/app/home/sections/statistics";
import Guides from "@/app/home/sections/guides";
import Answers from "@/app/home/sections/answers";
import Banner from "@/app/home/sections/banner";
import FAQ from "@/app/home/sections/faq";
import Cover from "@/app/home/sections/cover";

const HomePage = () => {
  return (
    <div className="pb-[36px] lg:pb-[100px] pt-[96px]">
      <Cover />
      <Guides />
      <Statistics />
      <Answers />
      <FAQ />
      <Banner />
    </div>
  );
};

export default HomePage;
