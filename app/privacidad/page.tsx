import type { Metadata } from "next";
import Link from "next/link";

import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
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
  title: "Privacidad | Adam: Barberia & Cuidado en Casa",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="section-shell">
      <div className="mx-auto max-w-3xl">
        <div className="card">
          <span className="eyebrow">Politica provisional</span>
          <h1 className="mt-5 text-4xl font-semibold">Privacidad</h1>
          <p className="mt-5 text-base leading-8">
            Esta politica de privacidad describe de forma provisional como pueden tratarse los datos
            personales de las personas que contacten con el titular mientras el proyecto se
            encuentra en fase de pruebas.
          </p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-[color:var(--text)]">
            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                Responsable del tratamiento
              </h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Nombre:</strong> {ownerName}
                </li>
                {taxId ? (
                  <li>
                    <strong>{taxIdLabel}:</strong> {taxId}
                  </li>
                ) : null}
                <li>
                  <strong>Direccion facilitada:</strong> {legalAddress}
                </li>
                <li>
                  <strong>Telefono:</strong>{" "}
                  <a
                    href={phoneUrl}
                    className="font-medium text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                  >
                    {phoneDisplay}
                  </a>
                </li>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <TrackedWhatsAppLink
                    href={whatsappUrl}
                    className="font-medium text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                  >
                    {phoneDisplay}
                  </TrackedWhatsAppLink>
                </li>
                <li>
                  <strong>Correo electronico:</strong>{" "}
                  {contactEmail || "Pendiente de definir antes del lanzamiento publico."}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                Que datos se pueden tratar
              </h2>
              <p className="mt-4">
                Esta web no incorpora formularios propios en esta fase. No obstante, si una persona
                contacta por WhatsApp o telefono, pueden tratarse datos como el nombre, el numero de
                telefono, el contenido del mensaje, la informacion necesaria para responder a la
                consulta y, en su caso, los datos basicos para organizar una cita.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">Finalidad</h2>
              <p className="mt-4">
                Los datos se utilizaran para atender solicitudes de informacion, responder mensajes,
                gestionar reservas o citas que se soliciten de forma directa y mantener una
                comunicacion relacionada con el servicio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">Base juridica</h2>
              <p className="mt-4">
                La base juridica del tratamiento sera el consentimiento de la persona usuaria al
                iniciar el contacto y, cuando proceda, la aplicacion de medidas precontractuales a
                peticion de la propia persona interesada.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">Conservacion</h2>
              <p className="mt-4">
                Los datos se conservaran durante el tiempo necesario para atender la consulta,
                gestionar la comunicacion o cumplir con las obligaciones legales que pudieran
                corresponder.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">Destinatarios</h2>
              <p className="mt-4">
                Con caracter general, no se cederan datos a terceros salvo obligacion legal. Si el
                contacto se realiza por WhatsApp, la comunicacion puede quedar sujeta a las
                condiciones y politicas de ese proveedor, lo que puede implicar tratamientos
                adicionales ajenos al titular de esta web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">Derechos</h2>
              <p className="mt-4">
                Puedes solicitar el acceso, rectificacion, supresion, oposicion, limitacion o
                portabilidad de tus datos utilizando los canales de contacto publicados en esta
                pagina. Mientras no exista un correo electronico especifico publicado, el canal
                operativo disponible es el telefono o WhatsApp indicado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                Cookies, analitica y publicidad
              </h2>
              <p className="mt-4">
                En esta fase la web esta pensada como una landing informativa sin formularios
                propios. Si en el futuro se instalan herramientas de analitica, etiquetas de Google
                Ads, Google Tag Manager, Meta Pixel u otras tecnologias similares, esta politica y
                el aviso de cookies deberan actualizarse antes de su activacion.
              </p>
            </section>

            {isPrelaunch ? (
              <section>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                  Nota sobre el estado del proyecto
                </h2>
                <p className="mt-4">
                  La informacion anterior se publica como version provisional de trabajo mientras el
                  proyecto se valida. Antes del lanzamiento publico conviene completar los datos de
                  contacto, definir un correo electronico y revisar el texto final segun la
                  actividad real que vaya a desarrollarse. Los datos fiscales se mantienen fuera de
                  la version publica mientras el sitio siga en pruebas.
                </p>
              </section>
            ) : null}
          </div>

          <Link href="/" className="btn-secondary mt-8">
            Volver a la landing
          </Link>
        </div>
      </div>
    </main>
  );
}
