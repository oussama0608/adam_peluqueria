import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import { CheckIcon, MapPinIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbsJsonLd, createMetadata, localBusinessJsonLd } from "@/lib/seo";
import {
  confirmedPrimaryZone,
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
                  La zona principal es {confirmedPrimaryZone} y el servicio se presta
                  exclusivamente a domicilio. Si estas en alrededores, Adam confirma el
                  desplazamiento antes de reservar.
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
                {serviceAreaSummary} No existe local abierto al publico: cada cita se coordina en
                el domicilio, residencia, hotel, oficina o espacio acordado.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Servicio exclusivamente a domicilio",
                  "Cita previa",
                  "Bilbao y alrededores",
                  "Confirmacion de desplazamiento",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[16px] border p-4">
                    <CheckIcon />
                    <span className="text-sm font-semibold text-[color:var(--primary)]">{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="card">
              <h2 className="text-3xl font-semibold">Alrededores</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                Para zonas fuera de Bilbao, envia la ubicacion aproximada por WhatsApp. Adam te
                dira si puede atender la cita y si el desplazamiento afecta al precio.
              </p>
            </article>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Cobertura responsable"
              title="Sin paginas duplicadas por ciudad."
              description="No se publican paginas locales especificas hasta confirmar municipios, condiciones de desplazamiento y contenido util para cada zona."
            />
            <div className="grid gap-4">
              {[
                "Confirmar si cada municipio tiene disponibilidad real antes de publicarlo.",
                "Definir si hay suplemento por desplazamiento.",
                "Anadir referencias reales cuando haya trabajos en esas zonas.",
                "Actualizar Google Business Profile con el area de servicio correcta cuando este verificado.",
              ].map((item) => (
                <div key={item} className="card">
                  <p className="text-sm font-semibold leading-7 text-[color:var(--primary)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="soft-panel mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold">No sabes si tu zona entra?</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Envia ubicacion aproximada y tipo de servicio por WhatsApp. La respuesta debe ser
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
