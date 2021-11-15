const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["HMSans", "Helvetica", "sans-serif"],
    },
    fontSize: {
      sm: ["16px", "20px"],
      base: ["18px", "1.4em"],
      lg: ["20px", "1.2em"],
      xl: ["22px", "1.2em"],
      "2xl": ["26px", "1.2em"],
      "3xl": ["24px", "1.2em"],
      "4xl": ["35px", "1.2em"],
      "5xl": ["44px", "1.2em"],
    },

    extend: {
      colors: {
        grey: {
          light: "#f4f4f1",
          DEFAULT: "#ebebeb",
          dark: "#009eeb",
        },
        black: "#000000",
        white: "#ffffff",
        salmon: "#f5e0d7",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addComponents, theme }) {
      const buttons = {
        ".btn": {
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          fontWeight: theme("fontWeight.600"),
          borderColor: theme("colors.black"),
          borderWidth: theme("borderWidth.2"),
          color: theme("colors.black"),
          "&:hover": {
            backgroundColor: theme("colors.black"),
            color: theme("colors.white"),
          },
        },
        // ".svg-underline::after": {
        //   position: "relative",

        //   "&::after": {
        //     content: "",
        //     position: "absolute",
        //     bottom: "-0.125rem",
        //     left: "-0.5rem",
        //     right: " -0.5rem",
        //     height: "0.75rem",

        //     // Position the line behind the text so that
        //     // it is still easily readable
        //     "z-index": -1,

        //     // The SVG is added as an SVG background image
        //     "background-image": "url('/underline/underline.svg')",
        //     "background-repeat": "no-repeat",

        //     // This allows the SVG to flex in size to fit
        //     // any length of word. If the word is short,
        //     // the SVG will be stretched vertically, if it
        //     // is long, the SVG will be stretched horizontally.
        //     // The jagged nature of this particular SVG works
        //     // with this transforming.
        //     "background-size": "cover",
        //   },
        // },
      };

      addComponents(buttons);
    }),
  ],
};
