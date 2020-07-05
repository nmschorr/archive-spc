<template>
  <v-app id="app">
    <Vuemainnav />
    <v-main>
      <img 
        alt="Vue logo" 
        src="./assets/logo.png"
      >
      <Vuemain />
    </v-main>
    <v-footer app>
      NULS
    </v-footer>
  </v-app>
</template>

<script>
import Vuemain from './components/Vuemain.vue'
import Vuemainnav from './components/navs/Vuemainnav'

export default {
  name: 'App',
}
</script>

<style src="./assets/styles/app.css">
</style>
