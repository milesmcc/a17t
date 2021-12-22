module.exports = ({ theme }) => {
  return {
      ".aside": {
          "border-left": "3px solid var(--color-content)",
          "background-color": "var(--color-fill)",
          "color": "var(--color-content)",
          "display": "block",
          "padding": theme("spacing.4"),
          "overflow": "hidden",
          "border-radius": theme("borderRadius.lg")
      }
  }
}