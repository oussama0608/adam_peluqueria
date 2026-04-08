import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { seoTitle, siteDescription, siteName, siteUrl } from "@/lib/site";

const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "peluquero a domicilio en Bilbao",
    "barbería a domicilio Bilbao",
    "corte de pelo en casa Bilbao",
    "peluquería para personas mayores Bilbao",
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
  themeColor: "#FFFFFF",
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
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
