"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { SITE } from "../lib/site";

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

  const ORDER_HREF = SITE.orderPath;
  const PHONE_TEL = SITE.phoneTel;
  return (
    <footer className="mt-20 border-t py-10 text-center text-sm text-gray-500">
      <p className="mb-1">
        © {new Date().getFullYear()} {t.name}
      </p>

      <p className="mb-2">{t.location}</p>

      <p className="mb-4 text-xs text-gray-500">
        {lang === "en"
          ? "Questions about your delivery? Contact us first. Delivery fulfilled by DoorDash Drive."
          : "¿Preguntas sobre tu entrega? Contáctanos primero. Entrega realizada por DoorDash Drive."}
      </p>

      <a
        href={ORDER_HREF}
        className="inline-block rounded-full bg-[#EB1700] px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#c91400]"
      >
        {t.cta}
      </a>

      <p className="mt-4">
        <a
          href={PHONE_TEL}
          className="font-medium text-gray-700 underline-offset-4 hover:underline"
        >
          {lang === "en" ? "Call" : "Llamar"}: {SITE.phoneDisplay}
        </a>
      </p>

      {/* Compliance / legitimacy links (DoorDash Drive-friendly) */}
      <nav className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
        <Link className="hover:underline" href="/contact">
          {lang === "en" ? "Contact" : "Contacto"}
        </Link>
        <Link className="hover:underline" href="/privacy">
          {lang === "en" ? "Privacy" : "Privacidad"}
        </Link>
        <Link className="hover:underline" href="/terms">
          {lang === "en" ? "Terms" : "Términos"}
        </Link>
        <Link className="hover:underline" href="/refund-policy">
          {lang === "en" ? "Refunds" : "Reembolsos"}
        </Link>
      </nav>
    </footer>
  );
}
