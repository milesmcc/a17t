module.exports = ({ theme }) => {
  return {
      ".table": {
          "width": "100%",
          "max-width": "100%",
          "overflow": "auto",
          "border-collapse": "collapse",
          "thead": {
            "border-bottom-width": theme("border.DEFAULT")
          },
          "tfoot": {
            "border-top-width": theme("border.DEFAULT")
          },
          "tr": {
            "display": "table-row",
            "vertical-align": "inherit",
            "border-color": "inherit"
          },
          "td, th": {
            "display": "table-cell",
            "padding": theme("spacing.2"),
            "text-align": "left"
          },
          "th": {
            "font-weight": theme("fontWeight.semibold")
          }
      }
  }
}