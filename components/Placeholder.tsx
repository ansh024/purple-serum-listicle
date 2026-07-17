import { cn } from "@/lib/cn";

type PlaceholderProps = {
  /** Short label describing what image will replace this block. */
  label?: string;
  /** Tailwind aspect-ratio utility, e.g. "aspect-[4/5]". */
  aspect?: string;
  className?: string;
  rounded?: string;
};

/**
 * Neutral image placeholder. Assets are intentionally NOT hardcoded — drop the
 * real image in later by replacing this component with <Image />.
 */
export default function Placeholder({
  label = "Image placeholder",
  aspect = "aspect-[4/5]",
  className,
  rounded = "rounded-4xl",
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-purple-50 ring-1 ring-inset ring-purple-100",
        aspect,
        rounded,
        className
      )}
    >
      {/* faint grid so the placeholder reads as a media slot, not a solid block */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(122,59,234,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(122,59,234,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-purple-600 shadow-soft">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-purple-400">
          {label}
        </span>
      </div>
    </div>
  );
}
