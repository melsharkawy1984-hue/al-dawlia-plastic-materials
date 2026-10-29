import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        ink: "#10284b",
        slate: { ...colors.slate, 50: "#F7F7F2", 100: "#EEEFE8", 900: "#12324F", 950: "#09263E" },
        brand: "#0F3D66",
        orange: {
          ...colors.emerald,
          DEFAULT: "#18745B",
          500: "#238366",
          600: "#18745B",
          700: "#125C49",
        },
        sky: "#69c8f2",
        pale: "#f0f7fc",
        blue: "#1769aa",
        lime: "#b5d62a",
        mist: "#eff5f8",
      },

      boxShadow: {
        card: "0 16px 40px rgba(16,40,75,.10)",
      },
    },
  },

  plugins: [],
};

export default config;
