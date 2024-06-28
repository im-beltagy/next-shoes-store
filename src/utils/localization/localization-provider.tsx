"use client";

import { useEffect, useState } from "react";
import { useLocals, useTranslate } from "./localization-hook";

export function LocalizationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentLang } = useLocals();

  const { changeLang } = useTranslate();

  useEffect(() => {
    changeLang(currentLang.code);
  }, [changeLang, currentLang.code]);

  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    setDir(currentLang.dir);
  }, [currentLang.dir]);

  console.log(currentLang.typography.specialFont.variable);

  return (
    <div
      dir={dir}
      className={`${currentLang.typography.baseFont.variable} ${currentLang.typography.specialFont.variable} ${currentLang.typography.iconFont.variable} font-base`}
    >
      {children}
    </div>
  );
}
