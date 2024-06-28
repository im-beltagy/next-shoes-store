import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shoes Store App",
  description:
    "Multi language E-commerce App using Next.js, TypeScript, TailwindCSS and Next-Intl",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
