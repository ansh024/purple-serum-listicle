"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui";
import Placeholder from "@/components/Placeholder";

function BadgeCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2.6 14 4l2.4-.3 1 2.2 2.2 1-.3 2.4 1.4 2-1.4 2 .3 2.4-2.2 1-1 2.2L14 20l-2 1.4L10 20l-2.4.3-1-2.2-2.2-1 .3-2.4L3.3 12l1.4-2-.3-2.4 2.2-1 1-2.2L10 4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Clickable trust band that opens the strips clinical-results popup. */
export default function StripsTrustBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className="mt-6 sm:mt-7">
      <Container size="wide">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className="flex w-full items-center justify-center gap-4 rounded-4xl bg-gradient-to-br from-purple-600 to-purple-800 px-6 py-7 text-center shadow-card transition-transform duration-150 hover:brightness-110 active:scale-[0.99] sm:gap-5 sm:px-10 sm:py-9"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-purple-600 shadow-soft sm:h-14 sm:w-14">
            <BadgeCheckIcon width={26} height={26} />
          </span>
          <span className="text-lg font-semibold leading-snug text-white sm:text-2xl">
            Up to 4X whiter teeth - clinically proven, peroxide-free strips
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hidden shrink-0 text-white/80 sm:block"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </Container>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Clinical results"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-2 shadow-2xl sm:p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-colors hover:bg-purple-50"
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
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Replace with the strips clinical-results image when provided */}
            <Placeholder
              label="Strips clinical results (image pending)"
              aspect="aspect-[3/4]"
              rounded="rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
