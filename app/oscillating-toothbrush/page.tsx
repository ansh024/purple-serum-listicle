import Image from "next/image";
import { Container, CtaButton } from "@/components/ui";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import ToothbrushTrustBar from "@/components/toothbrush/ToothbrushTrustBar";
import toothbrushReview from "@/public/images/toothbrush-review.png";
import toothbrushMythVsFact from "@/public/images/toothbrush-myth-vs-fact.png";
import toothbrushBanner from "@/public/images/toothbrush-banner.png";
import toothbrushHowItWorksDesktop from "@/public/images/toothbrush-howitworks-desktop.png";
import toothbrushHowItWorksMobile from "@/public/images/toothbrush-howitworks-mobile.png";

const PDP_URL =
  "https://perforacare.com/products/oscillating-toothbrush-rechargeable";

/* Verbatim reviews pulled from the live PDP (255 reviews). */
const REVIEWS = [
  {
    name: "Akshay Sachan",
    title: "Gets into every corner",
    body: "The rotating head really gets into those tricky corners, and my teeth feel noticeably cleaner after every brush.",
  },
  {
    name: "Dr Prakash",
    title: "Worth it",
    body: "Perfora Electric Toothbrush: Worth It! The Perfora electric toothbrush combines stylish design, charcoal-infused bristles, and sonic vibrations for a deep clean.",
  },
  {
    name: "Mansha",
    title: "Visible results",
    body: "Very good product, I can see visible results. Such a lovely packaging too...",
  },
];

