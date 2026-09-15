import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { ArrowIcon } from "@/components/ui/icons";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <Link
            href="/"
            className="label-mono inline-flex items-center gap-2 text-ivory/50 transition-colors hover:text-accent"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            Back home
          </Link>
          <h1 className="font-display mt-6 text-5xl sm:text-6xl">{title}</h1>
          <p className="label-mono mt-3 text-ivory/40">Last updated {updated}</p>
          <div className="legal-prose mt-10 space-y-4 text-ivory/70">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
