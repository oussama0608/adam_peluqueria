import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import {
  phoneDisplay,
  phoneUrl,
  serviceArea,
  serviceZones,
  siteDescription,
  siteName,
  siteUrl,
  whatsappUrl,
} from "@/lib/site";

const audienceCards = [
  {
    eyebrow: "Para el profesional",
    title: "Imagen ejecutiva impecable sin ceder tiempo de agenda.",
    description:
      "Un servicio premium pensado para profesionales que valoran la conveniencia de atenderse en casa o en la oficina, con puntualidad, discrecion y acabado preciso.",
    points: [
      "Bilbao centro, domicilio u oficina",
      "Ahorro real de tiempo entre reuniones",
      "Presencia cuidada con ritmo agil y limpio",
    ],
    tone: "executive" as const,
    icon: BriefcaseIcon,
  },
  {
    eyebrow: "Para nuestros mayores",
    title: "Cuidado paciente, respetuoso y comodo en el entorno de siempre.",
    description:
      "Atencion especializada para clientes senior que merecen calma, respeto y un servicio exclusivo en casa, sin desplazamientos ni esperas incomodas.",
    points: [
      "Atencion pausada y trato sereno",
      "Comodidad total sin salir del domicilio",
      "Tranquilidad para la familia y el cliente",
    ],
    tone: "senior" as const,
    icon: CareIcon,
  },
];

const galleryShots = [
  {
    src: "/executive-service.svg",
    alt: "Ilustracion editorial de un servicio de barberia premium en un despacho elegante.",
    eyebrow: "Imagen ejecutiva",
    title: "Sesiones discretas para oficina o domicilio",
    description:
      "Un entorno cuidado, montaje limpio y presencia impecable sin salir del ritmo del dia.",
    className: "sm:col-span-2 lg:col-span-1 lg:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/tools-detail.svg",
    alt: "Ilustracion editorial del material premium de barberia preparado para un servicio a domicilio.",
    eyebrow: "Detalle premium",
    title: "Material preparado con criterio profesional",
    description:
      "Herramientas listas, textiles cuidados y una escena que transmite higiene, orden y nivel.",
    className: "",
    aspect: "aspect-[16/11]",
  },
  {
    src: "/senior-care.svg",
    alt: "Ilustracion editorial de un cuidado de peluqueria y barberia especializado para personas mayores en casa.",
    eyebrow: "Cuidado senior",
    title: "Atencion calmada en el entorno de siempre",
    description:
      "Comodidad real para mayores y tranquilidad para la familia, con un ritmo pausado y respetuoso.",
    className: "",
    aspect: "aspect-[16/11]",
  },
];

const trustItems = [
  {
    title: "Material esterilizado por cada cliente",
    description:
      "Herramientas preparadas y desinfectadas antes de cada visita para mantener un estandar profesional en todo momento.",
    icon: SterileIcon,
  },
  {
    title: "Limpieza absoluta al finalizar",
    description:
      "Trabajamos con proteccion y recogida completa para dejar el espacio exactamente como estaba.",
    icon: SparklesIcon,
  },
  {
    title: "Seguro de responsabilidad y profesional titulado",
    description:
      "Servicio respaldado por criterio tecnico, trato serio y cobertura adecuada para una experiencia sin improvisaciones.",
    icon: ShieldCheckIcon,
  },
];

