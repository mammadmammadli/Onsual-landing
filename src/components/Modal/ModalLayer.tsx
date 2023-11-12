import ModalBody from "./ModalBody";

const ModalLayer = () => {
  return (
    <div className="h-screen w-screen bg-light-source-opacity-black-0.5 dark:bg-dark-source-opacity-black-0.5 top-0 left-0 fixed z-[9999] flex justify-center items-center">
      <ModalBody />
    </div>
  )
}

export default ModalLayer;