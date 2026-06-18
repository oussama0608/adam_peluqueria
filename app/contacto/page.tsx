import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import { CheckIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import TrackedContactLink from "@/components/TrackedContactLink";
import { breadcrumbsJsonLd, createMetadata, localBusinessJsonLd } from "@/lib/seo";
import {
  contactEmail,
  googleMapsUrl,
  openingHours,
  phoneDisplay,
  phoneUrl,
  serviceAreaSummary,
  siteRoutes,
  whatsappUrl,
} from "@/lib/site";

const route = siteRoutes.find((item) => item.href === "/contacto")!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: "/1.jpeg",
});

const breadcrumbs = [
  { href: "/", label: "Inicio" },
  { href: "/contacto", label: "Contacto" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="overflow-x-clip">
        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <span className="eyebrow">Contacto</span>
                <h1 className="hero-title mt-6">Consulta disponibilidad antes de reservar.</h1>
              </div>
              <div>
                <p className="hero-copy">
                  Envia por WhatsApp el servicio, la zona y una franja horaria. Adam debe confirmar
                  precio, desplazamiento y condiciones antes de cerrar la visita.
                </p>
                <ContactActions className="mt-8" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            <article className="card">
              <WhatsAppIcon className="h-7 w-7 text-[color:var(--accent)]" />
              <h2 className="mt-5 text-3xl font-semibold">WhatsApp</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                Canal recomendado para enviar zona, servicio y disponibilidad. Tambien puedes
                adjuntar una foto de referencia si ayuda a explicar el corte.
              </p>
              <TrackedContactLink channel="whatsapp" href={whatsappUrl} className="btn-primary mt-6">
                <WhatsAppIcon />
                Escribir por WhatsApp
              </TrackedContactLink>
            </article>

            <article className="card">
              <PhoneIcon className="h-7 w-7 text-[color:var(--accent)]" />
              <h2 className="mt-5 text-3xl font-semibold">Telefono</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                Llamada directa para dudas rapidas. Si no responde, lo mas practico es dejar un
                WhatsApp con la informacion basica.
              </p>
              <TrackedContactLink channel="phone" href={phoneUrl} className="btn-secondary mt-6">
                <PhoneIcon />
                Llamar al {phoneDisplay}
              </TrackedContactLink>
            </article>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Datos utiles"
              title="Que conviene enviar en el primer mensaje."
              description="Cuanta mas informacion haya al principio, mas facil es confirmar si la cita tiene sentido."
            />
            <div className="grid gap-4">
              {[
                "Servicio que necesitas: corte, barba, persona mayor, residencia, hotel, oficina o evento.",
                "Zona o direccion aproximada dentro de Bilbao o municipio cercano.",
                "Dia y franja horaria preferida.",
                "Si hay movilidad reducida, acceso dificil, parking o condiciones especiales.",
              ].map((item) => (
                <div key={item} className="card">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-sm font-semibold leading-7 text-[color:var(--heading)]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            <article className="card">
              <h2 className="text-2xl font-semibold">Email</h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{contactEmail}</p>
            </article>
            <article className="card">
              <h2 className="text-2xl font-semibold">Horario</h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{openingHours}</p>
            </article>
            <article className="card">
              <h2 className="text-2xl font-semibold">Zona</h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{serviceAreaSummary}</p>
            </article>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl rounded-[24px] border border-[color:var(--line-strong)] bg-[rgba(197,160,89,0.08)] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Google Maps
                </p>
                <h2 className="mt-4 text-3xl font-semibold">Perfil de Empresa en Google</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Esta zona queda preparada para enlazar al perfil verificado de Google Maps y
                  reforzar la coherencia entre web, Search Console y Google Business Profile.
                </p>
              </div>
              {googleMapsUrl ? (
                <a
                  href={googleMapsUrl}
                  className="btn-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MapPinIcon />
                  Ver en Google Maps
                </a>
              ) : (
                <p className="max-w-sm text-sm leading-7 text-[color:var(--muted)]">
                  TODO: proporcionar URL del Perfil de Empresa en Google.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Siguiente"
              title="Tambien puedes revisar servicios y zonas antes de escribir."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/servicios" className="btn-secondary">
                Ver servicios
              </Link>
              <Link href="/zonas" className="btn-secondary">
                Ver zonas
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
