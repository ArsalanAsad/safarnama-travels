/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.js"],
  theme: {
    extend: {
      colors: { ink: "#0C2B33", sea: "#137C8B", saffron: "#F2B134", sand: "#EEF3F2" },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
