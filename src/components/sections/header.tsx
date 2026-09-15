"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/ui/wordmark";
import { WhatsappIcon, PhoneIcon } from "@/components/ui/icons";
import { nav, site, waLink } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-ivory/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <a href="#top" className="flex items-center" aria-label={site.name}>
          <Wordmark className="h-6 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label-mono text-[0.7rem] text-ivory/70 transition-colors hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneRaw}`}
            className="hidden items-center gap-2 text-sm font-medium text-ivory/80 transition-colors hover:text-ivory md:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <a
            href={waLink("Hi Selliphones — I'd like a quote for my phone.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-3.5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-600 sm:px-4"
          >
            <WhatsappIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp us</span>
            <span className="sm:hidden">Chat</span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-ivory/20 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] w-4 bg-ivory transition-all",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[1.5px] w-4 bg-ivory transition-all",
                  open ? "bottom-1.5 -rotate-45" : "bottom-0",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ivory/10 bg-ink lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ivory/5 py-3 font-display text-2xl text-ivory"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-2 py-3 text-ivory/70"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
