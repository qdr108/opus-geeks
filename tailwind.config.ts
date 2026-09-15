import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071014",
        cloud: "#F5F7FA",
        teal: "#16D1C2",
        coral: "#FF7A59",
        gold: "#F7C948"
      },
      boxShadow: {
        glow: "0 0 80px rgba(22, 209, 194, 0.22)",
        coral: "0 18px 70px rgba(255, 122, 89, 0.25)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        ticker: "ticker 28s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
