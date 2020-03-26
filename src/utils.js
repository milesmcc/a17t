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

function pathPermutations(path, config) {
  let pathComps = path.split(".");
  var permutations = [
    {
      path: path,
      classes: []
    }
  ];
  // List of permutation objects -- {path, list of conditional classes}

  // Check for conditionals
  for (let i = 0; i < pathComps.length; i++) {
    let newPermutations = [];
    for (let permutation of permutations) {
      let permPath = permutation.path.split(".");
      switch (permPath[i]) {
        case "{{tone}}":
          for (let tone of config.tones) {
            permPath[i] = tone;
            newPermutations.push({
              path: permPath.join("."),
              classes: [...permutation.classes, `\\~${tone}`]
            });
          }
          break;
        case "{{priority}}":
          for (let priority of config.priorities) {
            permPath[i] = priority;
            newPermutations.push({
              path: permPath.join("."),
              classes: [...permutation.classes, `\\!${priority}`]
            });
          }
          break;
        default:
          newPermutations.push(permutation);
      }
    }
    permutations = newPermutations;
  }
  return permutations;
}

let hydrate = (rules, config) => {
  for (let rule of Object.keys(rules)) {
    let value = rules[rule];
    if (isString(value) && value.startsWith("=")) {
      delete rules[rule];
      // Is a variable; perform substitution
      for (let completePath of value.slice(1).split(",").map(x => x.trim())) {
        for (let permutation of pathPermutations(completePath, config)) {
          let computedValue = g(config, permutation.path, null);
          if (computedValue == null) {
            continue;
          }
          if (permutation.classes.length == 0) {
            rules[rule] = computedValue;
          } else {
            let narrower = `&.${permutation.classes.join(".")}`;
            if (rules[narrower] == undefined) {
              rules[narrower] = {};
            }
            rules[narrower][rule] = computedValue;
          }
        }
      }
    } else if (!isString(value)) {
      rules[rule] = hydrate(value, config);
    }
  }
  return rules;
};

exports.hydrate = hydrate;
