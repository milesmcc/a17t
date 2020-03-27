module.exports = c => {
  return {
    '.a17t': {
      fontFamily: "=type.families.primary",
      textDecorationColor: "=colors.{{tone}}.{{priority}}.decoration",
      color: "=colors.body || =colors.{{tone}}.{{priority}}.content",
      // TODO: others?
    }
  };
};
