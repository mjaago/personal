export function Quote({
  children,
  by,
}: {
  children?: React.ReactNode;
  by?: React.ReactNode;
}) {
  return (
    <div className="prose prose-blockquote:font-normal prose-blockquote:border-accent">
      <blockquote>
        <p className="mb-1 mt-2 text-black">{children}</p>
        <span className="text-sm font-normal not-italic text-zinc-700">
          Uku Tammet, CTO, Align
        </span>
      </blockquote>
    </div>
  );
}
