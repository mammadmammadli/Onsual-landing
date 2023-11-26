"use client";

import Statistics from "@/app/[lang]/home/sections/statistics";
import Guides from "@/app/[lang]/home/sections/guides";
import Answers from "@/app/[lang]/home/sections/answers";
import Banner from "@/app/[lang]/home/sections/banner";
import FAQ from "@/app/[lang]/home/sections/faq";
import Cover from "@/app/[lang]/home/sections/cover";
import Lottie from "lottie-react";
import Confetti from "@/animations/confetti.json";
import { useLottie } from "@/providers/LottieProvider";
import Amount from "@/app/[lang]/home/sections/amount";
import DownloadApp from "@/app/[lang]/home/components/DownloadApp";
import { useEffect, useState } from "react";
import { debounce } from "next/dist/server/utils";
import { getCookie, setCookie } from "cookies-next";
import AnimatedEllipses from "./components/AnimatedEllipses";
import useModal from "@/hooks/useModal";

const HomePage = () => {
  const { activeLottie, setActiveLottie, clearActiveLottie } = useLottie();
  const [isDownloadAppOpen, setIsDownloadAppOpen] = useState(false);
  const { onOpen } = useModal();

  useEffect(() => {
    const isDownloadAppOpenCookie = getCookie("download-app-open");
    let listener: () => void;

    if (isDownloadAppOpenCookie !== "true" && !isDownloadAppOpen) {
      listener = debounce(() => {
        if (window.scrollY > 1000) {
          setCookie("download-app-open", true, { maxAge: 60 * 60 * 24 });
          setIsDownloadAppOpen(true);
        }
      }, 500);

      window.addEventListener("scroll", listener);
    }

    return () => {
      if (listener) {
        window.removeEventListener("scroll", listener);
      }
    };
  }, [setIsDownloadAppOpen, isDownloadAppOpen]);

  useEffect(() => {
    setTimeout(() => {
      console.log("lol")
      onOpen(true);
    }, 1000);
  }, []);

  return (
    <div className="pb-[36px] lg:pb-[100px] pt-[100px] lg:pt-5 relative">
      <AnimatedEllipses />
      <Cover />
      <Guides />
      <Amount />
      <Statistics />
      <Answers />
      <FAQ />
      <Banner />
      <DownloadApp
        onClose={() => setIsDownloadAppOpen(false)}
        isOpen={isDownloadAppOpen}
      />
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
