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
      clipPath: {
        "custom-shape":
          "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 62% 100%, 50% 75%, 0% 75%)",
      },
    },
  },
  plugins: [],
};
