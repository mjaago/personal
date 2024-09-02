"use client";

import { appear } from "app/components/animations";
import { Card } from "app/components/Card";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export const TITLE_MARGIN = "mb-6";

const MotionCard = motion(Card);
export function SimplePageLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: React.ReactNode;
}) {
  return (
    <MotionCard className={clsx("flex h-full flex-col px-8 py-4")} {...appear}>
      {title ? <div className={TITLE_MARGIN}>{title}</div> : undefined}
      <div>{children}</div>
    </MotionCard>
  );
}
