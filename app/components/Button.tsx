"use client";

import { Button as HeadlessButton } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
} & (
  | ({ href: string } & React.ComponentProps<typeof Link>)
  | ({ href?: undefined } & React.ComponentProps<typeof HeadlessButton>)
);

const hoverEffects =
  "shadow-transparent data-[hover]:shadow-xl data-[active]:shadow-xl data-[focus]:shadow-xl hover:shadow-xl active:shadow-xl focus:shadow-xl";

export default function Button({
  children,
  className,
  primary,
  ...props
}: ButtonProps) {
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
      <HeadlessButton className={buttonClassName} {...props}>
        {children}
      </HeadlessButton>
    );
  } else {
    return (
      <Link className={buttonClassName} {...props}>
        {children}
      </Link>
    );
  }
}
