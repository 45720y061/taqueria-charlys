/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D93A31",
        secondary: "#2A9D8F",
        accent: "#F4A261",
        neutralDark: "#1F2933"
      },
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
        heading: ["'Montserrat'", "sans-serif"]
      }
    }
  },
  plugins: []
};
