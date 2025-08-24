/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-mint': '#E6F7ED',
        'medium-green': '#6FCF97',
        'dark-teal': '#2F6E82',
      }
    },
  },
  plugins: [],
}
