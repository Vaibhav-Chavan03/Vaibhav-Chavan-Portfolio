import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF9F7",
          100: "#F6F4F1",
        },
        sage: {
          50: "#F2F7F4",   // ✅ ADDED (fixes hover:bg-sage-50 error)
          400: "#8FAE9E",
          500: "#7FA69B",
          600: "#6C978B",
        },
        lavender: {
          400: "#D8D2E8",
          500: "#C6BFD8",
        },
        charcoal: {
          900: "#2F2F2F",
        },
        warmGray: {
          600: "#5C5C5C",
          500: "#8A8A8A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        section: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        calm: "24px",
        soft: "16px",
      },
      boxShadow: {
        calm: "0 4px 24px rgba(47, 47, 47, 0.06)",
        soft: "0 2px 12px rgba(47, 47, 47, 0.04)",
      },
      animation: {
        // "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-up-delay": "slideUp 0.9s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
