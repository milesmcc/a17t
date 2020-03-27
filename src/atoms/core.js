module.exports = c => {
  return {
    ".a17t": {
      fontFamily: "=type.families.primary",
      textDecorationColor:
        "=colors.textDecoration || =colors.{{tone}}.{{priority}}.decoration",
      minHeight: "=minPageHeight || 100vh",
      backgroundColor: "=colors.fill",
      color: "=colors.bodyText"
    }
  };
};
