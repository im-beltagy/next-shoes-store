import { defaultLocale, locales, localesSettings } from "@/config-locale";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { Cairo, Kavoon, Lalezar, Leckerli_One } from "next/font/google";
import { Locales } from "@/types/settings";
import Header from "@/layout/header/view";

// Base Font
const cairo = Cairo({
  subsets: ["latin"],
  weight: "400",
  variable: "--base-font",
  display: "swap",
});
// Special Font (English)
const leckerliOne = Leckerli_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--special-font",
  display: "swap",
});
// Special Font (Arabic)
const lelazar = Lalezar({
  subsets: ["latin"],
  weight: "400",
  variable: "--special-font",
  display: "swap",
});
// The Font Used In Brand
const kavoon = Kavoon({
  subsets: ["latin"],
  weight: "400",
  variable: "--icon-font",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locales };
}) {
  if (!locales.includes(locale)) redirect(`/${defaultLocale}`);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={localesSettings[locale].dir || "ltr"}>
      <body
        className={`${cairo.variable} ${(locale === "ar" ? lelazar : leckerliOne).variable} ${kavoon.variable} bg-default font-base`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
