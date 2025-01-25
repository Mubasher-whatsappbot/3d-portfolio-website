/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",  // Dark blue background
        secondary: "#64FFDA", // Bright teal for accents
        tertiary: "#112240", // Lighter blue for cards
        "black-100": "#1E2D3D",
        "black-200": "#162B45",
        "white-100": "#CCD6F6",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1E2D3D",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
