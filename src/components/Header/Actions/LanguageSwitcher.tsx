"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useState, useTransition } from "react";
import { clsx } from "clsx";
import { useTranslation } from "@/app/i18n/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const languages = ["en", "ru", "az"];

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const buttonClasses = clsx(
    "gap-2 items-center flex transition-all pl-4 font-medium absolute opacity-100 right-0 duration-300",
  );
  const { i18n } = useTranslation();
  const [isPending, startTransition] = useTransition();
  const { language } = i18n;

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
      window.history.pushState({}, "", `/${lang}${newPath}`);

      i18n.changeLanguage(lang);
      setOpen(false);
    });
  };

  const filteredLanguages = languages.filter((lang) => lang !== language);
  filteredLanguages.unshift(language);

  return (
    <div className="hidden lg:flex flex-row-reverse gap-3 relative w-[272px]">
      {filteredLanguages.map((lang, index) => {
        const btnClasses = clsx(buttonClasses, {
          "opacity-100": index === 0,
          "right-1/2 translate-x-1/2 opacity-100": isOpen && index === 1,
          "right-full translate-x-full opacity-100": isOpen && index === 2,
          "z-[10]": lang === language,
          "right-0": !isOpen,
        });

        return (
          <Button
            className={btnClasses}
            key={lang}
            onClick={() => {
              handleClick(lang);
            }}
          >
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
          </Button>
        );
      })}
    </div>
  );

  // const azeClasses = clsx("absolute right-0 opacity-0", buttonClasses, {
  //   ""
  // })
  //
  // const engClasses = clsx("absolute right-0 opacity-0", buttonClasses, {
  //   "right-[196px] opacity-100": isOpen,
  // });
  //
  // const rusClasses = clsx("absolute right-0 opacity-0", buttonClasses, {
  //   "right-[97px] opacity-100": isOpen,
  // })
  //
  // return (
  //   <div
  //     className="hidden lg:flex flex-row-reverse gap-3 relative"
  //     style={{ containerType: "inline-size" }}
  //   >
  //     <Button
  //       className={`${buttonClasses} z-[10]`}
  //       key={"az"}
  //       onClick={() => {
  //         handleClick("az");
  //       }}
  //     >
  //       <div className="relative h-5 w-5">
  //         <Image src={`/images/flags/az.svg`} alt={`az lang`} fill priority />
  //       </div>
  //       <span className="text-base uppercase text-light-utility-high dark:text-dark-utility-high transition-all">
  //         AZ
  //       </span>
  //     </Button>
  //     <Button
  //       className={rusClasses}
  //       key={"ru"}
  //       onClick={() => {
  //         handleClick("ru");
  //       }}
  //     >
  //       <div className="relative h-5 w-5">
  //         <Image src={`/images/flags/ru.svg`} alt={`ru lang`} fill priority />
  //       </div>
  //       <span className="text-base uppercase text-light-utility-high dark:text-dark-utility-high transition-all">
  //         RU
  //       </span>
  //     </Button>
  //     <Button
  //       className={engClasses}
  //       key={"en"}
  //       onClick={() => {
  //         handleClick("en");
  //       }}
  //     >
  //       <div className="relative h-5 w-5">
  //         <Image src={`/images/flags/en.svg`} alt={`en lang`} fill priority />
  //       </div>
  //       <span className="text-base uppercase text-light-utility-high dark:text-dark-utility-high transition-all">
  //         EN
  //       </span>
  //     </Button>
  //   </div>
  // );
};

export default LanguageSwitcher;
