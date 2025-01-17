/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: "Roboto Mono,monospace",
    },

    extend: {
      colors: {
        pizza: "#123456",
      },
      fontSize: {
        huge: ["80rem", { lineHeight: 1 }],
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
