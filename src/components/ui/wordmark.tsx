import { cn } from "@/lib/cn";

/**
 * Custom wordmark: a phone glyph with a "swap → cash" arrow baked in,
 * next to the name set in the display face. Not a stock logo.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 text-ivory", className)}>
      <svg
        viewBox="0 0 28 28"
        className="h-full w-auto"
        fill="none"
        aria-hidden
      >
        <rect
          x="4"
          y="1.5"
          width="14"
          height="25"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M10 4.5h2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14 12h9m0 0-3-3m3 3-3 3"
          stroke="var(--color-accent)"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[1.35rem] font-extrabold leading-none tracking-tight">
        selliphones<span className="text-accent">.</span>
      </span>
    </span>
  );
}
