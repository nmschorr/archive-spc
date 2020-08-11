<template>
  <div
    id="appbar"
  >
    <v-app-bar
      app
      elevation="24"
      :height="appbarheight"
      :key="appbarheight"
      raised
      min-height="100px"
      rounded
      prominent
      class="mx-4 align-bottom"
      :style="`background-image: linear-gradient(60deg, #008080, black)`"
    >  
      <v-app-bar-nav-icon />
        
      <v-toolbar-title
        class="white--text"
        :style="`font-size:32px!important;text-shadow: 1px 1px 4px grey;font-family:Montserrat,sans-serif;`"
      >
        Welcome to Space Exploration
      </v-toolbar-title>
      <v-spacer />

      <v-btn
        color="blue-grey"
        elevation="24"
        raised
        dark
        medium
        class="mt-9"
        min-width="40px"
        min-height="20px"
        @click="prodclick"
      >
        {{ indi.pname }}
      </v-btn>
      <v-spacer />

      <v-btn
        color="blue-grey"
        elevation="24"
        dark
        raised
        medium
        class="mt-9"
        min-width="40px"
        min-height="20px"
        @click="prodclick"
      >
        {{ revs.pname }}
      </v-btn>
      <v-spacer />

      <v-btn
        color="blue-grey"
        dark
        medium
        elevation="24"
        raised
        class="mt-9"
        min-width="40px"
        min-height="20px"
        @click="revclick"
      >
        {{ allrevs.pname }}
      </v-btn>
      <v-spacer />

      <v-btn
        color="blue-grey"
        medium
        dark
        elevation="24"
        raised
        class="mt-9"
        min-width="40px"
        min-height="20px"
        @click="revclick"
      >
        {{ writerevs.pname }}
      </v-btn>
      <v-spacer />

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

  const indi = {
    plink: "index.html",
    pname: "Home" 
    }
  const revs = {
    plink: "reviews.html?products=1",
    pname: "Show Reviews"
    }
  const allrevs = {
    plink: "showreviews",
    pname: "Show All Reviews" 
    }
  const listcontracts = {
    plink: "reviews.html",
    pname: "List Contracts" 
    }

  const writerevs = {
    plink: "reviews.html",
    pname: "Write Review" 
    }

  export default {
    name: 'Vuemainnav',
    data: () => ({
      appbarheight: "300px",
      indi,
      revs,
      allrevs,
      listcontracts,
      writerevs,

    }),
    computed: {

    },

    methods: {
      revclick () {
        this.$store.dispatch('showrev_a', true)
        this.$store.dispatch('gshowtrueAct', false)

      },
      prodclick () {
        this.$store.dispatch('showprod_a', true)
        this.$store.dispatch('gshowtrueAct', false)
        this.appbarheight = "150px",
        this.spacetrue = false;
      },    
      newclick () {
        this.$store.dispatch('showprod_a', true)
      },
            //    this.$store.dispatch('showprod_a', true)
            //    this.$store.dispatch('showprev_a', true)

    }
  }

</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  .v-btn.v-size--large {
    font-size: 18px;
    color: white;
    text-transform: capitalize;
  }
</style>
