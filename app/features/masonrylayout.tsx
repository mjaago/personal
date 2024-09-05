"use client";

import { Masonry, MasonryProps } from "masonic";

export function MasonryLayout<T>(props: MasonryProps<T>) {
  return (
    <Masonry
      columnWidth={300}
      columnGutter={28}
      maxColumnCount={3}
      {...props}
    />
  );
}
