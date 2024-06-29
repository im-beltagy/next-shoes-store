import { Locales, localeSettings } from "./types/settings";

export const locales: Locales[] = ["en", "ar"];
export const defaultLocale: Locales = "en";

export const localesSettings: { [key in Locales]: localeSettings } = {
  en: {
    dir: "ltr",
    icon: "flagpack:gb-nir",
  },
  ar: {
    dir: "rtl",
    icon: "flagpack:sa",
  },
};
