/** Tiny classnames joiner — no dependency needed for this project. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
