const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: false,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
    }
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "var(--primary-color)",
      accent1: "var(--accent1-color)",
      accent2: "var(--accent2-color)",
      accent3: "var(--accent3-color)",
      accent4: "var(--accent4-color)",
      black: "var(--black-color)",
      white: "var(--white-color)",
      "gray-light": "var(--gray-light-color)",
      gray: "var(--gray-color)",
      "gray-dark": "var(--gray-dark-color)",
      tina: {
        primary: "var(--tina-color-primary)",
        error: "var(--tina-color-error)",
        warning: "var(--tina-color-warning)",
        success: "var(--tina-color-success)",
        gray0: "var(--tina-color-grey-0)",
        gray1: "var(--tina-color-grey-1)",
        gray2: "var(--tina-color-grey-2)",
        gray3: "var(--tina-color-grey-3)",
        gray4: "var(--tina-color-grey-4)",
        gray5: "var(--tina-color-grey-5)",
        gray6: "var(--tina-color-grey-6)",
        gray7: "var(--tina-color-grey-7)",
        gray8: "var(--tina-color-grey-8)",
        gray9: "var(--tina-color-grey-9)",
        gray10: "var(--tina-color-grey-10)",
      }
    },
    screens: {
			xl: { max: "1280px" },
			lg: { max: "1024px" },
			md: { max: "768px" },
			sm: { max: "900px" },
		},
    fontSize: {
      xs: [ "var(--text-size-xs)", { lineHeight: "var(--text-leading-xs)" }],
      sm: [ "var(--text-size-sm)", { lineHeight: "var(--text-leading-sm)" }],
      base: [ "var(--text-size-md)", { lineHeight: "var(--text-leading-md)" }],
      lg: [ "var(--text-size-lg)", { lineHeight: "var(--text-leading-lg)" }],
      xl: [ "var(--text-size-xl)", { lineHeight: "var(--text-leading-xl)" }],
      '2xl': [ "var(--text-size-2xl)", { lineHeight: "var(--text-leading-2xl)" }],
      '3xl': [ "var(--text-size-3xl)", { lineHeight: "var(--text-leading-3xl)" }],
      '4xl': [ "var(--text-size-4xl)", { lineHeight: "var(--text-leading-4xl)" }],
      '5xl': [ "var(--text-size-5xl)", { lineHeight: "var(--text-leading-5xl)" }],
      '6xl': [ "var(--text-size-6xl)", { lineHeight: "var(--text-leading-6xl)" }],
      '7xl': [ "var(--text-size-7xl)", { lineHeight: "var(--text-leading-7xl)" }],
      '8xl': [ "var(--text-size-8xl)", { lineHeight: "var(--text-leading-8xl)" }],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      textDecoration: ["active"],
      opacity: {
        7: ".075",
        15: ".15",
      },
      width: {
        "edge-20": "calc(((100% - 1024px)/2) + 204px)",
        "edge-25": "calc(((100% - 1024px)/2) + 256px)",
        "edge-33": "calc(((100% - 1024px)/2) + 341px)",
        "edge-50": "calc(((100% - 1024px)/2) + 512px)",
        "edge-66": "calc(((100% - 1024px)/2) + 682px)",
        "edge-75": "calc(((100% - 1024px)/2) + 768px)",
        "edge-80": "calc(((100% - 1024px)/2) + 819px)",
      },
      maxWidth: {
        "desktop-full": "1024px",
        "desktop-half": "512px",
        "lg-20": "204px",
        "lg-25": "256px",
        "lg-33": "340px",
        "lg-50": "512px",
        "lg-66": "676px",
        "lg-75": "768px",
        "lg-80": "818px",
      },
      minHeight: {
        "100": "25rem",
        "120": "30rem",
        "140": "35rem",
        "160": "40rem",
        "180": "45rem",
        "200": "50rem",
      },
      spacing: {
        128: "32rem",
      },
      zIndex: {
        "-2": "-2",
        "-1": "-1",
      },
      fontFamily: {
        '1': ["var(--font1)", "sans-serif"],
        '2': ["var(--font2)", "sans-serif"],
        '3': ["var(--font3)", "sans-serif"],
        '4': ["var(--font4)", "sans-serif"]
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
