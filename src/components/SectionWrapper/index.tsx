import { PropsWithChildren } from "react";

type SectionWrapperProps = PropsWithChildren;

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <div className="my-[36px] lg:my-[60px]">{children}</div>;
};

export default SectionWrapper;
