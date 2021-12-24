module.exports = ({ theme }) => {
    return {
        ".card": {
            "display": "block",
            "padding": theme("spacing.4"),
            "background-color": theme("colors.bg"),
            "overflow": "hidden",
            "border-radius": theme("borderRadius.lg"),
            "box-shadow": theme("boxShadow.lg"),
        }
    }
}