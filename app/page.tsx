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

      <main className="overflow-x-clip pb-28 md:pb-0">
        <div className="px-4 pt-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 rounded-[24px] border bg-white/92 px-4 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[color:var(--heading)]">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                Servicio local en Bilbao y alrededores
                <span className="hidden h-1 w-1 rounded-full bg-[color:var(--line-strong)] sm:inline-flex" />
                Reserva rápida por WhatsApp o llamada
              </div>
              <a
                href={phoneUrl}
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[color:var(--heading)] hover:text-[color:var(--accent)]"
              >
                <PhoneIcon />
                Llamar ahora: {phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <section className="px-4 pb-14 pt-4 sm:px-6 lg:px-8 lg:pb-20 lg:pt-6">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[40px] border bg-white shadow-[0_28px_70px_rgba(15,23,42,0.07)]">
              <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12">
                  <div className="max-w-3xl rounded-[32px] border border-white/80 bg-white/78 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur sm:p-8">
                    <span className="eyebrow bg-white/92">Peluquería y barbería a domicilio</span>
                    <h1 className="mt-6 text-4xl font-semibold leading-[1.02] text-[color:var(--heading)] sm:text-5xl lg:text-[4rem]">
                      Peluquero a domicilio en Bilbao
                      <span className="mt-3 block text-[color:var(--text)]">
                        rápido, cómodo y sin salir de casa.
                      </span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                      Corte de pelo y barbería en casa para profesionales, familias y personas mayores
                      que quieren un servicio cuidado, puntual y fácil de reservar.
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

                    <p className="mt-5 max-w-2xl text-sm font-medium leading-6 text-[color:var(--heading)]">
                      Confirmamos disponibilidad y precio orientativo antes de cerrar la cita. También
                      puedes reservar para tu padre, madre o un familiar.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="info-pill bg-white/92">WhatsApp rápido</span>
                      <span className="info-pill bg-white/92">Ideal para personas mayores</span>
                      <span className="info-pill bg-white/92">En casa u oficina</span>
                    </div>

                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {[
                        "Sin desplazamientos ni salas de espera.",
                        "Muy cómodo para personas mayores.",
                        "Reserva clara por WhatsApp o llamada.",
                        "Servicio en casa u oficina, según te convenga.",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 rounded-[22px] border bg-white/92 px-4 py-4 text-sm font-medium leading-6 text-[color:var(--heading)] shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur"
                        >
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <aside className="surface-panel relative overflow-hidden bg-white/92 backdrop-blur">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="eyebrow border-transparent bg-[rgba(22,163,74,0.08)] text-[color:var(--accent)]">
                            Reserva guiada
                          </span>
                          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[color:var(--heading)]">
                            Una cita clara desde el primer mensaje
                          </h2>
                        </div>
                        <span className="hidden rounded-full border border-[rgba(22,163,74,0.18)] bg-white px-3 py-2 text-sm font-semibold text-[color:var(--accent)] sm:inline-flex">
                          Bilbao
                        </span>
                      </div>
                      <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                        Te confirmamos disponibilidad, precio orientativo y hora antes de reservar. Sin
                        formularios, sin desplazamientos y sin pasos innecesarios.
                      </p>

                      <div className="mt-6 rounded-[28px] border bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                          Servicio más solicitado
                        </p>
                        <div className="mt-4 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-xl font-semibold text-[color:var(--heading)]">
                              Corte a domicilio
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                              Cómodo, limpio y fácil de encajar en tu día.
                            </p>
                          </div>
                          <p className="text-3xl font-semibold text-[color:var(--heading)]">25 €</p>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        {[
                          ["Reserva", "WhatsApp o llamada"],
                          ["Zona", serviceArea],
                          ["Pensado para", "Familias, mayores y profesionales"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="rounded-[24px] border bg-white px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                          >
                            <p className="text-sm font-medium text-[color:var(--muted)]">{label}</p>
                            <p className="mt-2 text-base font-semibold leading-6 text-[color:var(--heading)]">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-[28px] border bg-[color:var(--background-subtle)] p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                          Lo que tendrás claro antes de confirmar
                        </p>
                        <ul className="mt-4 space-y-3">
                          {[
                            "Disponibilidad según tu zona.",
                            "Precio orientativo según servicio.",
                            "Hora de cita y forma de reserva.",
                          ].map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm font-medium leading-6 text-[color:var(--heading)]"
                            >
                              <CheckIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section-muted pt-0">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Confianza"
              title="Un servicio pensado para reservar sin fricción"
              description="Todo está diseñado para transmitir claridad desde el primer vistazo: contacto directo, atención en casa y una experiencia cómoda de principio a fin."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustPoints.map(({ title, description, icon: Icon }) => (
                <article key={title} className="card h-full">
                  <div className="inline-flex rounded-[20px] border border-[rgba(22,163,74,0.12)] bg-[rgba(22,163,74,0.06)] p-3">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[color:var(--heading)]">{title}</h3>
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
              description="Precios orientativos, explicación sencilla y una llamada a la acción directa para pasar de la intención a la reserva."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`card flex h-full flex-col ${
                    service.featured
                      ? "border-[color:var(--accent)] bg-white shadow-[0_24px_56px_rgba(22,163,74,0.08)]"
                      : ""
                  }`}
                >
                  {service.featured ? (
                    <span className="inline-flex w-fit rounded-full bg-[rgba(22,163,74,0.08)] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                      Muy útil para familias
                    </span>
                  ) : null}
                  <h3 className="mt-4 text-2xl font-semibold text-[color:var(--heading)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-4xl font-semibold text-[color:var(--heading)]">
                    {service.price}
                  </p>
                  <p className="mt-4 text-sm leading-7">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-medium text-[color:var(--heading)]"
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
            <p className="mt-5 text-sm leading-6">
              El coste final se confirma antes de reservar según zona, horario y tipo de servicio.
            </p>
          </div>
        </section>

        <section className="section-shell section-muted">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Para quién es"
              title="Especialmente útil si buscas comodidad real"
              description="La propuesta es simple: evitar desplazamientos, ahorrar tiempo y facilitar mucho la vida a quien más lo necesita."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {audiences.map((audience, index) => (
                <article key={audience.title} className="card h-full">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border bg-white text-sm font-semibold text-[color:var(--heading)]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[color:var(--heading)]">
                    {audience.title}
                  </h3>
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
                <article key={step.title} className="card h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,163,74,0.16)] bg-[rgba(22,163,74,0.08)] text-lg font-semibold text-[color:var(--accent)]">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[color:var(--heading)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-muted">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Beneficios"
                title="Más comodidad, menos tiempo perdido"
                description="La reserva es sencilla y el servicio está pensado para que todo sea práctico, cercano y puntual."
              />
              <div className="surface-panel mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                  Lo que más valoran
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-[color:var(--heading)]">
                  Sin tráfico. Sin esperas. Sin mover a tu familiar.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-[color:var(--muted)]">
                  Ideal si buscas una opción cómoda para ti o para alguien de tu familia, con un
                  trato profesional y una reserva directa.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article key={benefit} className="card flex min-h-[160px] flex-col justify-between">
                  <div className="inline-flex rounded-full border border-[rgba(22,163,74,0.12)] bg-[rgba(22,163,74,0.06)] p-3 text-[color:var(--accent)]">
                    <CheckIcon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[color:var(--heading)]">
                    {benefit}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Testimonios"
              title="Comentarios que ayudan a reservar con confianza"
              description="Experiencias que transmiten cercanía, puntualidad y comodidad, justo lo que más importa antes de contratar."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="card h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--background-subtle)] text-3xl font-semibold text-[color:var(--line-strong)]">
                    “
                  </div>
                  <p className="mt-5 text-base leading-8 text-[color:var(--text)]">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 border-t pt-5">
                    <p className="font-semibold text-[color:var(--heading)]">{testimonial.name}</p>
                    <p className="text-sm leading-6">{testimonial.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-muted">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Dudas habituales antes de reservar"
              description="Respuestas claras para que la decisión sea simple, rápida y sin incertidumbre."
            />
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="card group p-0">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-[color:var(--heading)] transition-colors hover:bg-[color:var(--background-subtle)] sm:px-8">
                    <span>{faq.question}</span>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--line-strong)] bg-white text-[color:var(--heading)] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-7 sm:px-8 sm:pb-8">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <div className="surface-panel">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <span className="eyebrow border-transparent bg-white text-[color:var(--heading)]">
                    Reserva ahora
                  </span>
                  <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-[color:var(--heading)] sm:text-4xl">
                    Peluquero a domicilio en Bilbao para ti o para tu familiar
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                    Escríbenos por WhatsApp y te confirmamos disponibilidad lo antes posible. Si lo
                    prefieres, también puedes llamar directamente.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="info-pill">WhatsApp rápido</span>
                    <span className="info-pill">Precio orientativo desde 25 €</span>
                    <span className="info-pill">Servicio local en {serviceArea}</span>
                  </div>
                </div>

                <div className="rounded-[28px] border bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    Reserva directa
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a href={whatsappUrl} className="btn-primary w-full">
                      Reservar por WhatsApp
                      <ArrowIcon />
                    </a>
                    <a href={phoneUrl} className="btn-secondary w-full">
                      <PhoneIcon />
                      Llamar ahora
                    </a>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                    También puedes reservar tú mismo para un familiar y coordinamos la cita de
                    forma sencilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="section-shell pt-0">
          <div className="mx-auto max-w-6xl rounded-[28px] border bg-white px-6 py-8 shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--heading)]">
                  Teléfono
                </p>
                <a
                  href={phoneUrl}
                  className="mt-3 block font-semibold text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                >
                  {phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--heading)]">
                  WhatsApp
                </p>
                <a
                  href={whatsappUrl}
                  className="mt-3 block font-semibold text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                >
                  Reservar por mensaje
                </a>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--heading)]">
                  Zona de servicio
                </p>
                <p className="mt-3 text-[color:var(--muted)]">{serviceArea}</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--heading)]">
                  Legal
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <Link
                    href="/aviso-legal"
                    className="font-medium text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                  >
                    Aviso legal
                  </Link>
                  <Link
                    href="/privacidad"
                    className="font-medium text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                  >
                    Privacidad
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 px-4 py-3 shadow-[0_-12px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
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
      <h2 className="section-title mt-5 max-w-3xl text-[color:var(--heading)]">{title}</h2>
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
