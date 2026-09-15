import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you sell your device to ${site.name}.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="September 2026">
      <p>
        This is a placeholder terms of service for {site.name}. Replace this
        copy with your finalised, legally reviewed terms before launch.
      </p>
      <h2>Quotes</h2>
      <p>
        Online quotes are estimates based on the details you provide. The final
        offer is confirmed after an in-person inspection of the device and its
        condition. You are under no obligation to sell.
      </p>
      <h2>Payment</h2>
      <p>
        Once you accept the final offer, payment is made on the spot by cash or
        bank transfer. Ownership of the device transfers to {site.legalName}{" "}
        upon payment.
      </p>
      <h2>Your responsibilities</h2>
      <p>
        You confirm that you are the lawful owner of the device and that it is
        not reported lost or stolen. Please remove any accounts and back up your
        data before pickup.
      </p>
      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
