/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cute: ["Poppins", "sans-serif"],
      },
      colors: {
        lovePink: "#868efc",
        lovePurple: "#b578f7",
      },
    },
  },
  plugins: [],
};
