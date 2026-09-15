"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowIcon, WhatsappIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="bg-accent text-ink">
      <Container className="py-20 sm:py-28">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label-mono">Ready when you are</p>
            <h2 className="font-display mt-4 max-w-2xl text-5xl leading-[0.9] sm:text-7xl">
              Turn that drawer phone into cash today.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href="#quote"
              variant="ghost"
              className="border border-ink bg-ink text-ivory hover:bg-ink-800 hover:text-accent"
            >
              Get my instant quote
              <ArrowIcon className="h-4 w-4" />
            </Button>
            <a
              href={waLink("Hi Selliphones — I'd like a quote for my phone.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-ink/10"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
