import useModal from "@/hooks/useModal";
import Icon from "../Icons";
import { motion } from "framer-motion";

const ModalBody = () => {
  const { onClose } = useModal();

  return (
    <motion.div
      layout
      className="relative bg-light-surface-medium dark:bg-dark-surface-high-medium rounded-3xl p-8 w-[304px]"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.5 }}
    >
      <div className="absolute right-4 top-4">
        <button onClick={() => onClose()}>
          <Icon name="close" />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-light-utility-high dark:text-dark-utility-high text-5xl font-bold text-center">
          ONSUALI YÜKLƏ
        </h3>

        <span className="text-light-utility-medium dark:text-dark-utility-medium text-xl font-normal inline-block text-center">
          Scan the QR code to download the app
        </span>
      </div>
    </motion.div>
  );
};

export default ModalBody;
