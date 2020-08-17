<template>
  <v-app id="app" >
    <AppBar app />
    <v-main>
      <v-container fluid>
        <Spcgraphic 
          v-if="$store.state.gshowtrue"
          :key="$store.state.gshowtrue"
        />
        <AllReviews 
          v-if="$store.state.showprod"
          :key="$store.state.showprod"
        />    
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer app />
  </v-app>
</template>

<script>
  // see https://vuetifyjs.com/en/components/application/ for detailed instructions for this component
  import Spcgraphic from './components/Spcgraphic'
  import AllReviews from './components/AllReviews'
  import AppBar from './components/AppBar'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      AppBar,
      Spcgraphic,
      AllReviews,
      Footer,
    }
  }
</script>
