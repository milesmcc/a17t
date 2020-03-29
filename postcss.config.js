module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-each"),
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 4
    }),
    require('postcss-custom-properties'),
    require('tailwindcss'),
    require("cssnano")({
      autoprefixer: false
    })
  ]
};
