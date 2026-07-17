import Image from "next/image";
import { Container } from "@/components/ui";
import colorTheory from "@/public/images/color-theory.png";
import beforeDuringAfter from "@/public/images/before-during-after.png";

export default function HowItWorks() {
  return (
    <section className="mt-10 sm:mt-14">
      <Container size="wide">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-purple-600 sm:text-4xl">
            How it works
          </h2>
        </div>

        {/* The mechanism — text and color-theory image sit side by side on
            desktop instead of one small image floating in a wide column */}
        <div className="mx-auto flex max-w-md flex-col items-center gap-8 md:max-w-none md:flex-row md:items-center md:gap-14">
          <p className="text-center text-base leading-relaxed text-ink sm:text-lg md:flex-1 md:text-left">
            Yellow and purple are opposite colors. Put purple on yellow, and
            the yellow{" "}
            <span className="font-medium text-ink">disappears</span>. That&rsquo;s
            exactly what happens on your teeth.
          </p>
          <figure className="w-full md:flex-1">
            <Image
              src={colorTheory}
              alt="Yellow and purple sit on opposite sides of the color wheel - purple pigment optically cancels yellow stain tones."
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 512px"
              placeholder="blur"
            />
          </figure>
        </div>

        {/* The proof — before / during / after */}
        <div className="mx-auto mt-8 max-w-3xl sm:mt-10">
          <p className="text-center text-base leading-relaxed text-ink sm:text-lg">
            Here&rsquo;s what that looks like on real teeth.
          </p>

          <figure className="mt-6 overflow-hidden rounded-4xl shadow-card ring-1 ring-purple-100">
            <Image
              src={beforeDuringAfter}
              alt="Teeth before application look yellow, during application are coated in purple serum, and after look visibly brighter."
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 768px"
              placeholder="blur"
            />
          </figure>

          {/* Three-step breakdown in words, echoing the image */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center sm:gap-6">
            <div>
              <p className="text-sm font-semibold text-ink sm:text-base">
                1. Teeth look yellow
              </p>
              <p className="mt-1 text-xs text-ink sm:text-sm">
                That&rsquo;s normal staining
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-purple-600 sm:text-base">
                2. Purple goes on
              </p>
              <p className="mt-1 text-xs text-ink sm:text-sm">
                It cancels the yellow
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink sm:text-base">
                3. Teeth look brighter
              </p>
              <p className="mt-1 text-xs text-ink sm:text-sm">
                You&rsquo;ll see it fast
              </p>
            </div>
          </div>
        </div>

        {/* Realistic expectations, stated plainly */}
        <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-ink">
          *This is a quick fix, not permanent whitening. Purple hides the
          yellow - it doesn&rsquo;t remove stains for good.
        </p>
      </Container>
    </section>
  );
}
