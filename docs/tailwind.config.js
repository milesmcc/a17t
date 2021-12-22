let colors = require("tailwindcss/colors")

module.exports = {
    content: ["./**/*.{html,md}"],
    theme: {
        extend: {
            colors: {
                neutral: colors.gray,
                positive: colors.green,
                urge: colors.purple,
                warning: colors.yellow,
                info: colors.blue,
                error: colors.red
            }
        },
    },
    plugins: [
        require("../src/a17t.js")
    ],
}
