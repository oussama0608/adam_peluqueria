type IconProps = {
  className?: string;
};

const baseClass = "h-5 w-5 fill-none stroke-current stroke-2";

export function PhoneIcon({ className = baseClass }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path d="M5 4h4l2 5-2.5 2.5a16 16 0 0 0 4 4L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = baseClass }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path d="M20 11.5A8.5 8.5 0 0 1 7.4 18.9L4 20l1.1-3.2A8.5 8.5 0 1 1 20 11.5Z" />
      <path d="m9.2 8.7.8-.2c.2 0 .4 0 .6.4l.7 1.6c.1.2.1.4 0 .6l-.3.5c-.1.1-.1.3 0 .4.3.5.8 1 1.3 1.3.1.1.3.1.4 0l.5-.3c.2-.1.4-.1.6 0l1.6.7c.3.2.4.4.4.6l-.2.8c-.1.4-.5.7-.9.7-.9 0-2-.3-3.4-1.7-1.4-1.4-1.7-2.5-1.7-3.4 0-.4.3-.8.7-.9Z" />
    </svg>
  );
}

export function MapPinIcon({ className = baseClass }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path d="M12 21s6-4.5 6-11a6 6 0 1 0-12 0c0 6.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

export function CheckIcon({ className = "mt-0.5 h-5 w-5 shrink-0 fill-none stroke-[color:var(--accent)] stroke-2" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function ArrowIcon({ className = baseClass }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ClockIcon({ className = baseClass }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
