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

const generate = (config, overrides) => {
  let c = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  return {
    ...sub(require("./atoms/layout/card")(c), c),
    ...overrides,
  }
}

exports.generate = generate;

exports.tailwindPlugin = (config, overrides) => {
  return ({addComponents}) => {
    addComponents(generate(config, overrides));
  };
}