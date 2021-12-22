module.exports = ({ theme }) => {
  return {
      ".button": {
          "background-color": "var(--color-fill)",
          "color": "var(--color-content)",
          "display": "inline-flex",
          "flex-direction": "row",
          "flex-wrap": "nowrap",
          "align-items": "center",
          "align-content": "center",
          "justify-content": "space-between",
          "cursor": "pointer",
          "position": "relative",
          "line-height": "1.5",
          "white-space": "nowrap",
          "transition": "filter 75ms ease-in-out",
          "transform-origin": "center",
          "text-decoration": "none",
          "appearance": "none",
          "padding": theme("spacing.1") + " " + theme("spacing.2"),
          "border-radius": theme("borderRadius.DEFAULT"),
          "outline": "none",
          "&:hover, &:focus": {
            "&:not([disabled]):not(.field)": {
              "filter": "brightness(95%)"
            }
          },
          "&[disabled]": {
            "opacity": "0.6",
            "cursor": "not-allowed"
          }
      }
  }
}