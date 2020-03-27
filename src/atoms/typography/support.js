module.exports = c => {
  return {
    ".support": {
      fontFamily: "=support.fontFamily || =fonts.families.secondary",
      opacity: "=support.opacity || 0.7",
      // TODO: find a better way to do 'lightening' -- this is a hack
    },
  };
};
