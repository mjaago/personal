import clsx from "clsx";

type HeadingProps = {
  children: React.ReactNode;
  underline?: boolean;
  className?: string;
};

function PageHeading({ className, children, underline }: HeadingProps) {
  return (
    <GenericHeading
      className={clsx("text-2xl", className)}
      as="h1"
      underline={underline}
    >
      {children}
    </GenericHeading>
  );
}

function SectionHeading({ className, children, underline }: HeadingProps) {
  return (
    <GenericHeading
      className={clsx("text-xl", className)}
      as="h2"
      underline={underline}
    >
      {children}
    </GenericHeading>
  );
}

function GenericHeading({
  className,
  children,
  underline,
  as = "h1",
}: HeadingProps & {
  as?: "h1" | "h2";
}) {
  const HeadingElement = as;
  return (
    <HeadingElement
      className={clsx(
        {
          "decoration-accent underline underline-offset-4": underline,
        },
        className,
      )}
    >
      {children}
    </HeadingElement>
  );
}
export const Heading = { Section: SectionHeading, Page: PageHeading };
