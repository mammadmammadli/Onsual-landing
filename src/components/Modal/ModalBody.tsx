import Icon from "../Icons";

const ModalBody = () => {
  return (
    <div className="relative bg-light-surface-medium dark:bg-dark-surface-high-medium rounded-3xl p-8">
      <div className="absolute right-4 top-4">
        <button>
          <Icon name="close" />
        </button>
      </div>
    </div>
  );
};

export default ModalBody;
