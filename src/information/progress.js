module.exports = ({ theme }) => {
    let valueStyles = {
        // Applied to the "progress" part of the progress bar itself
        "background-color": "var(--color-accent)",
        "border": "none"
    };
    
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
            "&::-webkit-progress-value": valueStyles,
            "&::selection": valueStyles,
            "&::-moz-progress-bar": valueStyles,
            "&::-ms-fill": valueStyles
        }
    }
}