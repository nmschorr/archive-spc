<template>
  <div
    id="appbar"
  >
    <v-app-bar
      :key="appbarheight"
      app
      elevation="24"
      height="265px"
      min-height="100px"
      raised
      shrinkOnScroll
      rounded
      prominent
      class="mx-4 align-bottom"
      :style="tstyle"
    >      
      <v-toolbar-title
        class="white--text"
        :style="`font-size:32px!important;text-shadow: 1px 1px 4px grey;font-family:Montserrat,sans-serif;`"
      >
        Welcome to Space Exploration
      </v-toolbar-title>
      <v-spacer />
      <v-spacer />
      <v-spacer />
      <v-btn
        color="blue-grey darken-1"
        elevation="24"
        shaped
        raised
        dark
        medium
        class="mt-9 montyfontb"
        min-width="40px"
        min-height="20px"
        to="/"
        @click="homeclick"
      >
        Home
      </v-btn>
      <v-btn
        color="blue-grey"
        elevation="24"
        dark
        raised
        medium
        class="mt-9 ml-5 montyfontb"
        min-width="40px"
        min-height="20px"
        @click="prodclick"
      >
        {{ revs.pname }}
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetter } from "vuex";
  import store from  '../store'
  const revs = {
    plink: "reviews.html?products=1",
    pname: "Show Reviews"
    }

  export default {
    name: 'Vuemainnav',
    data: () => ({
      revs,
    }),
    computed: {
      tstyle () {
        if (window.outerWidth >= 960)
          return "background-image: linear-gradient(60deg, #008080, black)";
        else return ''
       },
      appbarheight () {
        if (window.outerWidth >= 960)
          return "300px";
        else return "100px";
       },
    },
    methods: {
      homeclick () {
        this.$store.dispatch('gshowtrueAct', true)
        this.$store.dispatch('showprod_a', false)
        // this.appbarheight = "300px"
      },  
      prodclick () {
        this.$store.dispatch('showprod_a', true)
        this.$store.dispatch('gshowtrueAct', false)
        // this.appbarheight = "150px"
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
