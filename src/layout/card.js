module.exports = ({ theme }) => {
    return {
        ".card": {
            "display": "block",
            "padding": theme("spacing.4"),
            "overflow": "hidden",
            "border-radius": theme("borderRadius.lg"),
            "box-shadow": theme("boxShadow.lg")
        }
    }
}