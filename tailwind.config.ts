import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        water: {
          50: "#f2f8ee",
          100: "#dcebd2",
          500: "#5d9345",
          700: "#376b2b",
          900: "#1c351b",
        },
        forest: {
          50: "#eef6ea",
          100: "#d6e8cc",
          500: "#4d7f3a",
          700: "#2f5528",
          900: "#172916",
        },
        clay: {
          100: "#ffe8d6",
          500: "#c9653f",
        },
        sun: {
          100: "#fff2bf",
          500: "#d69b19",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(28, 53, 27, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
