import type { Config } from "tailwindcss";

export default {
  content: [
    "./lin/posts/**/*.{js,ts,jsx,tsx,mdx}",
    "./lin/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lin/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
