/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        veryDarkGrayishBlue: "#48556a",
        desaturatedDarkBlue: "#6d7f97",
        grayishBlue: "#9eafc2",
        lightGrayishBlue: "#ecf2f8",
      },
      fontFamily: { manrope: "Manrope, sans-serif" },
    },
  },
  plugins: [],
};
