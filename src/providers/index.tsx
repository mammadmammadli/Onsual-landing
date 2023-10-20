"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import LottieProvider from "@/providers/LottieProvider";

type ProvidersProps = PropsWithChildren;

const Providers = ({ children }: ProvidersProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function getMobileOperatingSystem() {
      const userAgent = navigator.userAgent;

      if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
        return "Android";
      }

      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "iOS";
      }

      return "unknown";
    }

    setTimeout(() => {
      alert(getMobileOperatingSystem());
    }, 5000);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <LottieProvider>{children}</LottieProvider>
    </ThemeProvider>
  );
};

export default Providers;
