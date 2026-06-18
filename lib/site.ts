const env = (key: string) => process.env[key]?.trim() ?? "";

export const siteUrl = env("NEXT_PUBLIC_SITE_URL") || "https://adampeluqueria.com";
export const siteName = "Adam Peluqueria a domicilio";
export const brandName = "Adam";
export const legalName = env("NEXT_PUBLIC_LEGAL_NAME") || "Adam Messaoudi";
export const taxIdLabel = "NIF/NIE";
export const taxId = env("LEGAL_TAX_ID") || "Y7721001F";
export const contactEmail =
  env("NEXT_PUBLIC_CONTACT_EMAIL") || "adammessaoudi2000@outlook.com";

export const phoneDisplay = "674 205 719";
export const phoneInternational = "+34674205719";
export const phoneUrl = "tel:+34674205719";
export const whatsappUrl = "https://wa.me/34674205719";

export const googleMapsUrl = env("NEXT_PUBLIC_GOOGLE_MAPS_URL");
export const googleSiteVerification = env("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION");

export const legalAddress = env("NEXT_PUBLIC_LEGAL_ADDRESS");
export const publicServiceAddress =
  env("NEXT_PUBLIC_SERVICE_ADDRESS") ||
  "Servicio exclusivamente a domicilio. No existe local abierto al publico.";
export const openingHours =
  env("NEXT_PUBLIC_OPENING_HOURS") ||
  "Horario de atencion: 10:00-21:00, con cita previa";
export const openingHoursShort = "10:00-21:00, con cita previa";

export const serviceMode = "Servicio exclusivamente a domicilio";
export const confirmedPrimaryZone = "Bilbao";
export const serviceAreaSummary =
  "Bilbao y alrededores, con cita previa y confirmacion de desplazamiento.";
export const confirmedBilbaoAreas: string[] = [];
export const nearbyZonesToConfirm: string[] = [];

export const baseServicePrice = "Desde 20 €";
export const seniorCutAndBeardPrice = "Mayores, corte y barba: 30 €";
export const professionalServicePrice = "Profesionales: 25 €";
export const variableScopeBudget = "Solicitar presupuesto";

export const businessDescription =
  "Barberia y peluqueria exclusivamente a domicilio en Bilbao y alrededores para particulares, personas mayores, profesionales, residencias, hoteles, oficinas y eventos.";

export const socialProfiles = googleMapsUrl ? [googleMapsUrl] : [];

export const pendingRealDataTodos = [
  "TODO: proporcionar URL definitiva de Google Maps/Google Business Profile.",
  "TODO: añadir codigo de verificacion de Google Search Console.",
  "TODO: confirmar dias concretos de apertura si son necesarios.",
  "TODO: confirmar credenciales profesionales antes de publicarlas.",
  "TODO: confirmar seguro o certificaciones antes de publicarlos.",
  "TODO: confirmar direccion fiscal solo si legalmente es imprescindible publicarla.",
  "TODO: confirmar municipios especificos atendidos dentro de Bilbao y alrededores.",
];

export type SiteRoute = {
  href: string;
  label: string;
  title: string;
  description: string;
  priority: number;
};

