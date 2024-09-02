import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        contrast: "rgb(130 255 229 / 40%)",
        accent: "rgba(255, 167, 0, 0.4)",
      },
    },
    fontFamily: {
      sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      display: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
