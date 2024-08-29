"use client";

import { Button as HeadlessButton } from "@headlessui/react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
} & React.ComponentProps<typeof HeadlessButton>;

const hoverEffects =
  "outline-none shadow-transparent data-[hover]:shadow-diagonal data-[active]:shadow-diagonal data-[focus]:shadow-diagonal";

export default function Button({
  children,
  className,
  primary,
  ...props
}: ButtonProps) {
  return (
    <HeadlessButton
      className={clsx(
        "flex items-center justify-center border border-black px-1 py-2 text-sm",
        "transition-all ease-in-out",
        hoverEffects,
        className,
        {
          "bg-white text-black": !primary,
          "bg-black text-white": primary,
        },
      )}
      {...props}
    >
      {children}
    </HeadlessButton>
  );
}
