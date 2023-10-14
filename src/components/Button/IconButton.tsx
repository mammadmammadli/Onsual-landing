import Button, { ButtonProps } from "@/components/Button/index";
import Icon, { IconNames } from "@/components/Icons";
import { clsx } from "clsx";

type IconButtonProps = ButtonProps & {
  icon: IconNames;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
};

const IconButton = ({
  icon,
  iconClassName,
  className,
  size = "md",
  ...props
}: IconButtonProps) => {
  const classes = clsx(
    "pl-0 pr-0 pt-0 pb-0 flex justify-center items-center",
    className,
    {
      "h-[40px] w-[40px]": size === "md",
      "h-[32px] w-[32px]": size === "sm",
      "h-[44px] w-[44px]": size === "lg",
    },
  );

  return (
    <Button className={classes} {...props}>
      <Icon className={iconClassName} name={icon} />
    </Button>
  );
};

export default IconButton;
