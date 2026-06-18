import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsJsonLd, createMetadata } from "@/lib/seo";
import { siteRoutes } from "@/lib/site";

const route = siteRoutes.find((item) => item.href === "/cookies")!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
});

const breadcrumbs = [
  { href: "/", label: "Inicio" },
  { href: "/cookies", label: "Cookies" },
];

export default function CookiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="section-shell">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="card">
            <span className="eyebrow">Cookies</span>
            <h1 className="mt-5 text-4xl font-semibold">Politica de cookies</h1>
            <p className="mt-5 text-base leading-8">
              Esta web usa cookies o tecnologias similares solo cuando son necesarias para prestar
              el servicio o cuando la persona acepta medicion no esencial.
            </p>

            <div className="mt-8 space-y-8 text-sm leading-7 text-[color:var(--foreground)]">
              <section>
                <h2 className="text-xl font-semibold text-[color:var(--primary)]">
                  Cookies tecnicas
                </h2>
                <p className="mt-4">
                  Son necesarias para recordar tu eleccion de consentimiento y mantener el
                  funcionamiento basico del sitio. No requieren consentimiento previo.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--primary)]">
                  Analitica y publicidad
                </h2>
                <p className="mt-4">
                  La web esta preparada para Google Tag, medicion de clics en WhatsApp y telefono y
                  Consent Mode v2. Estas etiquetas no se cargan hasta que aceptas cookies no
                  esenciales en el banner.
                </p>
                <p className="mt-4">
                  Si se activan Google Analytics, Google Ads, Google Tag Manager u otras
                  herramientas, sus identificadores deberan configurarse en las variables de
                  entorno y respetar esta eleccion de consentimiento.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--primary)]">
                  Como cambiar tu eleccion
                </h2>
                <p className="mt-4">
                  Puedes borrar los datos del sitio desde la configuracion de tu navegador para que
                  vuelva a aparecer el banner de consentimiento.
                </p>
              </section>
            </div>

            <Link href="/" className="btn-secondary mt-8">
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
