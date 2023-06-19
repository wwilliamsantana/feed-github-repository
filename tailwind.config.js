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
    },
  },
  plugins: [],
}
