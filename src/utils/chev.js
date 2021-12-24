module.exports = ({ theme }) => {
  return {
      ".chev": {
          "z-index": "10",
          "border": "1.5px solid var(--color-fill)",
          "height": "0.5em",
          "width": "0.5em",
          "margin-top": "calc(var(--chev-size, 0.5em) - 20%)",
          "transform": "rotate(45deg)",
          "transform-origin": "top",
          "top": "50%",
          "content": " ",
          "border-top-width": theme("borderWidth.1"),
          "border-left-width": theme("borderWidth.1"),
          "pointer-events": "none",
          "margin-top": "auto",
          "margin-bottom": "auto",
          "top": "0px",
          "bottom": "0px",
          "align-self": "center"
      }
  }
}