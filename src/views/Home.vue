<template>
  <div class="home">
    <img alt="NULS logo" src="../assets/logo.png">
    <Index msg="Welcome to NULS Tokenomics"/>
  </div>
</template>

<script>
// @ is an alias to /src
  import Index from '@/components/Index.vue'

  export default {
    name: 'Home',
    components: {
      Index
    }
  }
  </script>
