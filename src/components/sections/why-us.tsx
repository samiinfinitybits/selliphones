"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { ShieldIcon, CashIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 bg-ivory py-20 text-ink sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-mono text-ink/50">03 — Why Selliphones</p>
            <Reveal
              as="h2"
              className="font-display mt-3 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl"
            >
              A real UAE business — not a classifieds gamble.
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-7">
            <p className="text-lg text-ink/70">
              No lowball haggling, no shady meet-ups in a parking lot, no
              waiting days for a bank transfer to &ldquo;clear.&rdquo; We buy
              your phone directly, wipe it properly, and pay you on the spot.
              That&rsquo;s the whole model.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="bg-ivory p-6 sm:p-8">
              <div className="font-display text-4xl sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-ink/55">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Two feature blocks — asymmetric split */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="border border-ink/12 bg-ink p-8 text-ivory md:col-span-3">
            <ShieldIcon className="h-9 w-9 text-accent" />
            <h3 className="font-display mt-5 text-2xl sm:text-3xl">
              Your data is wiped — and you watch it happen
            </h3>
            <p className="mt-3 max-w-lg text-ivory/65">
              Every device gets a certified factory wipe before our agent
              leaves, done in front of you, with written confirmation handed
              over. Your photos, chats and accounts never leave with the phone.
            </p>
          </div>
          <div className="border border-ink/12 bg-ink/[0.03] p-8 md:col-span-2">
            <CashIcon className="h-9 w-9 text-ink" />
            <h3 className="font-display mt-5 text-2xl sm:text-3xl">
              One honest number
            </h3>
            <p className="mt-3 text-ink/65">
              The quote you see is the offer we stand behind — adjusted only for
              the real condition we inspect. No surprise deductions at the door.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
