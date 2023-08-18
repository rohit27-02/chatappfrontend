/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          'light': '#3AAFA9',
          'dark': '#2B7A78'
        },
        'white':{
          'light':'#FEFFFF',
          'dark':'#DEF2F1'
        },
        'dark':'#17252A'


      }
    },
  },
  plugins: [],
}