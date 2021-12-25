module.exports = ({ theme }) => {
  return {
      ".code": {
          "background-color": theme("colors.gray.200"),
          "display": "inline",
          "padding": theme("spacing.px") + " " + theme("spacing.1"),
          "font-family": theme("fontFamily.mono"),
          "border-radius": theme("borderRadius.DEFAULT"),
      }
  }
}