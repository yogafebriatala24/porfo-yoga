import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        hitam: "#2B2B2B",
        hijau: "#00C774",
        secondary: "#BDBDBD",
        gelap: "#3C3C3C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-image": "./public/img/pattern.jpeg",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
export default config;
