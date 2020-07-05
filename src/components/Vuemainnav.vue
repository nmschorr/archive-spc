<template>
  <div
    id="appbar"
  >
    <v-app-bar
      color="#8a57d1"
      dark
      elevation="24"
      height="120px"
      width="90%"
      class="ml-5"
      clipped-left
      rounded
      prominent
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>Welcome to Space Exploration</v-toolbar-title>
      <v-spacer />

      <v-btn
        color=""
        min-width="40px"
        min-height="100px"
        @click="indi.plink"
      >
        {{ indi.pname }}
      </v-btn>
      <v-spacer />

      <v-btn
        min-width="40px"
        min-height="100px"
        color="#9f7aea"
        @click="revs.plink"
      >
        {{ revs.pname }}
      </v-btn>
      <v-spacer />

      <v-btn
        color="#9f7aea"
        min-width="40px"
        min-height="100px"
        @click="allrevs.plink"
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
  const indi = {
    plink: "index.html",
    pname: "Home" 
    }
  const revs = {
    plink: "reviews.html?products=1",
    pname: "Show Products" 
    }
  const allrevs = {
    plink: "Show Reviews",
    pname: "allreviews.html" 
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
    })
  }

</script>
