import { localesSettings } from "@/config-locale";
import { useLocale } from "next-intl";
import { Locales } from "../types/settings";

export const useDir = () => {
  const locale = useLocale();
  const { dir } = localesSettings[locale as Locales];

  return dir;
};