const services = [
  {
    title: "Corte Ejecutivo",
    price: 40,
    detail: "Corte + arreglo de barba + masaje",
    description:
      "La opcion mas completa para profesionales que quieren resolver imagen, precision y bienestar en una sola visita.",
    points: [
      "Corte de precision con acabado ejecutivo",
      "Arreglo de barba equilibrado y limpio",
      "Masaje final para cerrar la sesion",
      "Ideal para domicilio u oficina",
    ],
    featured: true,
  },
  {
    title: "Corte Senior Especializado",
    price: 30,
    detail: "Atencion pausada + corte clasico",
    description:
      "Pensado para nuestros mayores, con un ritmo comodo y un enfoque respetuoso que prioriza bienestar y confianza.",
    points: [
      "Atencion calmada y cercana",
      "Corte clasico con criterio tradicional",
      "Sin desplazamientos ni salas de espera",
      "Perfecto para cuidado regular en casa",
    ],
    featured: false,
  },
  {
    title: "Servicio Oficina Express",
    price: 35,
    detail: "Corte de mantenimiento en entorno laboral",
    description:
      "Un servicio agil y discreto para mantener una presencia impecable sin romper el ritmo de la jornada.",
    points: [
      "Montaje y retirada discretos",
      "Ajustado a pausas de trabajo reales",
      "Mantenimiento limpio y preciso",
      "Pensado para despachos y oficinas",
    ],
    featured: false,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Escribes por WhatsApp",
    description:
      "Nos indicas si el servicio es para ti, para la oficina o para un familiar mayor, y te orientamos con rapidez.",
  },
  {
    step: "02",
    title: "Confirmamos zona y horario",
    description:
      "Te respondemos con disponibilidad, tarifa y encaje logistico antes de cerrar la cita. Sin letras pequenas ni friccion.",
  },
  {
    step: "03",
    title: "Acudimos listos para atenderte",
    description:
      "Llegamos con el material preparado, realizamos el servicio y dejamos el espacio limpio para que solo te quedes con el resultado.",
  },
];

const reassuranceCards = [
  {
    label: "Disponibilidad",
    value: "Bilbao centro, casas y oficinas",
  },
  {
    label: "Especialidad",
    value: "Imagen ejecutiva y atencion senior",
  },
  {
    label: "Reserva",
    value: "WhatsApp directo y respuesta agil",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "LocalBusiness"],
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  telephone: phoneDisplay,
  areaServed: [
    "Bilbao centro",
    "Abando",
    "Indautxu",
    "Deusto",
    "Santutxu",
    "Getxo",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bilbao",
    addressRegion: "Bizkaia",
    addressCountry: "ES",
  },
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    price: String(service.price),
    priceCurrency: "EUR",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: `${service.detail}. ${service.description}`,
    },
  })),
};

const revealScript = `
  (() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!nodes.length) return;

    const showNode = (node) => node.classList.add("is-visible");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      nodes.forEach(showNode);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showNode(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    nodes.forEach((node) => observer.observe(node));
  })();
`;

