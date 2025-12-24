"use client";

import { useLanguage } from "../app/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="absolute top-6 right-6 text-sm font-medium border px-3 py-1 rounded hover:bg-gray-100"
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}
