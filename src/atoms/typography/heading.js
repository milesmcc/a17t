module.exports = c => {
  return {
    ".heading": {
      fontFamily: "=heading.fontFamily || =fonts.families.secondary",
      fontWeight: "=heading.fontWeight || 700",
      // TODO: others?
    },
  };
};
