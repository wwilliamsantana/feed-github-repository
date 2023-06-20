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
      keyframes: {
        bounceLeftRight: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(6px, 0)' },
        },
      },
      animation: {
        bounceLeftRight: 'bounceLeftRight 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
