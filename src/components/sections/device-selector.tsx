"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon, WhatsappIcon } from "@/components/ui/icons";
import { brands, waLink, type BrandId } from "@/lib/site";

/** Fires a prefill event the valuation form listens for, then scrolls. */
export function selectBrandAndScroll(brand: BrandId) {
  window.dispatchEvent(
    new CustomEvent("selliphones:prefill", { detail: { brand } }),
  );
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
}

export function DeviceSelector() {
  return (
    <section id="devices" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="label-mono text-accent">01 — Pick your device</p>
            <Reveal as="h2" className="font-display mt-3 text-4xl sm:text-5xl">
              What are you selling?
            </Reveal>
          </div>
          <p className="max-w-sm text-ivory/60">
            Choose a brand to jump straight to a quote with your device
            pre-filled. Phones only, for now.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {brands.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => selectBrandAndScroll(b.id)}
              className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden border border-ivory/12 bg-ink-800 p-7 text-left transition-colors hover:border-accent"
            >
              <span className="label-mono text-ivory/40 transition-colors group-hover:text-accent">
                {b.note}
              </span>
              <div>
                <span className="font-display block text-4xl sm:text-5xl">
                  {b.name}
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-ivory/60 transition-colors group-hover:text-ivory">
                  Get a quote
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              {/* oversized ghost initial */}
              <span
                aria-hidden
                className="font-display pointer-events-none absolute -bottom-8 -right-2 text-[9rem] leading-none text-ivory/[0.03] transition-colors group-hover:text-accent/10"
              >
                {b.name.charAt(0)}
              </span>
            </button>
          ))}

          {/* "Something else" → WhatsApp */}
          <a
            href={waLink(
              "Hi Selliphones — I want to sell a device that isn't iPhone or Samsung.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[220px] flex-col justify-between border border-dashed border-ivory/20 p-7 transition-colors hover:border-accent"
          >
            <span className="label-mono text-ivory/40">Not listed?</span>
            <div>
              <span className="font-display block text-3xl sm:text-4xl">
                Something else
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-ivory/60 group-hover:text-ivory">
                <WhatsappIcon className="h-4 w-4" />
                Ask us on WhatsApp
              </span>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
