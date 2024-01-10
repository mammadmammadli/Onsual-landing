import "../globals.css";
import type { Metadata } from "next";
import local from "next/font/local";
import Providers from "@/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const hovesFont = local({
  src: [
    {
      path: "../../../public/fonts/TTHoves/TTHoves-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/TTHoves/TTHoves-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/TTHoves/TTHoves-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/TTHoves/TTHoves-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hoves",
});

export const metadata: Metadata = {
  title: "Onsual məxfi̇li̇k",
  description: "Onsual məxfi̇li̇k si̇yasəti̇",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="az" dir="ltr">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body
        className={`${hovesFont.variable} font-sans lg:pt-[96px] bg-light-background-primary dark:bg-dark-background-primary transition-all min-h-screen`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
