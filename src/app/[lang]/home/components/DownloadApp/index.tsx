import useDeviceType from "@/hooks/useDeviceType";
import AppleStore from "@/components/Button/AppleStore";
import Icon from "@/components/Icons";
import GooglePlay from "@/components/Button/GooglePlay";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DownloadApp = ({ onClose, isOpen }: Props) => {
  const { deviceType } = useDeviceType();

  return (
    <AnimatePresence initial={false}>
      <div className="flex md:hidden fixed top-0 left-0 h-[100dvh] w-screen bg-transparet z-[99999] p-4 flex-col-reverse pointer-events-none">
        <motion.div
          className="relative pointer-events-auto"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "100%" }}
          exit={{ opacity: 0, y: "100%" }}
          drag
          onDragEnd={(_, info) => {
            if (info.offset.y > 50) {
              onClose();
            }
          }}
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div className="absolute top-3 right-3 pointer-events-auto">
            <Icon
              name="close"
              className="fill-light-source-white dark:fill-dark-source-white transition-all h-6 w-6"
              onClick={onClose}
            />
          </div>

          <div className="rounded-3xl bg-light-brand-primary dark:bg-dark-brand-primary transition-all p-4 h-max flex flex-col items-center gap-4">
            <h5 className="font-bold text-3xl text-light-source-white dark:text-dark-source-white transition-all">
              ONSUALI YÜKLƏ
            </h5>

            <div className="w-full">
              {deviceType === "iOS" && <AppleStore className="w-full" />}
              {deviceType === "Android" && <GooglePlay className="w-full" />}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DownloadApp;
