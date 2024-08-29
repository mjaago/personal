import clsx from "clsx";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("shadow-diagonal border bg-white", className)}>
      {children}
    </div>
  );
}
