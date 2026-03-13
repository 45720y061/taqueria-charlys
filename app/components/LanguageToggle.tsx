"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        onClick={toggleLanguage}
        className="rounded-full border border-gray-300 bg-white px-4 py-1 text-sm font-medium text-gray-700 shadow-md transition hover:bg-gray-100"
        aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
      >
        {lang === "en" ? "ES" : "EN"}
      </button>
    </div>
  );
}
