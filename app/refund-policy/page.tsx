"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { SITE } from "../lib/site";

export default function RefundPolicyPage() {
  const { lang } = useLanguage();

  const t =
    lang === "en"
      ? {
          title: "Refunds & Cancellations",
          intro:
            "This is a basic policy template. Adjust to match your real process and local laws.",
          bullets: [
            "If there is an issue with your order, contact us as soon as possible.",
            "Refunds/credits may depend on order status and provider policies.",
            "Delivery issues may require the delivery tracking/support reference.",
          ],
          note:
            "If delivery was fulfilled by DoorDash Drive, please share your tracking link or delivery reference so we can help faster.",
          back: "Back to Home",
        }
      : {
          title: "Reembolsos y Cancelaciones",
          intro:
            "Este es un template básico. Ajústalo a tu proceso real y a las leyes locales.",
          bullets: [
            "Si hay un problema con tu pedido, contáctanos lo antes posible.",
            "Reembolsos/créditos pueden depender del estado del pedido y políticas del proveedor.",
            "Problemas de entrega pueden requerir el tracking o referencia de soporte.",
          ],
          note:
            "Si la entrega fue realizada por DoorDash Drive, comparte tu enlace de tracking o referencia para ayudarte más rápido.",
          back: "Volver al Inicio",
        };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {t.title}
      </h1>

      <p className="mt-6 text-sm text-gray-600">{t.intro}</p>

      <ul className="mt-8 list-disc space-y-2 pl-5 text-sm text-gray-700">
        {t.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="mt-10 rounded-2xl border border-gray-100 bg-[#F6FAF9] p-6">
        <p className="text-sm text-gray-700">{t.note}</p>
        <p className="mt-3 text-sm">
          <a
            href={SITE.phoneTel}
            className="font-semibold text-gray-900 underline-offset-4 hover:underline"
          >
            {lang === "en" ? "Call" : "Llamar"}: {SITE.phoneDisplay}
          </a>
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline"
        >
          ← {t.back}
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline"
        >
          {lang === "en" ? "Contact" : "Contacto"}
        </Link>
      </div>
    </main>
  );
}
