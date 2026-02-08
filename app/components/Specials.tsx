"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Specials() {
  const { lang } = useLanguage();

  const copy = {
    en: {
      title: "Our Specialty: Birria Tacos",
      cta: "Order Online",
      trust: "Slow-cooked daily • Perfect for pickup or delivery",
      items: [
        {
          name: "Birria",
          desc: "Slow-cooked beef simmered in rich adobo sauce until melt-in-your-mouth tender.",
        },
        {
          name: "Quesabirria",
          desc: "Crispy corn tortilla filled with shredded meat and melted cheese, served with consommé.",
        },
        {
          name: "Street-Style Tacos",
          desc: "Pastor, carnitas, asada, vegetarian or seafood on hand-made tortillas.",
        },
      ],
    },
    es: {
      title: "Nuestra Especialidad: Birria",
      cta: "Ordena en Línea",
      trust: "Cocinado a fuego lento • Ideal para recojo o entrega",
      items: [
        {
          name: "Birria",
          desc: "Carne cocinada lentamente en adobo hasta quedar suave y llena de sabor.",
        },
        {
          name: "Quesabirria",
          desc: "Tortilla de maíz crujiente con carne deshebrada y queso derretido, servida con consomé.",
        },
        {
          name: "Tacos Callejeros",
          desc: "Pastor, carnitas, asada, vegetariano o mariscos en tortillas hechas a mano.",
        },
      ],
    },
  };

  const t = copy[lang];

  // 🔁 Use the SAME branded ordering URL as Hero
  const ORDER_URL = "https://order.taqueriacharlys.com";

  return (
    <section id="specials" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">
          {t.title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {t.items.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-100 bg-[#F6FAF9] p-6 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-10 text-center">
          <a
            href={ORDER_URL}
            className="inline-block rounded-full bg-[#EB1700] px-10 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#c91400]"
          >
            {t.cta}
          </a>

          <p className="mt-3 text-xs text-gray-500">{t.trust}</p>
        </div>
      </div>
    </section>
  );
}
