import Button, { ButtonType } from "@/components/Button/index";
import Icon from "@/components/Icons";
import useModal from "@/hooks/useModal";
import { clsx } from "clsx";

type Props = {
  className?: string;
  mode?: ButtonType;
};

const AppleStore = ({ className, mode = "dark" }: Props) => {
  const classes = clsx("flex gap-2 font-medium group", className);
  const { onOpen } = useModal();

  const iconClasses = clsx("transition-all z-1", {
    "dark:fill-light-utility-high fill-dark-utility-high group-hover:fill-light-source-white group-hover:dark:fill-dark-source-white":
      mode === "dark",
    "fill-light-source-white dark:fill-dark-source-white":
      mode === "transparent" || mode === "success",
  });

  return (
    <Button mode={mode} className={classes} onClick={() => onOpen()}>
      <Icon name="google-play" className={iconClasses} />
      Google Play
    </Button>
  );
};

export default AppleStore;
