import clsx from "clsx";

export function Badge({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx("w-fit border border-black px-2 py-1 text-xs", className)}
    >
      {children}
    </div>
  );
}
