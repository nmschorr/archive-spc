<template>
  <v-system-bar
    window
    absolute
    app
    color="indigo"
    elevation="24"
    min-width="200px"
    shrink-on-scroll
    prominent
    scroll-target="#scrolling-techniques"
  >
    <v-app-bar-nav-icon />

    <v-toolbar-title>Welcome to Space Exploration</v-toolbar-title>
    <v-spacer />

    <v-btn
      color="#280680"
      min-width="40px"
      min-height="40px"
      @click="indi.plink"
    >
      {{ indi.pname }}
    </v-btn>

    <v-btn
      min-width="40px"
      min-height="40px"
      @click="revs.plink"
    >
      {{ revs.pname }}
    </v-btn>

    <v-btn
      min-width="40px"
      min-height="40px"
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
  </v-system-bar>
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
  const listrevs = {
    plink: "Show Reviews",
    pname: "allreviews.html" 
    }
  const writerevs = {
    plink: "reviews.html",
    pname: "Write Review" 
    }

  export default {
    name: "Vuemainnav",
    data: () => ({
      indi,
      revs,
      listrevs,
      writerevs,
    })
  }

</script>
