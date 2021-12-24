module.exports = ({ theme }) => {
  let component = {
    "transition": "box-shadow 75ms ease-out, border 75ms ease-out",
    "box-shadow": theme("boxShadow.sm"),
    "appearance": "none",
    "background-color": "inherit",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    "&[disabled]": {
      "cursor": "not-allowed",
      "opacity": "0.6",
    },
    "&[readonly]": {
      "user-select": "all",
    },
    "&::placeholder": {
      "opacity": "0.75",
    },
    "&:hover": {
      "box-shadow": theme("boxShadow.DEFAULT"),
    },
    "&:focus": {
      "box-shadow": "0 0 0 " + theme("borderWidth.2") + " var(--color-fill), " + theme("boxShadow.sm"),
      "outline": "none"
    },
    "display": "inline-flex",
    "width": "100%",
    "max-width": "100%",
    "padding": theme("spacing.2"),
    "line-height": theme("lineHeight.tight"),
    "border": theme("borderWidth.DEFAULT") + " solid var(--color-fill)",
    "border-radius": theme("borderRadius.DEFAULT"),
    "background-color": theme("colors.bg")
  }
  return {
    // We list these separately so that we can do `require(...)[".field"]` in other components.
    ".field": component,
    ".input": component
  }
}
