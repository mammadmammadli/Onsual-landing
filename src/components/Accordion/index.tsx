"use client";

import { useState } from "react";
import AccordionItem from "@/components/Accordion/AccordionItem";

type AccordionProps = {
  questions: Array<{
    question: string;
    answer: string;
  }>;
};

const Accordion = ({ questions }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number>();

  return (
    <div className="flex flex-col gap-4">
      {questions.map((question, index) => (
        <AccordionItem
          key={index}
          isOpen={activeIndex === index}
          setOpen={() => {
            if (activeIndex === index) {
              setActiveIndex(undefined);
            } else {
              setActiveIndex(index);
            }
          }}
          {...question}
        />
      ))}
    </div>
  );
};

export default Accordion;
