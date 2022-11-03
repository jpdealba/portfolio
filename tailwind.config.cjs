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
        background: '#171831'
      },
      boxShadow: {
        darkCard: '0 20px 25px -5px rgba(105, 180, 219, 0.2)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
