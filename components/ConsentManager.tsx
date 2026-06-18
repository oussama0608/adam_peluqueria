"use client";

import { useEffect, useState } from "react";

import { siteName } from "@/lib/site";

const CONSENT_KEY = "adam-cookie-consent-v1";
const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

type ConsentChoice = "granted" | "denied";

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    ((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });
}

function setConsent(choice: ConsentChoice, mode: "default" | "update") {
  ensureGtag();

  window.gtag?.("consent", mode, {
    ad_storage: choice,
    analytics_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    wait_for_update: 500,
  });
}

function loadGoogleTag() {
  if (!googleTagId || window.__adamGoogleTagLoaded) {
    return;
  }

  ensureGtag();
  window.__adamGoogleTagLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${googleTagId}`;
  document.head.appendChild(script);

  window.gtag?.("js", new Date());
  window.gtag?.("config", googleTagId, {
    anonymize_ip: true,
  });
}

export default function ConsentManager() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
    setConsent("denied", "default");

    if (stored === "granted") {
      setConsent("granted", "update");
      loadGoogleTag();
      setChoice("granted");
      return;
    }

    if (stored === "denied") {
      setConsent("denied", "update");
      setChoice("denied");
    }
  }, []);

  const saveChoice = (nextChoice: ConsentChoice) => {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setConsent(nextChoice, "update");

    if (nextChoice === "granted") {
      loadGoogleTag();
    }

    setChoice(nextChoice);
  };

  if (choice || !googleTagId) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-[18px] border border-[color:var(--border)] bg-[color:var(--background)] p-4 shadow-[var(--shadow-md)] sm:bottom-5 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[color:var(--primary)]">
            Cookies y medicion de {siteName}
          </p>
          <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">
            Usaremos analitica o publicidad solo si aceptas. Las etiquetas no esenciales se cargan
            despues de tu eleccion.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button className="btn-secondary min-h-0 px-4 py-3 text-sm" onClick={() => saveChoice("denied")}>
            Rechazar
          </button>
          <button className="btn-primary min-h-0 px-4 py-3 text-sm" onClick={() => saveChoice("granted")}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
