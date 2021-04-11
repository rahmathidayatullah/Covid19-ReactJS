module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        "-300%": "-300%",
      },
      spacing: {
        "fit-content": "fit-content",
        auto: "auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
