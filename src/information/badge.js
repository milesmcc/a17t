module.exports = ({ theme }) => {
    return {
        ".\\@badge": {
            "background-color": "var(--color-fill)",
            "color": "var(--color-content)",
            "display": "inline-flex",
            "align-items": "center",
            "align-self": "center",
            "vertical-align": "middle",
            "justify-content": "center",
            "padding": theme("spacing.px") + " " + theme("spacing.1"),
            "font-size": "0.6rem",
            "border-radius": theme("borderRadius.DEFAULT"),
            "font-weight": theme("fontWeight.medium"),
        }
    }
}