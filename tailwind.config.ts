import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1F2027", // primary text, dark sections
        orange: "#FF4E00",   // accent — see strict usage rules in README
        cream: "#FAF6ED",    // page bg, light sections
        teal: "#0092B4",     // secondary accent, sparingly
        stone: {
          100: "#F5F0E5", // subtle dividers, card bgs
          300: "#D6D1C2", // borders
          600: "#6B6660", // muted text, captions
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
