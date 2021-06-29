module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fill: (theme) => ({
      blue: theme("colors.blue.50"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
