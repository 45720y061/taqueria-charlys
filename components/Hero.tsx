"use client";

import Image from "next/image";
import CTAButton from "./CTAButton";
import { useLanguage } from "../app/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-20 text-center">
      <LanguageToggle />

      <Image
        src="/logo.png"
        alt="Taqueria Charlys logo"
        width={260}
        height={260}
        priority
        className="mb-6"
      />

      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        {lang === "en"
          ? "Taste the Best Birria & Tacos in Santa Maria"
          : "Disfruta la Mejor Birria y Tacos en Santa Maria"}
      </h1>

      <p className="max-w-xl text-gray-600 mb-8">
        {lang === "en"
          ? "Fresh, handmade street tacos, birria and barbacoa cooked with love and served with a smile."
          : "Tacos artesanales, birria y barbacoa preparados con amor y servidos con una sonrisa."}
      </p>

      <div className="flex gap-4">
        <CTAButton
          href="#menu"
          label={lang === "en" ? "View Menu" : "Ver Menú"}
        />
        <CTAButton
          href="https://www.doordash.com/en/business/charly-taqueria-785131/menu?srsltid=AfmBOoroZ4KwCPnsnXzpLwzxzq8p-1pCu8UhQJ8MKYUU2q8xfyEOYraB"
          label={lang === "en" ? "Order Online" : "Ordenar en Línea"}
          variant="secondary"
        />
      </div>
    </section>
  );
}
