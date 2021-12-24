module.exports = ({ theme }) => {
  return {
      ".code": {
          "background-color": theme("colors.gray.300"),
          "color": theme("colors.gray.800"),
          "display": "inline",
          "padding": theme("spacing.px") + " " + theme("spacing.1"),
          "font-family": theme("fontFamily.mono"),
          "border-radius": theme("borderRadius.DEFAULT")
      }
  }
}