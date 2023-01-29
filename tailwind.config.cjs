/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '5.5': '1.375rem',
        '34': '8.5rem',
        '86': '22rem',
        '92': '23rem',
        '110': '26rem',
        '120': '28rem',
        '130': '30rem',
        '140': '32rem',
        '150': '34rem',
        '160': '36rem',
        '170': '38rem',
        '180': '40rem',
        '190': '42rem',
        '200': '44rem',
        '210': '46rem',
      },
      colors: {
        arctic: '#ffffff',
        primary: '#DA7278',
        secondary: '#9E9C9A',
        'neutral-700': '#9E9C9A',
        'neutral-800': '#68646A',
        'neutral-850': '#504E4F',
        'neutral-900': '#3C3A3B',
        'neutral-950': '#48494D',
        'neutral-975': '#3a3939',
        'neutral-1000': '#242323',
        'neutral-1050': '#353535',
        'neutral-1100': '#1E1E1E',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        petrona: ['Petrona', 'serif']
      },
      screens: {
        '2xs': '400px',
        xs: '570px'
      }
    },
  },
  plugins: [],
}