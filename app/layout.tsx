import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { seoTitle, siteDescription, siteName, siteUrl } from "@/lib/site";

const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

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
  title: seoTitle,
  description: siteDescription,
  applicationName: siteName,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "barberia premium a domicilio en Bilbao",
    "peluqueria a domicilio Bilbao centro",
    "corte ejecutivo a domicilio Bilbao",
    "barberia para mayores en Bilbao",
    "servicio peluqueria oficina Bilbao",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName,
    title: seoTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: siteDescription,
  },
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
      <head>
        {googleTagId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleTagId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className={`${manrope.variable} ${cormorant.variable} font-sans`}>{children}</body>
    </html>
  );
}
