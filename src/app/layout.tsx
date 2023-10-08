import "./globals.css";
import type { Metadata } from "next";
import local from "next/font/local";
import Head from "next/head";

const hovesFont = local({
  src: [
    {
      path: "../../public/fonts/TTHoves/TTHoves-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TTHoves/TTHoves-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TTHoves/TTHoves-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/TTHoves/TTHoves-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hoves",
});

export const metadata: Metadata = {
  title: "Onsual",
  description: "Onsual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <body className={hovesFont.variable}>{children}</body>
    </html>
  );
}
