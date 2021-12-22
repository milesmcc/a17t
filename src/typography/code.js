module.exports = ({ theme }) => {
  return {
      ".code": {
          "background-color": theme("color.gray.300"),
          "color": theme("color.gray.800"),
          "display": "inline",
          "padding": theme("spacing.px") + " " + theme("spacing.1"),
          "font-family": theme("fontFamily.mono"),
          "border-radius": theme("borderRadius.DEFAULT")
      }
  }
}