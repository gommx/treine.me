/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        dmsans: ["DM Sans", "sans - serif"],
      },
    },
  },
  plugins: [],
};
