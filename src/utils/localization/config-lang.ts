import { cairo, kavoon, lalezar, leckerliOne } from "../typography";

const allLangs = [
  {
    name: "English",
    code: "en",
    dir: "ltr",
    icon: "flagpack:gb-nir",
    typography: {
      baseFont: cairo,
      specialFont: leckerliOne,
      iconFont: kavoon,
    },
  },
  {
    name: "Arabic",
    code: "ar",
    dir: "rtl",
    icon: "flagpack:sa",
    typography: {
      baseFont: cairo,
      specialFont: lalezar,
      iconFont: cairo,
    },
  },
];

const defaultLang = allLangs[0];

export { allLangs, defaultLang };
