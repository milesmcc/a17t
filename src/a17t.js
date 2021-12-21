const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents, e, theme }) {
      // Default values for when a specific priority is not specified
      addBase({
        ":root": {
          "--color-fill": "var(--color-fill-low)",
          "--color-content": "var(--color-content-low)",
        }
      })

      // Utilities: !high and !low
      let priorityVariants = {};
      priorityVariants[e("!high")] = {
        "--color-fill": "var(--color-fill-high)",
        "--color-content": "var(--color-content-high)",
      }
      priorityVariants[e("!low")] = {
        "--color-fill": "var(--color-fill-low)",
        "--color-content": "var(--color-content-low)",
      }
      addUtilities(priorityVariants)

      // Utilities: "~color" for each color
      for (let color of Object.keys(theme("colors"))) {
        let colorVariants = {};
        let values = theme("colors." + color)
        if (typeof values === 'object' && values !== null) {
          let selector = e("~" + color)
          variants[selector] = {
            "--color-fill-high": values[500],
            "--color-fill-low": values[200],
            "--color-content-high": values[000],
            "--color-content-low": values[800],
          }
        }
        addUtilities(colorVariants)
      }

      addComponents({
        "chip": {
          "background-color": "var(--color-fill)",
          "color": "var(--color-content)",
          "display": "inline-flex",
          "align-items": "center",
          "vertical-align": "middle",
          "justify-content": "center",
          "@apply px-2 py-1 text-xs rounded": {},
        }
      })
    }),
  ]
}