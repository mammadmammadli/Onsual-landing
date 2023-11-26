import useModal from "@/hooks/useModal";
import Icon from "../Icons";
import { motion } from "framer-motion";
import Image from "next/image";
import useOutsideClick from "@/hooks/useOutsideClick";

const ModalBody = () => {
  const { onClose } = useModal();
  const { ref } = useOutsideClick(onClose);

  return (
    <motion.div
      layout
      ref={ref}
      className="relative bg-light-surface-medium dark:bg-dark-surface-medium dark:bg-dark-surface-high-medium rounded-3xl p-8 w-[304px]"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <div className="absolute right-4 top-4">
        <button onClick={() => onClose()}>
          <Icon
            name="close"
            className="fill-light-utility-high dark:fill-dark-utility-high"
          />
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-light-utility-high dark:text-dark-utility-high text-5xl font-bold text-center">
            ONSUALI YÜKLƏ
          </h3>

          <span className="text-light-utility-medium dark:text-dark-utility-medium text-xl font-normal inline-block text-center">
            Scan the QR code to download the app
          </span>
        </div>

        <div className="flex justify-center">
          <div className="p-4 bg-white rounded-3xl">
            <Image
              src="/images/qr-code.png"
              alt="QR Code"
              height={160}
              width={160}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalBody;
