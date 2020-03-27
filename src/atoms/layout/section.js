module.exports = c => {
  return {
    ".section": {
      width: "=section.width || 100%",
      height: "=section.height || 100%",
      backgroundColor:
        "=section.{{tone}}.{{priority}}.fill ||\
         =colors.{{tone}}.{{priority}}.fill ||\
         =colors.{{tone}}.normal.fill",
      color:
        "=section.{{tone}}.{{priority}}.content ||\
         =colors.{{tone}}.{{priority}}.content ||\
         =colors.{{tone}}.normal.content"
    }
  };
};
