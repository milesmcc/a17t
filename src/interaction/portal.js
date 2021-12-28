module.exports = ({ theme }) => {
  return {
    ".portal": {
      "display": "inline-flex",
      "align-items": "left",
      "justify-content": "left",
      "cursor": "pointer",
      "white-space": "nowrap",
      "padding": "0.15em 0.5em",
      "transition": "color 75ms ease-in-out",
      "text-decoration": "none",
      "font-weight": theme("fontWeight.medium"),
      "border-radius": theme("borderRadius.full"),
      "&:hover, &:focus": {
        "&:not([disabled])": {
          "color": "var(--color-content)",
        }
      },
      "&[disabled]": {
        "opacity": "0.6",
        "cursor": "not-allowed",
      },
    },
    ".portal.active": {
      "background-color": "var(--color-fill)",
      "color": "var(--color-content)",
      "&:hover": {
        "filter": "none !important",
      }
    }
  }
}