module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        abstract:
          "url('https://static.vecteezy.com/system/resources/previews/000/196/460/original/abstract-blue-circles-background-design-vector.jpg')",
      }),
    },
    fill: (theme) => ({
      blue: theme("colors.blue.50"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
