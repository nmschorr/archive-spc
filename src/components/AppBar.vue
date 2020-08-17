<template>
  <v-app-bar
    id="appbar"
    app
    width="100%"
    height="200"
    min-width="140px"
    max-width="2000px"      
    min-height="150px"
    max-height="250px"
    shrink-on-scroll
    elevation-12
    prominent
    dark
    class=""
    :style="`background-image: linear-gradient(60deg, #008080, black);margin-bottom:250px;`"
  >      
    <v-toolbar-title
      id="appbartitle"
      class="white--text"
      :style="`font-family:Montserrat,sans-serif;font-size:27px;`"
    >
      Welcome to Space Exploration
    </v-toolbar-title>
    <v-spacer/>
    <v-btn
      id="navbtn1"
      color="blue-grey darken-1"
      height="50px"
      width="240px"
      min-width="40px"
      min-height="20px"        
      max-width="240px"
      max-height="320px"       
      elevation="24"
      shaped
      raised
      dark
      medium
      class="mt-9 montyfontb align-self-end"
      to="/"
      @click="homeclick"
    >
      Home
    </v-btn>
    <v-btn
      id="navbtn2"
      color="blue-grey"
      height="50px"
      width="240px"
      min-width="40px"
      min-height="20px"        
      max-width="240px"
      max-height="320px"          
      elevation="24"
      dark
      raised
      medium
      class="montyfontb mt-9 ml-5 align-self-end"

      @click="prodclick"
    >
      Reviews
    </v-btn>
  </v-app-bar>
  <!-- <v-btn
    id="navbtn3"
    color="blue-grey"
    elevation="24"
    min-width="40px"
    min-height="20px"      
    dark
    raised
    medium
    class="d-xs-flex d-md-none mt-9 ml-5 mb-12 montyfontb "
    to="/"
    @click="homeclick"   
  >
    Home
  </v-btn>  
  <v-btn
    id="navbtn4"
    color="blue-grey"
    elevation="24"
    min-width="40px"
    min-height="20px"      
    dark
    raised
    medium
    class="d-xs-flex d-md-none mt-9 ml-5 mb-12 montyfontb "
    @click="prodclick"
  >
    Show Reviews
  </v-btn> -->
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetter } from "vuex";
  import store from  '../store'

  export default {
    name: 'AppBar',
    data: () => ({
      x: 0,
    }),
    methods: {
      homeclick () {
        this.$store.dispatch('gshowtrueAct', true)
        this.$store.dispatch('showprod_a', false)
      },  
      prodclick () {
        this.$store.dispatch('showprod_a', true)
        this.$store.dispatch('gshowtrueAct', false)
      },    
    }
  }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  .montyfontb {
    font-size: 18px;
    color: white;
    font-family: 'Montserrat',sans-serif;
    letter-spacing: 1.25px;
    text-transform: lowercase;
  }
  .v-toolbar__title {
    white-space: pre-wrap;
  }
</style>
