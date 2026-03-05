"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { SITE } from "../lib/site";

export default function PrivacyPage() {
  const { lang } = useLanguage();

  const t =
    lang === "en"
      ? {
          title: "Privacy Policy",
          updated: "Last updated",
          intro:
            "This is a basic privacy policy template. Replace any placeholders and have it reviewed before publishing.",
          sections: {
            collect: "Information we collect",
            use: "How we use information",
            share: "Sharing",
            cookies: "Cookies & analytics",
            contact: "Contact",
          },
          back: "Back to Home",
        }
      : {
          title: "Política de Privacidad",
          updated: "Última actualización",
          intro:
            "Este es un template básico. Reemplaza los placeholders y revisa con un profesional antes de publicar.",
          sections: {
            collect: "Información que recopilamos",
            use: "Cómo usamos la información",
            share: "Compartir información",
            cookies: "Cookies y analítica",
            contact: "Contacto",
          },
          back: "Volver al Inicio",
        };

  const today = new Date().toLocaleDateString(lang === "en" ? "en-US" : "es-PE");

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {t.title}
      </h1>
      <p className="mt-2 text-xs text-gray-500">
        {t.updated}: {today}
      </p>

      <p className="mt-6 text-sm text-gray-600">{t.intro}</p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.collect}</h2>
          <p className="mt-2 text-sm text-gray-700">
          {lang === "en"
            ? "We may collect information you provide when contacting us (name, phone, email) and basic technical data (IP address, browser type)."
            : "Podemos recopilar información que brindas al contactarnos (nombre, teléfono, correo) y datos técnicos básicos (IP, tipo de navegador)."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.use}</h2>
          <p className="mt-2 text-sm text-gray-700">
          {lang === "en"
            ? "We use information to respond to inquiries, support orders, improve our website, and comply with legal obligations."
            : "Usamos la información para responder consultas, dar soporte a pedidos, mejorar el sitio y cumplir obligaciones legales."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.share}</h2>
          <p className="mt-2 text-sm text-gray-700">
          {lang === "en"
            ? "We may share information with service providers strictly to operate the site and fulfill delivery services (e.g., DoorDash Drive) when applicable."
            : "Podemos compartir información con proveedores de servicio solo para operar el sitio y cumplir servicios de entrega (p. ej. DoorDash Drive) cuando aplique."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.cookies}</h2>
          <p className="mt-2 text-sm text-gray-700">
          {lang === "en"
            ? "We may use cookies or analytics tools to understand site usage. You can control cookies via your browser settings."
            : "Podemos usar cookies o herramientas de analítica para entender el uso del sitio. Puedes controlar cookies en la configuración de tu navegador."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900">{t.sections.contact}</h2>
          <p className="mt-2 text-sm text-gray-700">
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
