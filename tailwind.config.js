/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: [ "Barlow", "Serif" ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
