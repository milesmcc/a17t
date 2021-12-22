module.exports = ({ theme }) => {
  /* How this works: everything has a y-margin of 3; special elements,
     like headings, blockquotes, and preformatted code blocks, have 
     special spacing to help them fit better visually. When editing this
     file, be mindful of how various elements' spacing might interact and
     overlap. */
  return {
      ".content": {
          "line-height": theme("lineHeight.normal"),
          "> *:not(:last-child), > blockquote *:not(:last-child)": {
            "margin-bottom": theme("spacing.3"),
          },
          "> *:not(:first-child), > blockquote *:not(:first-child)": {
            "margin-top": theme("spacing.3"),
          },
          "h1, h2, h3, h4, h5, h6": {
            "@apply heading": {},
          },
          "h1:not(:first-child)": {
            "@apply mt-12": {},
          },
          "h2:not(:first-child)": {
            "@apply mt-10": {},
          },
          "h3:not(:first-child)": {
            "@apply mt-8": {},
          },
          "h4:not(:first-child), h5:not(:first-child), h6:not(:first-child)": {
            "@apply mt-6": {},
          },
          "code": {
            ...require("./code")({theme})[".code"]
          },
          "pre": {
            "code": {
              "background-color": "unset",
            },
            "overflow": "auto",
            ...require("./pre")({theme})[".pre"]
          },
          "code, kbd": {
            "margin-left": theme("spacing.0"),
            "margin-right": theme("spacing.0"),
          },
          "kbd": {
            ...require("./kbd")({theme})[".kbd"]
          },
          "h1": {
            "font-size": theme("fontSize.3xl")
          },
          "h2": {
            "font-size": theme("fontSize.2xl")
          },
          "h3": {
            "font-size": theme("fontSize.xl")
          },
          "h4": {
            "font-size": theme("fontSize.lg")
          },
          "h5": {
            "font-size": theme("fontSize.base")
          },
          "h6": {
            "font-size": theme("fontSize.sm")
          },
          "li": {
            "display": "list-item",
            "text-align": "left"
          },
          "ol, ul": {
            "display": "block",
            "margin-left": theme("spacing.8"),
          },
          "ol": {
            "list-style-type": "decimal"
          },
          "ul": {
            "list-style-type": "disc"
          },
          "a:not(.button):not(.portal)": {
            "color": "inherit",
            "text-decoration": "underline"
          },
          "strong, em, b": {
            "font-weight": theme("fontWeight.semibold")
          },
          "blockquote": {
            "cite": {
              "display": "block",
              "margin-top": theme("spacing.1"),
              "font-size": theme("fontSize.sm")
            },
            ...require("../layout/aside")({theme})[".aside"],
          },
          "table": {
            ...require("../information/table")({theme})[".table"]
          }
      }
  }
}