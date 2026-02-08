"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const copy = {
    en: {
      name: "Taquería Charlys",
      location: "Santa Maria, CA",
      cta: "Order Online",
    },
    es: {
      name: "Taquería Charlys",
      location: "Santa Maria, CA",
      cta: "Ordena en Línea",
    },
  };

  const t = copy[lang];

  const ORDER_URL = "https://order.taqueriacharlys.com";

  return (
    <footer className="mt-20 border-t py-10 text-center text-sm text-gray-500">
      <p className="mb-1">
        © {new Date().getFullYear()} {t.name}
      </p>

      <p className="mb-4">{t.location}</p>

      <a
        href={ORDER_URL}
        className="inline-block rounded-full bg-[#EB1700] px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#c91400]"
      >
        {t.cta}
      </a>
    </footer>
  );
}
