module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          50:  '#f5f7ff',
          100: '#e0e4fa',
          200: '#d3d8f8',
          300: '#969ced',
          400: '#6d6dd5',
          500: '#5b53d0',
          600: '#4c45b5',
          700: '#3d36a6',
          800: '#2c2588',
          900: '#231e6b'
        },
      }
    },
  },
  plugins: [],
}
