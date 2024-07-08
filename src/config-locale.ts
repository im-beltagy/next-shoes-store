import { Pathnames } from "next-intl/routing";
import { Locales, localeSettings } from "./lib/types/settings";

import Cookie from "js-cookie";

export const locales: Locales[] = ["ar", "en"];
export const defaultLocale: Locales = "en";

export const localesSettings: { [key in Locales]: localeSettings } = {
  ar: {
    name: "العربية",
    dir: "rtl",
    icon: "flagpack:sa",
    currency: "SAR",
  },
  en: {
    name: "English",
    dir: "ltr",
    icon: "flagpack:gb-nir",
    currency: "USD",
  },
};

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/profile": {
    en: "/profile",
    ar: "/profile",
  },
};
