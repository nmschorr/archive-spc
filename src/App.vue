<template>
  <v-app id="app">
    <AppBar app />
    <v-main>
      <v-container fluid>
          <v-card
            id="appbarspacer"
            color="red-lighten-1"
            flat
            width="100%"
            height="90px"
            class="d-none d-md-flex"
          />
        <router-view />
        <AllReviews 
          v-if="$store.state.gShowAllrevs"
          :key="$store.state.gHomeKeyCount"
        />    
      </v-container>
    </v-main>
    <Footer app />
  </v-app>
</template>

<script>
  // see https://vuetifyjs.com/en/components/application/ for detailed instructions for this component
  import AllReviews from './components/AllReviews'
  import AppBar from './components/AppBar'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      AppBar,
      AllReviews,
      Footer,
    },
  }
</script>
