import { PhoneIcon, WhatsappIcon } from "@/components/ui/icons";
import { site, waLink } from "@/lib/site";

/**
 * Sticky call + WhatsApp shortcuts — bottom-right on all viewports.
 * Sits above mobile browser chrome via safe-area insets.
 */
export function FloatingContact() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 right-0 z-50 flex flex-col items-end gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] pr-[max(1rem,env(safe-area-inset-right))] sm:gap-3 sm:p-6"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${site.phoneRaw}`}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-sm border border-ink/10 bg-ink text-paper shadow-[3px_3px_0_0_rgba(20,20,15,0.12)] transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:w-14"
        aria-label={`Call ${site.phoneDisplay}`}
      >
        <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
      <a
        href={waLink("Hi Selliphones — I'd like a quote for my phone.")}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-sm border border-accent-600 bg-accent text-ink shadow-[3px_3px_0_0_rgba(20,20,15,0.08)] transition-transform hover:scale-105 hover:bg-accent-600 active:scale-95 sm:h-14 sm:w-14"
        aria-label="Chat on WhatsApp"
      >
        <WhatsappIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  );
}
