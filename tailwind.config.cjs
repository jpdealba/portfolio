/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    backgroundImage: {
      'img-drops': "url('./public/drops.png')"
    },
    extend: {
      colors: {
        primary: '#69B4DB',
        selected: '#6273AD',
        secondary: '#424f7e',
        text: '#B8B7CD',
        textLight: '#514f72',
        backgroundLight: '#ececf1',
        background: '#171831',
        darkenBackground: '#101123',
        backgroundRGBA: 'rgba(23, 24, 49, 0.6)',
        sun: '#FC9601',
        sunRGBA: 'rgba(255, 228, 132, 0.6)',
        cremeBlue: '#BEE1EE',
        blue: '#3182CE',
        cyan: '#00B5D8',
        gray: '#718096',
        green: '#38A169',
        orange: '#DD6B20',
        pink: '#D53F8C',
        purple: '#805AD5',
        red: '#E53E3E',
        teal: '#319795',
        yellow: '#D69E2E'
      },
      boxShadow: {
        darkCard: '0 20px 25px -5px rgba(105, 180, 219, 0.2)',
        header: '0 20px 25px -5px rgba(0, 0, 0, 0.4)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
