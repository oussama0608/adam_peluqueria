import Link from "next/link";

import ContactActions from "@/components/ContactActions";
import { MapPinIcon } from "@/components/Icons";
import {
  contactEmail,
  footerLinks,
  googleMapsUrl,
  openingHours,
  phoneDisplay,
  serviceAreaSummary,
  siteName,
} from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="section-shell bg-[color:var(--primary)] text-[color:var(--background)]">
      <div className="mx-auto max-w-6xl border-t border-[color:var(--surface)] pt-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--background)]">
              {siteName}
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--surface)]">
              Peluqueria y barberia exclusivamente a domicilio en Bilbao y alrededores. Servicio
              con cita previa y confirmacion de zona, horario y condiciones.
            </p>
            <ContactActions className="mt-5" compact />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--background)]">
              Navegacion
            </p>
            <div className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[color:var(--surface)] hover:text-[color:var(--background)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--background)]">
              Contacto
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--surface)]">{phoneDisplay}</p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--surface)]">{contactEmail}</p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--surface)]">{openingHours}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--background)]">
              Google Maps
            </p>
            {googleMapsUrl ? (
              <a
                href={googleMapsUrl}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--surface)] hover:text-[color:var(--background)]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MapPinIcon />
                Ver perfil en Google Maps
              </a>
            ) : (
              <p className="mt-4 text-sm leading-7 text-[color:var(--surface)]">
                Perfil de Google Maps pendiente de enlazar cuando exista la URL definitiva.
              </p>
            )}
            <p className="mt-3 text-sm leading-7 text-[color:var(--surface)]">{serviceAreaSummary}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
