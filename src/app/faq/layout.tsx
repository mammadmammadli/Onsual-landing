import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Onsual",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
