"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

const WHATSAPP_CONVERSION_ID = "AW-17999953110/RQIjCJe0s5ocENb5hYdD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedWhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function TrackedWhatsAppLink({
  href,
  onClick,
  target,
  rel,
  ...props
}: TrackedWhatsAppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || typeof window === "undefined") {
      return;
    }

    if (typeof window.gtag !== "function") {
      return;
    }

    const usesModifier =
      event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    if (usesModifier || target === "_blank") {
      window.gtag("event", "conversion", {
        send_to: WHATSAPP_CONVERSION_ID,
      });
      return;
    }

    event.preventDefault();

    let hasNavigated = false;

    const navigateToWhatsApp = () => {
      if (hasNavigated) {
        return;
      }

      hasNavigated = true;
      window.location.assign(href);
    };

    window.gtag("event", "conversion", {
      send_to: WHATSAPP_CONVERSION_ID,
      event_callback: navigateToWhatsApp,
    });

    window.setTimeout(navigateToWhatsApp, 700);
  };

  return <a {...props} href={href} onClick={handleClick} rel={rel} target={target} />;
}
