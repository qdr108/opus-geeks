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
        ink: "#1C1E21",
        cloud: "#F0F2F5",
        teal: "#1877F2"
      },
      boxShadow: {
        glow: "0 12px 40px rgba(24, 119, 242, 0.20)"
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