const FAQS = [
  {
    q: "Why switch from a manual to an electric brush?",
    a: "Dentists recommend oscillating brushes for a deeper clean. The rotating head clears more plaque along the gumline and between teeth than a manual brush can.",
  },
  {
    q: "How long does the battery last?",
    a: "About 21 days on a full charge with twice-daily brushing. It charges over USB-C.",
  },
  {
    q: "Can I use it in the shower?",
    a: "Yes - it's IPX7 waterproof, so it's fine to use in the shower.",
  },
  {
    q: "Does it have a timer?",
    a: "Yes - a 2-minute timer with 30-second reminders to move to the next section of your mouth, so you brush evenly.",
  },
  {
    q: "What if I don't like it?",
    a: "If you're not satisfied, there's a 15-day refund in the form of a gift card.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-purple-500" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7-5.4-4.7 7.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function OscillatingToothbrushPage() {
  return (
    <main className="min-h-screen bg-white pb-28 sm:pb-28">
      {/* HERO */}
      <section className="relative overflow-hidden pt-10 sm:pt-14">
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
            <h1 className="font-serif text-[2rem] leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.75rem] md:max-w-4xl">
              {"Still noticing "}
              <span className="italic text-yellow-500">plaque</span>
              {" even after brushing? Here’s a "}
              <span className="italic text-purple-600">smarter way to remove it</span>
              {"."}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink sm:text-lg md:max-w-xl">
              Plaque builds up every day and can hide along the gumline and
              between teeth. Perfora&rsquo;s Oscillating Toothbrush{" "}
              <span className="font-medium text-ink">
                removes more plaque than a manual toothbrush
              </span>
              , giving your teeth a deeper, more effective clean.
            </p>

            {/* Real social proof, right before the CTA */}
            <div className="mt-6 w-full max-w-sm overflow-hidden rounded-3xl shadow-card ring-1 ring-purple-100 sm:max-w-md md:max-w-lg">
              <Image
                src={toothbrushReview}
                alt="Comment from Radhika Shrivastav: Plaque used to build up no matter how carefully I brushed. After using the Perfora Oscillating Toothbrush for a couple of weeks, my teeth feel cleaner throughout the day, and even my dentist noticed less plaque during my check-up."
                className="h-auto w-full"
                sizes="(max-width: 640px) 100vw, 512px"
                placeholder="blur"
              />
            </div>

            <div className="mt-8">
              <CtaButton href="#how-it-works">See how it works</CtaButton>
            </div>
          </div>
        </Container>
      </section>

      {/* MYTH VS FACT */}
      <section className="mt-7 sm:mt-10">
        <Container size="wide">
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
              Myth vs. Fact
            </h2>
          </div>
        </Container>
        <figure className="sm:hidden">
          <Image
            src={toothbrushMythVsFact}
            alt="Myths vs. Facts about plaque: brushing harder doesn't remove more plaque; the gumline and spaces between teeth are where plaque builds up most; oscillating toothbrushes remove more plaque than manual brushing."
            className="h-auto w-full"
            sizes="100vw"
            placeholder="blur"
          />
        </figure>
        <Container size="wide" className="hidden sm:block">
          <figure className="overflow-hidden rounded-4xl shadow-card ring-1 ring-purple-100">
            <Image
              src={toothbrushMythVsFact}
              alt="Myths vs. Facts about plaque: brushing harder doesn't remove more plaque; the gumline and spaces between teeth are where plaque builds up most; oscillating toothbrushes remove more plaque than manual brushing."
              className="h-auto w-full"
              sizes="(min-width: 640px) 100vw, 0px"
              placeholder="blur"
            />
          </figure>
        </Container>
        <Container size="wide">
          <p className="mx-auto mt-6 max-w-xs text-center text-base leading-relaxed text-ink sm:max-w-sm">
            The takeaway -{" "}
            <span className="font-medium text-ink">
              better plaque removal starts with better brushing.
            </span>
          </p>
        </Container>
      </section>

      {/* PRODUCT BANNER */}
      <section className="mt-6 sm:mt-7">
        <div className="sm:hidden">
          <Image
            src={toothbrushBanner}
            alt="Why the Oscillating Toothbrush works - high-frequency oscillation, superior plaque removal, gentle on gums, smart 2-minute timer, rechargeable battery, multiple cleaning modes, two-year warranty."
            className="h-auto w-full"
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <Container size="wide" className="hidden sm:block">
          <Image
            src={toothbrushBanner}
            alt="Why the Oscillating Toothbrush works - high-frequency oscillation, superior plaque removal, gentle on gums, smart 2-minute timer, rechargeable battery, multiple cleaning modes, two-year warranty."
            className="mx-auto h-auto w-full max-w-2xl rounded-4xl shadow-card ring-1 ring-purple-100"
            sizes="(min-width: 640px) 672px, 0px"
            placeholder="blur"
          />
        </Container>
      </section>

      {/* TRUST BAR (clickable → pop-up image) */}
      <ToothbrushTrustBar />

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-6 mt-10 sm:mt-14">
        <Container size="wide">
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-purple-600 sm:text-4xl">
              Backed by Better Brushing Technology
            </h2>
          </div>

          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-ink sm:text-lg">
            Engineered to deliver{" "}
            <span className="font-medium text-ink">
              thousands of oscillations every minute
            </span>{" "}
            for a deeper, more effective clean than manual brushing.
          </p>
        </Container>

        {/* Full-bleed how-it-works image - edge to edge for maximum readability */}
        <figure className="mt-6 sm:mt-8">
          <Image
            src={toothbrushHowItWorksMobile}
            alt="Two powerful cleaning modes with thousands of oscillations per minute for a deeper clean."
            className="h-auto w-full sm:hidden"
            sizes="100vw"
            placeholder="blur"
          />
          <Image
            src={toothbrushHowItWorksDesktop}
            alt="Two powerful cleaning modes with thousands of oscillations per minute for a deeper clean."
            className="hidden h-auto w-full sm:block"
            sizes="100vw"
            placeholder="blur"
          />
        </figure>
      </section>

      {/* REAL REVIEWS */}
      <section className="mt-14 sm:mt-20">
        <Container size="wide">
          <div className="mb-4 text-center sm:mb-5">
            <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-purple-600 sm:text-4xl">
              Real people, real reviews
            </h2>
          </div>

          <div className="mx-auto flex max-w-md flex-col items-center gap-1 text-center">
            <Stars />
            <p className="text-sm text-ink">
              <span className="font-semibold text-ink">4.7 out of 5</span> from{" "}
              <span className="font-semibold text-ink">255 reviews</span> on our
              product page
            </p>
            <p className="text-xs text-ink">73% rated it 5 stars</p>
          </div>

          <div className="mt-10 sm:mt-12">
            <ReviewsCarousel reviews={REVIEWS} />
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <CtaButton href={PDP_URL}>Shop the toothbrush</CtaButton>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="mt-14 sm:mt-20">
        <Container>
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-ink sm:text-4xl">
              Questions, answered
            </h2>
          </div>

          <div className="divide-y divide-purple-100 rounded-4xl border border-purple-100 bg-white shadow-soft">
            {FAQS.map((item) => (
              <details key={item.q} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-ink sm:text-base">
                  {item.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-purple-500 transition-transform duration-200 group-open:rotate-45"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* STICKY BUY BAR (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-purple-100 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(90,50,180,0.10)] backdrop-blur sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              Oscillating Toothbrush
            </p>
            <p className="text-xs text-ink">
              <span className="font-semibold text-purple-600">₹1,799</span>{" "}
              <span className="line-through">₹1,899</span>
            </p>
          </div>
          <CtaButton href={PDP_URL} className="shrink-0 px-5 py-3 text-sm">
            Buy Now
          </CtaButton>
        </div>
      </div>
    </main>
  );
}
