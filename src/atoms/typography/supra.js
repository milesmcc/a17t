module.exports = c => {
  return {
    ".supra": {
      display: "=supra.display || block",
      letterSpacing: "=supra.letterSpacing || 0.06rem",
      fontSize: "=supra.fontSize || 0.75rem",
      textTransform: "=supra.textTransform || uppercase",
    },
  };
};
