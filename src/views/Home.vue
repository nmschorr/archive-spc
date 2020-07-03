<template>
  <div class="home">
    <img alt="NULS logo" src="../assets/logo.png">
    <IndexComp msg="Welcome to NULS Tokenomics"/>
  </div>
</template>

<script>
// @ is an alias to /src
  import IndexComp from '@/components/IndexComp.vue'

  export default {
    name: 'Home',
    components: {
      IndexComp
    }
  }
  </script>
