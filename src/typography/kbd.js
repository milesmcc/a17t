module.exports = ({ theme }) => {
  return {
      ".kbd": {
          "background-color": theme("colors.gray.50"),
          "color": theme("colors.gray.700"),
          "border-radius": theme("borderRadius.DEFAULT"),
          "padding": theme("spacing.px") + " " + theme("spacing.1"),
          "display": "inline",
          "font-family": theme("fontFamily.mono")
      }
  }
}