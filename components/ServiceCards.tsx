import Image from "next/image";
import Link from "next/link";

import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { services } from "@/lib/site";

type ServiceCardsProps = {
  limit?: number;
};

export default function ServiceCards({ limit }: ServiceCardsProps) {
  const visibleServices = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {visibleServices.map((service) => (
        <article key={service.id} className="card overflow-hidden p-0">
          <div className="relative aspect-[4/3]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              {service.eyebrow}
            </p>
            <h3 className="mt-3 text-3xl leading-tight text-[color:var(--heading)]">
              {service.shortTitle}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              {service.description}
            </p>
            <ul className="mt-5 grid gap-3">
              {[service.price, service.duration].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium">
                  <CheckIcon />
                  <span className="text-[color:var(--heading)]">{item}</span>
                </li>
              ))}
            </ul>
            <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
              Ver servicio
              <ArrowIcon />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
