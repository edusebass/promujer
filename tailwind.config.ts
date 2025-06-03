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
        secondary: "#CC2A8D",
        accent: "#D8CFEA",
        button: "#F7F7F7",
        text: {
          primary: "white",
          secondary: "#CC2A8D",
        },
        background: {
          DEFAULT: "#F7F7F7",
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
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(8px)" }, // mueve 8px a la derecha
        },
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.07)" }, // Zoom leve
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
        zoom: "zoom 1.5s ease-in-out infinite",
      },
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