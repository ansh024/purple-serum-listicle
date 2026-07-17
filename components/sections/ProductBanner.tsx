import Image from "next/image";
import { Container } from "@/components/ui";
import heroDesktop from "@/public/images/hero-desktop.png";
import heroMobile from "@/public/images/hero-mobile.png";

const BANNER_ALT =
  "Why Perfora Purple Magic Serum works - purple color correction, natural enzymes, clinically proven and enamel safe.";

/** "Why Perfora Purple Magic Serum Works" infographic — D1 (landscape) on
 * desktop, M1 (square) on mobile. Split out of Hero so Myth vs. Fact can sit
 * above it in the page flow. */
export default function ProductBanner() {
  return (
    <section className="mt-6 sm:mt-7">
      {/* Mobile: full-bleed, edge-to-edge for maximum size and readability */}
      <div className="sm:hidden">
        <Image
          src={heroMobile}
          alt={BANNER_ALT}
          className="h-auto w-full"
          sizes="100vw"
          placeholder="blur"
        />
      </div>
      {/* Desktop / tablet — sized up for readability */}
      <Container size="wide" className="hidden sm:block">
        <Image
          src={heroDesktop}
          alt={BANNER_ALT}
          className="h-auto w-full rounded-4xl shadow-card ring-1 ring-purple-100"
          sizes="(min-width: 640px) 100vw, 0px"
          placeholder="blur"
        />
      </Container>
    </section>
  );
}
