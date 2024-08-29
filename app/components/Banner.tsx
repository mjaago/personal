import clsx from "clsx";
import { Card } from "./Card";

export function Banner({
  open,
  children,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      id="banner"
      tabIndex={-1}
      className={clsx(
        "fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-2rem)] -translate-x-1/2 flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm md:flex-row lg:max-w-7xl dark:border-gray-600 dark:bg-gray-700",
        {
          hidden: !open,
        },
      )}
    >
      <Card className="flex justify-between">{children}</Card>
    </div>
  );
}