export const siteRoutes: SiteRoute[] = [
  {
    href: "/",
    label: "Inicio",
    title: "Peluqueria y barberia a domicilio en Bilbao | Adam Messaoudi",
    description:
      "Servicio exclusivamente a domicilio de peluqueria y barberia en Bilbao y alrededores, con cita previa, WhatsApp, telefono y precios orientativos.",
    priority: 1,
  },
  {
    href: "/servicios",
    label: "Servicios",
    title: "Servicios de peluqueria y barberia a domicilio en Bilbao | Adam",
    description:
      "Cortes, arreglo de barba y servicios adaptados para domicilios, mayores, profesionales, residencias, hoteles, oficinas y eventos en Bilbao y alrededores.",
    priority: 0.9,
  },
  {
    href: "/servicios/barberia-a-domicilio",
    label: "Barberia",
    title: "Barberia a domicilio en Bilbao | Adam Messaoudi",
    description:
      "Corte masculino y arreglo de barba a domicilio en Bilbao y alrededores, con cita previa y consulta por WhatsApp.",
    priority: 0.85,
  },
  {
    href: "/servicios/peluqueria-mayores-movilidad-reducida",
    label: "Mayores",
    title: "Peluqueria para mayores y movilidad reducida en Bilbao | Adam",
    description:
      "Servicio a domicilio para personas mayores o con movilidad reducida en Bilbao y alrededores. Mayores, corte y barba: 30 €.",
    priority: 0.85,
  },
  {
    href: "/servicios/residencias",
    label: "Residencias",
    title: "Peluqueria para residencias en Bilbao | Adam",
    description:
      "Servicio de peluqueria y barberia para residencias y centros de cuidado en Bilbao y alrededores, con presupuesto segun alcance.",
    priority: 0.8,
  },
  {
    href: "/servicios/hoteles-oficinas-eventos",
    label: "Hoteles y eventos",
    title: "Peluqueria para hoteles, oficinas y eventos en Bilbao | Adam",
    description:
      "Servicio a domicilio para profesionales, hoteles, oficinas y eventos en Bilbao y alrededores. Profesionales: 25 €; grupos bajo presupuesto.",
    priority: 0.8,
  },
  {
    href: "/zonas",
    label: "Zonas",
    title: "Zonas de servicio de peluqueria a domicilio en Bilbao | Adam",
    description:
      "Cobertura general en Bilbao y alrededores. Adam trabaja exclusivamente a domicilio y confirma desplazamiento antes de reservar.",
    priority: 0.75,
  },
  {
    href: "/sobre-adam",
    label: "Sobre Adam",
    title: "Sobre Adam Messaoudi | Peluqueria a domicilio en Bilbao",
    description:
      "Conoce el enfoque de Adam Messaoudi: servicio exclusivamente a domicilio, cita previa y comunicacion clara antes de cada visita.",
    priority: 0.7,
  },
  {
    href: "/contacto",
    label: "Contacto",
    title: "Contacto | Adam peluqueria a domicilio en Bilbao",
    description:
      "Contacta con Adam Messaoudi por WhatsApp, telefono o email para consultar disponibilidad, zona, precio y horario.",
    priority: 0.85,
  },
  {
    href: "/guias",
    label: "Guias",
    title: "Guias de peluqueria a domicilio en Bilbao | Adam",
    description:
      "Consejos practicos para preparar un servicio de peluqueria a domicilio en Bilbao y alrededores.",
    priority: 0.65,
  },
  {
    href: "/guias/preparar-corte-a-domicilio-bilbao",
    label: "Preparar cita",
    title: "Como preparar un corte de pelo a domicilio en Bilbao | Adam",
    description:
      "Guia practica para preparar una cita de peluqueria o barberia a domicilio en Bilbao: espacio, horario, comunicacion y expectativas.",
    priority: 0.6,
  },
  {
    href: "/aviso-legal",
    label: "Aviso legal",
    title: "Aviso legal | Adam peluqueria a domicilio",
    description: "Datos legales y condiciones generales del sitio web de Adam peluqueria a domicilio.",
    priority: 0.2,
  },
  {
    href: "/privacidad",
    label: "Privacidad",
    title: "Politica de privacidad | Adam peluqueria a domicilio",
    description: "Informacion sobre el tratamiento de datos personales en Adam peluqueria a domicilio.",
    priority: 0.2,
  },
  {
    href: "/cookies",
    label: "Cookies",
    title: "Politica de cookies | Adam peluqueria a domicilio",
    description:
      "Informacion sobre cookies, analitica, publicidad y consentimiento en Adam peluqueria a domicilio.",
    priority: 0.2,
  },
];

export type Service = {
  id: string;
  href: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  intent: string;
  price: string;
  duration: string;
  audience: string;
  image: string;
  imageAlt: string;
  includes: string[];
  notes: string[];
  faqs: Faq[];
};

export type Faq = {
  question: string;
  answer: string;
};

