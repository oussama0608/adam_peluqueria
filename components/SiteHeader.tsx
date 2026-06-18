import Image from "next/image";
import Link from "next/link";

import ContactActions from "@/components/ContactActions";
import HeaderNavLinks from "@/components/HeaderNavLinks";
import { brandName, siteName } from "@/lib/site";

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
              sizes="80px"
              className="h-full w-full scale-x-150 object-contain"
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

        <HeaderNavLinks variant="desktop" />

        <div className="hidden sm:block">
          <ContactActions compact />
        </div>
      </div>

      <HeaderNavLinks variant="mobile" />
    </header>
  );
}
