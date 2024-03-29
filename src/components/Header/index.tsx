"use client";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Link from "next/link";
import HeaderActions from "@/components/Header/Actions";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

const Header = () => {
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    const listener = (e: Event) => {
      const target = e.target as Document;
      const scroll = target.scrollingElement?.scrollTop || 0;
      if (scroll > 80) {
        if (!blurred) setBlurred(true);
      } else {
        if (blurred) setBlurred(false);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [blurred, setBlurred]);

  const classes = clsx(
    "z-[9000] transition-all py-4 lg:py-6 lg:px-0 fixed w-full top-0 left-0",
    {
      "bg-light-background-alpha dark:bg-dark-background-alpha": blurred,
      "bg-transparent dark:bg-transparent": !blurred,
    },
  );

  return (
    <header className={classes} style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
      <Container className="lg:px-[64px]">
        <div className="flex justify-between items-center">
          <Link href="/" className="inline-block h-max">
            <Logo containerClassName="h-8 lg:h-10 aspect-[21/5]" />
          </Link>

          <HeaderActions />
        </div>
      </Container>
    </header>
  );
};

export default Header;
