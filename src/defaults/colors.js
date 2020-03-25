const COLOR = {
  none: "transparent",
  light: "#ffffff",
  dark: "#000000",
  gray: [
    "#f7fafc",
    "#edf2f7",
    "#e2e8f0",
    "#cbd5e0",
    "#a0aec0",
    "#718096",
    "#4a5568",
    "#2d3748",
    "#1a202c"
  ],
  red: [
    "#fff5f5",
    "#fed7d7",
    "#feb2b2",
    "#fc8181",
    "#f56565",
    "#e53e3e",
    "#c53030",
    "#9b2c2c",
    "#742a2a"
  ],
  yellow: [
    "#fffff0",
    "#fefcbf",
    "#faf089",
    "#f6e05e",
    "#ecc94b",
    "#d69e2e",
    "#b7791f",
    "#975a16",
    "#744210"
  ],
  green: [
    "#f0fff4",
    "#c6f6d5",
    "#9ae6b4",
    "#68d391",
    "#48bb78",
    "#38a169",
    "#2f855a",
    "#276749",
    "#22543d"
  ],
  indigo: [
    "#ebf4ff",
    "#c3dafe",
    "#a3bffa",
    "#7f9cf5",
    "#667eea",
    "#5a67d8",
    "#4c51bf",
    "#434190",
    "#3c366b"
  ],
  purple: [
    "#faf5ff",
    "#e9d8fd",
    "#d6bcfa",
    "#b794f4",
    "#9f7aea",
    "#805ad5",
    "#6b46c1",
    "#553c9a",
    "#44337a"
  ]
};

module.exports = {
  positive: {
    low: {
      content: COLOR.green[5],
      fill: COLOR.none,
    },
    normal: {
      content: COLOR.green[6],
      fill: COLOR.green[0]
    },
    high: {
      content: COLOR.light,
      fill: COLOR.green[4],
    }
  },
  warning: {
    low: {
      content: COLOR.yellow[5],
      fill: COLOR.none,
    },
    normal: {
      content: COLOR.yellow[6],
      fill: COLOR.yellow[0]
    },
    high: {
      content: COLOR.dark,
      fill: COLOR.yellow[3],
    }
  },
  critical: {
    low: {
      content: COLOR.red[5],
      fill: COLOR.none,
    },
    normal: {
      content: COLOR.red[6],
      fill: COLOR.red[0]
    },
    high: {
      content: COLOR.light,
      fill: COLOR.red[3],
    }
  },
  neutral: {
    low: {
      content: COLOR.gray[8],
      fill: COLOR.none,
    },
    normal: {
      content: COLOR.gray[9],
      fill: COLOR.gray[1]
    },
    high: {
      content: COLOR.light,
      fill: COLOR.gray[8],
    }
  },
  info: {
    low: {
      content: COLOR.indigo[7],
      fill: COLOR.none,
    },
    normal: {
      content: COLOR.indigo[8],
      fill: COLOR.indigo[0]
    },
    high: {
      content: COLOR.light,
      fill: COLOR.indigo[7],
    }
  },
  urge: {
    low: {
      content: COLOR.purple[7],
      fill: COLOR.none,
    },
    normal: {
      content: COLOR.purple[8],
      fill: COLOR.purple[1]
    },
    high: {
      content: COLOR.light,
      fill: COLOR.purple[7],
    }
  },
};
