import { Cairo, Kavoon, Lalezar, Leckerli_One } from "next/font/google";

// Base Font
export const cairo = Cairo({
  subsets: ["latin"],
  weight: "400",
  variable: "--base-font",
  display: "swap",
});
// Special Font
export const leckerliOne = Leckerli_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--special-font",
  display: "swap",
});
export const lalezar = Lalezar({
  subsets: ["latin"],
  weight: "400",
  variable: "--special-font",
  display: "swap",
});
// The Font Used In Brand
export const kavoon = Kavoon({
  subsets: ["latin"],
  weight: "400",
  variable: "--icon-font",
  display: "swap",
});
