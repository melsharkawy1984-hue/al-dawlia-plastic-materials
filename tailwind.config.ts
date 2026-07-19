import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10284b",
        brand: "#0F3D66",
        orange: "#F58220",
        sky: "#69c8f2",
        pale: "#f0f7fc",
        blue: "#1769aa",
        lime: "#b5d62a",
        mist: "#eff5f8"
      },
      boxShadow: {
        card: "0 16px 40px rgba(16, 40, 75, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
