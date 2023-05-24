/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#E4457F",
        brand: "#D42C6A",
        "brand-200": "#FF94BB",
        "brand-300": "#F474A3",
        "brand-400": "#EF568E",
        "secondary-300": "#A4D4A9",
        "secondary-400": "#82B988",
        "secondary-500": "#35873D",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
