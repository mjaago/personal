import clsx from "clsx";

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={clsx(
        "text-2xl",
        "decoration-accent underline underline-offset-4",
      )}
    >
      {children}
    </h1>
  );
}
