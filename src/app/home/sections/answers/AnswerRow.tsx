import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const mockAnswers = [
  '"batika" sözündə ilk ""b"" hərfi neçənci hərfdir?"',
  "HərZaman",
  "1028",
  "2 ay 15 gün",
  "% & + $",
  "Samitlə başlayıb saitlə bitən sözü seçin",
];

const AnswerItem = ({ answer }: { answer: string }) => {
  const ref = useRef(null);

  // useEffect(() => {
  //   const element = ref.current as unknown as HTMLElement;
  //   const parentWidth = element.parentElement?.parentElement
  //     ?.offsetWidth as number;
  //
  //   console.log({ element: element.getBoundingClientRect().x });
  //
  //   console.log({ parentWidth });
  // }, []);

  return (
    <div
      ref={ref}
      className="px-6 py-4 bg-light-surface-low dark:bg-dark-surface-low rounded-full flex items-center justify-center transition-all w-max"
    >
      <span className="text-lg text-light-utility-high dark:text-dark-utility-high transition-all">
        {answer}
      </span>
    </div>
  );
};

const AnswerRow = () => {
  const [answers, setAnswers] = useState(mockAnswers);

  return (
    <motion.div className="gap-2 lg:gap-4 w-max inline-flex" animate="animate">
      {answers.map((answer, i) => {
        return <AnswerItem answer={answer} key={i} />;
      })}
    </motion.div>
  );
};

export default AnswerRow;
