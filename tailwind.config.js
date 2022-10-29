const plugin = require("tailwindcss/plugin");
const tStyles = require("@tailwindcss/typography/src/styles");

module.exports = {
  content: [
    "./PB/**/*.{js,ts,jsx,tsx}",
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
          DEFAULT: "#f3f3f3",
          dark: "#222428",
        },
        black: "#000000",
        white: "#ffffff",
        primary: "#392BD4",
        secondary: "#C6D42B",
        bgWhite: "#fafafa",
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
    plugin(function ({ addUtilities, addComponents, e, config }) {
      const classes = Object.entries(tStyles).reduce((acc, [key, item]) => {
        const getDefaultValue = (item) => {
          return tStyles.DEFAULT.css[0][item];
        };

        if (["base", "lg", "sm"].includes(key)) {
          const sizeValues = {};
          const spaceValues = {};

          Object.entries(item.css[0]).forEach(([cssKey, cssValue]) => {
            if (cssKey === "fontSize") {
              sizeValues["fontSize"] = cssValue;
            }

            if (["h1", "h2", "h3", "h4", "p"].includes(cssKey)) {
              const SizeCss = {};
              const SpaceCss = {};

              console.log({ cssKey, cssValue });
              console.log("+++++--");

              SizeCss["font-size"] = cssValue.fontSize;
              SizeCss["line-height"] = cssValue.lineHeight;
              SizeCss["fontWeight"] = getDefaultValue(cssKey)?.fontWeight;
              SpaceCss["marginTop"] = cssValue.marginTop;
              SpaceCss["marginBottom"] = cssValue.marginBottom;

              sizeValues[cssKey] = SizeCss;
              spaceValues[cssKey] = SpaceCss;
            }
          });
          acc[".typo-" + key + "-size"] = sizeValues;
          acc[".typo-" + key + "-space"] = spaceValues;
        }

        return acc;
      }, {});

      console.log(classes);
      addComponents({
        ...classes,

        ".typo-space": {
          h1: {
            ["margin-bottom"]: "0.8333333em",
          },
          h2: {
            ["margin-top"]: "1.5em",
            ["margin-bottom"]: "2em",
          },
          h3: {
            ["margin-top"]: "1.6em",
            ["margin-bottom"]: "0.6em",
          },
          h4: {
            ["margin-top"]: "1.5em",
            ["margin-bottom"]: "0.5em",
          },
        },
      });
      // Add your custom styles here
    }),
    require("@tailwindcss/typography"),
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
