module.exports = ({ theme }) => {
    return {
        ".heading": {
            "font-size": theme("fontSize.3xl"),
            "color": "var(--color-content)",
            "font-weight": theme("fontWeight.semibold"),
            "line-height": theme("lineHeight.tight")
        }
    }
}