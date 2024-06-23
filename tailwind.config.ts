import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: "var(--base-font)",
        special: "var(--special-font)",
        icon: "var(--icon-font)",
      },
      padding: { "section-sm": "2rem", "section-md": "6rem" },
      gap: { "section-sm": "2rem", "section-md": "6rem" },
      colors: {
        accent: { main: "#4c66af", dark: "#35477B" },
        primary: "#333333",
        natural: "#474747",
        divider: "#47474740",
        beige: { dark: "#dacece", light: "#f4f4f4" },
      },
    },
  },
  plugins: [],
};
export default config;
