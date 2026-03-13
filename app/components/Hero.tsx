"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { SITE } from "../lib/site";

export default function Hero() {
  const { lang } = useLanguage();

  const copy = {
    en: {
      headline: "Street-Style Birria Tacos in Santa Maria",
      subhead:
        "Fresh, hand-made tacos with birria and barbacoa cooked low and slow.",
      order: "Order Online",
      menu: "View Menu",
      trust: "Slow-cooked daily • Local favorite • Pickup & delivery",
      location: "📍 Santa Maria, CA • Open Daily",
      reassurance: "Order directly from us — secure checkout & fast pickup.",
    },
    es: {
      headline: "Birria y Tacos al Estilo Callejero en Santa Maria",
      subhead:
        "Tacos callejeros hechos a mano con birria y barbacoa cocinadas a fuego lento.",
      order: "Ordena en Línea",
      menu: "Ver Menú",
      trust: "Cocinado a fuego lento • Favorito local • Recojo y entrega",
      location: "📍 Santa Maria, CA • Abierto todos los días",
      reassurance: "Ordena directo con nosotros — rápido y fácil.",
    },
  };

  const t = copy[lang];

  const ORDER_HREF = SITE.orderPath;
  const PHONE_TEL = SITE.phoneTel;

  return (
    <>
      {/* Hero */}
      <header className="bg-[#FFF8F1] pb-24 sm:pb-0">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Taqueria Charly's goat mascot logo"
              width={120}
              height={120}
              priority
            />
          </div>

          {/* H1 */}
          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {t.headline}
          </h1>

          {/* Subhead */}
          <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-600">
            {t.subhead}
          </p>

          {/* Location */}
          <p className="mb-8 text-sm text-gray-500">{t.location}</p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={ORDER_HREF}
              className="inline-flex items-center justify-center rounded-full bg-[#F47B20] px-10 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#D35A0F]"
            >
              {t.order}
            </a>
            <a
              href={PHONE_TEL}
              aria-label={`Call ${SITE.phoneDisplay}`}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-10 py-4 text-base font-semibold text-gray-900 shadow-md transition hover:bg-gray-50"
            >
              {lang === "en" ? "Call" : "Llamar"} {SITE.phoneDisplay}
            </a>

            <a
              href="#specials"
              className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline"
            >
              {t.menu}
            </a>
          </div>

          {/* Reassurance */}
          <p className="mt-3 text-xs text-gray-500">{t.reassurance}</p>

          {/* Delivery disclosure (helps set expectations for Drive courier fulfillment) */}
          <p className="mt-2 text-xs text-gray-500">
            {lang === "en"
              ? "Delivery fulfilled by DoorDash Drive • Tracking & SMS updates available"
              : "Entrega realizada por DoorDash Drive • Seguimiento y SMS disponibles"}
          </p>

          {/* Trust */}
          <p className="mt-4 text-xs text-gray-500">⭐ 4.7 on Google • {t.trust}</p>
        </div>
      </header>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-4 sm:hidden">
        <a
          href={ORDER_HREF}
          className="flex items-center justify-center rounded-full bg-[#F47B20] py-4 text-base font-semibold text-white shadow-lg"
        >
          {t.order}
        </a>
      </div>
    </>
  );
}
