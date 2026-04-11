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
    description:
      "Atendemos domicilios y oficinas en Bilbao y zonas cercanas con una propuesta clara, cómoda y fácil de reservar.",
    icon: MapPinIcon,
  },
  {
    title: "Comodidad real a domicilio",
    description:
      "El servicio se realiza donde te venga mejor, sin tráfico, sin esperas y sin mover a nadie de casa.",
    icon: HomeIcon,
  },
  {
    title: "Puntualidad y trato profesional",
    description:
      "Acabado limpio, material preparado y una experiencia cuidada desde el primer minuto.",
    icon: ShieldIcon,
  },
  {
    title: "Reserva rápida por WhatsApp",
    description:
      "Escribes, confirmamos zona y horario, y dejas la cita cerrada en pocos mensajes.",
    icon: ClockIcon,
  },
];

const services = [
  {
    title: "Corte a domicilio",
    price: "25 €",
    badge: "Más solicitado",
    description:
      "La opción más reservada para verte bien sin salir de casa ni perder tiempo en desplazamientos.",
    points: [
      "Sin desplazamientos",
      "En tu casa u oficina",
      "Reserva rápida por WhatsApp",
      "Puntual y profesional",
    ],
    featured: true,
  },
  {
    title: "Corte + barba",
    price: "32 €",
    badge: "",
    description:
      "Servicio completo en una sola visita para quienes quieren resolverlo todo con comodidad y buen acabado.",
    points: [
      "Acabado más completo",
      "Ideal antes de reuniones o eventos",
      "En tu casa u oficina",
      "Puntual y profesional",
    ],
    featured: false,
  },
  {
    title: "Servicio para personas mayores",
    price: "28 €",
    badge: "",
    description:
      "Atención calmada y cercana para personas que prefieren quedarse en casa y recibir el servicio con tranquilidad.",
    points: [
      "Atención respetuosa y paciente",
      "Ideal para familias",
      "Sin salidas incómodas",
      "Puedes reservar para otra persona",
    ],
    featured: false,
  },
];

const audiences = [
  {
    title: "Personas mayores",
    description:
      "Una forma cómoda de cortarse el pelo sin desplazamientos, esperas ni salidas innecesarias.",
  },
  {
    title: "Familias que reservan por ellos",
    description:
      "Puedes gestionar la cita para tu padre, madre o un familiar y dejarlo todo coordinado en pocos mensajes.",
  },
  {
    title: "Profesionales con poco tiempo",
    description:
      "Corte en casa u oficina para mantener una buena imagen sin perder una mañana entera.",
  },
];

const steps = [
  {
    title: "Escribes por WhatsApp",
    description:
      "Nos dices el servicio que necesitas y tu zona de Bilbao para empezar la reserva.",
  },
  {
    title: "Confirmamos hora y precio",
    description:
      "Te indicamos disponibilidad y dejamos claro el precio antes de cerrar la cita.",
  },
  {
    title: "Vamos a tu casa u oficina",
    description:
      "Nos desplazamos con el material preparado para atenderte con puntualidad y comodidad.",
  },
  {
    title: "Recibes el servicio sin salir",
    description:
      "Corte limpio, experiencia cómoda y sin esperas para ti o para un familiar.",
  },
];

const benefits = [
  {
    title: "Sin mover tu agenda",
    description:
      "El servicio encaja mejor en el día y evita tiempo perdido en trayectos o esperas.",
  },
  {
    title: "Muy útil para familias",
    description:
      "Reservar para otra persona es fácil y especialmente cómodo cuando se trata de familiares mayores.",
  },
  {
    title: "Atención humana y respetuosa",
    description:
      "La experiencia está pensada para que se sienta cómoda, calmada y profesional.",
  },
  {
    title: "Todo claro antes de confirmar",
    description:
      "Zona, horario y precio se confirman antes de reservar para reducir cualquier duda.",
  },
];

