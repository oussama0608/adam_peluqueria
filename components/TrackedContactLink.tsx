"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

const conversionIds = {
  whatsapp: process.env.NEXT_PUBLIC_GOOGLE_WHATSAPP_CONVERSION_ID,
  phone: process.env.NEXT_PUBLIC_GOOGLE_PHONE_CONVERSION_ID,
};

declare global {
  interface Window {
    __adamGoogleTagLoaded?: boolean;
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

type ContactChannel = "whatsapp" | "phone";

type TrackedContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  channel: ContactChannel;
  href: string;
};

export default function TrackedContactLink({
  channel,
  href,
  onClick,
  target,
  rel,
  ...props
}: TrackedContactLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      typeof window === "undefined" ||
      !window.__adamGoogleTagLoaded ||
      typeof window.gtag !== "function"
    ) {
      return;
    }

    const usesModifier =
      event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    window.gtag("event", "contact_click", {
      contact_method: channel,
      link_url: href,
    });

    const conversionId = conversionIds[channel];

    if (!conversionId || usesModifier || target === "_blank") {
      return;
    }

    event.preventDefault();

    let hasNavigated = false;

    const navigate = () => {
      if (hasNavigated) {
        return;
      }

      hasNavigated = true;
      window.location.assign(href);
    };

    window.gtag("event", "conversion", {
      send_to: conversionId,
      event_callback: navigate,
      event_timeout: 700,
    });

    window.setTimeout(navigate, 700);
  };

  return <a {...props} href={href} onClick={handleClick} rel={rel} target={target} />;
}
