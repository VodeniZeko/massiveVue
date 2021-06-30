module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        // abstract: "url('./abstract.png')",
        couple:
          "url('https://media.istockphoto.com/photos/senior-couple-relaxing-at-home-picture-id1152602619')",
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
