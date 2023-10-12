import Button, { ButtonProps } from "@/components/Button/index";
import Icon, { IconNames } from "@/components/Icons";

type IconButtonProps = ButtonProps & {
  icon: IconNames;
  iconClassName?: string;
};
const IconButton = ({ icon, iconClassName, ...rest }: IconButtonProps) => {
  return (
    <Button className="pl-3 pr-3" {...rest}>
      <Icon className={iconClassName} name={icon} />
    </Button>
  );
};

export default IconButton;
