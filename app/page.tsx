import Image from "next/image";
import Link from "next/link";

import ContactActions from "@/components/ContactActions";
import FaqList from "@/components/FaqList";
import { ArrowIcon, MapPinIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import ServiceCards from "@/components/ServiceCards";
import { breadcrumbsJsonLd, createMetadata, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";
import {
  galleryImages,
  googleMapsUrl,
  guidePosts,
  homeFaqs,
  openingHours,
  serviceAreaSummary,
  siteRoutes,
} from "@/lib/site";

const route = siteRoutes[0];

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: "/images/adam-hero-bilbao.png",
});

const useCases = [
  {
    title: "Particulares en casa",
    text: "Para quien necesita un corte o arreglo sin desplazarse por agenda, comodidad o preferencia personal.",
  },
  {
    title: "Personas mayores",
    text: "Para familias que quieren evitar traslados, esperas o entornos incomodos para una persona mayor.",
  },
  {
    title: "Residencias y centros",
    text: "Para organizar varios servicios en un mismo desplazamiento, siempre bajo consulta previa.",
  },
  {
    title: "Hoteles, oficinas y eventos",
    text: "Para necesidades puntuales donde el tiempo, la ubicacion o la imagen importan.",
  },
];

export default function HomePage() {
  const breadcrumbs = [{ name: "Inicio", href: "/" }];

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs)} />

      <main id="contenido" className="overflow-x-clip">
        <section className="section-shell">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <span className="eyebrow">Peluqueria y barberia a domicilio en Bilbao</span>
              <h1 className="hero-title mt-6">
                Corte, barba y cuidado personal sin salir de casa.
              </h1>
              <p className="hero-copy">
                Adam atiende en Bilbao con cita previa para particulares, personas mayores,
                residencias, hoteles, oficinas y eventos. Primero confirmamos zona, horario,
                precio y condiciones para que la reserva sea clara.
              </p>
              <ContactActions className="mt-8" />
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="info-pill">Bilbao como zona principal</span>
                <span className="info-pill">WhatsApp y telefono</span>
                <span className="info-pill">Precios orientativos visibles</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[30rem] overflow-hidden bg-[color:var(--background)]">
                <Image
                  src="/images/adam-hero-bilbao.png"
                  alt="Adam, peluquero y barbero a domicilio en Bilbao"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="object-contain object-bottom"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="stat-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Zona
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--primary)]">
                    {serviceAreaSummary}
                  </p>
                </div>
                <div className="stat-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Horario
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--primary)]">
                    {openingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Servicios"
              title="Servicio a domicilio para necesidades concretas."
              description="Cada cita empieza con una situacion distinta: una persona mayor que no puede desplazarse, un profesional que necesita ahorrar tiempo, una familia que busca comodidad o un centro que quiere organizar varios servicios."
            />
            <div className="mt-10">
              <ServiceCards />
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((item) => (
                <article key={item.title} className="card">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Zonas"
                title="Bilbao y alrededores, siempre con cita previa."
                description="Adam trabaja exclusivamente a domicilio. Antes de reservar confirma zona, horario y condiciones del desplazamiento."
              />
              <Link
                href="/zonas"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]"
              >
                Ver detalle de zonas
                <ArrowIcon />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="card">
                <MapPinIcon className="h-6 w-6 text-[color:var(--accent)]" />
                <h2 className="mt-4 text-2xl font-semibold">Bilbao</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Bilbao es la referencia principal para organizar las citas a domicilio.
                </p>
              </article>
              <article className="card">
                <MapPinIcon className="h-6 w-6 text-[color:var(--accent)]" />
                <h2 className="mt-4 text-2xl font-semibold">Alrededores</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Si estas fuera de Bilbao, envia la zona aproximada por WhatsApp para confirmar si
                  el desplazamiento encaja.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Fotos reales"
                  title="Referencias visuales del trabajo."
                  description="Estas imagenes ayudan a entender el tipo de corte, preparacion y acabado. Las fotos de servicio a domicilio deben ampliarse cuando esten disponibles."
                />
                <p className="mt-6 text-sm leading-7 text-[color:var(--muted)]">
                  Adam trabaja exclusivamente a domicilio. Las proximas fotos deberian mostrar
                  tambien el montaje real en casa, oficina o centro cuando esten disponibles.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {galleryImages.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-[20px] border">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="image-caption px-4 py-3 text-sm font-semibold">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeading
                eyebrow="Google Business Profile"
                title="La web queda preparada para conectarse con Google Maps."
                description="Cuando el perfil este verificado, la URL podra mostrarse en contacto, footer y datos estructurados para mantener coherencia entre web y Perfil de Empresa en Google."
              />
              <div className="soft-panel mt-8">
                {googleMapsUrl ? (
                  <a
                    href={googleMapsUrl}
                    className="inline-flex items-center gap-2 font-semibold text-[color:var(--primary)] hover:text-[color:var(--accent)]"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MapPinIcon />
                    Ver perfil de Adam en Google Maps
                  </a>
                ) : (
                  <p className="text-sm leading-7 text-[color:var(--muted)]">
                    Perfil de Google Maps pendiente de enlazar cuando exista la URL definitiva.
                  </p>
                )}
              </div>
            </div>

            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                Guias locales
              </p>
              <h2 className="mt-4 text-3xl font-semibold">Contenido util para captar busquedas</h2>
              <div className="mt-6 grid gap-4">
                {guidePosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="stat-card hover:border-[color:var(--accent)]"
                  >
                    <span className="text-sm font-semibold text-[color:var(--primary)]">
                      {post.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-[color:var(--muted)]">
                      {post.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Antes de escribir por WhatsApp"
              description="La idea es resolver dudas basicas sin forzar una llamada."
            />
            <div className="mt-8">
              <FaqList faqs={homeFaqs} />
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="soft-panel mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold">Consulta zona, horario y precio antes de reservar.</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Envia el tipo de servicio y ubicacion aproximada. Adam respondera con una
                  propuesta clara si puede atenderlo.
                </p>
              </div>
              <ContactActions />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
