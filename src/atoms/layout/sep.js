module.exports = c => {
  return {
    ".sep": {
      paddingBottom: "=sep.height || =spacing.10",
      height: "=sep.pureHeight || 0px",
      border: "=sep.border || none",
      backgroundColor: "=sep.backgroundColor || unset"
    }
  };
};
