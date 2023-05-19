/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryRed: "#EA5353",
        primaryCyan: "#45D3D3",
        primaryOrange: "#FCAF4A",
        primaryBlue: "#549EF2",
        textDarkBlue: "#474A5E",
        textGrayishBlue: "#A3A5AE",
        backgroundMain: "#FAFAFA",
      },
      width: {
        550: "34.375rem",
        380: "23.75rem",
      },
    },
  },
  plugins: [],
};
