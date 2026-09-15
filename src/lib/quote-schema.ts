import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+\d][\d\s()-]{6,}$/, "Enter a valid phone number"),
  email: z
    .string()
    .email("Enter a valid email")
    .max(120)
    .optional()
    .or(z.literal("")),
  brand: z.enum(["iphone", "samsung"], {
    message: "Choose a brand",
  }),
  model: z.string().min(2, "Which model?").max(60),
  storage: z.string().min(1, "Pick storage"),
  condition: z.enum(["flawless", "good", "fair", "broken"], {
    message: "Pick a condition",
  }),
  city: z.string().min(2, "Where are you?").max(60),
  // Honeypot — must stay empty. Bots fill it.
  company: z.string().max(0).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
