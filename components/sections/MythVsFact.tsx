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

        {/* Self-contained infographic — myth/fact statements live inside the image */}
        <figure className="mx-auto max-w-3xl overflow-hidden rounded-4xl shadow-card ring-1 ring-purple-100">
          <Image
            src={mythVsFact}
            alt="Myth vs. Fact: three common beliefs about yellow teeth and whitening, side by side with the truth."
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 768px"
            priority={false}
            placeholder="blur"
          />
        </figure>

        {/* Short bridge back to the product — kept to 2 lines */}
        <p className="mx-auto mt-6 max-w-xs text-center text-base leading-relaxed text-ink sm:max-w-sm">
          The takeaway?{" "}
          <span className="font-medium text-ink">
            Purple neutralizes yellow instantly
          </span>{" "}
          — no bleaching needed.
        </p>
      </Container>
    </section>
  );
}
