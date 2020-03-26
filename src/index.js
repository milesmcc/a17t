// Prepare default configuration
const DEFAULT_CONFIG = {
  tones: ["neutral", "critical", "warning", "positive", "info", "urge"],
  priorities: ["low", "normal", "high"],
  colorMappings: require("./defaults/colors"),
  borderRadii: require("./defaults/borderRadii"),
  shadows: require("./defaults/shadows"),
  margin: true,
};

const sub = require("./utils").substituteVariables; 

module.exports = (config, overrides) => {
  let c = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  return {
    ...sub(require("./atoms/layout/card")(c), c),
    ...overrides,
  }
}
