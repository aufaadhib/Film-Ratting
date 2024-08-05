/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": ['"Bebas Neue"', "sans-serif"],
        plaster: ['"Plaster"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
