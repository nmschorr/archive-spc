const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
module.exports = {
  publicPath: '/usr/share/nginx/html/spc',
  outputDir: '/usr/share/nginx/html/spc/dist',

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
          { family: "PT Sans Narrow" },

        ]
      })
    ]
  }
 }
