module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-each"),
    require("postcss-preset-env")({
      stage: 4
    }),
    require('postcss-custom-properties'),
    require('tailwindcss'),
    require("postcss-nested"),
    require("cssnano")({
      autoprefixer: false
    })
  ]
};
