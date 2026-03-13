"use client";

import { useLanguage } from "../context/LanguageContext";
import { FEATURED_MENU_ITEMS, MENU_CATEGORIES } from "../lib/menu";
import { SITE } from "../lib/site";

export default function Specials() {
  const { lang } = useLanguage();

  const copy = {
    en: {
      title: 'Menu Highlights',
      subtitle:
        'Current online ordering categories and featured items from our DoorDash menu.',
      featuredTitle: 'Featured items',
      categoriesTitle: 'Menu categories',
      cta: 'Order Online',
      note:
        'Prices and availability may change. Check the live ordering page for the latest updates.',
      trust: 'Fast pickup and delivery available',
    },
    es: {
      title: 'Destacados del Menú',
      subtitle:
        'Categorías actuales y productos destacados de nuestro menú en DoorDash.',
      featuredTitle: 'Productos destacados',
      categoriesTitle: 'Categorías del menú',
      cta: 'Ordena en Línea',
      note:
        'Los precios y la disponibilidad pueden cambiar. Revisa la página de pedidos para ver la información más reciente.',
      trust: 'Recojo rápido y entrega disponible',
    },
  };

  const t = copy[lang];
  const ORDER_HREF = SITE.orderPath;

  return (
    <section id="specials" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{t.title}</h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">{t.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-gray-100 bg-[#F6FAF9] p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-gray-900">{t.featuredTitle}</h3>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
                DoorDash
              </span>
            </div>

            <div className="space-y-4">
              {FEATURED_MENU_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">{item.name}</h4>
                      {(lang === 'en' ? item.badgeEn : item.badgeEs) ? (
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#D35A0F]">
                          {lang === 'en' ? item.badgeEn : item.badgeEs}
                        </p>
                      ) : null}
                    </div>
                    <div className="shrink-0 rounded-full bg-[#FFF3E8] px-3 py-1 text-sm font-semibold text-[#B45309]">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900">{t.categoriesTitle}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {MENU_CATEGORIES.map((category) => (
                <span
                  key={category.en}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {lang === 'en' ? category.en : category.es}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-500">{t.note}</p>

            <div className="mt-8">
              <a
                href={ORDER_HREF}
                className="inline-flex items-center justify-center rounded-full bg-[#EB1700] px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#c91400]"
              >
                {t.cta}
              </a>
              <p className="mt-3 text-xs text-gray-500">{t.trust}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}