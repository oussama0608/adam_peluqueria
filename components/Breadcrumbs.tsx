import Link from "next/link";

type BreadcrumbItem = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Ruta de navegacion" className="mb-8 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-[color:var(--muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-[color:var(--primary)]">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[color:var(--accent)]">
                  {item.label}
                </Link>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
