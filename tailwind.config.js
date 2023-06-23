/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*'./*.{html,js,ts,jsx}'",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {

    extend: {
      colors: {
        'aqua': '#93D5E1',
        'pink-hue': '#DABDA9',
        'pink-hue-light': '#F3DAC9'
      },
    }
  },
  plugins: [],
}