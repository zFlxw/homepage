/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      'hr': {
        '@apply border-0 shrink-0': {},
        'height': '1px',
        'background-color': '#464953',
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
