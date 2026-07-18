import { Card } from "app/components/Card";
import { clsx } from "clsx";

export const TITLE_MARGIN = "mb-6";

// The entrance fade is a CSS animation rather than framer-motion on purpose:
// motion(Card) can't render its initial opacity into the server HTML (Card
// drops the style prop), so the static page painted fully visible and then
// re-faded when hydration applied opacity 0 — a double render on prod. CSS
// plays once at first paint with no JS involved.
export function SimplePageLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: React.ReactNode;
}) {
  return (
    <Card
      className={clsx(
        "animate-appear flex h-full w-full flex-col px-8 pb-6 pt-4",
      )}
    >
      {title ? <div className={TITLE_MARGIN}>{title}</div> : undefined}
      <div>{children}</div>
    </Card>
  );
}
