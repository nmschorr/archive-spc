<template>
  <v-app id="app">   
    <Vuemainnav />
    <!-- Provides the application the proper gutter -->
    <Vuemain/>
    <Footer />

  </v-app>
</template>

<script>
  import Vuemain from './components/Vuemain.vue'
  import Vuemainnav from './components/Vuemainnav'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      Vuemainnav,
      Vuemain,
      Footer,
    }
  }
</script>
