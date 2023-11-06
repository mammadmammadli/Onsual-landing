import Image from "next/image";
import { clsx } from "clsx";

type LogoProps = {
  containerClassName?: string;
};

const Logo = ({ containerClassName = "" }: LogoProps) => {
  const containerClasses = clsx("relative", containerClassName);

  return (
    <div className={containerClasses}>
      <Image
        src="/images/logo.svg"
        alt="Onsual logo"
        fill
        priority
        quality={100}
        loading="eager"
        sizes="(max-width: 640px) 100vw, (min-width:641px) 200px"
      />
    </div>
  );
};

export default Logo;
