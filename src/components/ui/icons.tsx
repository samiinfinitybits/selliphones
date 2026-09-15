/**
 * Custom-drawn, single-stroke icon set — intentionally not the default
 * Lucide/Heroicons look. Sharp corners, consistent 1.6 stroke, drawn to
 * match the "resale tech" art direction.
 */
type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.03c-.25.69-1.45 1.32-1.99 1.36-.53.05-1.03.24-3.47-.72-2.92-1.15-4.8-4.13-4.95-4.32-.14-.19-1.19-1.58-1.19-3.02s.76-2.14 1.03-2.43c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.83 2.06.9 2.21.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.29.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.69-.8.87-1.08.18-.29.36-.24.61-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.33.07.12.07.66-.18 1.35Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M5 3.5h4l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v4a1.5 1.5 0 0 1-1.6 1.5C11 19.4 4.6 13 4 6.1A1.5 1.5 0 0 1 5 3.5Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

/** Quote / price tag */
export function QuoteIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M3 12 12 3h8v8l-9 9-8-8Z" />
      <circle cx="16" cy="8" r="1.3" />
    </svg>
  );
}

/** Doorstep pickup — a small van */
export function VanIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </svg>
  );
}

/** Cash / banknote */
export function CashIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <rect x="2.5" y="6" width="19" height="12" rx="1.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M6 9v6M18 9v6" />
    </svg>
  );
}

/** Certified data wipe — shield + check */
export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M12 3 5 5.5V11c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V5.5L12 3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  );
}

/** Same-day / clock-bolt */
export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden>
      <path d="M12 21c4-4.5 7-8 7-11a7 7 0 0 0-14 0c0 3 3 6.5 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}
