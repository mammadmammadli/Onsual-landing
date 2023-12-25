"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useState, useTransition } from "react";
import { clsx } from "clsx";
import { useTranslation } from "@/app/i18n/client";
import { usePathname, useRouter } from "next/navigation";
import useResponsive from "@/hooks/useResponsive";
import Link from "next/link";

const languages = ["en", "ru", "az"];

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const buttonClasses = clsx(
    "transition-all pl-4 font-medium absolute right-0 duration-300 !absolute"
  );
  const { i18n } = useTranslation();
  const [, startTransition] = useTransition();
  const { language } = i18n;
  const { device } = useResponsive();
  const router = useRouter();

  const handleClick = (lang: string) => {
    if (!isOpen) {
      setOpen(true);

      return;
    }

    const pathArr = pathname?.split("/");
    const newPath = pathArr
      ?.filter((path) => {
        if (path === "") return false;
        return !i18n.languages.some((language) => path === language);
      })
      .join("/");

    startTransition(() => {
      router.push(`/${lang}${newPath}`);

      i18n.changeLanguage(lang);
      setOpen(false);
    });
  };

  const filteredLanguages = languages.filter((lang) => lang !== language);
  filteredLanguages.unshift(language);

  return (
    <div className="flex flex-row-reverse gap-3 relative w-[248px] lg:w-[272px] h-[40px] lg:h-[44px]">
      {filteredLanguages.map((lang, index) => {
        const btnClasses = clsx(buttonClasses, {
          "opacity-100": index === 0,
          "right-1/2 translate-x-1/2 opacity-100": isOpen && index === 1,
          "right-full translate-x-full opacity-100": isOpen && index === 2,
          "opacity-0": !isOpen && (index === 1 || index === 2),
          "z-[10]": lang === language,
          "right-0": !isOpen,
          "pl-3 pr-4": device === "sm" || device === "md",
        });

        return (
          <Button
            className={btnClasses}
            key={lang}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(lang);
            }}
          >
            <div className="flex gap-2 items-center">
              <div className="relative h-5 w-5">
                <Image
                  src={`/images/flags/${lang}.svg`}
                  alt={`en lang`}
                  fill
                  priority
                />
              </div>
              <span className="text-base uppercase text-light-utility-high dark:text-dark-utility-high transition-all">
                {lang}
              </span>
            </div>
          </Button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
