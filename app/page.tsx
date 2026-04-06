import Link from "next/link";

import {
  phoneDisplay,
  phoneUrl,
  serviceArea,
  siteDescription,
  siteName,
  siteUrl,
  whatsappUrl,
} from "@/lib/site";

const trustPoints = [
  {
    title: "Servicio local en Bilbao",
    description: "Atendemos domicilios, oficinas y hogares familiares en Bilbao y zonas cercanas.",
    icon: MapPinIcon,
  },
  {
    title: "Atención a domicilio",
    description: "Tú eliges el lugar y nosotros vamos con el material listo para trabajar.",
    icon: HomeIcon,
  },
  {
    title: "Puntual y profesional",
    description: "Trato cercano, acabados limpios y una experiencia cómoda desde el primer minuto.",
    icon: ShieldIcon,
  },
  {
    title: "Respuesta rápida",
    description: "Reserva por WhatsApp o llamada en pocos pasos, sin formularios largos.",
    icon: ClockIcon,
  },
];

const services = [
  {
    title: "Corte a domicilio",
    price: "Desde 25 €",
    description: "Un corte cómodo, limpio y sin desplazarte. Perfecto para mantener tu imagen sin perder tiempo.",
    points: ["En casa o en oficina", "Ideal para mantenimiento mensual", "Reserva rápida por WhatsApp"],
    featured: false,
  },
  {
    title: "Corte + barba",
    price: "Desde 32 €",
    description: "Servicio completo para salir bien arreglado sin pasar por la barbería ni esperar turno.",
    points: ["Acabado más completo", "Muy práctico si vas justo de tiempo", "Puntual y profesional"],
    featured: false,
  },
  {
    title: "Servicio para personas mayores",
    price: "Desde 28 €",
    description: "Atención calmada, cercana y pensada para personas con movilidad reducida o que prefieren quedarse en casa.",
    points: ["Muy cómodo para familias", "Atención respetuosa y paciente", "Puedes reservar tú para otra persona"],
    featured: true,
  },
];

const audiences = [
  {
    title: "Personas mayores",
    description: "Evitan desplazamientos, esperas y salidas incómodas. El servicio se hace en casa, con calma y comodidad.",
  },
  {
    title: "Familiares que buscan comodidad",
    description: "Puedes gestionar la cita por WhatsApp y dejar a tu padre, madre o familiar atendido sin complicaciones.",
  },
  {
    title: "Profesionales ocupados",
    description: "Te cortas el pelo en casa o en la oficina sin perder una mañana entera en desplazamientos y esperas.",
  },
];

const steps = [
  {
    title: "Contactas por WhatsApp",
    description: "Nos escribes indicando el servicio que necesitas y la zona de Bilbao.",
  },
  {
    title: "Confirmamos hora",
    description: "Te respondemos rápido con disponibilidad, precio orientativo y hora de cita.",
  },
  {
    title: "Vamos a tu casa",
    description: "Nos desplazamos con el material preparado para atenderte con puntualidad.",
  },
  {
    title: "Realizamos el servicio",
    description: "Corte cómodo, limpio y profesional, sin que tengas que salir ni esperar.",
  },
];

const benefits = [
  "Comodidad total sin salir de casa.",
  "Ahorro de tiempo real en desplazamientos y esperas.",
  "Atención personalizada y trato cercano.",
  "Ideal para movilidad reducida o personas mayores.",
  "Puntualidad y material higienizado en cada visita.",
];

const testimonials = [
  {
    quote:
      "Reservé para mi ama y fue comodísimo. Llegó puntual, la trató con mucha paciencia y quedó encantada con el resultado.",
    name: "Maite",
    detail: "Bilbao · Reserva para su madre",
  },
  {
    quote:
      "Trabajo muchas horas y esto me ahorra una barbaridad de tiempo. Escribí por WhatsApp y al día siguiente ya tenía la cita cerrada.",
    name: "Iker",
    detail: "Indautxu · Corte a domicilio",
  },
  {
    quote:
      "Necesitaba corte y barba rápido antes de una reunión. Vino a la oficina, fue puntual y todo muy profesional.",
    name: "Unai",
    detail: "Abando · Corte + barba",
  },
];

