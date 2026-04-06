import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal | Peluquero a domicilio en Bilbao",
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalPage() {
  return (
    <main className="section-shell">
      <div className="mx-auto max-w-3xl">
        <div className="card">
          <span className="eyebrow">Placeholder legal</span>
          <h1 className="mt-5 text-4xl font-semibold">Aviso legal</h1>
          <p className="mt-5 text-base leading-8">
            Esta página está lista como placeholder para completar después con los datos legales
            definitivos del negocio: titular, NIF, dirección, contacto y condiciones de uso.
          </p>
          <Link href="/" className="btn-secondary mt-8">
            Volver a la landing
          </Link>
        </div>
      </div>
    </main>
  );
}

