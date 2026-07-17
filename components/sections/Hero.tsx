import { Container, CtaButton } from "@/components/ui";

const PDP_URL =
  "https://perforacare.com/products/purple-magic-whitening-serum";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      {/* Soft decorative depth — fills the wide desktop canvas without adding clutter */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 hidden h-72 w-72 rounded-full bg-purple-100/60 blur-3xl md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-40 hidden h-64 w-64 rounded-full bg-yellow-100/50 blur-3xl md:block"
      />

      <Container size="wide" className="relative">
        <div className="flex flex-col items-center text-center">
          {/* Curiosity-driven headline — wider on desktop so it sets in 2 lines */}
          <h1 className="font-serif text-[2rem] leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.75rem] md:max-w-4xl">
            The science behind why your teeth look{" "}
            <span className="italic text-yellow-500">yellow</span>
            {" — and how "}
            <span className="italic text-purple-600">purple</span>
            {" cancels it out instantly"}
          </h1>

          {/* Mobile: 2–3 short lines. Desktop: narrowed to set in 3 lines. */}
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink sm:text-lg md:max-w-xl">
            Most whitening products take weeks to show a difference. Purple
            works differently — it cancels out yellow right away, so your
            teeth look{" "}
            <span className="font-medium text-ink">better instantly</span>.
          </p>

          <div className="mt-8">
            <CtaButton href={PDP_URL}>See why purple serum works</CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
