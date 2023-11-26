import { createPortal } from "react-dom";
import ModalLayer from "./ModalLayer";
import { AnimatePresence } from "framer-motion";

const Modal = () => {
  return createPortal(<ModalLayer />, document.body);
};

export default Modal;
