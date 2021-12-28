module.exports = ({ theme }) => {
  return {
      ".loading": {
          "pointer-events": "none",
          "color": theme("colors.transparent") + " !important",
          "position": "relative",
          "&::after": {
            "animation": "spin 500ms infinite linear",
            "border": "2px solid var(--color-content)",
            "border-color": theme("colors.transparent") + " " + theme("colors.transparent") + " var(--color-content) var(--color-content)",
            "content": "\"\"",
            "height": "0.85em",
            "width": "0.85em",
            "right": "calc(50% - (0.85em / 2))",
            "bottom": "calc(50% - (0.85em / 2))",
            "overflow": "visible",
            "position": "absolute",
            "border-radius": theme("borderRadius.full"),
            "margin-left": "auto",
            "margin-right": "auto"
          }
      }
  }
}