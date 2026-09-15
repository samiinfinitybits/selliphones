import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { DeviceSelector } from "@/components/sections/device-selector";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyUs } from "@/components/sections/why-us";
import { ValuationForm } from "@/components/sections/valuation-form";
import { Coverage } from "@/components/sections/coverage";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <DeviceSelector />
        <HowItWorks />
        <WhyUs />
        <ValuationForm />
        <Coverage />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
