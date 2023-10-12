"use client";

import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from "react";
import { clsx } from "clsx";
import Link, { LinkProps } from "next/link";

function isLink(
  props: Omit<MergedButtonProps, "mode" | "href" | "className">,
): props is CTAProps {
  return "href" in props;
}

function isButton(
  props: Omit<MergedButtonProps, "mode" | "href" | "className">,
): props is ButtonProps {
  return !("href" in props);
}

export type CommonProps = PropsWithChildren & {
  mode?: "default" | "success" | "dark";
};

export type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type CTAProps = CommonProps &
  LinkProps & {
    href: string;
    className?: string;
  };

type MergedButtonProps = ButtonProps | CTAProps;

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, MergedButtonProps>((props, ref) => {
  const { className = "", mode = "default", children, ...restProps } = props;

  const classes = clsx(
    className,
    "py-3 px-5 rounded-full transition-all text-base",
    {
      "bg-light-surface-medium dark:bg-dark-surface-medium hover:bg-light-surface-low dark:hover:bg-dark-surface-low":
        mode === "default",
      //TODO: Add hover
      "bg-light-utility-high dark:bg-dark-utility-high text-light-surface-high dark:text-dark-surface-high":
        mode === "dark",
      "bg-light-brand-primary dark:bg-dark-brand-primary text-light-source-white dark:text-dark-source-white":
        mode === "success",
    },
  );

  if (isLink(restProps)) {
    const { href, ...restLinkProps } = restProps;

    return (
      <Link className={classes} href={href} {...restLinkProps}>
        {children}
      </Link>
    );
  }

  if (isButton(restProps)) {
    return (
      <button className={classes} {...restProps} ref={ref}>
        {children}
      </button>
    );
  }

  return null;
});

Button.displayName = "Button";

export default Button;
