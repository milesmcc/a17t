const a17t = require('a17t')
const plugin = require('tailwindcss/plugin')

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {},
  variants: {},
  plugins: [plugin(a17t.tailwindPlugin({margin: false}))]
  // plugins: [
  //   plugin(function({addComponents}) {
  //     addComponents(a17t.generate());
  //   })
  // ]
}
