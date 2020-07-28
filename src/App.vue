<template>
  <v-app 
    id="app"
  >   
    <Vuemain />

  </v-app>
</template>

<script>
  import Vuemain from './components/Vuemain.vue'

  export default {
    name: 'App',
    components: {
      Vuemain
    }
  }
</script>

<style src="./assets/styles/twsummary.css">
</style>
