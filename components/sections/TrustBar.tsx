"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { BadgeCheckIcon } from "@/components/icons";
import ClinicalResultsModal from "@/components/ClinicalResultsModal";

export default function TrustBar() {
  const [open, setOpen] = useState(false);

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
            Science-backed, clinically proven instant teeth whitening
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

      {open && <ClinicalResultsModal onClose={() => setOpen(false)} />}
    </section>
  );
}
