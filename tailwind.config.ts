import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        orange: "#F27F1B",
        white: "#FCFAF1",
        blue: "#267373",
        lightBlue: "#B7D5CF",
        extraWhite: "#FFFFFF",
      },
      boxShadow: {
        blueShadow: "15px 15px 100px -20px rgba(38, 115, 115,0.2)",
      },
      backdropBlur: {
        xs: "1px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
