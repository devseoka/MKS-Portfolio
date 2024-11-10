/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Host Grotesk", 'sans-serif'],
      },
      colors: {
        'mks-orange': {
          100: '#fbb9a2',
          200: '#f99b7e',
          300: '#f77d5a',
          400: '#f55f36',
          500: '#ef4028', 
          600: '#d92f22',
          700: '#b2251b',
          800: '#911c14',
          900: '#7a140f',
        },
        'mks-black': {
          100: '#3b474d',
          200: '#2f3c42',
          300: '#253136',
          400: '#1a262a',
          500: '#0B1215', 
          600: '#0a0f12',
          700: '#080d0f',
          800: '#060a0b',
          900: '#040708',
        },
      },
    },
  },
  plugins: [],
}
