const { theme } = require('@sanity/demo/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './sanity/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#ccdceb',
          300: '#a0c0d9',
          400: '#78a6c8',
          500: '#4a82ad',
          600: '#386991',
          700: '#2e5476',
          800: '#2a4862',
          900: '#273e53',
          950: '#1a2837',
        },
        netural: {
          50: '#f5f7f9',
          100: '#eaedf2',
          200: '#d7dde6',
          300: '#bbc6d5',
          400: '#9aa9c0',
          500: '#8190b0',
          600: '#6f7ca1',
          700: '#636c92',
          800: '#545b79',
          900: '#474d61',
          950: '#2e303d',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
