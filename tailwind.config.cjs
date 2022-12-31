/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "url('/assets/homepage.jpg')",
        'about': "url('/assets/about.jpg')"
      }
    },
    colors: {
      white: '#ffffff',
      primary: '#00BFFF',
      'neutral-800': '#3F4248',
      'neutral-900': '#2A2D34'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      petrona: ['Petrona', 'serif']
    },
  },
  plugins: [],
}
