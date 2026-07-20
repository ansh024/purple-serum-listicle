import Image from "next/image";
import { Container, CtaButton } from "@/components/ui";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import StripsTrustBar from "@/components/strips/StripsTrustBar";
import stripsMythVsFact from "@/public/images/strips-myth-vs-fact.png";
import stripsBannerDesktop from "@/public/images/strips-banner-desktop.png";
import stripsBannerMobile from "@/public/images/strips-banner-mobile.png";
import stripsHowToUseDesktop from "@/public/images/strips-how-to-use-desktop.png";
import stripsHowToUseMobile from "@/public/images/strips-how-to-use-mobile.png";
import stripsReview from "@/public/images/strips-review.png";

const PDP_URL =
  "https://perforacare.com/products/purple-magic-teeth-whitening-strips";

/* Verbatim reviews pulled from the live strips PDP (208 reviews). */
const REVIEWS = [
  {
    name: "Radhika Sharma",
    title: "No sensitivity",
    body: "I was very skeptical tbh but after using for 5-6 days my teeth are visibly whiter. no sensitivity at all which was my main concern. will definitely repurchase",
  },
  {
    name: "Sourav Chatterjee",
    title: "Results in a week",
    body: "Started using from monday and by sunday my husband asked if i got some treatment done. so happy with the results honestly",
  },
  {
    name: "Priya Menon",
    title: "No removal needed",
    body: "Finally a whitening strip that doesnt need removal!! i always used to forget to take off the strips lol. this one just dissolves. 10/10 from my side",
  },
  {
    name: "Arjun Nair",
    title: "No mess, no fuss",
    body: "Been using many whitening products before but this one is different. the strips just dissolve on their own no mess no fuss. Radhika recommended me this and she was right",
  },
  {
    name: "Faisal Choudhary",
    title: "Amazing",
    body: "Amazing 🤩🤩🤩",
  },
  {
    name: "Nirmala Verma",
    title: "Hygienist surprised",
    body: "hygienist surprised",
  },
  {
    name: "Sharda Singh",
    title: "Dentist impressed",
    body: "dentist impressed",
  },
];