export const services: Service[] = [
  {
    id: "barberia-domicilio",
    href: "/servicios/barberia-a-domicilio",
    eyebrow: "Barberia a domicilio",
    title: "Corte masculino y barba sin desplazarte",
    shortTitle: "Barberia a domicilio",
    description:
      "Servicio para quien necesita mantener el corte o la barba en casa, sin desplazarse y con cita previa.",
    intent: "Para cortes masculinos, mantenimiento de barba y visitas puntuales en domicilio.",
    price: baseServicePrice,
    duration: "45-75 min aprox.",
    audience: "Particulares y citas individuales a domicilio.",
    image: "/2.jpeg",
    imageAlt: "Resultado de corte masculino usado como referencia del estilo de trabajo de Adam.",
    includes: [
      "Corte masculino con acabado adaptado al estilo del cliente",
      "Arreglo de barba bajo consulta",
      "Servicio exclusivamente a domicilio",
      "Confirmacion previa de zona, horario y precio final",
    ],
    notes: [
      "Precio base para otros servicios: desde 20 €.",
      "La disponibilidad depende de zona, horario y condiciones del domicilio.",
    ],
    faqs: [
      {
        question: "Se puede reservar solo arreglo de barba?",
        answer:
          "Si, se puede consultar por WhatsApp. Adam confirmara precio, zona y horario antes de cerrar la cita.",
      },
      {
        question: "El servicio se puede hacer en oficina?",
        answer:
          "Si es una cita individual para profesionales, el precio orientativo es 25 €. Si hay varias personas o un evento, conviene solicitar presupuesto.",
      },
    ],
  },
  {
    id: "mayores-movilidad",
    href: "/servicios/peluqueria-mayores-movilidad-reducida",
    eyebrow: "Mayores y movilidad reducida",
    title: "Peluqueria en casa para evitar desplazamientos",
    shortTitle: "Mayores y movilidad reducida",
    description:
      "Servicio pensado para personas mayores o con movilidad reducida que prefieren ser atendidas en casa, con una cita tranquila y sin esperas.",
    intent:
      "Para familias que buscan una solucion practica y facil de organizar en Bilbao y alrededores.",
    price: seniorCutAndBeardPrice,
    duration: "40-70 min aprox.",
    audience: "Personas mayores, movilidad reducida y familiares cuidadores.",
    image: "/7.jpeg",
    imageAlt: "Corte de pelo corto como referencia de un servicio para cliente adulto.",
    includes: [
      "Ritmo de trabajo pausado y explicacion clara antes de empezar",
      "Corte clasico o mantenimiento sencillo",
      "Coordinacion con un familiar o cuidador cuando sea necesario",
      "Confirmacion previa de accesibilidad, ubicacion aproximada y necesidades concretas",
    ],
    notes: [
      "Mayores, corte y barba: 30 €.",
      "El servicio no sustituye asistencia sanitaria ni cuidados personales especializados.",
    ],
    faqs: [
      {
        question: "Puede estar presente un familiar durante la cita?",
        answer:
          "Si. En muchos casos es recomendable que una persona de confianza ayude a explicar preferencias o necesidades.",
      },
      {
        question: "Que pasa si la persona se cansa durante el servicio?",
        answer:
          "La cita se plantea con calma. Si hace falta, se puede pausar y ajustar el ritmo segun la comodidad de la persona.",
      },
    ],
  },
  {
    id: "residencias",
    href: "/servicios/residencias",
    eyebrow: "Residencias",
    title: "Servicio organizado para centros y residencias",
    shortTitle: "Residencias",
    description:
      "Atencion para residencias, centros de dia o viviendas comunitarias que necesitan organizar varios servicios con un mismo desplazamiento.",
    intent:
      "Para equipos que buscan coordinar cortes y mantenimiento de imagen sin trasladar a los residentes.",
    price: variableScopeBudget,
    duration: "Segun numero de personas",
    audience: "Residencias, centros de dia y cuidadores profesionales.",
    image: "/1.jpeg",
    imageAlt: "Adam trabajando con material de barberia como imagen real de referencia.",
    includes: [
      "Planificacion previa de numero de personas y tiempos",
      "Servicio por turnos para facilitar la organizacion del centro",
      "Comunicacion clara sobre material, espacio y condiciones necesarias",
      "Presupuesto adaptado al volumen y desplazamiento",
    ],
    notes: [
      "Residencias y centros: solicitar presupuesto segun alcance.",
      "Si el centro exige documentacion concreta, debe indicarse antes de confirmar la visita.",
    ],
    faqs: [
      {
        question: "Se puede organizar una visita para varios residentes?",
        answer:
          "Si, bajo consulta previa. Es necesario conocer el numero aproximado de personas, horarios y condiciones del espacio.",
      },
      {
        question: "Hace falta una sala especifica?",
        answer:
          "Lo ideal es contar con una zona tranquila, iluminada y facil de limpiar. Adam confirmara los requisitos antes de cerrar la visita.",
      },
    ],
  },
  {
    id: "hoteles-oficinas-eventos",
    href: "/servicios/hoteles-oficinas-eventos",
    eyebrow: "Hoteles, oficinas y eventos",
    title: "Imagen preparada para momentos concretos",
    shortTitle: "Hoteles, oficinas y eventos",
    description:
      "Servicio bajo consulta para clientes alojados en hoteles, profesionales, equipos de trabajo, eventos privados o necesidades puntuales de imagen.",
    intent:
      "Para situaciones donde el tiempo, la ubicacion o la preparacion previa hacen mas util un servicio a domicilio.",
    price: "Profesionales: 25 €; grupos y eventos: solicitar presupuesto",
    duration: "Segun formato",
    audience: "Profesionales, hoteles, oficinas, equipos, eventos y visitas puntuales.",
    image: "/3.jpeg",
    imageAlt: "Adam realizando un servicio de barberia, imagen real de referencia para citas a domicilio.",
    includes: [
      "Confirmacion previa del lugar, acceso y horario disponible",
      "Servicio discreto para no interrumpir la actividad del espacio",
      "Adaptacion del formato a una persona o a varias citas seguidas",
      "Presupuesto segun numero de servicios, horario y desplazamiento",
    ],
    notes: [
      "Servicio para profesionales: 25 € en cita individual.",
      "Hoteles, oficinas, eventos o grupos: solicitar presupuesto si el alcance puede variar.",
    ],
    faqs: [
      {
        question: "Se puede pedir para un hotel si estoy de visita en Bilbao?",
        answer:
          "Se puede consultar. Es importante confirmar ubicacion, horario, acceso y si el hotel permite realizar el servicio en la habitacion o en un espacio adecuado.",
      },
      {
        question: "Se atienden eventos con varias personas?",
        answer:
          "Se puede valorar con antelacion. Adam necesitara saber numero de personas, tipo de servicio, tiempos y ubicacion.",
      },
    ],
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "Como se reserva un servicio a domicilio?",
    answer:
      "La forma mas rapida es escribir por WhatsApp indicando servicio, zona, dia aproximado y si hay alguna necesidad especial. Adam confirma disponibilidad antes de cerrar la cita.",
  },
  {
    question: "Se atiende fuera de Bilbao?",
    answer:
      "La zona general es Bilbao y alrededores. Adam confirma cada desplazamiento por WhatsApp antes de cerrar la cita.",
  },
  {
    question: "Cuales son los precios orientativos?",
    answer:
      "Precio base para otros servicios: desde 20 €. Mayores, corte y barba: 30 €. Servicio para profesionales: 25 €. Residencias, hoteles, oficinas, eventos o grupos: solicitar presupuesto si el alcance puede variar.",
  },
  {
    question: "Hay local abierto al publico?",
    answer:
      "No. Adam trabaja exclusivamente a domicilio, siempre con cita previa.",
  },
];

