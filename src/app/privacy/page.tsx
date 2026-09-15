import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 2026">
      <p>
        This is a placeholder privacy policy for {site.name}. Replace this copy
        with your finalised, legally reviewed policy before launch.
      </p>
      <h2>What we collect</h2>
      <p>
        When you request a quote we collect your name, phone number, optional
        email, device details and your city/area. We use this solely to give
        you a quote, arrange pickup and complete your sale.
      </p>
      <h2>Your device data</h2>
      <p>
        Any phone we purchase receives a certified factory wipe before it leaves
        your presence. We do not retain, copy or transfer any personal data
        stored on devices we buy.
      </p>
      <h2>How we use your contact details</h2>
      <p>
        We contact you about your quote and pickup, primarily via WhatsApp. We
        do not sell your data to third parties.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about privacy? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
