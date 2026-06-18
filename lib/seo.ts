import type { Metadata } from "next";

import {
  absoluteUrl,
  brandName,
  businessDescription,
  confirmedBilbaoAreas,
  confirmedPrimaryZone,
  galleryImages,
  googleMapsUrl,
  googleSiteVerification,
  phoneDisplay,
  publicServiceAddress,
  serviceAreaSummary,
  services,
  siteName,
  siteUrl,
  socialProfiles,
  type Faq,
  type Service,
} from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path,
  image = "/1.jpeg",
}: PageMetadataInput): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: absoluteUrl(path),
      siteName,
      title,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 738,
          height: 1302,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
    verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "LocalBusiness"],
    "@id": `${absoluteUrl("/")}#localbusiness`,
    name: siteName,
    alternateName: brandName,
    description: businessDescription,
    url: absoluteUrl("/"),
    telephone: phoneDisplay,
    image: galleryImages.map((image) => absoluteUrl(image.src)),
    priceRange: "EUR",
    address: {
      "@type": "PostalAddress",
      addressLocality: confirmedPrimaryZone,
      addressRegion: "Bizkaia",
      addressCountry: "ES",
      streetAddress: publicServiceAddress,
    },
    areaServed: [
      {
        "@type": "City",
        name: confirmedPrimaryZone,
      },
      ...confirmedBilbaoAreas.map((name) => ({
        "@type": "Place",
        name,
      })),
    ],
    serviceArea: serviceAreaSummary,
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      name: service.shortTitle,
      description: service.description,
      itemOffered: {
        "@type": "Service",
        name: service.shortTitle,
        areaServed: confirmedPrimaryZone,
      },
    })),
    sameAs: socialProfiles,
    hasMap: googleMapsUrl || undefined,
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(service.href)}#service`,
    name: service.shortTitle,
    description: service.description,
    provider: {
      "@id": `${absoluteUrl("/")}#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: confirmedPrimaryZone,
    },
    serviceType: service.shortTitle,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        description: service.price,
      },
    },
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbsJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}
