<template>
  <v-app 
    id="app"
  >   
    <Vuemain />

    <v-footer
      app
    >
      NULS
    </v-footer>
  </v-app>
</template>

<script>
  import Vuemain from './components/Vuemain.vue'

export default {
  // name: 'App',
  components: {
    // Vuemainnav,
    Vuemain
  }
}
</script>

<style src="./assets/styles/app.css">
</style>
