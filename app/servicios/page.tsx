import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import FaqList from "@/components/FaqList";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import ServiceCards from "@/components/ServiceCards";
import { breadcrumbsJsonLd, createMetadata, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { homeFaqs, services, siteRoutes } from "@/lib/site";

const route = siteRoutes.find((item) => item.href === "/servicios")!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: "/2.jpeg",
});

const breadcrumbs = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="overflow-x-clip">
        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <span className="eyebrow">Servicios a domicilio</span>
                <h1 className="hero-title mt-6">
                  Peluqueria y barberia segun el contexto de cada cliente.
                </h1>
              </div>
              <div>
                <p className="hero-copy">
                  El servicio no se plantea igual para una persona mayor, una residencia, un hotel
                  o una oficina. Por eso cada servicio explica precio orientativo, condiciones y
                  datos necesarios antes de reservar.
                </p>
                <ContactActions className="mt-8" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <ServiceCards />
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Como elegir"
              title="La pagina correcta depende de lo que necesitas resolver."
              description="Elige el servicio que mejor encaja con tu situacion y envia zona, horario aproximado y necesidades concretas por WhatsApp."
            />
            <div className="grid gap-4">
              {services.map((service) => (
                <Link key={service.id} href={service.href} className="card hover:border-[color:var(--line-strong)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                        {service.price}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold">{service.shortTitle}</h2>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                        {service.intent}
                      </p>
                    </div>
                    <ArrowIcon className="mt-1 h-5 w-5 shrink-0 text-[color:var(--accent)]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {[
              "Confirmar zona y desplazamiento antes de cerrar la cita",
              "Acordar servicio, precio orientativo y tiempo necesario",
              "Trabajar siempre con cita previa y sin local abierto al publico",
            ].map((item) => (
              <article key={item} className="card">
                <CheckIcon />
                <p className="mt-4 text-sm font-semibold leading-7 text-[color:var(--heading)]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-4xl">
            <FaqList faqs={homeFaqs} />
          </div>
        </section>
      </main>
    </>
  );
}
