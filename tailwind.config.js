/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      primary: "#0E7139",
      secondary: "#FDBD12",
      textColor: "#3A3A3A",
      white: "#fff",
      bannerText: "#51B960",
      darkGray: "#A6A6AA",
      red: "#FF3939",
      whiteGray: "#EAE8E8",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
