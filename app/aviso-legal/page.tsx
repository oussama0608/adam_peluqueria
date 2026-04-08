import type { Metadata } from "next";
import Link from "next/link";

import {
  contactEmail,
  isPrelaunch,
  legalAddress,
  ownerName,
  phoneDisplay,
  phoneUrl,
  taxId,
  taxIdLabel,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal | Peluquero a domicilio en Bilbao",
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalPage() {
  return (
    <main className="section-shell">
      <div className="mx-auto max-w-3xl">
        <div className="card">
          <span className="eyebrow">Informacion legal provisional</span>
          <h1 className="mt-5 text-4xl font-semibold">Aviso legal</h1>
          <p className="mt-5 text-base leading-8">
            Este sitio web se encuentra en fase de pruebas y validacion previa al lanzamiento
            definitivo. La informacion incluida en esta pagina tiene caracter provisional y debe
            revisarse antes de iniciar actividad comercial estable o campanas de pago.
          </p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-[color:var(--text)]">
            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                Titular del sitio web
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Nombre:</strong> {ownerName}
                </li>
                <li>
                  <strong>{taxIdLabel}:</strong> {taxId}
                </li>
                <li>
                  <strong>Direccion facilitada:</strong> {legalAddress}
                </li>
                <li>
                  <strong>Telefono de contacto:</strong>{" "}
                  <a
                    href={phoneUrl}
                    className="font-medium text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                  >
                    {phoneDisplay}
                  </a>
                </li>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href={whatsappUrl}
                    className="font-medium text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                  >
                    {phoneDisplay}
                  </a>
                </li>
                <li>
                  <strong>Correo electronico:</strong>{" "}
                  {contactEmail || "Pendiente de definir antes del lanzamiento publico."}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">Objeto del sitio</h2>
              <p className="mt-4">
                Esta web tiene como finalidad informar sobre un posible servicio de peluqueria y
                barberia a domicilio en Bilbao y facilitar un primer contacto directo por telefono o
                WhatsApp. En esta fase no existe contratacion automatica ni pasarela de pago dentro
                del sitio.
              </p>
            </section>

            {isPrelaunch ? (
              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                  Estado actual del proyecto
                </h2>
                <p className="mt-4">
                  Segun la informacion facilitada por el titular, el proyecto esta actualmente en
                  fase de pruebas y todavia no se ha comunicado alta como autonomo ni la existencia
                  de una sociedad para esta actividad. Antes del lanzamiento comercial definitivo,
                  este aviso legal debe completarse con el domicilio completo, el correo electronico
                  de contacto y los datos fiscales o mercantiles que resulten aplicables.
                </p>
              </section>
            ) : null}

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                Propiedad intelectual
              </h2>
              <p className="mt-4">
                Los textos, disenos, imagenes y demas contenidos de esta web estan protegidos por la
                normativa aplicable. No se permite su reproduccion, distribucion o transformacion
                sin autorizacion previa del titular, salvo en los casos legalmente permitidos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">Responsabilidad</h2>
              <p className="mt-4">
                El titular procurara que la informacion del sitio sea correcta y este actualizada,
                pero no garantiza la ausencia de errores o cambios posteriores. El uso de la web se
                realiza bajo la responsabilidad de cada persona usuaria.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">Legislacion aplicable</h2>
              <p className="mt-4">
                Este sitio se rige, con caracter general, por la normativa espanola que resulte de
                aplicacion.
              </p>
            </section>
          </div>

          <Link href="/" className="btn-secondary mt-8">
            Volver a la landing
          </Link>
        </div>
      </div>
    </main>
  );
}
