"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { SITE } from "../lib/site";

export default function ContactPage() {
  const { lang } = useLanguage();

  const t =
    lang === "en"
      ? {
          title: "Contact",
          intro:
            "For questions about your order or delivery, contact us and we’ll help you as fast as possible.",
          phone: "Phone",
          email: "Email",
          address: "Address",
          hours: "Hours",
          note:
            "Delivery may be fulfilled by DoorDash Drive. Tracking and SMS updates are provided via your tracking link.",
          back: "Back to Home",
        }
      : {
          title: "Contacto",
          intro:
            "Para preguntas sobre tu pedido o entrega, contáctanos y te ayudaremos lo más rápido posible.",
          phone: "Teléfono",
          email: "Correo",
          address: "Dirección",
          hours: "Horario",
          note:
            "La entrega puede ser realizada por DoorDash Drive. El seguimiento y SMS se brindan mediante tu enlace de tracking.",
          back: "Volver al Inicio",
        };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {t.title}
      </h1>
      <p className="mt-3 text-sm text-gray-600">{t.intro}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t.phone}
          </p>
          <a
            href={SITE.phoneTel}
            className="mt-2 block text-base font-semibold text-gray-900 hover:underline"
          >
            {SITE.phoneDisplay}
          </a>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t.email}
          </p>
          {SITE.supportEmail ? (
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="mt-2 block text-base font-semibold text-gray-900 hover:underline"
            >
              {SITE.supportEmail}
            </a>
          ) : (
            <p className="mt-2 text-sm text-gray-600">
              {lang === "en"
                ? "(Add support email in app/lib/site.ts)"
                : "(Agrega el correo en app/lib/site.ts)"}
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t.address}
          </p>
          {SITE.addressLine1 ? (
            <p className="mt-2 text-sm text-gray-700">
              {SITE.addressLine1}
              <br />
              {SITE.locationShort} {SITE.postalCode}
            </p>
          ) : (
            <p className="mt-2 text-sm text-gray-600">
              {lang === "en"
                ? "(Add street address + ZIP in app/lib/site.ts)"
                : "(Agrega dirección + ZIP en app/lib/site.ts)"}
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {t.hours}
          </p>
          {SITE.hours ? (
            <p className="mt-2 text-sm text-gray-700">{SITE.hours}</p>
          ) : (
            <p className="mt-2 text-sm text-gray-600">
              {lang === "en"
                ? "(Add opening hours in app/lib/site.ts)"
                : "(Agrega el horario en app/lib/site.ts)"}
            </p>
          )}
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-500">{t.note}</p>

      <div className="mt-10">
        <Link
          href="/"
          className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline"
        >
          ← {t.back}
        </Link>
      </div>
    </main>
  );
}
