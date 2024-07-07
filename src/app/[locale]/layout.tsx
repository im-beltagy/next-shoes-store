import { locales, localesSettings } from "@/config-locale";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Cairo, Kavoon, Lalezar, Leckerli_One } from "next/font/google";
import { Locales } from "@/lib/types/settings";
import Header from "@/view/layout/header/view";

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
  unstable_setRequestLocale(locale);

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
