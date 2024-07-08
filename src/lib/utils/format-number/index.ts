"use client";

import { defaultLocale, locales, localesSettings } from "@/config-locale";
import { Locales } from "@/lib/types/settings";
import Cookie from "js-cookie";

export function fCurrency(value: number | string) {
  const NEXT_LOCALE = Cookie.get("NEXT_LOCALE");

  const locale = locales.includes(NEXT_LOCALE as unknown as Locales)
    ? (NEXT_LOCALE as Locales)
    : defaultLocale;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: localesSettings[locale].currency,
  }).format(Number(value));
}
