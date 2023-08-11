const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["mdi", "fa-solid"]),
    }),
  ],
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