export default function HomePage() {
  return (
    <>
      <Script id="reveal-on-scroll" strategy="afterInteractive">
        {revealScript}
      </Script>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="overflow-x-clip pb-28 md:pb-24">
        <section className="section-shell pb-14 pt-5 sm:pt-8">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[36px] border border-[color:var(--line-strong)] bg-[linear-gradient(140deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 shadow-[var(--shadow-lg)] sm:p-8 lg:p-10">
              <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-[rgba(197,160,89,0.12)] blur-3xl" />
              <div className="absolute -right-16 bottom-12 h-52 w-52 rounded-full bg-[rgba(197,160,89,0.08)] blur-3xl" />

              <div className="relative flex flex-col gap-6 border-b border-[color:var(--line)] pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--accent)]">
                    Adam
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">
                    Barberia & Cuidado en Casa
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs font-medium text-[color:var(--heading)]">
                  <span className="info-pill">Bilbao premium a domicilio</span>
                  <span className="info-pill">Casa y oficina</span>
                  <span className="info-pill">Atencion senior especializada</span>
                </div>
              </div>

              <div className="relative mt-10 max-w-4xl" data-reveal>
                <span className="eyebrow">Barberia y peluqueria premium en Bilbao</span>
                <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] text-[color:var(--heading)] sm:text-6xl lg:text-[5.15rem]">
                  Adam: Barberia & Cuidado en Casa
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                  Un servicio exclusivo para quienes quieren verse impecables sin desplazarse:
                  profesionales que cuidan su presencia y mayores que merecen atencion serena,
                  respeto y comodidad real en su propio entorno.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <TrackedWhatsAppLink href={whatsappUrl} className="btn-primary sm:min-w-[250px]">
                    <WhatsAppIcon />
                    Reservar Cita Premium
                  </TrackedWhatsAppLink>
                  <a href={phoneUrl} className="btn-secondary sm:min-w-[196px]">
                    <PhoneIcon />
                    Llamar ahora
                  </a>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-6 text-[color:var(--muted)]">
                  Te confirmamos disponibilidad, servicio y zona antes de reservar para que la
                  decision sea clara desde el primer mensaje.
                </p>
              </div>

              <div className="relative mt-10 grid gap-5 lg:grid-cols-2">
                {audienceCards.map(({ eyebrow, title, description, points, tone, icon: Icon }) => (
                  <article
                    key={title}
                    data-reveal
                    className={`relative overflow-hidden rounded-[32px] border p-6 sm:p-8 ${
                      tone === "executive"
                        ? "bg-[linear-gradient(145deg,rgba(197,160,89,0.16),rgba(197,160,89,0.03))]"
                        : "bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_42%)] opacity-70" />
                    <div className="relative">
                      <div className="inline-flex rounded-full border border-[color:var(--line-strong)] bg-[rgba(10,10,10,0.58)] p-3 text-[color:var(--accent)]">
                        <Icon />
                      </div>
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                        {eyebrow}
                      </p>
                      <h2 className="mt-4 text-4xl leading-[1] text-[color:var(--heading)]">
                        {title}
                      </h2>
                      <p className="mt-5 max-w-xl text-base leading-8 text-[color:var(--muted)]">
                        {description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm font-medium leading-6 text-[color:var(--heading)]"
                          >
                            <CheckIcon />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <div className="relative mt-6 grid gap-4 md:grid-cols-3">
                {reassuranceCards.map((card) => (
                  <div
                    key={card.label}
                    data-reveal
                    className="rounded-[24px] border bg-[rgba(255,255,255,0.03)] px-5 py-5 backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                      {card.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--heading)]">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div data-reveal>
                <SectionHeading
                  eyebrow="Imagenes del servicio"
                  title="La confianza tambien entra por los ojos."
                  description="Ver el ambiente del servicio ayuda a decidir con mas seguridad: orden, presencia, limpieza y una atencion serena tanto en oficina como en domicilio."
                />
                <div className="mt-8 rounded-[28px] border bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Lo que debe percibirse al instante
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Servicio premium sin aspecto improvisado",
                      "Entorno limpio y discreto desde la llegada",
                      "Cuidado especializado para perfiles distintos",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-medium leading-6 text-[color:var(--heading)]"
                      >
                        <CheckIcon />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-fr">
                {galleryShots.map((shot) => (
                  <article
                    key={shot.title}
                    data-reveal
                    className={`group relative overflow-hidden rounded-[30px] border bg-[rgba(255,255,255,0.03)] shadow-[var(--shadow-sm)] ${shot.className}`}
                  >
                    <div className={`relative ${shot.aspect}`}>
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.92)_42%)] px-5 pb-5 pt-16">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                        {shot.eyebrow}
                      </p>
                      <h3 className="mt-3 text-2xl leading-tight text-[color:var(--heading)]">
                        {shot.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                        {shot.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div data-reveal>
                <SectionHeading
                  eyebrow="Clean & Safe"
                  title="Un protocolo serio para entrar en tu espacio con total confianza."
                  description="La experiencia premium no solo se nota en el corte. Tambien se demuestra en la preparacion, en la higiene y en la forma de cuidar tu casa, tu oficina o el entorno de una persona mayor."
                />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {trustItems.map(({ title, description, icon: Icon }) => (
                  <article key={title} data-reveal className="card h-full">
                    <div className="inline-flex rounded-[22px] border border-[color:var(--line-strong)] bg-[rgba(197,160,89,0.08)] p-3 text-[color:var(--accent)]">
                      <Icon />
                    </div>
                    <h3 className="mt-6 text-2xl text-[color:var(--heading)]">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div data-reveal>
              <SectionHeading
                eyebrow="Servicios premium"
                title="Tarifas claras para una experiencia exclusiva y comoda."
                description="Cada servicio esta definido para un contexto concreto: imagen ejecutiva, cuidado senior o mantenimiento profesional en oficina. Reservas con precio visible y sin rodeos."
              />
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  data-reveal
                  className={`flex h-full flex-col rounded-[32px] border p-6 sm:p-8 ${
                    service.featured
                      ? "border-[color:var(--line-strong)] bg-[linear-gradient(160deg,rgba(197,160,89,0.14),rgba(255,255,255,0.03))] shadow-[0_28px_72px_rgba(0,0,0,0.38)]"
                      : "bg-[rgba(255,255,255,0.03)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {service.featured ? (
                        <span className="eyebrow border-transparent bg-[rgba(10,10,10,0.48)] text-[color:var(--accent)]">
                          Servicio destacado
                        </span>
                      ) : null}
                      <h3 className="mt-4 text-3xl leading-tight text-[color:var(--heading)]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-4xl font-semibold leading-none text-[color:var(--heading)]">
                      {service.price}
                      <span aria-hidden="true">&euro;</span>
                    </p>
                  </div>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    {service.detail}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-medium leading-6 text-[color:var(--heading)]"
                      >
                        <CheckIcon />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <TrackedWhatsAppLink href={whatsappUrl} className="btn-primary mt-8 w-full">
                    <WhatsAppIcon />
                    Reservar Cita Premium
                  </TrackedWhatsAppLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-6xl">
            <div
              data-reveal
              className="relative overflow-hidden rounded-[30px] border border-[color:var(--line-strong)] bg-[linear-gradient(135deg,rgba(197,160,89,0.18),rgba(255,255,255,0.04))] px-6 py-8 shadow-[var(--shadow-md)] sm:px-8 lg:px-10"
            >
              <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_58%)] opacity-60" />
              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    Zonas de servicio
                  </p>
                  <h2 className="mt-3 text-3xl leading-tight text-[color:var(--heading)] sm:text-4xl">
                    Servicio en Abando, Indautxu, Deusto, Santutxu, Getxo y alrededores.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                    Si necesitas confirmar una direccion concreta en {serviceArea}, te respondemos
                    por WhatsApp con rapidez y claridad.
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line-strong)] bg-[rgba(10,10,10,0.42)] px-4 py-3 text-sm font-medium text-[color:var(--heading)]">
                  <MapPinIcon />
                  {serviceZones}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div data-reveal>
              <SectionHeading
                eyebrow="Reserva premium"
                title="Un proceso directo, profesional y pensado para no hacerte perder tiempo."
                description="La conversion mejora cuando todo se entiende rapido: un mensaje, una confirmacion clara y una visita puntual. Esa es la experiencia que propone Adam."
              />
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article key={step.step} data-reveal className="card h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--line-strong)] bg-[rgba(197,160,89,0.08)] text-sm font-semibold text-[color:var(--accent)]">
                    {step.step}
                  </span>
                  <h3 className="mt-6 text-2xl leading-tight text-[color:var(--heading)]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div
              data-reveal
              className="relative overflow-hidden rounded-[36px] border border-[color:var(--line-strong)] bg-[linear-gradient(140deg,rgba(255,255,255,0.04),rgba(197,160,89,0.08))] p-6 shadow-[var(--shadow-lg)] sm:p-8 lg:p-10"
            >
              <div className="absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-[rgba(197,160,89,0.12)] blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                <div>
                  <span className="eyebrow">Ultimo paso</span>
                  <h2 className="mt-5 max-w-3xl text-4xl leading-[1.02] text-[color:var(--heading)] sm:text-5xl">
                    Reserva una visita donde la conveniencia y el cuidado importan de verdad.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                    Adam atiende domicilios, oficinas y necesidades senior con un mismo estandar:
                    presencia impecable, trato profesional y una experiencia limpia de principio a
                    fin.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="info-pill">Bilbao centro y alrededores</span>
                    <span className="info-pill">WhatsApp directo</span>
                    <span className="info-pill">Servicio exclusivo a domicilio</span>
                  </div>
                </div>

                <div className="rounded-[30px] border bg-[rgba(10,10,10,0.52)] p-6 backdrop-blur sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Contacto directo
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <TrackedWhatsAppLink href={whatsappUrl} className="btn-primary w-full">
                      <WhatsAppIcon />
                      Reservar Cita Premium
                    </TrackedWhatsAppLink>
                    <a href={phoneUrl} className="btn-secondary w-full">
                      <PhoneIcon />
                      Llamar al {phoneDisplay}
                    </a>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">
                    Respuesta agil para cortes ejecutivos, servicio senior especializado y visitas
                    en oficina dentro de Bilbao y alrededores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="section-shell pt-0">
          <div className="mx-auto max-w-6xl rounded-[30px] border bg-[rgba(255,255,255,0.03)] px-6 py-8 backdrop-blur sm:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  Marca
                </p>
                <p className="mt-3 text-xl font-semibold text-[color:var(--heading)]">{siteName}</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Barberia y cuidado premium a domicilio para Bilbao, oficinas y clientes senior.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  Reserva
                </p>
                <TrackedWhatsAppLink
                  href={whatsappUrl}
                  className="mt-3 inline-flex text-sm font-semibold text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                >
                  WhatsApp directo
                </TrackedWhatsAppLink>
                <a
                  href={phoneUrl}
                  className="mt-3 block text-sm font-semibold text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                >
                  {phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  Cobertura
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{serviceZones}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  Legal
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <Link
                    href="/aviso-legal"
                    className="text-sm font-semibold text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                  >
                    Aviso legal
                  </Link>
                  <Link
                    href="/privacidad"
                    className="text-sm font-semibold text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                  >
                    Privacidad
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="pointer-events-none fixed inset-x-4 bottom-4 z-50 md:inset-x-auto md:bottom-6 md:right-6">
          <TrackedWhatsAppLink
            href={whatsappUrl}
            className="btn-primary pointer-events-auto w-full min-w-[250px] shadow-[0_20px_45px_rgba(0,0,0,0.45)] md:w-auto"
          >
            <WhatsAppIcon />
            Reservar Cita Premium
          </TrackedWhatsAppLink>
        </div>
      </main>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-5 text-[color:var(--heading)]">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M5 4h4l2 5-2.5 2.5a16 16 0 0 0 4 4L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M20 11.5A8.5 8.5 0 0 1 7.4 18.9L4 20l1.1-3.2A8.5 8.5 0 1 1 20 11.5Z" />
      <path d="m9.2 8.7.8-.2c.2 0 .4 0 .6.4l.7 1.6c.1.2.1.4 0 .6l-.3.5c-.1.1-.1.3 0 .4.3.5.8 1 1.3 1.3.1.1.3.1.4 0l.5-.3c.2-.1.4-.1.6 0l1.6.7c.3.2.4.4.4.6l-.2.8c-.1.4-.5.7-.9.7-.9 0-2-.3-3.4-1.7-1.4-1.4-1.7-2.5-1.7-3.4 0-.4.3-.8.7-.9Z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M4 8.5h16v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-8Z" />
      <path d="M4 12h16" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
      <path d="M12 20s-6.5-4.3-8.5-8.5A4.9 4.9 0 0 1 8 5a5.4 5.4 0 0 1 4 1.9A5.4 5.4 0 0 1 16 5a4.9 4.9 0 0 1 4.5 6.5C18.5 15.7 12 20 12 20Z" />
      <path d="M9.5 12h5" />
      <path d="M12 9.5v5" />
    </svg>
  );
}

function SterileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
      <path d="M7 3v7" />
      <path d="M17 3v7" />
      <path d="M5 10h14" />
      <path d="M7 10c0 6 5 11 5 11s5-5 5-11" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
      <path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z" />
      <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      <path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
      <path d="M12 3 5 6v5c0 5 3.4 8.5 7 10 3.6-1.5 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M12 21s6-4.5 6-11a6 6 0 1 0-12 0c0 6.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 fill-none stroke-[color:var(--accent)] stroke-2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
