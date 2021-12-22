module.exports = ({ theme }) => {
    return {
        ".pre": {
            "background-color": theme("colors.gray.100"),
            "white-space": "pre",
            "code": {
                "padding": theme("spacing.0"),
            },
            "border-radius": theme("borderRadius.DEFAULT"),
            "padding": theme("spacing.2"),
            "display": "block",
            "font-family": theme("fontFamily.mono")
        }
    }
}