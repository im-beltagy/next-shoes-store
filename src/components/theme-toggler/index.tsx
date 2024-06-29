"use client";

import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/local-storage/use-local-storage";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggler() {
  const [theme, setTheme] = useState<Theme>("light");

  // Get theme from local storage
  useEffect(() => {
    const storagedTheme = getLocalStorageItem("theme");
    if (storagedTheme && storagedTheme !== theme) {
      setTheme(storagedTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set Theme
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setLocalStorageItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="icon-btn"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
