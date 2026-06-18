import Image from "next/image";
import Link from "next/link";

import ContactActions from "@/components/ContactActions";
import { brandName, siteName } from "@/lib/site";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/zonas", label: "Zonas" },
  { href: "/sobre-adam", label: "Sobre Adam" },
  { href: "/guias", label: "Guias" },
  { href: "/contacto", label: "Contacto" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[rgba(10,10,10,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${siteName} - inicio`}
        >
          <span className="logo-mark" aria-hidden="true">
            <Image
              src="/logo-official-barbershop-nobg.png"
              alt=""
              width={500}
              height={500}
              priority
              sizes="44px"
              className="h-full w-full object-contain"
            />
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
              {brandName}
            </span>
            <span className="mt-1 block text-sm font-semibold text-[color:var(--heading)]">
              Peluqueria a domicilio
            </span>
          </span>
        </Link>

        <nav aria-label="Navegacion principal" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <ContactActions compact />
        </div>
      </div>

      <nav
        aria-label="Navegacion movil"
        className="mx-auto grid w-full max-w-[22.5rem] grid-cols-2 gap-3 border-t border-[color:var(--line)] px-4 py-3 sm:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-[color:var(--line)] px-3 py-2 text-center text-sm font-semibold text-[color:var(--heading)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
