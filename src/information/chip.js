module.exports = ({ theme }) => {
  return {
    ".chip": {
      "background-color": "var(--color-fill)",
      "color": "var(--color-content)",
      "display": "inline-flex",
      "align-items": "center",
      "vertical-align": "middle",
      "justify-content": "center",
      "padding": theme("spacing.1") + " " + theme("spacing.2"),
      "font-size": theme("fontSize.xs"),
      "border-radius": theme("borderRadius.DEFAULT")
    }
  }
}