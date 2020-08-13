const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
module.exports = {
  publicPath: '/spc',
  outputDir: '/spc/dist',

  transpileDependencies: [
    'vuetify'
  ],

  runtimeCompiler: true,
  chainWebpack: config => {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: "Rubik" },
          { family: "Montserrat" },
          { family: "Raleway" },
        ]
      })
    ]
  }
 }
