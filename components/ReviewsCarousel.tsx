"use client";

import { useRef } from "react";

type Review = {
  name: string;
  title: string;
  body: string;
};

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

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous reviews" : "Next reviews"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white text-purple-600 shadow-soft transition-colors hover:bg-purple-50"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={direction === "left" ? "rotate-180" : ""}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

/** Swipeable on touch, arrow-driven on desktop — same carousel for both. */
export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 300) + 16;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r) => (
          <div
            key={r.name}
            data-card
            className="w-[80%] shrink-0 snap-start rounded-4xl border border-purple-100 bg-white p-6 shadow-soft sm:w-[300px]"
          >
            <Stars />
            <p className="mt-3 text-sm font-semibold text-ink">{r.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              &ldquo;{r.body}&rdquo;
            </p>
            <p className="mt-4 text-xs text-ink">{r.name} · Verified Buyer</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <ArrowButton direction="left" onClick={() => scrollByCard(-1)} />
        <ArrowButton direction="right" onClick={() => scrollByCard(1)} />
      </div>
    </div>
  );
}
