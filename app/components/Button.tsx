"use client";

import { Button as HeadlessButton } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { forwardRef, Ref } from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
} & (
  | ({ href?: undefined } & Omit<
      React.ComponentPropsWithoutRef<typeof HeadlessButton>,
      "href"
    >)
  | ({ href: string } & Omit<
      React.ComponentPropsWithoutRef<typeof Link>,
      "href"
    >)
);

export const hoverEffects =
  "shadow-transparent data-[hover]:shadow-xl data-[active]:shadow-xl data-[focus]:shadow-xl hover:shadow-xl active:shadow-xl focus:shadow-xl";

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button({ children, className, primary, ...props }, ref) {
  const buttonClassName = clsx(
    "flex items-center justify-center border-2 border-black px-1 py-2 text-sm",
    "transition-all ease-in-out",
    "outline-none ",
    hoverEffects,
    className,
    {
      "bg-white text-black": !primary,
      "bg-accent text-black": primary,
    },
  );
  if (props.href === undefined) {
    return (
      <HeadlessButton ref={ref} className={buttonClassName} {...props}>
        {children}
      </HeadlessButton>
    );
  } else {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        className={buttonClassName}
        {...props}
      >
        {children}
      </Link>
    );
  }
});
