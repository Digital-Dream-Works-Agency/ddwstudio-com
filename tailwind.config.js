/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50:  '#f0f5fb',
          100: '#d9e7f5',
          200: '#b3cfeb',
          300: '#8db7e1',
          400: '#618DC7',  // PRIMARY BRAND BLUE
          500: '#4a74b0',
          600: '#3a5c96',
          700: '#2d4878',
          800: '#07234B',  // DEEP NAVY
          900: '#051830',
          950: '#020e1c',
        },
        brand: {
          blue: '#618DC7',
          navy: '#07234B',
          white: '#FFFFFF',
          black: '#000000',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'Inter', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}