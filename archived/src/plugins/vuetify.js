import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const theme = {
  primary: '#805ad5',
  secondary: '#b794f4',
  tertiary: '#009688',
  success: '#00BFA5',
  accent: '#f6ad55',
  info: '#651FFF',
  error: '#512DA8',
  warning: '#455A64',
  darkgrey: '#212121',
  orangeaccent: '#f6ad55',
  purple1: "#805ad5",
  purple2: "#b794f4",
  orange1: "#f6ad55"
}

export default new Vuetify({

  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
