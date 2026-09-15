"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type Variant = "accent" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  accent:
    "bg-accent text-ink hover:bg-accent-600 border border-accent hover:border-accent-600",
  outline:
    "bg-transparent text-ivory border border-ivory/25 hover:border-ivory hover:bg-ivory/5",
  ghost: "bg-transparent text-ivory hover:text-accent border border-transparent",
};

/**
 * Magnetic button: the label nudges toward the cursor on hover.
 * Renders as an <a> so it works for anchor links & external links.
 */
export function Button({
  href,
  children,
  variant = "accent",
  className,
  target,
  rel,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);
  }

  function reset() {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", "0px");
    ref.current.style.setProperty("--my", "0px");
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[0.95rem] font-semibold tracking-tight transition-colors duration-200 will-change-transform",
        styles[variant],
        className,
      )}
      style={{
        transform: "translate(var(--mx, 0), var(--my, 0))",
        transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), background-color .2s, border-color .2s",
      }}
    >
      {children}
    </motion.a>
  );
}
