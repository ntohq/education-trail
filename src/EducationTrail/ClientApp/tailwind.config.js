/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui")["[data-theme=light]"],
          primary: "#02524E",
          secondary: "#5A8B5A",
          accent: "#72A294",
          neutral: "#003039",
          "base-100": "#F3F4F6",
        },
      },
    ],
  },
};
