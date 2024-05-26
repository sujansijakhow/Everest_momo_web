/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      'color-primary': '#D95103',
      'color-secondary': '#0c6967'
     },
    },
  },
  plugins: [],
}