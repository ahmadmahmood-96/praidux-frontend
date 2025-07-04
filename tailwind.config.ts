import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FF5F1F",
        hover: "#eb5d24",
        primaryText: "#FFFFFF",
        primaryBg: "#ECF0F1",
        teal: "#449cb4",
        tealHover: "#34749b",
        brightCoral: "#E74C3C",
        lightGray: "#BDC3C7",
        darkGray: "#7F8C8D",
        blue: "#3498DB",
        lightBlue: "#EAF3FF",
        darkBlue: "#096AD8",
      },
      boxShadow: {
        "t-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
        "custom-lg":
          "0 3px 8px 1px rgba(0, 0, 0, 0.1), 0 -2px 6px -2px rgba(0, 0, 0, 0.05), 0 5px 15px -2px rgba(0, 0, 0, 0.1)",
        "custom-white":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 -4px 6px -2px rgba(255, 255, 255, 0.05)",
      },
      daisyui: {
        themes: ["light", "dark"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
