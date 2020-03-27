module.exports = c => {
  return {
    ".content": {
      fontFamily: "=content.fontFamily || =fonts.families.primary",
      lineHeight: "=content.lineHeight || 1.5",
    },
    ".content a": {
      color: "=content.anchor.color || inherit",
      textDecoration: "=content.anchor.textDecoration || underline"
      // Text decoration color is already set by core
    }
  };
};
