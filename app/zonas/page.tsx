import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import { CheckIcon, MapPinIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbsJsonLd, createMetadata, localBusinessJsonLd } from "@/lib/seo";
import {
  confirmedBilbaoAreas,
  confirmedPrimaryZone,
  nearbyZonesToConfirm,
  serviceAreaSummary,
  siteRoutes,
} from "@/lib/site";

const route = siteRoutes.find((item) => item.href === "/zonas")!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: "/5.jpeg",
});

const breadcrumbs = [
  { href: "/", label: "Inicio" },
  { href: "/zonas", label: "Zonas" },
];

export default function ZonasPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="overflow-x-clip">
        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <span className="eyebrow">Zonas de servicio</span>
                <h1 className="hero-title mt-6">Cobertura clara antes de reservar.</h1>
              </div>
              <div>
                <p className="hero-copy">
                  La zona principal es {confirmedPrimaryZone}. Los municipios cercanos se muestran
                  como pendientes de confirmacion para no prometer desplazamientos que no esten
                  validados.
                </p>
                <ContactActions className="mt-8" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
            <article className="card lg:col-span-2">
              <MapPinIcon className="h-7 w-7 text-[color:var(--accent)]" />
              <h2 className="mt-5 text-3xl font-semibold">Bilbao</h2>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                {serviceAreaSummary} Dentro de Bilbao se priorizan zonas como{" "}
                {confirmedBilbaoAreas.join(", ")} y otras ubicaciones que puedan coordinarse por
                horario y desplazamiento.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {confirmedBilbaoAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 rounded-[16px] border p-4">
                    <CheckIcon />
                    <span className="text-sm font-semibold text-[color:var(--heading)]">{area}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="card">
              <h2 className="text-3xl font-semibold">Municipios cercanos</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                TODO: confirmar si se presta servicio habitual en estos municipios antes de
                posicionarlos como cobertura fija.
              </p>
              <ul className="mt-6 grid gap-3">
                {nearbyZonesToConfirm.map((zone) => (
                  <li key={zone} className="flex items-start gap-3 text-sm leading-7">
                    <CheckIcon />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="SEO local honesto"
              title="Sin paginas duplicadas por ciudad."
              description="No se crean paginas tipo 'peluquero a domicilio en Barakaldo' si no hay informacion original, cobertura confirmada y contenido util. Eso evita contenido pobre y mantiene la web mas fiable."
            />
            <div className="grid gap-4">
              {[
                "Confirmar si cada municipio tiene disponibilidad real.",
                "Definir si hay suplemento por desplazamiento.",
                "Añadir referencias reales cuando haya trabajos en esas zonas.",
                "Actualizar Google Business Profile con el area de servicio correcta.",
              ].map((item) => (
                <div key={item} className="card">
                  <p className="text-sm font-semibold leading-7 text-[color:var(--heading)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl rounded-[24px] border border-[color:var(--line-strong)] bg-[rgba(197,160,89,0.1)] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold">No sabes si tu zona entra?</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Envia direccion aproximada y tipo de servicio por WhatsApp. La respuesta debe ser
                  clara antes de cerrar la cita.
                </p>
              </div>
              <Link href="/contacto" className="btn-primary">
                Contactar
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
