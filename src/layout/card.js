module.exports = ({ theme }) => {
    return {
        ".card": {
            "background-color": "var(--color-fill)",
            "color": "var(--color-content)",
            "display": "block",
            "padding": theme("spacing.4"),
            "overflow": "hidden",
            "border-radius": theme("borderRadius.lg"),
            "box-shadow": theme("boxShadow.lg")
        }
    }
}