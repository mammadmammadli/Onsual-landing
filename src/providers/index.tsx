"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import LottieProvider from "@/providers/LottieProvider";
import ModalProvider from "./ModalProvider";

type ProvidersProps = PropsWithChildren;

const Providers = ({ children }: ProvidersProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <LottieProvider>
        <ModalProvider>{children}</ModalProvider>
      </LottieProvider>
    </ThemeProvider>
  );
};

export default Providers;
