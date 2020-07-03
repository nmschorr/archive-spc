<template>
  <v-app>
    <IndexComp />
   
  </v-app>
</template>

<script>
  export default {
    name: 'IndexView',

    components: {

      IndexComp: () => import('./components/IndexComp'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
