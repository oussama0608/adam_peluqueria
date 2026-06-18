import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import ConsentManager from "@/components/ConsentManager";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";
import { businessDescription, googleSiteVerification, siteName, siteUrl } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Peluqueria y barberia a domicilio en Bilbao | Adam",
    template: "%s",
  },
  description: businessDescription,
  applicationName: siteName,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName,
    title: "Peluqueria y barberia a domicilio en Bilbao | Adam",
    description: businessDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Peluqueria y barberia a domicilio en Bilbao | Adam",
    description: businessDescription,
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${cormorant.variable} font-sans`}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ConsentManager />
      </body>
    </html>
  );
}
