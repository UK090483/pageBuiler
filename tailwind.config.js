const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./PageBuilderPlugins/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    debugScreens: {
      ignore: ["menu"],
    },
    extend: {
      screens: {
        menu: "800px",
      },
      spacing: {
        sides: "0.5rem",
      },
      height: {
        hero: "calc(100vh - 60px)",
        "hero-mobile": "calc(100vh - 120px)",
      },
      colors: {
        grey: {
          light: "#f4f4f1",
          DEFAULT: "#ebebeb",
          dark: "#009eeb",
        },
        black: "#000000",
        white: "#ffffff",
        primary: "#392BD4",
        secondary: "#C6D42B",
        red: "#D22D30",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeInFast: "slideDown 0.25s ease-in forwards",
        fadeInMenuItemFast: "menuFade 0.25s ease-in forwards",
        slideDown: "slideDown 0.25s ease-in forwards",
        slideInRight: "slideInRight 0.5s ease-in forwards",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        menuFade: {
          "0%": {
            opacity: 0,
            transform: " translateX(-50%) translateY(-100%)",
            zIndex: -100,
          },

          "99%": {
            zIndex: -100,
          },

          "100%": {
            zIndex: 20,
            opacity: 1,
            transform: "translateX(-50%) ",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
