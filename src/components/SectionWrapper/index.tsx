import { PropsWithChildren } from "react";

type SectionWrapperProps = PropsWithChildren;

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <section className="py-[36px] lg:py-[60px]">{children}</section>;
};

export default SectionWrapper;
