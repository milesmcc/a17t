module.exports = c => {
  return {
    ".caption": {
      fontSize: "=caption.fontSize || 0.75rem",
      color: "=caption.color || =color.supportingText",
      opacity: "=caption.opacity || 0.7",
    },
  };
};
