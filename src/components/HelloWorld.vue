/* eslint-disable vue/max-attributes-per-line */
<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple accent-4"
    />
    <Navsam />

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view />
        <Spcgraphic />
      </v-container>  
    </v-content>
    <v-footer app>
      NULS
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import cobj from '../constants/constants.js'
  import Navsam from './Navsam.vue'
  import Spcgraphic from './spcgraphic'

  const CHAINID = cobj.CHAINID
  const CONT_ADDY = cobj.CONT_ADDY
  const POSTURL_w3 = cobj.POSTURL_w3
  const GCMETHOD = 'getContract'
  const stringn = 'text-gray-700 text-3xl leading-tight font-medium'
  const stringn2 = 'block xl:w-1/2 lg:w-1/3 md:mt-auto md:mb-auto sm:mt-6'
  const stringn3 =
    'hover:bg-purple-500 cursor-pointer max-w-full text-2xl p-4 shadow rounded font-bold text-white bg-purple-400 text-center'
  const stringn4 =
    'leading-none sm:leading-relaxed text-center block mt-24 w-full lg:w-2/3 xl:w-1/2'
  const fontpurple = "leading-tight text-white rounded p-2 shadow-md bg-purple-400"
  const fontorange = "text-orange-400 z-50 relative sm:-mt-10 sm:-mb-10 text-6xl font-extrabold"
  const fontbigwhite = "text-white rounded p-2 shadow-md bg-black"
  const fontxtrbold = "text-center relative text-6xl font-extrabold"
  const fontbigwt = "text-6xl font-extrabold"

  export default {
  name: 'HelloWorld',
  components: {
    Navsam,
    Spcgraphic
  },

  props: {
    msg: { type: String,
           default: 'Welcome to NULS'
    }
  },

  data: () => ({
    // eslint-disable-next-line vue/require-default-prop
    fontpurple,
    fontorange,
    fontbigwhite,
    fontxtrbold,
    fontbigwt,
    stringn,
    stringn2,
    stringn3,
    stringn4,
    contract: null,
    products: null,
    CHAINID,
    CONT_ADDY,
    POSTURL_w3,
    GCMETHOD
  }),
  mounted () {
    this.getContract()
  },
  methods: {
    async getContract () {
      const METHOD_D = this.GCMETHOD
      const PARAMS = [this.CHAINID, this.CONT_ADDY]
      const ID_D = 900032

      const result = await axios.post(this.POSTURL_w3, {
        jsonrpc: '2.0',
        method: METHOD_D,
        params: PARAMS,
        id: ID_D
      })
      if (result.status === 200) {
        console.log(result.data.result)
        this.contract = result.data.result
      } else {
        this.error = 'An error has occurred'
      }
    }
  }
}
</script>
<style src="../assets/styles/tailwind.css">
</style>
