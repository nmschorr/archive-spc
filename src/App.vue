<template>
  <v-app 
    id="app"
  >   
    above bar
    <Vuemainnav />
    below bar
    <Vuemain />

    <v-footer
      app
    >
      NULS
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    Vuemainnav: () => './components/Vuemainnav.vue',
    Vuemain: () => './components/Vuemain.vue'
  }
}
</script>

<style src="./assets/styles/app.css">
</style>
