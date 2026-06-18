import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsJsonLd, createMetadata } from "@/lib/seo";
import {
  contactEmail,
  legalAddress,
  legalName,
  phoneDisplay,
  phoneUrl,
  serviceAreaSummary,
  siteRoutes,
  taxId,
  taxIdLabel,
  whatsappUrl,
} from "@/lib/site";

const route = siteRoutes.find((item) => item.href === "/privacidad")!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
});

const breadcrumbs = [
  { href: "/", label: "Inicio" },
  { href: "/privacidad", label: "Privacidad" },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="section-shell">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="card">
            <span className="eyebrow">Privacidad</span>
            <h1 className="mt-5 text-4xl font-semibold">Politica de privacidad</h1>
            <p className="mt-5 text-base leading-8">
              Esta politica explica como se tratan los datos personales cuando una persona contacta
              con Adam Peluqueria a domicilio por WhatsApp, telefono o email.
            </p>

            <div className="mt-8 space-y-8 text-sm leading-7 text-[color:var(--text)]">
              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                  Responsable del tratamiento
                </h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <strong>Nombre legal:</strong> {legalName}
                  </li>
                  <li>
                    <strong>{taxIdLabel}:</strong> {taxId}
                  </li>
                  <li>
                    <strong>Direccion fiscal:</strong>{" "}
                    {legalAddress ||
                      "Pendiente de confirmar solo si legalmente es imprescindible publicarla. No existe local abierto al publico."}
                  </li>
                  <li>
                    <strong>Telefono:</strong>{" "}
                    <a href={phoneUrl} className="font-medium text-[color:var(--heading)] hover:text-[color:var(--accent)]">
                      {phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <strong>WhatsApp:</strong>{" "}
                    <a href={whatsappUrl} className="font-medium text-[color:var(--heading)] hover:text-[color:var(--accent)]">
                      {phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <strong>Email:</strong> {contactEmail}
                  </li>
                  <li>
                    <strong>Zona general:</strong> {serviceAreaSummary}
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">Datos tratados</h2>
                <p className="mt-4">
                  Si contactas por WhatsApp, telefono o email, pueden tratarse datos como nombre,
                  telefono, contenido del mensaje, ubicacion aproximada de servicio, horario
                  solicitado y cualquier informacion necesaria para responder o coordinar una cita.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">Finalidad</h2>
                <p className="mt-4">
                  Los datos se usan para responder consultas, confirmar disponibilidad, organizar
                  citas, comunicar cambios relacionados con el servicio y atender obligaciones
                  legales cuando correspondan.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">Base juridica</h2>
                <p className="mt-4">
                  La base juridica es el consentimiento de la persona que inicia el contacto y, si
                  se avanza hacia una reserva, la aplicacion de medidas precontractuales solicitadas
                  por esa persona.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">Conservacion</h2>
                <p className="mt-4">
                  Los datos se conservaran durante el tiempo necesario para gestionar la consulta o
                  cita y, posteriormente, durante los plazos exigidos por obligaciones legales si
                  existieran.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">Destinatarios</h2>
                <p className="mt-4">
                  No se cederan datos a terceros salvo obligacion legal. Si usas WhatsApp, la
                  comunicacion queda sujeta tambien a las condiciones y politicas de ese proveedor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">Derechos</h2>
                <p className="mt-4">
                  Puedes solicitar acceso, rectificacion, supresion, oposicion, limitacion o
                  portabilidad escribiendo a {contactEmail} o usando los canales de contacto
                  publicados.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                  Analitica, publicidad y medicion de contactos
                </h2>
                <p className="mt-4">
                  La web esta preparada para medir clics en WhatsApp y telefono. Las etiquetas de
                  analitica o publicidad no esenciales solo se cargan si la persona acepta cookies
                  mediante el banner de consentimiento. Consulta la{" "}
                  <Link href="/cookies" className="font-medium text-[color:var(--heading)] hover:text-[color:var(--accent)]">
                    politica de cookies
                  </Link>{" "}
                  para mas informacion.
                </p>
              </section>
            </div>

            <Link href="/" className="btn-secondary mt-8">
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
