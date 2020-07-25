import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, VueAxios, axios)

const theme = {
  primary: colors.deepPurple.lighten1, // purple was tw 805ad5
  secondary: colors.deepPurple.accent1,  //was tw light purple b794f4
  tertiary: colors.teal.base,  //md teal  009688
  success: colors.teal.accent4,  // md teal accent-4 00BFA5
  accent: colors.orange.lighten2,  //md orange lighten-2  FFB74D
  info: colors.grey.lighten2,  // md deep-purple accent-3  651fff
  error: colors.red.base,   //md deep-purple darken-2 455A64
  warning: colors.orange.lighten2,  //md blue-grey darken-2  455A64
  darkgrey: colors.grey.darken4, // 212121
  orangeaccent: colors.deepOrange.lighten5, // for text
  // purple1: primary,
  // purple2: secondary,
  // orange1: accent  // was tw f6ad55 orange400
}


// const dtheme = {
//   primary: colors.teal.base, // #009688
//   primarydark: colors.teal.darken1, // # 
//   secondary: colors.deepPurple.base,  // deep purple  673AB7
//   success: colors.cyan.base,   // cyan
//   accent: colors.deepOrange.lighten2,    // deep-orangeFF5722
//   info: colors.grey.base,              //   grey 
//   warning: colors.deepOrange.base,    // deep-orange
// }


export default new Vuetify({

  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})

// teal=009688
 // deep purple  673AB7
 //  blue #0a406c from gradient
// #00BCD4',    // cyan
// #FF5722',    // deep-orange
//  '#F44336',   // red
// darkgrey: '#212121'
//'deep-orange lighten-5'
  // lighttext: '#FBE9E7',     //'deep-orange lighten-5 e7'

  //   primary: '#805ad5', // purple 805ad5
  // secondary: '#b794f4',  //tw light purple b794f4
  // tertiary: '#009688',  //md teal  009688
  // success: '#00BFA5',  // md teal accent-4 00BFA5
  // accent: '#FFB74D',  //md orange lighten-2  FFB74D
  // info: '#651fff',  // md deep-purple accent-3  651fff
  // error: '#512DA8',   //md deep-purple darken-2 455A64
  // warning: '#455A64',  //md blue-grey darken-2  455A64
  // darkgrey: '#212121', // 212121
  // orangeaccent: accent,
  // purple1: primary,
  // purple2: secondary,
  // orange1: accent  // was tw f6ad55 orange400