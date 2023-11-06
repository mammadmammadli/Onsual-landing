import IconButton from "@/components/Button/IconButton";
import { motion } from "framer-motion";
import { clsx } from "clsx";

type AccordionItemProps = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  question: string;
  answer: string;
};

const AccordionItem = ({
  isOpen,
  setOpen,
  question,
  answer,
}: AccordionItemProps) => {
  const containerClasses = clsx(
    "rounded-3xl p-5 lg:px-6 lg:py-[26px] bg-light-surface-high dark:bg-dark-surface-high transition-all cursor-pointer",
    {
      "pb-5": isOpen,
    },
  );

  return (
    <div className={containerClasses} onClick={() => setOpen(!isOpen)}>
      <div className="flex justify-between items-center gap-3">
        <div className="flex-1">
          <span className="font-medium text-xl text-light-utility-high dark:text-dark-utility-high transition-all">
            {question}
          </span>
        </div>

        <div>
          <IconButton
            onClick={() => setOpen(!isOpen)}
            icon={isOpen ? "minus" : "plus"}
            className="h-[40px] w-[40px] pl-0 pr-0 pt-0 pb-0 flex justify-center items-center"
            mode={isOpen ? "success" : "default"}
          />
        </div>
      </div>

      <motion.div
        className="overflow-hidden"
        animate={{
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          type: "tween",
        }}
      >
        <div className="p-4 bg-light-surface-medium dark:bg-dark-surface-medium rounded-2xl mt-4 transition-all">
          <span className="text-lg text-light-utility-high dark:text-dark-utility-high">
            {answer}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
