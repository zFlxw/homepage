/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "url('/assets/homepage.jpg')"
      }
    },
    colors: {
      white: '#ffffff',
      primary: '#a2d2ff',
      'neutral-800': '#3F4248',
      'neutral-900': '#2A2D34'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
