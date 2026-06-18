const env = (key: string) => process.env[key]?.trim() ?? "";

export const siteUrl = env("NEXT_PUBLIC_SITE_URL") || "https://adampeluqueria.com";
export const siteName = "Adam Peluqueria a domicilio";
export const brandName = "Adam";
export const businessDescription =
  "Barberia y peluqueria a domicilio en Bilbao para particulares, personas mayores, residencias, hoteles, oficinas y eventos.";

export const phoneDisplay = "+34 674 20 57 19";
export const phoneUrl = "tel:+34674205719";
export const whatsappUrl =
  "https://wa.me/34674205719?text=Hola%20Adam,%20quiero%20consultar%20disponibilidad%20para%20un%20servicio%20de%20peluqueria%20o%20barberia%20a%20domicilio.";

export const contactEmail =
  env("NEXT_PUBLIC_CONTACT_EMAIL") || "TODO: confirmar email publico de contacto";
export const googleMapsUrl = env("NEXT_PUBLIC_GOOGLE_MAPS_URL");
export const googleSiteVerification = env("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION");

export const legalName = env("NEXT_PUBLIC_LEGAL_NAME") || "TODO: confirmar nombre legal del titular";
export const taxIdLabel = "NIF/NIE";
export const taxId = env("LEGAL_TAX_ID") || "TODO: confirmar NIF/NIE";
export const legalAddress =
  env("NEXT_PUBLIC_LEGAL_ADDRESS") || "TODO: confirmar direccion legal o domicilio profesional";
export const publicServiceAddress =
  env("NEXT_PUBLIC_SERVICE_ADDRESS") || "Servicio a domicilio con base operativa en Bilbao";
export const openingHours =
  env("NEXT_PUBLIC_OPENING_HOURS") || "TODO: confirmar horarios reales de atencion y reservas";
export const professionalCredentials =
  env("NEXT_PUBLIC_PROFESSIONAL_CREDENTIALS") ||
  "TODO: confirmar formacion, experiencia y credenciales profesionales publicables";

export const confirmedPrimaryZone = "Bilbao";
export const confirmedBilbaoAreas = ["Abando", "Indautxu", "Deusto", "Santutxu", "Casco Viejo"];
export const nearbyZonesToConfirm = ["Barakaldo", "Getxo", "Basauri", "Portugalete"];
export const serviceAreaSummary =
  "Bilbao y municipios cercanos bajo confirmacion de disponibilidad y desplazamiento.";

