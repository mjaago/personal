import clsx from "clsx";

export function Card({
  children,
  className,
  shadow = true,
}: {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
}) {
  return (
    <div
      className={clsx("border border-black bg-white", className, {
        "shadow-xl": shadow,
      })}
    >
      {children}
    </div>
  );
}
