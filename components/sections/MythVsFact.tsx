import Image from "next/image";
import { Container } from "@/components/ui";
import mythVsFact from "@/public/images/myth-vs-fact.png";

export default function MythVsFact() {
  return (
    <section className="mt-7 sm:mt-10">
      <Container size="wide">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
            Myth vs. Fact
          </h2>
        </div>
      </Container>

      {/* Self-contained infographic — myth/fact statements live inside the
          image, so it's sized as large as possible for readability:
          full-bleed edge-to-edge on mobile, full width of the wide
          column on desktop (no extra padding or max-width cap). */}
      <figure className="sm:hidden">
        <Image
          src={mythVsFact}
          alt="Myth vs. Fact: three common beliefs about yellow teeth and whitening, side by side with the truth."
          className="h-auto w-full"
          sizes="100vw"
          priority={false}
          placeholder="blur"
        />
      </figure>
      <Container size="wide" className="hidden sm:block">
        <figure className="overflow-hidden rounded-4xl shadow-card ring-1 ring-purple-100">
          <Image
            src={mythVsFact}
            alt="Myth vs. Fact: three common beliefs about yellow teeth and whitening, side by side with the truth."
            className="h-auto w-full"
            sizes="(min-width: 640px) 100vw, 0px"
            priority={false}
            placeholder="blur"
          />
        </figure>
      </Container>

      <Container size="wide">
        {/* Short bridge back to the product — kept to 2 lines */}
        <p className="mx-auto mt-6 max-w-xs text-center text-base leading-relaxed text-ink sm:max-w-sm">
          The takeaway?{" "}
          <span className="font-medium text-ink">
            Purple cancels yellow instantly
          </span>{" "}
          - no bleaching needed.
        </p>
      </Container>
    </section>
  );
}
