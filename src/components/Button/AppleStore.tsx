import Button, { ButtonType } from "@/components/Button/index";
import Icon from "@/components/Icons";
import useModal from "@/hooks/useModal";
import { clsx } from "clsx";

type Props = {
  className?: string;
  mode?: ButtonType;
};

const AppleStore = ({ className, mode = "dark" }: Props) => {
  const classes = clsx("flex gap-2 font-medium group z-1", className);
  const { onOpen } = useModal();

  const iconClasses = clsx("transition-all", {
    "dark:fill-light-utility-high fill-dark-utility-high group-hover:fill-light-source-white group-hover:dark:fill-dark-source-white":
      mode === "dark",
    "fill-light-source-white dark:fill-dark-source-white":
      mode === "transparent" || mode === "success",
  });

  return (
    <Button mode={mode} className={classes} onClick={() => onOpen()}>
      <Icon name="apple" className={iconClasses} />
      App Store
    </Button>
  );
};

export default AppleStore;
