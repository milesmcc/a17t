module.exports = ({ theme }) => {
    return {
        ".progress": {
            "appearance": "none",
            "height": "1em",
            "display": "block",
            "overflow": "hidden",
            "width": "100%",
            "padding": "0",
            "border": "none",
            "writing-mode": "horizontal-tb",
            "border-radius": theme("borderRadius.xl"),
            "&::-webkit-progress-bar": {
                "background-color": theme("colors.gray.300"),
            },
            "&::-webkit-progress-value, &::selection, &::-moz-progress-bar, &::-ms-fill": {
                "background-color": "var(--color-core)",
                "border": "none"
            },
        }
    }
}