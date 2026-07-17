import { Container, CtaButton } from "@/components/ui";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const PDP_URL =
  "https://perforacare.com/products/purple-magic-whitening-serum";

/**
 * Verbatim reviews pulled from the live PDP — kept exactly as written
 * (typos, mixed Hindi-English, emoji included) rather than polished.
 * Real, unedited feedback reads as more trustworthy than tidy copy.
 */
const REVIEWS = [
  {
    name: "Shannon Joy Theron",
    title: "Purple Magic",
    body: "I have already seen improvements in my teeth! They are looking bright and white. I love the taste and received a good amount of the product. Would definitely recommend.",
  },
  {
    name: "Lakshay Kumar",
    title: "Super Product",
    body: "It gives you best result after one use only.... Best Product for those who are depressed by their yellow teeths and other stains.... Now We all can smile Confidently",
  },
  {
    name: "Monty Pathak",
    title: "Nice product",
    body: "Bahut acha product hai teeth ke peele pan hatakar teeth white banata hai",
  },
  {
    name: "Mohammad",
    title: "Amazing product 💯👍😊👌",
    body: "my teeth became white in 2 minutes Useful product 💯 Everyone should buy this product 😊",
  },
  {
    name: "Lily Jain",
    title: "Visible results",
    body: "My teeth were becoming yellow but slightly changed to white after using purple magic teeth whitening serum for 10days. Love it🥰",
  },
  {
    name: "Dipali Darji",
    title: "Just wow serum",
    body: "It changed my oral care routine. Visible results. Superb serum",
  },
  {
    name: "Abhinav Jain",
    title: "A miraculous serum",
    body: "It is must buy for teeth whitening. No more yellowness and refreshing feeling and good taste too.",
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

export default function RealResults() {
  return (
    <section className="mt-14 sm:mt-20">
      <Container size="wide">
        <div className="mb-4 text-center sm:mb-5">
          <h2 className="font-serif text-2xl leading-tight tracking-[-0.01em] text-purple-600 sm:text-4xl">
            Real people, real reviews
          </h2>
        </div>

        {/* Real rating summary — pulled live from the PDP, not invented */}
        <div className="mx-auto flex max-w-md flex-col items-center gap-1 text-center">
          <Stars />
          <p className="text-sm text-ink">
            <span className="font-semibold text-ink">4.8 out of 5</span> from{" "}
            <span className="font-semibold text-ink">6,096 reviews</span> on
            our product page
          </p>
          <p className="text-xs text-ink">83% rated it 5 stars</p>
        </div>

        {/* Verbatim reviews — swipeable on mobile, arrow-driven on desktop */}
        <div className="mt-10 sm:mt-12">
          <ReviewsCarousel reviews={REVIEWS} />
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <CtaButton href={PDP_URL}>See why purple serum works</CtaButton>
        </div>
      </Container>
    </section>
  );
}
