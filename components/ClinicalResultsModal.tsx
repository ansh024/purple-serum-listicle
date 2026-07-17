"use client";

import { useEffect } from "react";
import Image from "next/image";
import clinicalResults from "@/public/images/clinical-results.png";

export default function ClinicalResultsModal({
  onClose,
}: {
  onClose: () => void;
}) {
  // Lock page scroll while open, and close on Escape.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Clinical trial results"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-2 shadow-2xl sm:p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
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

        <Image
          src={clinicalResults}
          alt="Clinical trial results: User Experience and Satisfaction - 100% of users across trial visits felt the product was instantly appealing, felt freshness after first use, found it effective for even teeth colour, found it effective in increasing teeth cleanliness, were satisfied with overall product use, and found the apple-peach flavour instantly appealing."
          className="h-auto w-full rounded-2xl"
          sizes="(max-width: 768px) 100vw, 672px"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
