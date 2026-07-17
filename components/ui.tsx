import { cn } from "@/lib/cn";

/** Centered, narrow reading column — keeps the editorial, article-like rhythm. */
export function Container({
  children,
  className,
  size = "content",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "content" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6",
        size === "content" ? "max-w-content" : "max-w-5xl",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Small uppercase section label in the purple accent. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow text-xs font-semibold text-purple-600">
      {children}
    </span>
  );
}

/** Primary call-to-action. Links to the PDP. */
export function CtaButton({
  children,
  href = "#",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-7 py-4 text-base font-semibold text-white shadow-card transition-all duration-200 hover:bg-purple-700 hover:shadow-lg active:scale-[0.98]",
        className
      )}
    >
      {children}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
