import { Locales, localeSettings } from "./types/settings";

export const locales: Locales[] = ["ar", "en"];
export const defaultLocale: Locales = "en";

export const localesSettings: { [key in Locales]: localeSettings } = {
  ar: {
    name: "العربية",
    dir: "rtl",
    icon: "flagpack:sa",
  },
  en: {
    name: "English",
    dir: "ltr",
    icon: "flagpack:gb-nir",
  },
};
