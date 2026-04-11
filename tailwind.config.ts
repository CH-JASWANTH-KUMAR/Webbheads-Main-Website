import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-base": "#f5f7f5",
        "surface-raised": "#ffffff",
        "surface-sunken": "#edf1ee",
        "border-subtle": "#dce8e2",
        "border-strong": "#b8d0c5",
        "text-primary": "#0f1f1b",
        "text-secondary": "#4a6660",
        "text-muted": "#8aaba3",
        "accent-glow": "#f6ff82",
      },
    },
  },
};

export default config;