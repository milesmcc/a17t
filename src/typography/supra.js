module.exports = ({ theme }) => {
    return {
        ".supra": {
            "text-transform": "uppercase",
            "letter-spacing": theme("letterSpacing.wider"),
            "color": "var(--color-content)",
            "opacity": 0.8,
            "font-size": theme("fontSize.sm")
        }
    }
}