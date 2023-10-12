"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";

const languages = ["az", "ru", "en"];

type LanguageItemProps = {
  lang: string;
  index: number;
};

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(true);

  const buttonClasses = clsx("gap-2 items-center absolute right-0 flex");

  return (
    <div className="hidden lg:flex flex-row-reverse gap-3 relative">
      <Button className={buttonClasses} style={{ zIndex: "10" }}>
        <div className="relative h-5 w-5">
          <Image src={`/images/flags/az.svg`} alt={`az lang`} fill priority />
        </div>
        <span className="text-base uppercase">AZ</span>
      </Button>
      <Button className={buttonClasses}>
        <div className="relative h-5 w-5">
          <Image src={`/images/flags/ru.svg`} alt={`ru lang`} fill priority />
        </div>
        <span className="text-base uppercase">RU</span>
      </Button>
      <Button className={buttonClasses}>
        <div className="relative h-5 w-5">
          <Image src={`/images/flags/en.svg`} alt={`en lang`} fill priority />
        </div>
        <span className="text-base uppercase">EN</span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

// const LanguageItem = ({ lang, index }: LanguageItemProps) => {
//   const [offset, setOffset] = useState<number>();
//
//   const ref = useCallback(
//     (node: HTMLButtonElement | null) => {
//       if (node !== null) {
//         setOffset(node.getClientRects()[0].width * index + 12);
//       }
//     },
//     [index, lang],
//   );
//
//   return (
//     <Button
//       ref={ref}
//       className="hidden lg:flex gap-2 items-center absolute"
//       style={{ right: offset }}
//     >
//       <div className="relative h-5 w-5">
//         <Image
//           src={`/images/flags/${lang}.svg`}
//           alt={`${lang} lang`}
//           fill
//           priority
//         />
//       </div>
//       <span className="text-base uppercase">{lang}</span>
//     </Button>
//   );
// };
