import Marquee from "react-fast-marquee";

const AnswerItem = ({ answer }: { answer: string }) => {
  return (
    <div className="mx-1 lg:mx-2 px-6 py-4 bg-light-surface-medium dark:bg-dark-surface-medium rounded-full flex items-center justify-center transition-all w-max cursor-default">
      <span className="text-lg text-light-utility-high dark:text-dark-utility-high transition-all">
        {answer}
      </span>
    </div>
  );
};

type AnswerRowProps = {
  answers: string[];
  direction: "left" | "right" | "up" | "down";
};

const AnswerRow = ({ answers, direction = "right" }: AnswerRowProps) => {
  return (
    <Marquee speed={50} direction={direction} pauseOnHover>
      {answers.map((answer, i) => {
        return <AnswerItem answer={answer} key={i} />;
      })}
    </Marquee>
  );
};

export default AnswerRow;
