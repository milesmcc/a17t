module.exports = c => {
  return {
    ".card": {
      borderRadius: "=card.borderRadius || =borderRadii.large",
      padding: "=card.padding || =spacing.4",
      boxShadow: "=card.shadow || =shadows.large",
      backgroundColor:
        "=card.{{tone}}.{{priority}}.fill ||\
         =colors.{{tone}}.{{priority}}.fill ||\
         =colors.{{tone}}.normal.fill",
      color:
        "=card.{{tone}}.{{priority}}.content ||\
         =colors.{{tone}}.{{priority}}.content ||\
         =colors.{{tone}}.normal.content",
      overflow: "hidden",
    }
  };
};
