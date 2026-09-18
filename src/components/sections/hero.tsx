"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  WhatsappIcon,
  ArrowIcon,
  VanIcon,
  CashIcon,
  ShieldIcon,
  BoltIcon,
} from "@/components/ui/icons";
import { waLink } from "@/lib/site";

const trust = [
  { icon: VanIcon, label: "Free doorstep pickup" },
  { icon: CashIcon, label: "Instant cash, on the spot" },
  { icon: ShieldIcon, label: "Certified data wipe" },
  { icon: BoltIcon, label: "Same-day, 7 days a week" },
];

const models = [
  "iPhone 16 Pro Max",
  "Galaxy S24 Ultra",
  "iPhone 15",
  "Galaxy Z Fold6",
  "iPhone 14 Pro",
  "Galaxy Z Flip6",
  "iPhone 13",
  "Galaxy S23",
  "iPhone SE",
  "iPhone 12 Pro",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-14 sm:pt-20">
      {/* faint grid texture — not a gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ivory) 1px, transparent 1px), linear-gradient(90deg, var(--color-ivory) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(120% 90% at 50% 0%, #000 40%, transparent 80%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Headline block — deliberately spans 7 cols, left-aligned */}
          <div className="lg:col-span-7">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="label-mono text-accent"
            >
              Dubai phone buyback · est. Selliphones
            </motion.p>

            <h1 className="font-display mt-5 text-[3.4rem] leading-[0.92] tracking-tight sm:text-[5rem] lg:text-[6.2rem]">
              <RevealLine delay={0.05}>Old phone in,</RevealLine>
              <RevealLine delay={0.13}>
                <span className="ink-underline">cash out</span>.
              </RevealLine>
              <RevealLine delay={0.21} className="text-ivory-dim">
                We drive to you.
              </RevealLine>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-lg text-ivory/70 sm:text-xl"
            >
              Sell your iPhone or Samsung for a fair, upfront price. Free
              doorstep pickup anywhere in Dubai, a data wipe you can watch, and
              real money in your hand — usually within the hour.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#quote" variant="accent">
                Get my instant quote
                <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button
                href={waLink("Hi Selliphones — I'd like a quote for my phone.")}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="h-4 w-4" />
                Or WhatsApp us now
              </Button>
            </motion.div>

            {/* Trust strip */}
            <motion.ul
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ivory/10 pt-6 sm:max-w-xl md:grid-cols-4"
            >
              {trust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-[0.82rem] leading-tight text-ivory/80">
                    {label}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Offset panel — breaks the grid; no public price figures */}
          <div className="lg:col-span-5">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24, rotate: -1.5 }}
              animate={{ opacity: 1, y: 0, rotate: -1.5 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-lg lg:mt-6 lg:rotate-[-1.5deg]"
            >
              <div className="border border-ivory/15 bg-ink-800 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
                <div className="flex items-center justify-between border-b border-dashed border-ivory/20 pb-4">
                  <span className="label-mono text-ivory/50">Instant valuation</span>
                  {/* <span className="label-mono text-accent">~60 sec</span> */}
                </div>

                <p className="py-5 font-display text-2xl leading-tight">
                  Your personal quote — after we know your device.
                </p>

                <ul className="space-y-3 border-t border-dashed border-ivory/20 pt-4 text-sm text-ivory/75">
                  <li className="flex gap-3">
                    <span className="label-mono shrink-0 text-accent">01</span>
                    <span>Model, storage &amp; condition</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="label-mono shrink-0 text-accent">02</span>
                    <span>We confirm by WhatsApp or at your door</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="label-mono shrink-0 text-accent">03</span>
                    <span>Cash or transfer when you accept — no fees</span>
                  </li>
                </ul>

                <p className="mt-6 border-t border-ivory/20 pt-4 text-center text-xs text-ivory/45">
                  Every phone is different. We quote yours individually.
                </p>
              </div>
              <div className="absolute -right-3 -top-3 rotate-6 bg-accent px-2.5 py-1 label-mono text-[0.6rem] font-bold text-ink">
                No obligation
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Device marquee */}
      <div className="mt-16 border-y border-ivory/10 py-4 sm:mt-24">
        <div className="marquee-mask flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...models, ...models].map((m, i) => (
              <span
                key={i}
                className="label-mono whitespace-nowrap text-ivory/40"
              >
                {m}
                <span className="ml-10 text-accent/50">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealLine({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`block ${className ?? ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
