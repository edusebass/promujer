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
        primary: "#B12B72",
        secondary: "#6BA79F",
        accent: "#D8CFEA",
        text: {
          primary: "#1C1C1C",
          secondary: "#6E6E6E",
        },
        background: {
          DEFAULT: "#FFFFFF",
          soft: "#F9F9F9",
          border: "#E3E3E3",
        },
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
// colorDropdown: "#B698BC",
//         colorButton: "#D90089",
//         colorTextPrimary: "#212121",
//         colorTextSecondary: "#666666",
//         background: "#FFFFFF",
//         primary: "#C8057F",
//         secondary: "#6FBFAD",

// esto es lo que estoy utilizando quiero que sea mas porfesiona