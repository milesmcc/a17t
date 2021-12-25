const plugin = require('tailwindcss/plugin')

let a17t = plugin(function ({ addBase, addUtilities, addComponents, e, theme }) {


    // Patch the "theme" function to support "theme.bg", falling back to "white" if necessary:
    let newThemeFunc = (arg) => {
        let res = theme(arg);
        if (arg === "colors.bg" && res === undefined) {
            return theme("colors.white");
        }
        return res;
    }

    // Default values for when a specific priority is not specified
    addBase({
        "*": {
            "--color-fill": "var(--color-fill-low)", // Background color (e.g., for a chip)
            "--color-content": "var(--color-content-low)", // Usually the text color
            "--color-accent": "var(--color-accent-low)", // Slightly offset from the fill color (e.g., button outline)
        },
        "@keyframes spin": { // Used by .loading; must be in base
            "0%": {
                "transform": "rotate(0deg)",
            },

            "100%": {
                "transform": "rotate(360deg)"
            },
        }
    })

    // Utilities: @high and @low
    let priorityVariants = {};
    priorityVariants[".\\@high"] = {
        "--color-fill": "var(--color-fill-high)",
        "--color-content": "var(--color-content-high)",
        "--color-accent": "var(--color-accent-high)",
    }
    priorityVariants[".\\@low"] = {
        "--color-fill": "var(--color-fill-low)",
        "--color-content": "var(--color-content-low)",
        "--color-accent": "var(--color-accent-low)",
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
                "--color-accent-high": values[600],
                "--color-accent-low": values[300]
            }
        }
        addUtilities(colorVariants)
    }

    // Register all the components!
    let c = { theme: newThemeFunc }; // The arguments passed to each component
    addComponents({
        ...require("./information/badge")(c),
        ...require("./information/chip")(c),
        ...require("./information/icon")(c),
        ...require("./information/progress")(c),
        ...require("./information/shield")(c),
        ...require("./information/table")(c),

        ...require("./interaction/button")(c),
        ...require("./interaction/dropdown")(c),
        ...require("./interaction/field")(c),
        ...require("./interaction/portal")(c),
        ...require("./interaction/select")(c),
        ...require("./interaction/switch")(c),

        ...require("./layout/aside")(c),
        ...require("./layout/card")(c),
        ...require("./layout/sep")(c),

        ...require("./typography/code")(c),
        ...require("./typography/content")(c),
        ...require("./typography/heading")(c),
        ...require("./typography/kbd")(c),
        ...require("./typography/label")(c),
        ...require("./typography/pre")(c),
        ...require("./typography/subheading")(c),
        ...require("./typography/support")(c),
        ...require("./typography/supra")(c),

        ...require("./utils/chev")(c),
        ...require("./utils/loading")(c),
    })
});

module.exports = a17t;