import { createPortal } from "react-dom";
import ModalLayer from "./ModalLayer";

const Modal = () => {
  return createPortal(<ModalLayer />, document.body);
};

export default Modal;
