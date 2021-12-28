module.exports = ({ theme }) => {
  return {
      ".button": {
          "border": theme("spacing.px") + " solid var(--color-accent)",
          "background-color": "var(--color-muted)",
          "color": "var(--color-content)",
          "display": "inline-flex",
          "flex-direction": "row",
          "flex-wrap": "nowrap",
          "align-items": "center",
          "align-content": "center",
          "justify-content": "center",
          "cursor": "pointer",
          "position": "relative",
          "line-height": "1.5",
          "white-space": "nowrap",
          "transition": "filter 75ms ease-in-out",
          "transform-origin": "center",
          "text-decoration": "none",
          "appearance": "none",
          "padding": "0.25em 0.5em",
          "border-radius": theme("borderRadius.DEFAULT"),
          "box-shadow": theme("boxShadow.sm"),
          "outline": "none",
          "&:hover, &:focus": {
            "&:not([disabled]):not(.field)": {
              "filter": "brightness(95%)"
            }
          },
          "&[disabled]": {
            "opacity": "0.6",
            "cursor": "not-allowed"
          },
          "&:active": {
            "box-shadow": theme("boxShadow.sm") + ", " + theme("boxShadow.inner")
          },
          "&.button-xl": {
            "padding": theme("spacing.2") + " " + theme("spacing.4"),
            "font-size": theme("fontSize.md"),
            "border-radius": theme("borderRadius.md")
          }
      }
  }
}