import { CtaButton } from "@/components/ui";

const PDP_URL =
  "https://perforacare.com/products/purple-magic-whitening-serum";

/** Mobile-only sticky bar — keeps the path to purchase always in reach. */
export default function StickyAddToCart() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-purple-100 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(90,50,180,0.10)] backdrop-blur sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">
            Purple Magic Serum
          </p>
          <p className="text-xs text-ink">
            <span className="font-semibold text-purple-600">₹887</span>{" "}
            <span className="line-through">₹1,098</span>
          </p>
        </div>
        <CtaButton href={PDP_URL} className="shrink-0 px-5 py-3 text-sm">
          Buy Now
        </CtaButton>
      </div>
    </div>
  );
}
