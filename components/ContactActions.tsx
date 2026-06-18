import TrackedContactLink from "@/components/TrackedContactLink";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { phoneDisplay, phoneUrl, whatsappUrl } from "@/lib/site";

type ContactActionsProps = {
  className?: string;
  compact?: boolean;
};

export default function ContactActions({ className = "", compact = false }: ContactActionsProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <TrackedContactLink
        channel="whatsapp"
        href={whatsappUrl}
        className={compact ? "btn-whatsapp min-h-0 px-4 py-3 text-sm" : "btn-whatsapp w-full sm:w-auto"}
      >
        <WhatsAppIcon />
        WhatsApp
      </TrackedContactLink>
      <TrackedContactLink
        channel="phone"
        href={phoneUrl}
        className={compact ? "btn-secondary min-h-0 px-4 py-3 text-sm" : "btn-secondary w-full sm:w-auto"}
      >
        <PhoneIcon />
        {compact ? "Llamar" : `Llamar al ${phoneDisplay}`}
      </TrackedContactLink>
    </div>
  );
}
