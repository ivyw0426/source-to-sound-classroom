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
          50: "#eef9fb",
          100: "#d7f0f5",
          500: "#187c9c",
          700: "#0f5873",
          900: "#0b3548",
        },
        forest: {
          50: "#eef7ef",
          100: "#d8ecdc",
          500: "#3f8f57",
          700: "#28613d",
          900: "#173a29",
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
        soft: "0 18px 45px rgba(11, 53, 72, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
