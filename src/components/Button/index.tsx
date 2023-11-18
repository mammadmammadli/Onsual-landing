"use client";

import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from "react";
import { clsx } from "clsx";

export type ButtonType = "default" | "success" | "dark" | "transparent";

export type CommonProps = PropsWithChildren & {
  mode?: ButtonType;
};

export type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { className = "", mode = "default", children, ...restProps } = props;

  const classes = clsx(
    className,
    "py-3 px-5 rounded-full transition-all text-base cursor-pointer flex justify-center items-center",
    {
      "bg-light-surface-medium dark:bg-dark-surface-medium hover:bg-light-surface-low dark:hover:bg-dark-surface-low":
        mode === "default",
      "bg-light-utility-high dark:bg-dark-utility-high text-light-surface-high dark:text-dark-surface-high hover:bg-light-brand-primary dark:hover:bg-dark-brand-primary hover:text-light-source-white hover:dark:text-dark-source-white":
        mode === "dark",
      "bg-light-brand-primary dark:bg-dark-brand-primary text-light-source-white dark:text-dark-source-white hover:bg-light-brand-secondary dark:hover:bg-dark-brand-secondary":
        mode === "success",
      "bg-light-source-container-white dark:bg-dark-source-container-white hover:bg-light-source-black dark:hover:bg-dark-source-black text-light-source-white dark:text-dark-source-white":
        mode === "transparent",
    }
  );

  return (
    <button
      className={classes}
      {...restProps}
      ref={ref}
      {...(mode === "transparent" && {
        style: {
          WebkitBackdropFilter: "blur(8px)",
          backdropFilter: "blur(8px)",
        },
      })}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
