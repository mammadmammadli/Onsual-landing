"use client";

import Statistics from "@/app/home/sections/statistics";
import Guides from "@/app/home/sections/guides";
import Answers from "@/app/home/sections/answers";
import Banner from "@/app/home/sections/banner";
import FAQ from "@/app/home/sections/faq";

const HomePage = () => {
  return (
    <div className="pb-[100px]">
      <Guides />
      <Statistics />
      <Answers />
      <FAQ />
      <Banner />
    </div>
  );
};

export default HomePage;
