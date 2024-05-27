/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit']
      },
      colors: {
        'secondary': "#00672E",
        'primary': "#EFECEA",
        'black': "#000",
      }
    },
  },
  plugins: [],
}

