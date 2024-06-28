import "./i18n";
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "react";
import { allLangs, defaultLang } from "./config-lang";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../local-storage/useLocalStorage";

const LANG_KEY = "lang";

export function useLocals() {
  const lng = getLocalStorageItem(LANG_KEY);

  const currentLang = useMemo(
    () => allLangs.find((lang) => lang.code === lng) || defaultLang,
    [lng],
  );

  return { currentLang };
}

export function useTranslate() {
  const translation = useTranslation();

  const changeLang = useCallback(
    (lang: string) => {
      translation.i18n.changeLanguage(lang);
      setLocalStorageItem(LANG_KEY, lang);
    },
    [translation.i18n],
  );

  return { ...translation, changeLang };
}
