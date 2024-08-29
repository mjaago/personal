import { permanentRedirect } from "next/navigation";

export function middleware() {
  permanentRedirect("/about");
}

export const config = {
  matcher: [
    {
      source: "/",
      has: [{ type: "header", key: "x-hide-banner" }],
    },
  ],
};
