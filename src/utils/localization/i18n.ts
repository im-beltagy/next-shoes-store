import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./langs/en.json";
import arLang from "./langs/ar.json";
import { defaultLang } from "./config-lang";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enLang },
    ar: { translation: arLang },
  },
  fallbackLng: defaultLang.code,
});

export default i18n;
