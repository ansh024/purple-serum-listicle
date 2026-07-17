import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Single purple accent — used sparingly against a clean white layout.
        purple: {
          50: "#F6F2FF",
          100: "#EDE6FF",
          200: "#D9C9FF",
          300: "#BFA3FF",
          400: "#A277FA",
          500: "#8B54F7",
          600: "#7A3BEA",
          700: "#6A2CD1",
          800: "#5622A6",
          900: "#3F1980",
        },
        ink: {
          DEFAULT: "#1A1622",
          soft: "#4A4458",
          muted: "#8A8496",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "640px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(26, 22, 34, 0.06)",
        card: "0 12px 40px rgba(90, 50, 180, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
