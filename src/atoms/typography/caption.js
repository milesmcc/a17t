module.exports = c => {
  return {
    ".caption": {
      fontSize: "=caption.fontSize || 0.75rem",
      color: "=caption.color || =color.{{tone}}.{{priority}}.content || =color.supportingText",
    },
  };
};
