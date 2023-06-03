/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './Views/**/*.cshtml',
    ],
    plugins: [require('daisyui')],
    //plugins: [require('daisyui')],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#02524E",
                    secondary: "#5A8B5A",
                    accent: "#72A294",
                    neutral: "#003039",
                    "base-100": "#F3F4F6",
                },
            },
        ],
    },
}

