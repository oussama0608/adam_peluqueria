import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import { CheckIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, guidePosts, siteName, siteRoutes } from "@/lib/site";
import { breadcrumbsJsonLd, createMetadata, localBusinessJsonLd } from "@/lib/seo";

const route = siteRoutes.find((item) => item.href === "/guias/preparar-corte-a-domicilio-bilbao")!;
const post = guidePosts[0];

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: "/4.jpeg",
});

const breadcrumbs = [
  { href: "/", label: "Inicio" },
  { href: "/guias", label: "Guias" },
  { href: route.href, label: "Preparar corte a domicilio" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.description,
  image: absoluteUrl("/4.jpeg"),
  author: {
    "@type": "Organization",
    name: siteName,
  },
  publisher: {
    "@type": "Organization",
    name: siteName,
  },
  mainEntityOfPage: absoluteUrl(route.href),
};

export default function PrepareHomeHaircutGuidePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="overflow-x-clip">
        <section className="section-shell">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs items={breadcrumbs} />
            <span className="eyebrow">Guia practica</span>
            <h1 className="hero-title mt-6">{post.title}</h1>
            <p className="hero-copy">
              Una cita a domicilio sale mejor cuando el espacio, el horario y las expectativas se
              aclaran antes. Esta guia resume lo importante para una visita en Bilbao.
            </p>
          </div>
        </section>

        <section className="section-shell pt-0">
          <article className="prose-local mx-auto max-w-4xl">
            <h2>1. Elige un espacio comodo y facil de limpiar</h2>
            <p>
              No hace falta tener una sala especial, pero si conviene elegir un lugar con buena luz,
              una silla estable y margen para moverse alrededor. Si hay enchufe cerca, mejor. Una
              cocina amplia, un salon despejado o una zona comun tranquila pueden funcionar.
            </p>

            <h2>2. Explica el tipo de servicio antes de confirmar</h2>
            <p>
              No es lo mismo un corte sencillo, un degradado, arreglo de barba, mantenimiento para
              una persona mayor o una visita para varias personas. Cuanto mas concreto sea el
              primer mensaje, mas facil sera estimar tiempo y precio.
            </p>

            <h2>3. Envia zona y franja horaria</h2>
            <p>
              Adam trabaja con base en Bilbao y confirma cada desplazamiento antes de cerrar la
              cita. Si estas en un municipio cercano, indica la ubicacion aproximada para valorar si
              entra en la ruta y si hay suplemento.
            </p>

            <h2>4. Si es para una persona mayor, añade contexto</h2>
            <p>
              Indica si puede sentarse con comodidad, si necesita pausas, si estara presente un
              familiar y si hay algun detalle de movilidad que deba tenerse en cuenta. La idea es
              que el servicio sea tranquilo y realista.
            </p>

            <h2>5. Usa referencias, pero sin exigir imposibles</h2>
            <p>
              Una foto ayuda mucho, especialmente si quieres mantener un estilo concreto. Tambien
              ayuda decir que no te gusto de cortes anteriores. Adam confirmara si el resultado es
              viable segun el pelo, el tiempo y las condiciones del lugar.
            </p>
          </article>
        </section>

        <section className="section-shell pt-0">
          <div className="soft-panel mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold">Checklist antes de escribir</h2>
            <ul className="mt-6 grid gap-4">
              {[
                "Servicio que necesitas.",
                "Zona o ubicacion aproximada.",
                "Dia y franja horaria.",
                "Foto de referencia si tienes una.",
                "Necesidades especiales de movilidad, espacio o acceso.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-7">
                  <CheckIcon />
                  <span className="text-[color:var(--primary)]">{item}</span>
                </li>
              ))}
            </ul>
            <ContactActions className="mt-8" />
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto flex max-w-4xl flex-wrap gap-3">
            <Link href="/servicios/barberia-a-domicilio" className="btn-secondary">
              Barberia a domicilio
            </Link>
            <Link href="/servicios/peluqueria-mayores-movilidad-reducida" className="btn-secondary">
              Mayores y movilidad reducida
            </Link>
            <Link href="/zonas" className="btn-secondary">
              Zonas de servicio
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
