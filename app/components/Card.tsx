import clsx from "clsx";
import { forwardRef } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  media?: React.ReactNode;
  title?: React.ReactNode;
};
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, className, shadow = true, media, title },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-3 border border-black bg-white",
        className,
        {
          "shadow-xl": shadow,
        },
      )}
    >
      {media ? <div>{media}</div> : undefined}
      {title ? <div>{title}</div> : undefined}
      <div>{children}</div>
    </div>
  );
});
