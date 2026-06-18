import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactActions from "@/components/ContactActions";
import { ArrowIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbsJsonLd, createMetadata, localBusinessJsonLd } from "@/lib/seo";
import { guidePosts, siteRoutes } from "@/lib/site";

const route = siteRoutes.find((item) => item.href === "/guias")!;

export const metadata = createMetadata({
  title: route.title,
  description: route.description,
  path: route.href,
  image: "/4.jpeg",
});

const breadcrumbs = [
  { href: "/", label: "Inicio" },
  { href: "/guias", label: "Guias" },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={breadcrumbsJsonLd(breadcrumbs.map((item) => ({ name: item.label, href: item.href })))} />

      <main id="contenido" className="overflow-x-clip">
        <section className="section-shell">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <span className="eyebrow">Guias locales</span>
                <h1 className="hero-title mt-6">Contenido util para decidir mejor.</h1>
              </div>
              <div>
                <p className="hero-copy">
                  Las guias ayudan a captar busquedas organicas que todavia no son una reserva
                  directa, pero si muestran una necesidad real: preparar una cita, cuidar a una
                  persona mayor o coordinar un servicio en un centro.
                </p>
                <ContactActions className="mt-8" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {guidePosts.map((post) => (
              <article key={post.href} className="card">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  {post.readingTime}
                </p>
                <h2 className="mt-4 text-3xl font-semibold">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                  {post.description}
                </p>
                <Link
                  href={post.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]"
                >
                  Leer guia
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell pt-0">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Ideas futuras"
              title="Temas que pueden crecer sin crear contenido duplicado."
              description="Cada guia debe resolver una duda concreta y enlazar a servicios o zonas solo cuando tenga sentido."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "Como organizar peluqueria para una persona mayor en casa.",
                "Que preguntar antes de contratar peluqueria para una residencia.",
                  "Peluqueria en hoteles: que datos debe confirmar el cliente.",
              ].map((item) => (
                <div key={item} className="rounded-[18px] border p-4">
                  <p className="text-sm font-semibold leading-7 text-[color:var(--heading)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
