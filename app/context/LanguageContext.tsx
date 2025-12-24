"use client";

import { createContext, useContext, useState } from "react";

type Lang = "en" | "es";

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = () => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
