module.exports = ({ theme }) => {
    return {
        ".\\@shield": {
            "background-color": "var(--color-fill)",
            "color": "var(--color-content)",
            "display": "inline-flex",
            "vertical-align": "middle",
            "justify-content": "center",
            "padding": theme("padding.2"),
            "border-radius": theme("borderRadius.full")
        }
    }
}