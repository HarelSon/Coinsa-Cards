/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          // xl: "1280px",
          // '2xl': '1536px',
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        display: ["Oswald"],
      },
      colors: {
        as: {
          blue: "rgb(0, 95, 226)",
          "blue-dark": "#273475",
          green: "#16993b",
          black: "rgb(51, 51, 51)",
        },
      },
    },
  },
  plugins: [],
};
