module.exports = ({ theme }) => {
    return {
        ".switch": {
            "position": "relative",
            "display": "inline-block",
            "padding-right": theme("spacing.2"),
            "line-height": theme("lineHeight.snug"),
            "vertical-align": "baseline",
            "cursor": "pointer",
            "input": {
                "&[disabled], &[disabled] ~ *": {
                    "opacity": "0.8",
                    "cursor": "not-allowed",
                },
                "padding-right": theme("spacing.1")
            }
        }
    }
}