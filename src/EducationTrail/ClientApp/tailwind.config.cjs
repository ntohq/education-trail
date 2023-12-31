const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["mdi", "ic", "fa-solid"]),
    }),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui")["[data-theme=light]"],
          "primary": "#02524E",
          "primary-content": "#FFFFFF",
          "secondary": "#5A8B5A",
          "secondary-content": "#FFFFFF",
          "accent": "#72A294",
          "accent-content": "#FFFFFF",
          "neutral": "#003039",
          "neutral-content": "#FFFFFF",
          "base-100": "#F3F4F6",
          "base-200": "#E6E7EB",
          "base-300": "#D9DBDE",
          "base-content": "#000000",
          "info": "#5A8B5A",
          "info-content": "#FFFFFF",
          "success": "#72A294",
          "success-content": "#FFFFFF",
          "warning": "#F0AD4E",
          "warning-content": "#FFFFFF",
          "error": "#DC3545",
          "error-content": "#FFFFFF"
        },
        dark: {
          ...require("daisyui")["[data-theme=dark]"],
          "primary": "#022D28",
          "primary-content": "#FFFFFF",
          "secondary": "#375A4F",
          "secondary-content": "#FFFFFF",
          "accent": "#466D60",
          "accent-content": "#FFFFFF",
          "neutral": "#00181E",
          "neutral-content": "#FFFFFF",
          "base-100": "#1F2930",
          "base-200": "#263238",
          "base-300": "#2C3B40",
          "base-content": "#FFFFFF",
          "info": "#375A4F",
          "info-content": "#FFFFFF",
          "success": "#466D60",
          "success-content": "#FFFFFF",
          "warning": "#8C6B3A",
          "warning-content": "#FFFFFF",
          "error": "#A9232C",
          "error-content": "#FFFFFF"
        },
      },
    ],
  },
}

