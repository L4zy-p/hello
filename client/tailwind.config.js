const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  enabled: true,
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#edf2f8',
        secondary: '#4c5aff',
        black: '#030303',
        gray: '#6b7688',
        lightGray: '#e4e4e4',
        brown: '#46364a',
        navBg: 'rgba(255, 255, 255, 0.25)',
        navBorder: 'rgba(255, 255, 255, 0.18)',
        navBgDark: 'rgba(62,62,66, 0.10)',
        bgDark: {
          900: '#1e1e1e',
          800: '#252526',
          700: '#2d2d30',
          600: '#3e3e42',
          100: '#dbdbdb'
        }
      }
    },
    screens: {
      xs: '450px',
      sm: '500px',
      md: '768px',
      lg: '900px',
      xl: '1200px',
      xxl: '2000px',
      // ...defaultTheme.screens,
    }
  },
  plugins: [],
}