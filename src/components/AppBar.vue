<template>
  <v-container
    id="appbarcontainer"
    fluid
  >
    <v-app-bar
      id="appbar"
      app
      v-bind="abprops"
      shrink-on-scroll
      class="d-none d-md-flex mb-6 justify-between"
      :style="`background-image: linear-gradient(60deg, #008080, black);`"
    >      
      <v-toolbar-title
        id="appbartitle"
        class="white--text"
        :style="`font-family:Montserrat,sans-serif;font-size:27px;`"
      >
        Welcome to Space Exploration
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        id="navbtn1"
        color="blue-grey darken-1"
        v-bind="btnprops"        
        class="d-flex montyfontb align-self-end mt-9"
        to="/"
        @click="homeclick"
      >
        Home
      </v-btn>
      <v-btn
        id="navbtn2"
        v-bind="btnprops"        
        class="d-flex montyfontb align-self-end mt-9 ml-5" 
        to="AllReviews"
        @click="allrevsclick"
      >
        Reviews
      </v-btn>
    </v-app-bar>
    <v-btn
      id="navbtn3"
      color="blue-grey darken-1"
      v-bind="btnprops"        
      class="d-xs-flex d-md-none montyfontb align-self-end mt-2"
      to="/"
      @click="homeclick"
    >
      Home
    </v-btn>
    <v-btn
      id="navbtn4"
      color="blue-grey darken-1"
      v-bind="btnprops"        
      class="d-xs-flex d-md-none montyfontb align-self-end mt-2"
      to="/"
      @click="allrevsclick"
    >
      Reviews
    </v-btn>
  </v-container>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetter } from "vuex";
  import store from  '../store'

  export default {
    name: 'AppBar',
    data: () => ({
      homekey: 0,
      btnprops: {
        height: "45px",
        width: "220px",
        "min-width": "40px",
        "min-height": "20px",        
        "max-width": "220px",
        "max-height": "120px", 
        dark: true,
        medium: true,
        color: "blue-grey",        
      },
      abprops: {
        width: "100%",
        height: "200",
        "min-width": "140px",
        "max-width": "2000px",      
        "min-height": "150px",
        "max-height": "250px",
        elevation: 12,
        prominent: true,
        dark: true,
      }
    }),
    computed: {
      newHomeKeyCt () {
        return this.$store.state.gHomeKeyCount
      },
    },
    methods: {
      homeclick () {
        let newcount = this.newHomeKeyCt 
        newcount += 1;
        this.$store.dispatch('gShowHomeBoolAct', true)   // show home page
        this.$store.dispatch('gShowAllrevsAct', false)  // hide reviews
        this.$store.dispatch('gHomeKeyCountAct', newcount)  // up the number
      },  
      allrevsclick () {
        let newcount = this.newHomeKeyCt 
        newcount += 1;        
        this.$store.dispatch('gShowHomeBoolAct', false)
        this.$store.dispatch('gShowAllrevsAct', true)
        this.$store.dispatch('gHomeKeyCountAct', newcount)
      }, 
    },    
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
