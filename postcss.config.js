module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-each"),
    require('tailwindcss'),
    require("postcss-preset-env")({
      stage: 4
    }),
    require("postcss-nested"),
    require("cssnano")({
      autoprefixer: false
    })
  ]
};
