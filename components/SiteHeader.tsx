import Image from "next/image";
import Link from "next/link";

import ContactActions from "@/components/ContactActions";
import HeaderNavLinks from "@/components/HeaderNavLinks";
import { brandName, siteName } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--primary)] shadow-[var(--shadow-sm)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${siteName} - inicio`}
        >
          <span className="logo-mark" aria-hidden="true">
            <Image
              src="/adam-barber-pole-header.png"
              alt=""
              width={112}
              height={112}
              priority
              sizes="56px"
              className="brand-pole h-full w-full object-contain"
            />
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--background)]">
              {brandName}
            </span>
            <span className="mt-1 block text-sm font-semibold text-[color:var(--surface)]">
              Peluqueria a domicilio
            </span>
          </span>
        </Link>

        <HeaderNavLinks variant="desktop" />

        <div className="hidden sm:block">
          <ContactActions compact />
        </div>
      </div>

      <HeaderNavLinks variant="mobile" />
    </header>
  );
}
