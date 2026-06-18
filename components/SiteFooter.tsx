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
    <footer className="section-shell pt-0">
      <div className="mx-auto max-w-6xl border-t border-[color:var(--line)] pt-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
              {siteName}
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              Peluqueria y barberia a domicilio con base en Bilbao. Servicio local, con cita
              previa y confirmacion honesta de zona, horario y condiciones.
            </p>
            <ContactActions className="mt-5" compact />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Navegacion
            </p>
            <div className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Contacto
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{phoneDisplay}</p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{contactEmail}</p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{openingHours}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Google Maps
            </p>
            {googleMapsUrl ? (
              <a
                href={googleMapsUrl}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--heading)] hover:text-[color:var(--accent)]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MapPinIcon />
                Ver perfil en Google Maps
              </a>
            ) : (
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                TODO: añadir URL del Perfil de Empresa en Google cuando este verificado.
              </p>
            )}
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{serviceAreaSummary}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
