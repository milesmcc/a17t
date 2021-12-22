module.exports = ({ theme }) => {
    return {
        ".heading": {
            "color": "var(--color-content)",
            "font-size": theme("fontSize.3xl"),
            "font-weight": theme("fontWeight.semibold"),
            "line-height": theme("lineHeight.tight")
        }
    }
}