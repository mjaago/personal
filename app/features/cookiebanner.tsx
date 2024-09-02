"use client";

import { Banner } from "app/components/Banner";
import { Button } from "app/components/Button";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function CookieBanner() {
  const path = usePathname();
  const [open, setOpen] = useState<boolean>(path === "/");
  return (
    <Banner open={open}>
      <div className="flex items-center justify-between px-8 py-4">
        <p>I'm not using any cookies</p>
        <Button onClick={() => setOpen(false)} primary>
          Nice!
        </Button>
      </div>
    </Banner>
  );
}
