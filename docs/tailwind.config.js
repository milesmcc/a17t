let colors = require("tailwindcss/colors")

function getLibrary() {
    try {
        // Use local a17t if it's available
        return require("../src/a17t.js")
    } catch (ex) {
        // Fallback to npm's a17t if not
        console.log("Using global a17t (not local version)")
        return require("a17t")
    }
}

module.exports = {
    content: ["./**/*.{html,md}"],
    theme: {
        extend: {
            colors: {
                neutral: colors.slate,
                positive: colors.green,
                urge: colors.violet,
                warning: colors.yellow,
                info: colors.blue,
                critical: colors.red,
                inf: "white",
                zero: colors.slate[900]
            }
        },
    },
    plugins: [
        getLibrary()
    ],
}
