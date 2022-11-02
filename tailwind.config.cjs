/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#69B4DB",
        secondary: "#6273AD",
        text: "#B8B7CD",
        background: "#171831",
        footer: "#424f7e",
      },
      boxShadow: {
        darkCard: "0 20px 25px -5px rgba(105, 180, 219, 0.2)",
      },
    },
  },
  plugins: [],
};