const testimonials = [
  {
    quote:
      "Reservé para mi padre y fue comodísimo. Llegó puntual, lo trató con mucha paciencia y quedó encantado con el resultado.",
    name: "Ander",
    detail: "Bilbao · Reserva para su padre",
  },
  {
    quote:
      "Trabajo muchas horas y esto me ahorra muchísimo tiempo. Escribí por WhatsApp y al día siguiente ya tenía la cita cerrada.",
    name: "Iker",
    detail: "Indautxu · Corte a domicilio",
  },
  {
    quote:
      "Necesitaba corte y barba antes de una reunión. Vino a la oficina, fue puntual y todo muy profesional.",
    name: "Unai",
    detail: "Abando · Corte + barba",
  },
];

const faqs = [
  {
    question: "¿Atendéis en Bilbao y alrededores?",
    answer:
      "Sí. Trabajamos en Bilbao y zonas cercanas. Si tienes duda sobre tu dirección, escríbenos por WhatsApp y te confirmamos disponibilidad enseguida.",
  },
  {
    question: "¿Cómo se reserva?",
    answer:
      "La forma más rápida es por WhatsApp. Nos escribes, confirmamos horario y precio, y dejamos la cita cerrada en pocos mensajes. Si prefieres, también puedes llamar.",
  },
  {
    question: "¿Se puede reservar para otra persona?",
    answer:
      "Sí. Es muy habitual reservar para padres, madres u otros familiares. Puedes gestionar la cita tú mismo y coordinamos el servicio de forma sencilla.",
  },
  {
    question: "¿El precio puede variar?",
    answer:
      "El precio final se confirma antes de reservar según la zona, el horario y el tipo de servicio. Te lo dejamos claro antes de cerrar la cita.",
  },
  {
    question: "¿Cuánto tarda el servicio?",
    answer:
      "Depende del servicio, pero un corte suele resolverse en poco tiempo. Te indicamos una estimación al confirmar la cita para que lo tengas claro desde el principio.",
  },
  {
    question: "¿También hacéis servicio en oficina?",
    answer:
      "Sí, siempre que el espacio permita trabajar con comodidad. Si te interesa esa opción, dínoslo por WhatsApp y te confirmamos la viabilidad.",
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

const heroPoints = [
  "Sin desplazamientos ni salas de espera",
  "Reserva rápida por WhatsApp",
  "Servicio en casa u oficina",
  "También para tu padre, madre o un familiar",
];

const heroFacts = [
  ["Zona de servicio", serviceArea],
  ["Reserva principal", "WhatsApp rápido"],
  ["Pensado para", "Mayores, familias y profesionales"],
];

const featuredServicePoints = [
  "Sin desplazamientos",
  "En tu casa u oficina",
  "Reserva rápida por WhatsApp",
  "Puntual y profesional",
];

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
            <div className="flex flex-col gap-3 rounded-[24px] border bg-white px-4 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="inline-flex rounded-full bg-[rgba(22,163,74,0.08)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                  Bilbao y alrededores
                </span>
                <span className="text-sm font-medium text-[color:var(--muted)]">
                  Peluquería y barbería a domicilio con reserva rápida y trato cercano
                </span>
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

        <section className="px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-20 lg:pt-6">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[36px] border bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-10">
                <div className="max-w-3xl">
                  <span className="eyebrow">Peluquero a domicilio en Bilbao</span>
                  <h1 className="mt-6 text-4xl font-semibold leading-[0.98] text-[color:var(--heading)] sm:text-5xl lg:text-[4rem]">
                    Corte de pelo a domicilio en Bilbao
                    <span className="mt-3 block text-[color:var(--heading)]">
                      fácil de reservar y sin salir de casa.
                    </span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                    Servicio local para profesionales, familias y personas mayores que buscan
                    comodidad, puntualidad y una reserva clara por WhatsApp o llamada.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={whatsappUrl} className="btn-primary sm:min-w-[260px]">
                      <WhatsAppIcon />
                      Reservar por WhatsApp
                    </a>
                    <a href={phoneUrl} className="btn-secondary sm:min-w-[188px]">
                      <PhoneIcon />
                      Llamar ahora
                    </a>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-[color:var(--heading)]">
                    Te confirmamos disponibilidad, horario y precio antes de reservar. Sin
                    formularios, sin pasos innecesarios y sin sorpresas.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <span className="info-pill">En tu casa u oficina</span>
                    <span className="info-pill">Ideal para personas mayores</span>
                    <span className="info-pill">Servicio local en {serviceArea}</span>
                  </div>

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {heroPoints.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-[22px] border bg-[color:var(--background-subtle)] px-4 py-4 text-sm font-medium leading-6 text-[color:var(--heading)]"
                      >
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className="rounded-[32px] border bg-[color:var(--background-subtle)] p-5 sm:p-6">
                  <span className="eyebrow border-transparent bg-white text-[color:var(--accent)]">
                    Reserva directa
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold leading-tight text-[color:var(--heading)]">
                    Una cita clara desde el primer mensaje
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                    Escribes por WhatsApp, confirmamos zona y horario, y dejas la visita cerrada
                    sin llamadas largas ni formularios.
                  </p>

                  <div className="mt-6 rounded-[28px] border bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex rounded-full bg-[rgba(22,163,74,0.08)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                          La opción más reservada
                        </span>
                        <p className="mt-4 text-xl font-semibold text-[color:var(--heading)]">
                          Corte a domicilio
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                          El servicio más cómodo para resolver tu corte sin desplazarte.
                        </p>
                      </div>
                      <p className="text-4xl font-semibold leading-none text-[color:var(--heading)]">
                        25 €
                      </p>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {featuredServicePoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm font-medium leading-6 text-[color:var(--heading)]"
                        >
                          <CheckIcon />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-col gap-3">
                      <a href={whatsappUrl} className="btn-primary w-full">
                        <WhatsAppIcon />
                        Reservar por WhatsApp
                      </a>
                      <a href={phoneUrl} className="btn-secondary w-full">
                        <PhoneIcon />
                        Llamar ahora
                      </a>
                    </div>

                    <p className="mt-4 text-xs leading-5 text-[color:var(--muted)]">
                      El precio final se confirma antes de reservar según zona y horario.
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {heroFacts.map(([label, value]) => (
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
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section id="precios" className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Servicios y precios"
              title="Precios claros para reservar sin dudas"
              description="Elige el servicio, escribe por WhatsApp y te confirmamos la cita antes de cerrar. Todo está planteado para que decidir sea fácil y rápido."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.96fr_0.96fr]">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`flex h-full flex-col rounded-[30px] border bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)] sm:p-8 ${
                    service.featured
                      ? "border-[color:var(--accent)] shadow-[0_28px_60px_rgba(22,163,74,0.12)] lg:-translate-y-1"
                      : ""
                  }`}
                >
                  {service.badge ? (
                    <span className="inline-flex w-fit rounded-full bg-[rgba(22,163,74,0.08)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                      {service.badge}
                    </span>
                  ) : (
                    <span className="inline-flex h-[28px]" aria-hidden="true" />
                  )}

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-[color:var(--heading)]">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                        {service.description}
                      </p>
                    </div>
                    <p className="shrink-0 text-5xl font-semibold leading-none text-[color:var(--heading)]">
                      {service.price}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-3">
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

                  <a href={whatsappUrl} className="btn-primary mt-8 w-full">
                    <WhatsAppIcon />
                    Reservar por WhatsApp
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-[color:var(--muted)]">
              El precio final se confirma antes de reservar según zona y horario.
            </p>
          </div>
        </section>
        <section className="section-shell section-muted">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Confianza"
              title="Una landing pensada para entender el servicio al instante"
              description="Bilbao, servicio a domicilio, precios visibles y una acción principal muy clara para pasar de la visita a la reserva sin fricción."
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

        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Para quién encaja mejor"
              title="Especialmente útil si la comodidad importa de verdad"
              description="La propuesta es simple: menos desplazamientos, menos tiempo perdido y una experiencia más práctica para ti o para tu familia."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {audiences.map((audience, index) => (
                <article key={audience.title} className="card h-full">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border bg-[color:var(--background-subtle)] text-sm font-semibold text-[color:var(--heading)]">
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

        <section className="section-shell section-muted">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Cómo funciona"
              title="Reservar es rápido, claro y sin complicaciones"
              description="Nada de procesos largos. La cita se organiza en pocos pasos y el servicio se hace donde te venga mejor."
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

        <section className="section-shell">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Por qué lo reservan"
                title="Más comodidad, menos fricción y una experiencia más premium"
                description="La sensación debe ser simple: entiendes el servicio, ves el precio y sabes exactamente cómo reservar."
              />
              <div className="surface-panel mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                  Lo que más valoran
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-[color:var(--heading)]">
                  Sin tráfico. Sin esperas. Sin mover a quien prefiera quedarse en casa.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-[color:var(--muted)]">
                  Ideal si buscas una opción cómoda, directa y profesional para ti o para alguien
                  de tu familia.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="card flex min-h-[190px] flex-col justify-between">
                  <div className="inline-flex rounded-full border border-[rgba(22,163,74,0.12)] bg-[rgba(22,163,74,0.06)] p-3 text-[color:var(--accent)]">
                    <CheckIcon />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-xl font-semibold text-[color:var(--heading)]">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7">{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-shell section-muted">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Testimonios"
              title="Comentarios que refuerzan la decisión de reservar"
              description="Cercanía, puntualidad y comodidad: justo lo que más pesa cuando alguien llega desde Google Ads y necesita confiar rápido."
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

        <section className="section-shell">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Dudas habituales antes de reservar"
              description="Respuestas claras para reducir incertidumbre y hacer que la siguiente acción natural sea escribir por WhatsApp."
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
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <span className="eyebrow border-transparent bg-white text-[color:var(--heading)]">
                    Reserva ahora
                  </span>
                  <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-[color:var(--heading)] sm:text-4xl">
                    Peluquero a domicilio en Bilbao para ti o para un familiar
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                    Si buscas una cita cómoda, puntual y fácil de cerrar, el siguiente paso es
                    escribir por WhatsApp. Si prefieres, también puedes llamar directamente.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="info-pill">WhatsApp rápido</span>
                    <span className="info-pill">Corte a domicilio 25 €</span>
                    <span className="info-pill">Servicio local en {serviceArea}</span>
                  </div>
                </div>

                <div className="rounded-[28px] border bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    Acción principal
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a href={whatsappUrl} className="btn-primary w-full">
                      <WhatsAppIcon />
                      Reservar por WhatsApp
                    </a>
                    <a href={phoneUrl} className="btn-secondary w-full">
                      <PhoneIcon />
                      Llamar ahora
                    </a>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                    También puedes reservar tú mismo para tu padre, madre, hijo o un familiar y
                    coordinamos la cita de forma sencilla.
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
                  Reservar por WhatsApp
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
        <div className="mx-auto grid max-w-3xl grid-cols-[1.3fr_0.9fr] gap-2">
          <a
            href={whatsappUrl}
            className="btn-primary px-4 py-3 text-[13px] font-semibold leading-5"
          >
            <WhatsAppIcon />
            Reservar por WhatsApp
          </a>
          <a
            href={phoneUrl}
            className="btn-secondary px-4 py-3 text-[13px] font-semibold leading-5"
          >
            <PhoneIcon />
            Llamar ahora
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 fill-none stroke-[color:var(--accent)] stroke-2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-[color:var(--accent)] stroke-2"
    >
      <path d="M12 21s6-4.5 6-11a6 6 0 1 0-12 0c0 6.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-[color:var(--accent)] stroke-2"
    >
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-[color:var(--accent)] stroke-2"
    >
      <path d="M12 3 5 6v5c0 5 3.4 8.5 7 10 3.6-1.5 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-[color:var(--accent)] stroke-2"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}
