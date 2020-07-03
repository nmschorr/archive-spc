<template>
  <v-app>
      <IndexComp/>
  </v-app>
</template>

<script>
  import IndexComp from './components/IndexComp';  //front landing page
  // import store from './store'

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
<template>
