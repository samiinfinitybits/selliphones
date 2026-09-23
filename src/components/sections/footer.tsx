import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/ui/wordmark";
import { WhatsappIcon, PhoneIcon } from "@/components/ui/icons";
import { nav, site, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark className="h-6 w-auto" />
            <p className="mt-5 max-w-xs text-sm text-ink/55">
              The straightforward way to sell your iPhone or Samsung in Dubai.
              Fair prices, free doorstep pickup, certified data wipe, paid on
              the spot.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label-mono text-ink/40">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink/70 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label-mono text-ink/40">Talk to us</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink("Hi Selliphones — I'd like a quote.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-accent-ink"
                >
                  <WhatsappIcon className="h-4 w-4" /> WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
                >
                  <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-ink/70 transition-colors hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
          <p className="label-mono text-[0.62rem] text-ink/40">
            © {new Date().getFullYear()} {site.legalName}. Dubai, UAE.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="label-mono text-[0.62rem] text-ink/40 transition-colors hover:text-ink"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="label-mono text-[0.62rem] text-ink/40 transition-colors hover:text-ink"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
