import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

type ButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const variants = {
  primary:
    "bg-emerald-700 text-white shadow-sm hover:bg-emerald-800 focus-visible:ring-emerald-600",
  secondary:
    "bg-white text-stone-950 shadow-sm ring-1 ring-stone-200 hover:bg-stone-50 focus-visible:ring-emerald-600",
  ghost:
    "text-stone-700 hover:bg-stone-100 focus-visible:ring-emerald-600",
};

const base =
  "inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function Button(props: ButtonProps | ButtonLinkProps) {
  if ("href" in props) {
    const { className, variant = "primary", children, href, ...linkProps } = props;
    const classes = cn(base, variants[variant], className);

    return (
      <a className={classes} href={href} {...linkProps}>
        {children}
      </a>
    );
  }

  const {
    className,
    variant = "primary",
    children,
    type = "button",
    ...buttonProps
  } = props;
  const classes = cn(base, variants[variant], className);

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
