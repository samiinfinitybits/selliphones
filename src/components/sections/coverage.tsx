"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PinIcon } from "@/components/ui/icons";
import { dubaiAreas, emirates } from "@/lib/site";

export function Coverage() {
  return (
    <section className="border-t border-ivory/10 bg-ink-800 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono text-accent">05 — Coverage</p>
            <Reveal as="h2" className="font-display mt-3 text-4xl sm:text-5xl">
              We come to your door.
            </Reveal>
            <p className="mt-5 text-ivory/60">
              Free pickup across Dubai, 7 days a week. Elsewhere in the Emirates?
              We&rsquo;re expanding — message us and we&rsquo;ll sort it out.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {emirates.map((e) => (
                <li
                  key={e}
                  className="label-mono rounded-sm border border-ivory/15 px-3 py-1.5 text-[0.62rem] text-ivory/55"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* Area tag cloud — varied sizing for editorial tension */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
              {dubaiAreas.map((area, i) => (
                <Reveal
                  as="span"
                  key={area}
                  delay={i * 0.02}
                  className={`font-display leading-none ${
                    i % 3 === 0
                      ? "text-3xl sm:text-5xl"
                      : i % 3 === 1
                        ? "text-2xl text-ivory/70 sm:text-3xl"
                        : "text-xl text-ivory/45 sm:text-2xl"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    {i % 4 === 0 && (
                      <PinIcon className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
                    )}
                    {area}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
