import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#111111",
        primary: "#111111",
        secondary: "#4B5563",
        brand: {
          blue: "#2B5B9E",
          teal: "#1CA8B8",
        },
        accent: {
          red: {
            DEFAULT: "#FF5F56",
            border: "#E0443E",
            text: "#790A05",
            subtle: "#FFF1F0",
          },
          yellow: {
            DEFAULT: "#FFBD2E",
            border: "#DEA123",
            text: "#875210",
            subtle: "#FFF9E6",
          },
          green: {
            DEFAULT: "#27C93F",
            border: "#1AAB29",
            text: "#0C4F16",
            subtle: "#EDFCF0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
