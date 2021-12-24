module.exports = ({ theme }) => {
  return {
      ".select": {
          "position": "relative",
          "select": {
            ...require("../interaction/field")({theme})[".field, .input"],
            "padding-right": theme("spacing.10"),
            "display": "block",
          },
          "&::after": {
            ...require("../utils/chev")({theme})[".chev"],
            "right": "1em",
            "position": "absolute"
          }
      }
  }
}