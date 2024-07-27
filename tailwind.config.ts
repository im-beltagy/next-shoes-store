import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/view/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/config.ts",
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
        accent: { light: "#6b8ef2", main: "#4c66af", dark: "#35477B" },
        divider: { light: "#fff7", dark: "#47474740" },
        beige: { dark: "#dacece", light: "#f4f4f4" },
      },
    },
  },
  plugins: [
    require("tailwindcss-dir")(),
    plugin(function ({ addVariant }) {
      addVariant("starting", "@starting-style");
      addVariant("parent", "* > &");
    }),
  ],
};
export default config;
