const plugin = require('tailwindcss/plugin')

let a17t = plugin(function ({ addBase, addUtilities, addComponents, e, theme }) {
    // Default values for when a specific priority is not specified
    addBase({
        "*": {
            "--color-fill": "var(--color-fill-low)",
            "--color-content": "var(--color-content-low)",
        }
    })

    // Utilities: @high and @low
    let priorityVariants = {};
    priorityVariants[".\\@high"] = {
        "--color-fill": "var(--color-fill-high)",
        "--color-content": "var(--color-content-high)",
    }
    priorityVariants[".\\@low"] = {
        "--color-fill": "var(--color-fill-low)",
        "--color-content": "var(--color-content-low)",
    }
    addBase(priorityVariants)

    // Utilities: "~color" for each color
    for (let color of Object.keys(theme("colors"))) {
        let colorVariants = {};
        let values = theme("colors." + color)
        if (typeof values === 'object' && values !== null) {
            let selector = "." + e("~" + color)
            colorVariants[selector] = {
                "--color-fill-high": values[500],
                "--color-fill-low": values[200],
                "--color-content-high": values[50],
                "--color-content-low": values[800],
            }
        }
        addUtilities(colorVariants)
    }

    // Register all the components!
    let c = { theme }; // The arguments passed to each component
    addComponents({
        ...require("./information/badge")(c),
        ...require("./information/chip")(c),
        ...require("./information/icon")(c),
        ...require("./information/progress")(c),
        ...require("./information/shield")(c),
        ...require("./information/table")(c),

        ...require("./interaction/button")(c),
        ...require("./interaction/dropdown")(c),
        ...require("./interaction/portal")(c),

        ...require("./layout/aside")(c),
        ...require("./layout/card")(c),
        ...require("./layout/sep")(c),
    })
});

module.exports = a17t;