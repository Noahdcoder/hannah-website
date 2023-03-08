/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tuatara: "#1c1c1b",
        rawSienna: "#cd8941",
        naturalGray: "#8c8c8a",
        gray: "#848484",
        whiteGray: "#e6e6e6",
        white: "#fff",
        black: "#000",
        lightGray: "##cccccc",
        red: "#FF0000"
      }
    },
  },
  plugins: [],
}
