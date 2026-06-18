import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import { CheckIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbsJsonLd, createMetadata, localBusinessJsonLd } from "@/lib/seo";
import { legalName, openingHours, serviceAreaSummary, siteRoutes } from "@/lib/site";

const route = siteRoutes.find((item) => item.href === "/sobre-adam")!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: "/3.jpeg",
});

const breadcrumbs = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-adam", label: "Sobre Adam" },
];

export default function SobreAdamPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="overflow-x-clip">
        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="eyebrow">Sobre Adam</span>
                <h1 className="hero-title mt-6">Adam Messaoudi, peluqueria y barberia a domicilio.</h1>
                <p className="hero-copy">
                  Adam atiende exclusivamente a domicilio en Bilbao y alrededores, siempre con cita
                  previa. Antes de reservar confirma servicio, zona, horario y precio para que la
                  visita sea clara desde el primer mensaje.
                </p>
                <ContactActions className="mt-8" />
              </div>
              <div className="relative overflow-hidden rounded-[24px] border shadow-[var(--shadow-md)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/3.jpeg"
                    alt="Adam realizando un servicio de barberia, imagen real de referencia."
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Enfoque"
              title="Atender bien empieza antes de llegar."
              description="El objetivo es que cada persona sepa que puede esperar: si la zona entra, cuanto puede durar, que precio orientativo tiene y que condiciones hacen falta."
            />
            <div className="grid gap-4">
              {[
                "Respuesta directa por WhatsApp o telefono.",
                "Confirmacion previa de zona, horario y precio.",
                "Adaptacion del servicio al contexto: casa, residencia, hotel, oficina o evento.",
                "Servicio exclusivamente a domicilio, sin local abierto al publico.",
              ].map((item) => (
                <article key={item} className="card">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-sm font-semibold leading-7 text-[color:var(--heading)]">
                      {item}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[24px] border border-[color:var(--line-strong)] bg-[rgba(197,160,89,0.08)] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                Datos confirmados
              </p>
              <h2 className="mt-4 text-3xl font-semibold">Informacion basica antes de contactar</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  `Titular: ${legalName}.`,
                  serviceAreaSummary,
                  openingHours,
                  "No existe local abierto al publico.",
                ].map((item) => (
                  <div key={item} className="rounded-[18px] border bg-[rgba(10,10,10,0.35)] p-4">
                    <p className="text-sm leading-7 text-[color:var(--muted)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl rounded-[24px] border p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold">Quieres consultar una cita?</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Antes de reservar, conviene confirmar servicio, zona, horario y condiciones del
                  espacio.
                </p>
              </div>
              <Link href="/contacto" className="btn-primary">
                Ir a contacto
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
