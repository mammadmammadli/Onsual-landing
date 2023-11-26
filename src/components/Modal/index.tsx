import { createPortal } from "react-dom";
import ModalLayer from "./ModalLayer";
import { AnimatePresence } from "framer-motion";

const Modal = () => {
  return createPortal(
    <AnimatePresence mode="wait" presenceAffectsLayout={false}>
      <ModalLayer />
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
