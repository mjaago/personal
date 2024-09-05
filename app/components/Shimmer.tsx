import clsx from "clsx";

export function Shimmer({ className }: { className?: string }) {
  return <div className={clsx("animate-pulse bg-gray-200", className)} />;
}
