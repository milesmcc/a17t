// Prepare default configuration
const DEFAULT_CONFIG = {
  tones: ["neutral", "critical", "warning", "positive", "info", "urge"],
  priorities: ["low", "normal", "high"],
  colors: require("./defaults/colors"),
  borderRadii: require("./defaults/borderRadii"),
  shadows: require("./defaults/shadows"),
  spacing: require("./defaults/spacing")
};

const utils = require("./utils");

const generate = (config, overrides) => {
  let c = {
    ...DEFAULT_CONFIG,
    ...config
  };
  return utils.hydrate(
    {
      ...require("./atoms/layout/card")(c),
      ...overrides
    },
    c
  );
};

exports.generate = generate;

exports.tailwindPlugin = (config, overrides) => {
  return ({ addComponents }) => {
    addComponents(generate(config, overrides));
  };
};