export const galleryImages = [
  {
    src: "/1.jpeg",
    alt: "Adam realizando un servicio de barberia con material de trabajo.",
    caption: "Trabajo real",
  },
  {
    src: "/2.jpeg",
    alt: "Corte masculino degradado como referencia del estilo de barberia de Adam.",
    caption: "Corte masculino",
  },
  {
    src: "/4.jpeg",
    alt: "Detalle de herramientas de barberia durante la preparacion de un servicio.",
    caption: "Detalle y preparacion",
  },
  {
    src: "/7.jpeg",
    alt: "Corte corto masculino terminado como referencia de acabado.",
    caption: "Acabado limpio",
  },
];

export const guidePosts = [
  {
    href: "/guias/preparar-corte-a-domicilio-bilbao",
    title: "Como preparar un corte de pelo a domicilio en Bilbao",
    description:
      "Una guia sencilla para elegir espacio, horario y detalles antes de una cita de peluqueria o barberia en casa.",
    readingTime: "4 min",
  },
];

export const footerLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/zonas", label: "Zonas de servicio" },
  { href: "/sobre-adam", label: "Sobre Adam" },
  { href: "/contacto", label: "Contacto" },
  { href: "/guias", label: "Guias" },
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
];

export function absoluteUrl(path = "/") {
  const base = siteUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? base : `${base}${normalized}`;
}

export function getRoute(path: string) {
  return siteRoutes.find((route) => route.href === path);
}

export function getService(id: Service["id"]) {
  const service = services.find((item) => item.id === id);

  if (!service) {
    throw new Error(`Unknown service: ${id}`);
  }

  return service;
}
