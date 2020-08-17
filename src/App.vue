<template>
  <v-app id="app">
    <AppBar app />
    <v-main>
      <v-container fluid>
        <HomePage 
          v-if="$store.state.gShowHomeBool"
          :key="$store.state.gHomeKeyCount"
        />
        <AllReviews 
          v-if="$store.state.gShowAllrevs"
          :key="$store.state.gHomeKeyCount"
        />    
        <router-view />
      </v-container>
    </v-main>
    <Footer app />
  </v-app>
</template>

<script>
  // see https://vuetifyjs.com/en/components/application/ for detailed instructions for this component
  import HomePage from './components/HomePage'
  import AllReviews from './components/AllReviews'
  import AppBar from './components/AppBar'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      AppBar,
      HomePage,
      AllReviews,
      Footer,
    },
  }
</script>
