import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/header";
import { LocalizationProvider } from "@/utils/localization/localization-provider";

export const metadata: Metadata = {
  title: "Shoes Store",
  description: "Shoes Store using Next14, TypeScript and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalizationProvider>
          <Header />
          {children}
        </LocalizationProvider>
      </body>
    </html>
  );
}
