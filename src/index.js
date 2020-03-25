// Prepare default configuration
const DEFAULT_CONFIG = {
  tones: ["neutral", "critical", "warning", "positive", "info", "urge"],
  priorities: ["low", "normal", "high"],
  colorMappings: require("./defaults/colors"),
  borderRadii: require("./defaults/borderRadii"),
  shadows: require("./defaults/shadows"),
  margin: true,
};

module.exports = (config, overrides) => {
  let c = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  return {
    ...require("./atoms/common")(c),
    ...require("./atoms/layout/card")(c),
    ...overrides,
  }
}
