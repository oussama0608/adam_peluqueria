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
  siteRoutes,
  taxId,
  taxIdLabel,
  whatsappUrl,
} from "@/lib/site";

const route = siteRoutes.find((item) => item.href === "/aviso-legal")!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
});

const breadcrumbs = [
  { href: "/", label: "Inicio" },
  { href: "/aviso-legal", label: "Aviso legal" },
];

export default function LegalPage() {
  return (
    <>
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="section-shell">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="card">
            <span className="eyebrow">Informacion legal</span>
            <h1 className="mt-5 text-4xl font-semibold">Aviso legal</h1>
            <p className="mt-5 text-base leading-8">
              Esta pagina recoge los datos legales del sitio web. Algunos campos quedan marcados
              como TODO porque deben confirmarse con informacion real del titular antes de publicar
              la version definitiva.
            </p>

            <div className="mt-8 space-y-8 text-sm leading-7 text-[color:var(--text)]">
              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                  Titular del sitio web
                </h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <strong>Nombre legal:</strong> {legalName}
                  </li>
                  <li>
                    <strong>{taxIdLabel}:</strong> {taxId}
                  </li>
                  <li>
                    <strong>Direccion legal:</strong> {legalAddress}
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
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">Objeto del sitio</h2>
                <p className="mt-4">
                  La web informa sobre servicios de peluqueria y barberia a domicilio en Bilbao y
                  municipios cercanos bajo confirmacion, y facilita contacto por telefono o
                  WhatsApp. No existe contratacion automatica ni pasarela de pago en el sitio.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                  Condiciones del servicio
                </h2>
                <p className="mt-4">
                  Los precios, horarios, desplazamientos y condiciones se confirman antes de cerrar
                  cada cita. TODO: confirmar tarifas definitivas, suplementos de desplazamiento,
                  horarios y municipios atendidos de forma habitual.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                  Propiedad intelectual
                </h2>
                <p className="mt-4">
                  Los textos, imagenes, disenos y contenidos de esta web pertenecen a su titular o
                  se usan con autorizacion. No se permite su reproduccion, distribucion o
                  transformacion sin permiso previo, salvo en los casos legalmente permitidos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">Responsabilidad</h2>
                <p className="mt-4">
                  El titular procura mantener la informacion actualizada, pero puede haber cambios
                  en disponibilidad, precios, zonas o condiciones. El usuario debe confirmar los
                  datos esenciales antes de contratar o reservar cualquier servicio.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">Legislacion aplicable</h2>
                <p className="mt-4">
                  Este sitio se rige por la normativa espanola que resulte de aplicacion.
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
