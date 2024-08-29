import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: { diagonal: "rgba(0, 0, 0, 0.35) -4px 4px 10px" },
      borderWidth: {
        DEFAULT: "2px",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      display: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
} satisfies Config;
