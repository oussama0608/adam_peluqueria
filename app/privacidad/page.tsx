import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacidad | Peluquero a domicilio en Bilbao",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="section-shell">
      <div className="mx-auto max-w-3xl">
        <div className="card">
          <span className="eyebrow">Placeholder legal</span>
          <h1 className="mt-5 text-4xl font-semibold">Privacidad</h1>
          <p className="mt-5 text-base leading-8">
            Esta página está preparada para añadir la política de privacidad final: responsable
            del tratamiento, finalidad de los datos, base legal, conservación y derechos de las
            personas usuarias.
          </p>
          <Link href="/" className="btn-secondary mt-8">
            Volver a la landing
          </Link>
        </div>
      </div>
    </main>
  );
}

