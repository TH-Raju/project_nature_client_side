/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        drop: "drop 4s infinite"
      },
      keyframes: {
        drop: {
          "0%": {
            transform: " translateY(-100vh)",
            opacity: "0"
          },
          "50%": {
            opacity: "1",
          },
          "70%": {
            opacity: "1"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "0"
          }
        }
      }
    },
  },
  plugins: [],
}
