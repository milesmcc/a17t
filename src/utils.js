// Helper function to enable syntax like `g(config, "card.padding", True)`.
function g(obj, path, fallback) {
  for (let loc of path.split(".")) {
    if (obj[loc] != undefined) {
      obj = obj[loc];
    } else {
      return fallback;
    }
  }
  return obj;
}

function isString(val) {
  return typeof val === "string" || val instanceof String;
}

let substituteVariables = (rules, config) => {
  for (let rule of Object.keys(rules)) {
    let value = rules[rule];
    if (isString(value) && value.startsWith("$")) {
      delete rules[rule];
      // Is a variable; perform substitution
      value = value.slice(1);
      for (let binding of value.split(" or ")) {
        // Add all of the color classes
        for (let tone of config.tones) {
          let toneClass = `&.t-${tone}`;
          let path = "colorMappings.$tone.$weight";
          if (binding == "fillColor") {
            path += ".fill";
          } else if (binding == "contentColor") {
            path += ".content";
          }
          let defaultValue = g(
            config,
            path.replace("$tone", tone).replace("$weight", "normal"),
            null
          );
          if (defaultValue != null) {
            if (rules[toneClass] == undefined) {
              rules[toneClass] = {};
            }
            rules[toneClass][rule] = defaultValue;
          }

          for (let priority of config.priorities) {
            let foundValue = g(
              config,
              path.replace("$tone", tone).replace("$weight", priority),
              null
            );
            if (foundValue != null) {
              let priorityClass = `&.p-${priority}`;
              if (rules[toneClass][priorityClass] == undefined) {
                rules[toneClass][priorityClass] = {};
              }
              rules[toneClass][priorityClass][rule] = foundValue;
            }
          }
        }
      }
    } else if (!isString(value)) {
      rules[rule] = substituteVariables(value, config);
    }
  }
  return rules;
};

exports.substituteVariables = substituteVariables;
