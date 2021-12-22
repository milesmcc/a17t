module.exports = ({ theme }) => {
    return {
        ".card": {
            "background-color": theme("color.transparent"),
            "color": "var(--color-content)",
            "display": "block",
            "padding": theme("spacing.4"),
            "overflow": "hidden",
            "border-radius": theme("borderRadius.lg"),
            "box-shadow": theme("boxShadow.lg")
        }
    }
}