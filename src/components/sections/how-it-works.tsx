"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring } from "motion/react";
import { Container } from "@/components/ui/container";
import { QuoteIcon, VanIcon, CashIcon } from "@/components/ui/icons";
import { steps } from "@/lib/site";

const icons = [QuoteIcon, VanIcon, CashIcon];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.5,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length));
    setActive(idx);
  });

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-t border-ivory/10 bg-ink-800 py-20 sm:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky left rail — the signature pinned element */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="label-mono text-accent">02 — How it works</p>
              <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl">
                Three steps.
                <br />
                No catch.
              </h2>
              <p className="mt-5 max-w-sm text-ivory/60">
                From &ldquo;how much?&rdquo; to money in your pocket. Most of
                our customers are done before their coffee gets cold.
              </p>

              {/* progress rail */}
              <div className="mt-10 hidden items-center gap-4 lg:flex">
                <div className="relative h-40 w-[2px] bg-ivory/10">
                  <motion.div
                    className="absolute left-0 top-0 w-full origin-top bg-accent"
                    style={{ scaleY: progress, height: "100%" }}
                  />
                </div>
                <div className="space-y-4">
                  {steps.map((s, i) => (
                    <div
                      key={s.n}
                      className={`label-mono transition-colors duration-300 ${
                        i === active ? "text-accent" : "text-ivory/30"
                      }`}
                    >
                      {s.n} · {s.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div ref={ref} className="lg:col-span-7">
            <ol className="space-y-6 sm:space-y-10">
              {steps.map((s, i) => {
                const Icon = icons[i];
                return (
                  <motion.li
                    key={s.n}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative border border-ivory/12 bg-ink p-7 sm:p-9"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-display text-6xl text-ivory/15 sm:text-7xl">
                        {s.n}
                      </span>
                      <Icon className="h-10 w-10 shrink-0 text-accent" />
                    </div>
                    <h3 className="font-display mt-4 text-3xl">{s.title}</h3>
                    <p className="mt-3 max-w-md text-ivory/65">{s.body}</p>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
