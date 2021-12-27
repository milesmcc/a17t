module.exports = ({ theme }) => {
    return {
        ".card": {
            "display": "block",
            "padding": theme("spacing.4"),
            "background-color": theme("colors.bg"),
            "border": "1px solid var(--color-accent, " + theme("colors.gray.100") + ")",
            "&.\\@low, &.\\@high": {
                "background-color": "var(--color-fill)",
                "color": "var(--color-content)",
            },
            "overflow": "hidden",
            "border-radius": theme("borderRadius.lg"),
            "box-shadow": theme("boxShadow.md"),
        }
    }
}