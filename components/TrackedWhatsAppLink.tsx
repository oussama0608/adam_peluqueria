"use client";

import type { AnchorHTMLAttributes } from "react";

import TrackedContactLink from "@/components/TrackedContactLink";

type TrackedWhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function TrackedWhatsAppLink(props: TrackedWhatsAppLinkProps) {
  return <TrackedContactLink {...props} channel="whatsapp" />;
}
