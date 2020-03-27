module.exports = c => {
  return {
    ".content": {
      fontFamily: "=content.fontFamily || =fonts.families.primary",
      lineHeight: "=content.lineHeight || 1.5",
      color:
        "=content.{{tone}}.{{priority}}.color ||\
         =colors.{{tone}}.{{priority}}.content"
      // TODO: others?
    },
    ".content a": {
      color: "=content.anchor.color || inherit",
      textDecoration: "=content.anchor.textDecoration || underline"
      // Text decoration color is already set by core
    }
  };
};
