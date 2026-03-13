"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { SITE } from "../lib/site";

export default function TermsPage() {
  const { lang } = useLanguage();

  const t =
    lang === "en"
      ? {
          title: "Terms of Service",
          intro:
            "This is a basic terms template. Replace placeholders and have it reviewed before publishing.",
          sections: {
            use: "Website use",
            orders: "Orders & fulfillment",
            delivery: "Delivery (DoorDash Drive)",
            liability: "Limitations",
            changes: "Changes",
          },
          back: "Back to Home",
        }
      : {
          title: "Términos de Servicio",
          intro:
            "Este es un template básico. Reemplaza placeholders y revisa con un profesional antes de publicar.",
          sections: {
            use: "Uso del sitio",
            orders: "Pedidos y cumplimiento",
            delivery: "Entrega (DoorDash Drive)",
            liability: "Limitaciones",
            changes: "Cambios",
          },
          back: "Volver al Inicio",
        };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {t.title}
      </h1>

      <p className="mt-6 text-sm text-gray-600">{t.intro}</p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.use}</h2>
          <p className="mt-2 text-sm text-gray-700">
          {lang === "en"
            ? "Do not misuse this website, attempt to disrupt service, or scrape content without permission."
            : "No hagas mal uso del sitio, no intentes interrumpir el servicio ni extraer contenido sin permiso."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.orders}</h2>
          <p className="mt-2 text-sm text-gray-700">
          {lang === "en"
            ? "Orders may be placed through our ordering provider. Pricing, availability, and estimated times may change."
            : "Los pedidos pueden realizarse mediante nuestro proveedor de pedidos. Precios, disponibilidad y tiempos estimados pueden variar."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.delivery}</h2>
          <p className="mt-2 text-sm text-gray-700">
          {lang === "en"
            ? "When delivery is offered, it may be fulfilled by DoorDash Drive couriers. Tracking links and SMS updates may be provided for your delivery."
            : "Cuando haya entrega, puede ser realizada por repartidores de DoorDash Drive. Se pueden proporcionar enlaces de tracking y SMS para tu entrega."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.liability}</h2>
          <p className="mt-2 text-sm text-gray-700">
          {lang === "en"
            ? "To the extent permitted by law, we are not liable for indirect damages arising from use of the website or third‑party services."
            : "En la medida permitida por la ley, no somos responsables por daños indirectos derivados del uso del sitio o servicios de terceros."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.changes}</h2>
          <p className="mt-2 text-sm text-gray-700">
          {lang === "en"
            ? "We may update these terms from time to time. Continued use of the website means you accept the updated terms."
            : "Podemos actualizar estos términos. El uso continuo del sitio implica aceptación de los términos actualizados."}
          </p>
        </section>

        <section>
          <p className="text-sm text-gray-700">
          {lang === "en"
            ? `Questions? Call ${SITE.phoneDisplay} or visit the Contact page.`
            : `¿Preguntas? Llama al ${SITE.phoneDisplay} o visita la página de Contacto.`}
          </p>
        </section>
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
