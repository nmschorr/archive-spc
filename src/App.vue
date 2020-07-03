<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
   </v-app-bar>

    <v-content>
      <IndexComp/>
    </v-content>
  </v-app>
</template>


<script>
import IndexComp from './components/IndexComp';

export default {
  name: 'App',

  components: {
    IndexComp,
  },

  data: () => ({
    //
  }),
};
</script>
