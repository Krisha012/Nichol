/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Sora", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      purple: {
        400: "#ab72f2",
        500: "#994ff5",
      },
      gray: "#7780a1",
      white: "#ffffff",
      black: "#050d17",
      warning: "#ffc41f",
    },
    extend: {
      backgroundImage: {
        'footer-pattern': "url('/src/assets/Image/footer-bg.svg')",
        'dot-line': "url('/src/assets/Image/dot-line.svg')",
      }
    },
    plugins: [],
  },
};