const FAQS = [
  {
    q: "How do these strips whiten teeth?",
    a: "Two ways. The purple coating cancels yellow instantly for a brighter look, and PAP gently removes real stains over time. Together they give up to 4X whiter teeth.",
  },
  {
    q: "Do I need to peel them off?",
    a: "No. They're self-dissolving - just stick them on and they melt away on their own. No peeling, no mess.",
  },
  {
    q: "How long until I see results?",
    a: "Brighter teeth right away from the purple, and real whitening you can see with regular use over about 7 days.",
  },
  {
    q: "Will they hurt or cause sensitivity?",
    a: "They're peroxide-free and made to be low-sensitivity. It's a cosmetic product, though - if you have sensitive teeth, check with your dentist first.",
  },
  {
    q: "Does the purple stain my teeth?",
    a: "No. The purple only sits on the surface for a bright look and then fades. It doesn't stain your enamel.",
  },
  {
    q: "Can I use them every day?",
    a: "Yes. The gentle, peroxide-free formula is fine for daily use.",
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

export default function PurpleStripsPage() {
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
              {"Tired of "}
              <span className="italic text-yellow-500">yellow</span>
              {" teeth and don’t want to visit a dentist? Here is an easy and quick way to "}
              <span className="italic text-purple-600">whiten teeth at home</span>
              {"."}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink sm:text-lg md:max-w-xl">
              Purple whitening strips are formulated to break down tough yellow
              stains and whiten teeth{" "}
              <span className="font-medium text-ink">
                up to 4 shades in just 7 days
              </span>
              .
            </p>

            {/* Real social proof, right before the CTA */}
            <div className="mt-6 w-full max-w-sm overflow-hidden rounded-3xl shadow-card ring-1 ring-purple-100 sm:max-w-md md:max-w-lg">
              <Image
                src={stripsReview}
                alt="Instagram comment from ananyamehta: I genuinely thought these would be another Instagram gimmick. Used them for a week before a friend's wedding and my teeth looked noticeably whiter. The best part? Zero sensitivity."
                className="h-auto w-full"
                sizes="(max-width: 640px) 100vw, 512px"
                placeholder="blur"
              />
            </div>

            <div className="mt-8">
              <CtaButton href="#how-it-works">See how the strips work</CtaButton>
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
            src={stripsMythVsFact}
            alt="Myth vs. Fact: common beliefs about yellow teeth and whitening, side by side with the truth."
            className="h-auto w-full"
            sizes="100vw"
            placeholder="blur"
          />
        </figure>
        <Container size="wide" className="hidden sm:block">
          <figure className="overflow-hidden rounded-4xl shadow-card ring-1 ring-purple-100">
            <Image
              src={stripsMythVsFact}
              alt="Myth vs. Fact: common beliefs about yellow teeth and whitening, side by side with the truth."
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
              whitening strips are enamel safe &amp; brighten teeth!
            </span>
          </p>
        </Container>
      </section>

      {/* PRODUCT BANNER */}
      <section className="mt-6 sm:mt-7">
        <div className="sm:hidden">
          <Image
            src={stripsBannerMobile}
            alt="Why Purple Strips work - instant purple color correction, long-term whitening with P3 ingredient technology, strengthens enamel, and clinically proven."
            className="h-auto w-full"
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <Container size="wide" className="hidden sm:block">
          <Image
            src={stripsBannerDesktop}
            alt="Why Purple Strips work - instant purple color correction, long-term whitening with P3 ingredient technology, strengthens enamel, and clinically proven."
            className="h-auto w-full rounded-4xl shadow-card ring-1 ring-purple-100"
            sizes="(min-width: 640px) 100vw, 0px"
            placeholder="blur"
          />
        </Container>
      </section>

      {/* TRUST BAR (clickable → clinical results) */}
      <StripsTrustBar />

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-6 mt-10 sm:mt-14">
        <Container size="wide">
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-purple-600 sm:text-4xl">
              How it works
            </h2>
          </div>

          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-ink sm:text-lg">
            15 minutes of contact time on teeth release active ingredients and
            break down stubborn yellow stains. These strips make teeth{" "}
            <span className="font-medium text-ink">instantly white</span>{" "}
            because of color correction tech, and underneath PAP and P3
            ingredient blend remove yellow stains in a few days. No peroxide and
            hence no teeth sensitivity.
          </p>
        </Container>

        {/* Full-bleed how-to-use guide - edge to edge for maximum readability */}
        <figure className="mt-6 sm:mt-8">
          <Image
            src={stripsHowToUseMobile}
            alt="How to use, in 6 steps: remove the strip with dry hands, wet teeth with your tongue, apply to upper or lower teeth avoiding the gumline, fold the excess behind your teeth, wait for the strip to dissolve, then repeat on the other side."
            className="h-auto w-full sm:hidden"
            sizes="100vw"
            placeholder="blur"
          />
          <Image
            src={stripsHowToUseDesktop}
            alt="How to use, in 6 steps: remove the strip with dry hands, wet teeth with your tongue, apply to upper or lower teeth avoiding the gumline, fold the excess behind your teeth, wait for the strip to dissolve, then repeat on the other side."
            className="hidden h-auto w-full sm:block"
            sizes="100vw"
            placeholder="blur"
          />
        </figure>

        <Container size="wide">
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center sm:gap-6">
            <div>
              <p className="text-sm font-semibold text-ink sm:text-base">
                Instant
              </p>
              <p className="mt-1 text-xs text-ink sm:text-sm">
                Purple cancels yellow on contact
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-purple-600 sm:text-base">
                Over 7 days
              </p>
              <p className="mt-1 text-xs text-ink sm:text-sm">
                PAP lifts real stains, gently
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink sm:text-base">
                The result
              </p>
              <p className="mt-1 text-xs text-ink sm:text-sm">
                Up to 4X whiter teeth
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-md text-center text-sm leading-relaxed text-ink">
            *Purple gives an instant cosmetic lift; the real whitening builds
            with daily use over about 7 days. It&rsquo;s a cosmetic product, not
            a treatment for sensitivity.
          </p>
        </Container>
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
              <span className="font-semibold text-ink">4.8 out of 5</span> from{" "}
              <span className="font-semibold text-ink">208 reviews</span> on our
              product page
            </p>
            <p className="text-xs text-ink">82% rated it 5 stars</p>
          </div>

          <div className="mt-10 sm:mt-12">
            <ReviewsCarousel reviews={REVIEWS} />
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <CtaButton href={PDP_URL}>Shop Purple Strips</CtaButton>
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
              Purple Magic Strips
            </p>
            <p className="text-xs text-ink">
              <span className="font-semibold text-purple-600">₹1,299</span>{" "}
              <span className="line-through">₹1,449</span>
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
