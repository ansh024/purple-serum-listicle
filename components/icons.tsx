import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Purple color-correction / droplet-sparkle mark. */
export function SparkleDropIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3s5 5.5 5 9.5A5 5 0 0 1 7 12.5C7 8.5 12 3 12 3Z" />
      <path d="M18.5 4.5v2.4M17.3 5.7h2.4" />
    </svg>
  );
}

/** Verified / clinically proven check-badge. */
export function BadgeCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.6 14 4l2.4-.3 1 2.2 2.2 1-.3 2.4 1.4 2-1.4 2 .3 2.4-2.2 1-1 2.2L14 20l-2 1.4L10 20l-2.4.3-1-2.2-2.2-1 .3-2.4L3.3 12l1.4-2-.3-2.4 2.2-1 1-2.2L10 4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** SLS-free / no-nasties shield. */
export function ShieldLeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.5v5c0 4.2 3 7.4 7 8.5 4-1.1 7-4.3 7-8.5v-5L12 3Z" />
      <path d="M12 8.5c-1.8 0-3 1.2-3 3 1.8 0 3-1.2 3-3Zm0 0c1.8 0 3 1.2 3 3-1.8 0-3-1.2-3-3Z" />
    </svg>
  );
}

/** Community / happy customers. */
export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-2.3-4.5" />
    </svg>
  );
}

/** Enamel safe — tooth with a sparkle. */
export function ToothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.2c-1 -0.7 -2 -1.1 -3.4 -1.1C6 3.1 4.3 4.8 4.3 7.6c0 1.8 .5 3.2 1 5 .4 1.5 .5 3 .8 4.4 .2 1.2 .5 2.4 1.4 2.4 1 0 1.1 -1.4 1.3 -2.8l.3 -2.2c.1 -.7 .5 -1.2 1.9 -1.2s1.8 .5 1.9 1.2l.3 2.2c.2 1.4 .3 2.8 1.3 2.8 .9 0 1.2 -1.2 1.4 -2.4 .3 -1.4 .4 -2.9 .8 -4.4 .5 -1.8 1 -3.2 1 -5 0 -2.8 -1.7 -4.5 -4.3 -4.5 -1.4 0 -2.4 .4 -3.4 1.1Z" />
      <path d="M18.5 3.4v1.9M17.6 4.3h1.9" />
    </svg>
  );
}

/** Animal safe / cruelty-free rabbit. */
export function RabbitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M9 12c-1.5 0-3 1-3 3.5S7.5 20 10 20h4c2.5 0 4-1.5 4-3.5" />
      <path d="M9.5 9C9 6 8 3.5 6.5 3.5S5 6 6 8.5M13 9c.4-2.5 1.4-5 2.8-5S17 6 16 8.4" />
      <circle cx="14.5" cy="14" r="0.6" fill="currentColor" />
    </svg>
  );
}