const faqs = [
  {
    question: "¿Atendéis en Bilbao?",
    answer:
      "Sí. Trabajamos en Bilbao y zonas cercanas. Si tienes duda sobre tu dirección, escríbenos por WhatsApp y te confirmamos disponibilidad enseguida.",
  },
  {
    question: "¿Cómo se reserva?",
    answer:
      "La forma más rápida es por WhatsApp. Nos escribes, te confirmamos horario y cerramos la cita en pocos mensajes. Si prefieres, también puedes llamar.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Depende del servicio, pero un corte suele resolverse en poco tiempo. Te indicamos una estimación al confirmar la cita para que lo tengas claro desde el inicio.",
  },
  {
    question: "¿Hay desplazamiento?",
    answer:
      "El precio mostrado es orientativo. Según la zona y el tipo de servicio puede variar ligeramente, y te lo dejamos claro antes de reservar.",
  },
  {
    question: "¿Se puede reservar para otra persona?",
    answer:
      "Sí, especialmente para padres, madres o familiares mayores. Puedes gestionar la cita tú mismo y coordinamos el servicio de forma sencilla.",
  },
  {
    question: "¿Métodos de pago?",
    answer:
      "Puedes consultar el método de pago disponible al reservar. Si necesitas una opción concreta, nos lo indicas por WhatsApp y te confirmamos antes de la cita.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  telephone: phoneDisplay,
  areaServed: "Bilbao, Bizkaia, España",
  serviceType: [
    "Peluquero a domicilio",
    "Barbería a domicilio",
    "Corte de pelo en casa",
    "Servicio para personas mayores",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: phoneDisplay,
    contactType: "reservas",
    areaServed: "Bilbao, Bizkaia, España",
    availableLanguage: "es",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative overflow-x-clip pb-28 md:pb-0">
        <section className="px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-col gap-3 rounded-full border bg-white/75 px-4 py-3 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--text)]">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                Servicio local en Bilbao y alrededores
              </div>
              <a
                href={phoneUrl}
                className="text-sm font-semibold text-[color:var(--text)] hover:text-[color:var(--accent)]"
              >
                Llamar ahora: {phoneDisplay}
              </a>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="eyebrow">Reserva rápida por WhatsApp</span>
                <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Peluquero a domicilio en Bilbao
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 sm:text-xl">
                  Corte de pelo y barbería en casa, sin desplazamientos ni esperas. Muy cómodo
                  para personas mayores, sus familiares y profesionales con poco tiempo.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={whatsappUrl} className="btn-primary">
                    Reservar por WhatsApp
                    <ArrowIcon />
                  </a>
                  <a href={phoneUrl} className="btn-secondary">
                    <PhoneIcon />
                    Llamar ahora
                  </a>
                </div>

                <p className="mt-4 text-sm font-medium text-[color:var(--text)]">
                  Mensaje claro, respuesta rápida y cita fácil. También puedes reservar para tu
                  padre, madre o un familiar.
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Sin esperas ni desplazamientos.",
                    "Ideal para movilidad reducida.",
                    "Atención puntual e higiénica.",
                    "Servicio cómodo en casa u oficina.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border bg-white/[0.65] px-4 py-3 text-sm font-medium text-[color:var(--text)]"
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="relative overflow-hidden rounded-[32px] border bg-[#1f1a16] p-6 text-white shadow-[0_30px_80px_rgba(31,26,22,0.3)] sm:p-8">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[rgba(182,95,45,0.35)] blur-3xl" />
                <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl" />
                <div className="relative">
                  <span className="eyebrow border-white/[0.15] bg-white/10 text-white">
                    Sin salir de casa
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold leading-tight">
                    La forma más cómoda de cortarte el pelo en Bilbao
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/[0.72]">
                    Pensado para quien quiere rapidez, comodidad y un trato profesional, y para
                    familias que prefieren cuidar a sus mayores sin moverlos de casa.
                  </p>

                  <div className="mt-6 rounded-[24px] border border-white/10 bg-white/10 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                      Precio orientativo
                    </p>
                    <p className="mt-2 text-4xl font-semibold">Desde 25 €</p>
                    <p className="mt-2 text-sm text-white/[0.72]">
                      Corte a domicilio con reserva rápida por WhatsApp o llamada.
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {[
                      "Respuesta ágil por WhatsApp",
                      "Cita fácil para familiares mayores",
                      "Material preparado y servicio limpio",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/[0.82]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Confianza"
              title="Un servicio pensado para que reservar sea fácil"
              description="Todo está planteado para eliminar fricción: mensaje rápido, atención en casa y una experiencia profesional desde el primer contacto."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustPoints.map(({ title, description, icon: Icon }) => (
                <article key={title} className="card">
                  <div className="inline-flex rounded-2xl border bg-white p-3">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="precios" className="section-shell">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Servicios y precios"
              title="Opciones claras para decidir y reservar rápido"
              description="Precios orientativos y fáciles de editar. Antes de confirmar, dejamos claro el importe según zona y servicio."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`card flex h-full flex-col ${
                    service.featured ? "border-[color:var(--accent)] bg-white" : ""
                  }`}
                >
                  {service.featured ? (
                    <span className="inline-flex w-fit rounded-full bg-[rgba(182,95,45,0.12)] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                      Muy útil para familias
                    </span>
                  ) : null}
                  <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-4xl font-semibold text-[color:var(--text)]">
                    {service.price}
                  </p>
                  <p className="mt-4 text-sm leading-7">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-medium text-[color:var(--text)]"
                      >
                        <CheckIcon />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappUrl} className="btn-secondary mt-8">
                    Consultar disponibilidad
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-5 text-sm">
              Precios orientativos editables. Confirma coste final al reservar según zona, horario
              y tipo de servicio.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Para quién es"
              title="Especialmente útil si buscas comodidad real"
              description="La propuesta es simple: evitar desplazamientos, ahorrar tiempo y facilitar mucho la vida a quien más lo necesita."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {audiences.map((audience, index) => (
                <article key={audience.title} className="card">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(182,95,45,0.12)] text-lg font-semibold text-[color:var(--accent)]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-7">{audience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Cómo funciona"
              title="Cuatro pasos rápidos y sin complicaciones"
              description="Nada de procesos largos. La reserva se resuelve fácil y el servicio se hace donde te venga mejor."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <article key={step.title} className="card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent)] text-lg font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Beneficios"
                title="Más comodidad, menos tiempo perdido"
                description="La reserva es sencilla y el servicio está pensado para que todo sea práctico, cercano y puntual."
              />
              <div className="mt-8 rounded-[32px] border bg-[#1f1a16] p-8 text-white shadow-[0_24px_60px_rgba(31,26,22,0.28)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  Lo que más valoran
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight">
                  Sin tráfico. Sin esperas. Sin mover a tu familiar.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/[0.72]">
                  Ideal si buscas una opción cómoda para ti o para alguien de tu familia, con un
                  trato profesional y una reserva directa.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article key={benefit} className="card min-h-[160px]">
                  <div className="inline-flex rounded-full bg-[rgba(182,95,45,0.12)] p-3 text-[color:var(--accent)]">
                    <CheckIcon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{benefit}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Testimonios"
              title="Comentarios que reducen dudas y ayudan a reservar"
              description="Tres situaciones muy comunes: cuidar a una persona mayor, ganar comodidad y resolver una cita con rapidez."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="card">
                  <span className="text-4xl font-semibold text-[color:var(--accent)]">“</span>
                  <p className="mt-3 text-base leading-8">{testimonial.quote}</p>
                  <div className="mt-6 border-t pt-5">
                    <p className="font-semibold text-[color:var(--text)]">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Dudas habituales antes de reservar"
              description="Respuestas claras para que la decisión sea fácil y rápida."
            />
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="card group">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-[color:var(--text)]">
                    <span>{faq.question}</span>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white text-[color:var(--text)]">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[36px] border bg-[linear-gradient(135deg,#1f1a16_0%,#2e231c_55%,#3b2d22_100%)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(31,26,22,0.24)] sm:px-8 lg:px-12 lg:py-14">
              <div className="max-w-3xl">
                <span className="eyebrow border-white/[0.15] bg-white/10 text-white">
                  Reserva ahora
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                  Peluquero a domicilio en Bilbao para ti o para tu familiar
                </h2>
                <p className="mt-4 text-base leading-8 text-white/[0.72] sm:text-lg">
                  Escríbenos por WhatsApp y te confirmamos disponibilidad lo antes posible. Si lo
                  prefieres, también puedes llamar directamente.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} className="btn-primary">
                  Reservar por WhatsApp
                  <ArrowIcon />
                </a>
                <a
                  href={phoneUrl}
                  className="btn-secondary border-white/[0.15] bg-white/10 text-white hover:bg-white/[0.14]"
                >
                  <PhoneIcon />
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="section-shell pt-0">
          <div className="mx-auto max-w-6xl rounded-[28px] border bg-white/75 px-6 py-8 backdrop-blur">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[color:var(--text)]">
                  Teléfono
                </p>
                <a
                  href={phoneUrl}
                  className="mt-3 block font-semibold text-[color:var(--text)] hover:text-[color:var(--accent)]"
                >
                  {phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[color:var(--text)]">
                  WhatsApp
                </p>
                <a
                  href={whatsappUrl}
                  className="mt-3 block font-semibold text-[color:var(--text)] hover:text-[color:var(--accent)]"
                >
                  Reservar por mensaje
                </a>
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[color:var(--text)]">
                  Zona de servicio
                </p>
                <p className="mt-3">{serviceArea}</p>
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[color:var(--text)]">
                  Legal
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <Link
                    href="/aviso-legal"
                    className="font-medium text-[color:var(--text)] hover:text-[color:var(--accent)]"
                  >
                    Aviso legal
                  </Link>
                  <Link
                    href="/privacidad"
                    className="font-medium text-[color:var(--text)] hover:text-[color:var(--accent)]"
                  >
                    Privacidad
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-[rgba(255,250,244,0.96)] px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3">
          <a href={whatsappUrl} className="btn-primary px-4 py-3 text-sm">
            WhatsApp
          </a>
          <a href={phoneUrl} className="btn-secondary px-4 py-3 text-sm">
            Llamar
          </a>
        </div>
      </div>
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
      <h2 className="section-title mt-5 max-w-3xl">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M5 4h4l2 5-2.5 2.5a16 16 0 0 0 4 4L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-none stroke-[color:var(--accent)] stroke-2">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-[color:var(--accent)] stroke-2">
      <path d="M12 21s6-4.5 6-11a6 6 0 1 0-12 0c0 6.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-[color:var(--accent)] stroke-2">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-[color:var(--accent)] stroke-2">
      <path d="M12 3 5 6v5c0 5 3.4 8.5 7 10 3.6-1.5 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-[color:var(--accent)] stroke-2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}
