import clsx from "clsx";
import { PropsWithChildren } from "react";

type SectionWrapperProps = PropsWithChildren & {
  classname?: string;
};

const SectionWrapper = ({ children, classname = "" }: SectionWrapperProps) => {
  const classes = clsx("py-[36px] lg:py-[60px]", classname);

  return <section className={classes}>{children}</section>;
};

export default SectionWrapper;
