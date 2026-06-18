import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import FaqList from "@/components/FaqList";
import { ArrowIcon, CheckIcon, ClockIcon, MapPinIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbsJsonLd, faqJsonLd, localBusinessJsonLd, serviceJsonLd } from "@/lib/seo";
import { serviceAreaSummary, type Service } from "@/lib/site";

type ServiceDetailPageProps = {
  service: Service;
  children: React.ReactNode;
};

export default function ServiceDetailPage({ service, children }: ServiceDetailPageProps) {
  const breadcrumbs = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: service.href, label: service.shortTitle },
  ];

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="overflow-x-clip">
        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <span className="eyebrow">{service.eyebrow}</span>
                <h1 className="hero-title mt-6">{service.title}</h1>
                <p className="hero-copy">{service.description}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[service.price, service.duration, service.audience].map((item) => (
                    <div key={item} className="rounded-[18px] border bg-[rgba(255,255,255,0.03)] p-4">
                      <p className="text-sm font-semibold leading-6 text-[color:var(--heading)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <ContactActions className="mt-8" />
              </div>

              <div className="relative overflow-hidden rounded-[24px] border shadow-[var(--shadow-md)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
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
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Encaje del servicio"
                title="Para que la cita salga clara desde el primer mensaje."
                description={service.intent}
              />
              <div className="mt-8 grid gap-4">
                <div className="card">
                  <MapPinIcon className="h-6 w-6 text-[color:var(--accent)]" />
                  <h2 className="mt-4 text-2xl font-semibold">Zona</h2>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                    {serviceAreaSummary}
                  </p>
                </div>
                <div className="card">
                  <ClockIcon className="h-6 w-6 text-[color:var(--accent)]" />
                  <h2 className="mt-4 text-2xl font-semibold">Duracion orientativa</h2>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                    {service.duration}. El tiempo puede variar por tipo de corte, movilidad,
                    acceso al domicilio o numero de personas.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--heading)]">Que incluye</h2>
              <ul className="mt-6 grid gap-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium leading-7">
                    <CheckIcon />
                    <span className="text-[color:var(--heading)]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[24px] border border-[color:var(--line-strong)] bg-[rgba(197,160,89,0.08)] p-6">
                <h2 className="text-2xl font-semibold">Datos pendientes de confirmar</h2>
                <ul className="mt-4 grid gap-3">
                  {service.notes.map((note) => (
                    <li key={note} className="flex items-start gap-3 text-sm leading-7">
                      <CheckIcon />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr]">
            <article className="prose-local">{children}</article>
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="card">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Siguiente paso
                </p>
                <h2 className="mt-4 text-3xl font-semibold">Consulta disponibilidad</h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                  Envia zona, dia aproximado y tipo de servicio. Adam confirma si puede atenderlo,
                  precio orientativo y cualquier condicion de desplazamiento.
                </p>
                <ContactActions className="mt-6" />
                <Link
                  href="/zonas"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]"
                >
                  Ver zonas de servicio
                  <ArrowIcon />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Dudas habituales antes de reservar"
              description="Respuestas claras para evitar malentendidos antes de confirmar una visita."
            />
            <div className="mt-8">
              <FaqList faqs={service.faqs} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
