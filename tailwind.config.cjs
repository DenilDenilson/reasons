/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        //       font-family: 'Kalam', cursive;
        // font-family: 'Manrope', sans-serif;
        Kalam: ["Kalam", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      },
    },
    colors: {
      salmon: {
        100: "#FFD0C0",
        200: "#FFB8A1",
        300: "#FFA181",
        400: "#FF8962",
        500: "#FF6E40",
        600: "#FF490D",
        700: "#D63600",
        800: "#A12800",
        900: "#6B1B00",
      },
      naranja: {
        100: "#F7C3BE",
        200: "#F3A69D",
        300: "#F0887C",
        400: "#EC6A5B",
        500: "#E84B3A",
        600: "#D92D19",
        700: "#AD2414",
        800: "#821B0F",
        900: "#57120A",
      },
      base: {
        100: "#FFC4CE",
        200: "#FFA6B5",
        300: "#FE899C",
        400: "#FE6B84",
        500: "#FE4D6B",
        600: "#FE163D",
        700: "#DC0126",
        800: "#A5011C",
        900: "#6E0113",
      },
      rosa: {
        100: "#F7BEE4",
        200: "#F39DD7",
        300: "#F07CC9",
        400: "#EC5BBC",
        500: "#E83AAE",
        600: "#D91999",
        700: "#AD147A",
        800: "#820F5C",
        900: "#570A3D",
      },
      purple: {
        100: "#FAC0FF",
        200: "#F7A1FF",
        300: "#F581FF",
        400: "#F262FF",
        500: "#EE40FF",
        600: "#EB0DFF",
        700: "#C400D6",
        800: "#9300A1",
        900: "#62006B",
      },
      greys: {
        BG: "#FBFDFE",
        BG_ALT: "#F9FAFB",
        BORDER: "#CCCCCC",
        LIGHTER: "#B7C0C7",
        LIGH: "#8E9BA4",
        TEXT: "#687782",
        TITLE: "#273B49",
      },
    },
  },
  plugins: [],
};
