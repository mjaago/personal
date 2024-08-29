"use client";

import { Button as HeadlessButton } from "@headlessui/react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  handleClick?: () => void;
} & React.ComponentProps<typeof HeadlessButton>;

const hoverEffects =
  "outline-none shadow-transparent data-[hover]:shadow-diagonal data-[active]:shadow-diagonal data-[focus]:shadow-diagonal";

export default function Button({
  children,
  className,
  primary,
  handleClick,
  ...props
}: ButtonProps) {
  return (
    <HeadlessButton
      className={clsx(
        "flex items-center justify-center border px-1 py-2 text-sm",
        "transition-all ease-in-out",
        hoverEffects,
        className,
        {
          "border-black bg-white text-black": !primary,
          "border-white bg-black text-white outline outline-1 outline-black":
            primary,
        },
      )}
      {...props}
      onClick={handleClick}
    >
      Save changes
    </HeadlessButton>
  );
}
