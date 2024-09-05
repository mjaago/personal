import clsx from "clsx";

export function Quote({
  children,
  by,
  className,
}: {
  children?: React.ReactNode;
  by: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "prose prose-blockquote:font-normal prose-blockquote:border-accent",
        className,
      )}
    >
      <blockquote>
        <p className="mb-1 mt-2 text-black">{children}</p>
        <span className="text-sm font-normal not-italic text-zinc-700">
          {by}
        </span>
      </blockquote>
    </div>
  );
}
