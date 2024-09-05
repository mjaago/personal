import { Icon } from "./Icon";

export function WithExternalLink({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span>{children}</span>
      <Icon.ExternalLink />
    </div>
  );
}
