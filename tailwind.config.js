/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        robotoMono: ['var(--font-robotoMono)'],
        jacquesFracois: ['var(--font-jacquesFracois)'],
      },
      colors: {
        brown: {
          100: '#FDFCF9',
          300: '#ebe5df',
          500: '#c8ad80',
          800: '#4b2b13',
          900: '#2e1308',
        },
      },
    },
  },
  plugins: [],
}
