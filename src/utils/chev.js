module.exports = ({ theme }) => {
  return {
      ".chev": {
          "z-index": "10",
          "height": "0.5em",
          "width": "0.5em",
          "margin-top": "calc(var(--chev-size, 0.5em) - 20%)",
          "transform": "rotate(45deg)",
          "transform-origin": "top",
          "top": "50%",
          "content": "\" \"",
          "border-bottom": theme("spacing.px") + " solid var(--color-content)",
          "border-right": theme("spacing.px") + " solid var(--color-content)",
          "pointer-events": "none",
          "margin-top": "auto",
          "margin-bottom": "auto",
          "top": "0px",
          "bottom": "0px",
          "align-self": "center"
      }
  }
}