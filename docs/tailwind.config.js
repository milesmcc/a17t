let colors = require("tailwindcss/colors")

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
        require("../src/a17t.js")
    ],
}
