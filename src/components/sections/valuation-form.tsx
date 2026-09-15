"use client";

import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import { CheckIcon, WhatsappIcon, ArrowIcon } from "@/components/ui/icons";
import { quoteSchema, type QuoteInput } from "@/lib/quote-schema";
import {
  brands,
  conditions,
  storageOptions,
  waLink,
  type BrandId,
} from "@/lib/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export function ValuationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { brand: undefined, condition: undefined, storage: "" },
  });

  const brand = useWatch({ control, name: "brand" });
  const condition = useWatch({ control, name: "condition" });

  // Prefill from the device selector section.
  useEffect(() => {
    function onPrefill(e: Event) {
      const detail = (e as CustomEvent<{ brand: BrandId }>).detail;
      if (detail?.brand) setValue("brand", detail.brand, { shouldValidate: true });
    }
    window.addEventListener("selliphones:prefill", onPrefill);
    return () => window.removeEventListener("selliphones:prefill", onPrefill);
  }, [setValue]);

  async function onSubmit(values: QuoteInput) {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const waMessage = waLink(
    "Hi Selliphones — I'd like a quote. My phone is a ...",
  );

  return (
    <section id="quote" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left column — pitch + WhatsApp alternative */}
          <div className="lg:col-span-5">
            <p className="label-mono text-accent">04 — Instant valuation</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
              Get your number in 60 seconds.
            </h2>
            <p className="mt-5 max-w-md text-ivory/65">
              Fill this in and our team sends a confirmed quote over WhatsApp,
              then we arrange free doorstep pickup. No account, no spam, no
              obligation.
            </p>

            <div className="mt-8 border border-ivory/12 bg-ink-800 p-6">
              <p className="label-mono text-ivory/45">Hate forms?</p>
              <p className="mt-2 text-ivory/80">
                Send us a message and a photo of your phone — we&rsquo;ll quote
                you right there in the chat.
              </p>
              <a
                href={waMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-sm border border-accent bg-accent/10 px-4 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-ink"
              >
                <WhatsappIcon className="h-4 w-4" />
                Quote me on WhatsApp instead
              </a>
            </div>
          </div>

          {/* Right column — form / success state */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <SuccessState key="success" onReset={() => setStatus("idle")} />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="border border-ivory/12 bg-ink-800 p-6 sm:p-8"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                    {...register("company")}
                  />

                  {/* Brand */}
                  <Field label="Brand" error={errors.brand?.message}>
                    <div className="grid grid-cols-2 gap-3">
                      {brands.map((b) => (
                        <Chip
                          key={b.id}
                          active={brand === b.id}
                          onClick={() =>
                            setValue("brand", b.id, { shouldValidate: true })
                          }
                        >
                          {b.name}
                        </Chip>
                      ))}
                    </div>
                  </Field>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Model" error={errors.model?.message}>
                      <input
                        {...register("model")}
                        placeholder="e.g. iPhone 15 Pro"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Storage" error={errors.storage?.message}>
                      <div className="relative">
                        <select
                          {...register("storage")}
                          className={cn(inputCls, "appearance-none pr-10")}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select…
                          </option>
                          {storageOptions.map((s) => (
                            <option key={s} value={s} className="bg-ink">
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Field>
                  </div>

                  {/* Condition */}
                  <Field label="Condition" error={errors.condition?.message}>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {conditions.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() =>
                            setValue("condition", c.id, { shouldValidate: true })
                          }
                          className={cn(
                            "flex flex-col items-start rounded-sm border p-3 text-left transition-colors",
                            condition === c.id
                              ? "border-accent bg-accent/10"
                              : "border-ivory/15 hover:border-ivory/40",
                          )}
                        >
                          <span className="text-sm font-semibold">{c.label}</span>
                          <span className="mt-0.5 text-[0.7rem] text-ivory/45">
                            {c.hint}
                          </span>
                        </button>
                      ))}
                    </div>
                  </Field>

                  <div className="my-6 h-px bg-ivory/10" />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full name" error={errors.name?.message}>
                      <input
                        {...register("name")}
                        placeholder="Your name"
                        className={inputCls}
                        autoComplete="name"
                      />
                    </Field>
                    <Field
                      label="WhatsApp / phone"
                      error={errors.phone?.message}
                    >
                      <input
                        {...register("phone")}
                        placeholder="+971 5X XXX XXXX"
                        className={inputCls}
                        inputMode="tel"
                        autoComplete="tel"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Email"
                      optional
                      error={errors.email?.message}
                    >
                      <input
                        {...register("email")}
                        placeholder="you@email.com"
                        className={inputCls}
                        inputMode="email"
                        autoComplete="email"
                      />
                    </Field>
                    <Field label="City / area" error={errors.city?.message}>
                      <input
                        {...register("city")}
                        placeholder="e.g. Dubai Marina"
                        className={inputCls}
                        autoComplete="address-level2"
                      />
                    </Field>
                  </div>

                  {status === "error" && serverError && (
                    <p className="mt-4 rounded-sm border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {serverError}{" "}
                      <a
                        href={waMessage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Message us on WhatsApp
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-4 text-base font-semibold text-ink transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === "submitting" ? "Sending…" : "Send & get my quote"}
                    {status !== "submitting" && (
                      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    )}
                  </button>
                  <p className="mt-4 text-xs text-ivory/40">
                    By submitting you agree to be contacted about your quote. We
                    never sell your data.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

const inputCls =
  "w-full rounded-sm border border-ivory/15 bg-ink px-4 py-3 text-ivory placeholder:text-ivory/30 outline-none transition-colors focus:border-accent";

function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="mb-5 block last:mb-0">
      <span className="label-mono mb-2 flex items-center gap-2 text-ivory/55">
        {label}
        {optional && <span className="text-ivory/30">(optional)</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-sm border px-4 py-3 text-sm font-semibold transition-colors",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-ivory/15 text-ivory/80 hover:border-ivory/40",
      )}
    >
      {children}
    </button>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex min-h-[420px] flex-col items-start justify-center border border-accent/40 bg-accent/[0.06] p-8 sm:p-12"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink">
        <CheckIcon className="h-7 w-7" />
      </span>
      <h3 className="font-display mt-6 text-4xl sm:text-5xl">
        Request received.
      </h3>
      <p className="mt-4 max-w-md text-ivory/70">
        Our team is on it. Expect a WhatsApp message with your confirmed quote
        shortly — usually within a few minutes during working hours.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={waLink("Hi Selliphones — I just submitted a quote request.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-ink hover:bg-accent-600"
        >
          <WhatsappIcon className="h-4 w-4" />
          Chat with us now
        </a>
        <button
          type="button"
          onClick={onReset}
          className="rounded-sm border border-ivory/20 px-5 py-3 text-sm font-semibold text-ivory hover:border-ivory"
        >
          Submit another phone
        </button>
      </div>
    </motion.div>
  );
}
