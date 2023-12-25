import { clsx } from "clsx";
import Login from "../Icons/Login";

type LogoProps = {
  containerClassName?: string;
};

const Logo = ({ containerClassName = "" }: LogoProps) => {
  const containerClasses = clsx("relative", containerClassName);

  return (
    <div className={containerClasses}>
      <Login className="fill-light-brand-primary dark:fill-dark-brand-primary h-8 lg:h-10" />
    </div>
  );
};

export default Logo;
