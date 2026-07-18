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
      keyframes: {
        appear: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        appear: "appear 0.3s ease-out",
      },
    },
    fontFamily: {
      sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      display: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
