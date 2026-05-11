/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C0392B",
        accent:  "#E67E22",
        dark:    "#1A1A1A",
        muted:   "#6B6B6B",
        light:   "#FAFAF8",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body:    ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
