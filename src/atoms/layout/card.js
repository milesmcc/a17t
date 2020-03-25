module.exports = c => {
  let card = {
    borderRadius: c.borderRadii.large,
    padding: "1rem",
    boxShadow: c.shadows.normal,
  };

  if (c.margin) {
    card["margin"] = "2rem 0"; 
  }

  return {
    card: card,
  };
};