<template>
  <div
    id="appbar"
  >
    <v-app-bar
      app
      color="purple2"
      dark
      elevation="24"
      height="120px"
      min-height="30px"
      rounded
      prominent
      class="mx-4"
      :style="`background-image: linear-gradient(306deg, #9873d6 0%, #b794f4 100%)`"
    >
      <v-app-bar-nav-icon />
        
      <v-toolbar-title
        :style="`text-shadow: 1px 1px 4px grey;`"
      >
        Welcome to Space Exploration
      </v-toolbar-title>
      <v-spacer />

      <v-btn
        color="purple2"
        elevation="0"
        large
        class="mt-9 font-sans9"
        min-width="40px"
        min-height="20px"
        @click="prodclick"
      >
        {{ indi.pname }}
      </v-btn>
      <v-spacer />

      <v-btn
        color="purple2"
        large
        class="mt-9 font-sans9"
        min-width="40px"
        min-height="20px"
        @click="prodclick"
      >
        {{ revs.pname }}
      </v-btn>
      <v-spacer />

      <v-btn
        color="purple2"
        large
        class="mt-9 font-sans9"
        min-width="40px"
        min-height="20px"
        @click="revclick"
      >
        {{ allrevs.pname }}
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
    pname: "Show Products"
    }
  const allrevs = {
    plink: "showreviews",
    pname: "Show Reviews" 
    }
  const writerevs = {
    plink: "reviews.html",
    pname: "Write Review" 
    }

  export default {
    name: 'Vuemainnav',
    data: () => ({
      indi,
      revs,
      allrevs,
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
<style>
  .v-btn.v-size--large {
    font-size: 1rem;
  
  }
  .font-sans9 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, 
  \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI 
  Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";
  }

</style>
