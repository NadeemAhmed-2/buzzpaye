// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc6d38" , // for text bold orange #FF1C1C"   #E96230 rgb(232, 126, 51)
        secondary: "#000000",  // black
        lightRed: "rgb(250, 122, 35)",   // lighter orange for hover/accents #FF4D4D
       grayCustom : "rgb(30, 30, 30)", // dark gray background
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

