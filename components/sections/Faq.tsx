import { Container } from "@/components/ui";

/** Verbatim from the live PDP FAQ — trimmed to the questions a cold Meta
 * visitor actually has before clicking through, not the full ingredient dump. */
const FAQS = [
  {
    q: "How does the purple serum whiten teeth?",
    a: "It uses corrective colour technology — purple and yellow are complementary colours, so applying purple on your teeth counteracts and cancels the yellow stains on the surface, making teeth appear whiter instantly.",
  },
  {
    q: "How long does it take to show results?",
    a: "The colour-correction effect is visible from first use. With consistent use over 2–8 weeks, you can see up to 4 shades whiter teeth — results vary by person.",
  },
  {
    q: "Are there any side effects?",
    a: "None. The serum is Peroxide Free, Enamel Safe, 100% vegetarian, SLS Free, and doesn't contain any harmful ingredients.",
  },
  {
    q: "Can it replace normal brushing?",
    a: "No — use it in addition to regular brushing, not instead of it, for the best results.",
  },
  {
    q: "How much should I use, and how often?",
    a: "2 pumps on your toothbrush, twice a day, in addition to regular brushing.",
  },
  {
    q: "Can children use this?",
    a: "Yes, it's safe for children above the age of 10.",
  },
];

export default function Faq() {
  return (
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
  );
}
