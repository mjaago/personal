import NextLink from "next/link";
import { ComponentProps } from "react";

export function Link({
  href,
  children,
  ...props
}: {
  children?: React.ReactNode;
  href: string;
} & ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      className="hover:decoration-accent underline underline-offset-2 transition-colors"
      href={href}
      {...props}
    >
      {children}
    </NextLink>
  );
}