export const socialProfiles = googleMapsUrl ? [googleMapsUrl] : [];

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
    title: "Peluqueria y barberia a domicilio en Bilbao | Adam",
    description:
      "Servicio de peluqueria y barberia a domicilio en Bilbao para particulares, mayores, residencias, hoteles, oficinas y eventos.",
    priority: 1,
  },
  {
    href: "/servicios",
    label: "Servicios",
    title: "Servicios de peluqueria y barberia a domicilio en Bilbao | Adam",
    description:
      "Cortes, arreglo de barba y servicios adaptados para domicilios, residencias, hoteles, oficinas y eventos en Bilbao.",
    priority: 0.9,
  },
  {
    href: "/servicios/barberia-a-domicilio",
    label: "Barberia",
    title: "Barberia a domicilio en Bilbao | Adam",
    description:
      "Corte masculino y arreglo de barba a domicilio en Bilbao, con cita previa y confirmacion de zona por WhatsApp.",
    priority: 0.85,
  },
  {
    href: "/servicios/peluqueria-mayores-movilidad-reducida",
    label: "Mayores",
    title: "Peluqueria para mayores y movilidad reducida en Bilbao | Adam",
    description:
      "Servicio de peluqueria a domicilio para personas mayores o con movilidad reducida en Bilbao, pensado para evitar desplazamientos.",
    priority: 0.85,
  },
  {
    href: "/servicios/residencias",
    label: "Residencias",
    title: "Peluqueria para residencias en Bilbao | Adam",
    description:
      "Servicio de peluqueria y barberia para residencias y centros de cuidado en Bilbao, con organizacion previa y atencion por turnos.",
    priority: 0.8,
  },
  {
    href: "/servicios/hoteles-oficinas-eventos",
    label: "Hoteles y eventos",
    title: "Peluqueria para hoteles, oficinas y eventos en Bilbao | Adam",
    description:
      "Servicio de peluqueria y barberia para hoteles, oficinas, equipos y eventos en Bilbao, con disponibilidad bajo consulta.",
    priority: 0.8,
  },
  {
    href: "/zonas",
    label: "Zonas",
    title: "Zonas de servicio de peluqueria a domicilio en Bilbao | Adam",
    description:
      "Cobertura principal en Bilbao y municipios cercanos bajo consulta: Barakaldo, Getxo, Basauri y Portugalete pendientes de confirmacion.",
    priority: 0.75,
  },
  {
    href: "/sobre-adam",
    label: "Sobre Adam",
    title: "Sobre Adam | Peluqueria a domicilio en Bilbao",
    description:
      "Conoce el enfoque de Adam: un servicio de peluqueria y barberia a domicilio claro, cercano y adaptado al contexto de cada cliente.",
    priority: 0.7,
  },
  {
    href: "/contacto",
    label: "Contacto",
    title: "Contacto | Adam peluqueria a domicilio en Bilbao",
    description:
      "Contacta por WhatsApp o telefono para consultar disponibilidad, zona, precio y horario de peluqueria a domicilio en Bilbao.",
    priority: 0.85,
  },
  {
    href: "/guias",
    label: "Guias",
    title: "Guias de peluqueria a domicilio en Bilbao | Adam",
    description:
      "Consejos practicos para preparar un servicio de peluqueria a domicilio, cuidar a personas mayores y organizar visitas profesionales.",
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
      "Servicio para quien necesita mantener el corte o la barba con comodidad, sin depender de huecos en una barberia ni perder tiempo en desplazamientos.",
    intent: "Para cortes masculinos, mantenimiento de barba y visitas puntuales en casa u oficina.",
    price: "Desde 40 EUR",
    duration: "45-75 min aprox.",
    audience: "Particulares, profesionales y citas en domicilio u oficina.",
    image: "/2.jpeg",
    imageAlt: "Resultado de corte masculino realizado en barberia, usado como referencia del estilo de trabajo de Adam.",
    includes: [
      "Corte masculino con acabado adaptado al estilo del cliente",
      "Arreglo de barba bajo consulta",
      "Preparacion del espacio y recogida basica al terminar",
      "Confirmacion previa de zona, horario y precio final",
    ],
    notes: [
      "TODO: confirmar si el precio incluye desplazamiento fuera de Bilbao.",
      "No se afirma titulacion, seguro ni certificaciones hasta tener documentacion real.",
    ],
    faqs: [
      {
        question: "Se puede reservar solo arreglo de barba?",
        answer:
          "Si, se puede consultar por WhatsApp. Adam confirmara si compensa como servicio independiente segun zona y horario.",
      },
      {
        question: "El servicio se puede hacer en oficina?",
        answer:
          "Si el espacio permite trabajar con privacidad, luz y limpieza basica, se puede valorar una visita en oficina.",
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
      "Para familias que buscan una solucion practica, respetuosa y facil de organizar en Bilbao.",
    price: "Desde 30 EUR",
    duration: "40-70 min aprox.",
    audience: "Personas mayores, movilidad reducida y familiares cuidadores.",
    image: "/7.jpeg",
    imageAlt: "Corte de pelo corto como referencia de un servicio de peluqueria masculina para cliente adulto.",
    includes: [
      "Ritmo de trabajo pausado y explicacion clara antes de empezar",
      "Corte clasico o mantenimiento sencillo",
      "Coordinacion con un familiar o cuidador cuando sea necesario",
      "Confirmacion previa de accesibilidad, direccion y necesidades concretas",
    ],
    notes: [
      "TODO: confirmar experiencia especifica con movilidad reducida, residencias o cuidados.",
      "El servicio no sustituye asistencia sanitaria ni cuidados personales especializados.",
    ],
    faqs: [
      {
        question: "Puede estar presente un familiar durante la cita?",
        answer:
          "Si. De hecho, en muchos casos es recomendable que una persona de confianza ayude a explicar preferencias o necesidades.",
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
    price: "Presupuesto bajo consulta",
    duration: "Segun numero de personas",
    audience: "Residencias, centros de dia y cuidadores profesionales.",
    image: "/1.jpeg",
    imageAlt: "Adam trabajando con material de barberia, usado como imagen real de referencia profesional.",
    includes: [
      "Planificacion previa de numero de personas y tiempos",
      "Servicio por turnos para facilitar la organizacion del centro",
      "Comunicacion clara sobre material, espacio y condiciones necesarias",
      "Presupuesto adaptado al volumen y desplazamiento",
    ],
    notes: [
      "TODO: confirmar documentacion profesional requerida por residencias.",
      "TODO: confirmar si existe seguro de responsabilidad civil antes de mencionarlo publicamente.",
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
      "Servicio bajo consulta para clientes alojados en hoteles, equipos de trabajo, eventos privados o necesidades puntuales de imagen.",
    intent:
      "Para situaciones donde el tiempo, la ubicacion o la preparacion previa hacen mas util un servicio desplazado.",
    price: "Presupuesto bajo consulta",
    duration: "Segun formato",
    audience: "Hoteles, oficinas, equipos, eventos y visitas puntuales.",
    image: "/3.jpeg",
    imageAlt: "Adam realizando un servicio de barberia, imagen real de referencia para citas profesionales.",
    includes: [
      "Confirmacion previa del lugar, acceso y horario disponible",
      "Servicio discreto para no interrumpir la actividad del espacio",
      "Adaptacion del formato a una persona o a varias citas seguidas",
      "Presupuesto segun numero de servicios, horario y desplazamiento",
    ],
    notes: [
      "TODO: confirmar disponibilidad real para hoteles, oficinas y eventos.",
      "TODO: definir si existen suplementos por urgencia, festivos o desplazamiento.",
    ],
    faqs: [
      {
        question: "Se puede pedir para un hotel si estoy de visita en Bilbao?",
        answer:
          "Se puede consultar. Es importante confirmar direccion, horario, acceso y si el hotel permite realizar el servicio en la habitacion o en un espacio adecuado.",
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
      "Bilbao es la zona principal. Barakaldo, Getxo, Basauri y Portugalete quedan pendientes de confirmacion segun disponibilidad y desplazamiento.",
  },
  {
    question: "Los precios son cerrados?",
    answer:
      "Los precios publicados son orientativos y deben confirmarse antes de la cita, especialmente si hay desplazamiento, varios servicios o una visita a residencia, hotel, oficina o evento.",
  },
];

export const galleryImages = [
  {
    src: "/1.jpeg",
    alt: "Adam realizando un servicio de barberia con material profesional.",
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
