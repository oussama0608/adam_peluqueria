"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/zonas", label: "Zonas" },
  { href: "/sobre-adam", label: "Sobre Adam" },
  { href: "/guias", label: "Guias" },
  { href: "/contacto", label: "Contacto" },
];

type HeaderNavLinksProps = {
  variant: "desktop" | "mobile";
};

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function HeaderNavLinks({ variant }: HeaderNavLinksProps) {
  const pathname = usePathname();
  const isDesktop = variant === "desktop";

  return (
    <nav
      aria-label={isDesktop ? "Navegacion principal" : "Navegacion movil"}
      className={
        isDesktop
          ? "hidden items-center gap-2 lg:flex"
          : "mx-auto grid w-full max-w-[22.5rem] grid-cols-2 gap-3 border-t border-[color:var(--line)] px-4 py-3 sm:hidden"
      }
    >
      {navItems.map((item) => {
        const active = isActivePath(pathname, item.href);
        const baseClass = isDesktop
          ? "inline-flex min-h-10 items-center rounded-full px-3.5 py-2 text-sm font-semibold"
          : "rounded-full border px-3 py-2 text-center text-sm font-semibold";
        const stateClass = active
          ? "border-[color:var(--line-strong)] bg-[rgba(197,160,89,0.14)] text-[color:var(--accent-strong)] shadow-[inset_0_0_0_1px_rgba(197,160,89,0.22)]"
          : "border-[color:var(--line)] text-[color:var(--muted)] hover:border-[color:var(--line-strong)] hover:bg-[rgba(255,255,255,0.04)] hover:text-[color:var(--accent)]";

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`${baseClass} ${stateClass}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
