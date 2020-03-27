// Prepare default configuration
const DEFAULT_CONFIG = {
  tones: ["neutral", "critical", "warning", "positive", "info", "urge"],
  priorities: ["low", "normal", "high"],
  colors: require("./defaults/colors"),
  borderRadii: require("./defaults/borderRadii"),
  shadows: require("./defaults/shadows"),
  spacing: require("./defaults/spacing"),
  type: require("./defaults/type")
};

const utils = require("./utils");

const generate = (config, overrides, insertions) => {
  let c = {
    ...DEFAULT_CONFIG,
    ...config
  };
  let data = {};
  for (let group of [
    // Layout
    require("./atoms/layout/card")(c),
    require("./atoms/layout/section")(c),
    require("./atoms/layout/sep")(c),

    // Typography
    require("./atoms/typography/caption")(c),
    require("./atoms/typography/content")(c),
    require("./atoms/typography/heading")(c),
    require("./atoms/typography/label")(c),
    require("./atoms/typography/support")(c),
    require("./atoms/typography/supra")(c),

    // General
    require("./atoms/core")(c),

    // User-provideds
    insertions || {}
  ]) {
    Object.assign(data, group);
  }
  return utils.hydrate(
    {
      ...data,
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
