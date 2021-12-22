module.exports = ({ theme }) => {
  return {
      ".dropdown": {
          "z-index": "1",
          "position": "relative",
          "cursor": "pointer",
          ".\\@dropdown-display": {
            "visibility": "hidden",
            "opacity": "0",
            "position": "absolute",
            "top": "100%",
            "transition": "opacity 100ms",
            "display": "block",
            "z-index": "10"
          },
          "&:not(.manual)": {
            "&:hover, &:focus, &:focus-within": {
              ".dropdown-display": {
                "visibility": "visible",
                "opacity": "1",
              }
            }
          },
          "&.selected": {
            ".\\@dropdown-display": {
              "visibility": "visible",
              "opacity": "1",
            }
          }
      }
  }
}