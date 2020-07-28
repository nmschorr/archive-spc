/* eslint-disable vue/max-attributes-per-line */
<template>
  <div
    id="vuemaintop"
    app 
  >
    <Vuemainnav />
    <!-- Provides the application the proper gutter -->
    <v-main>
      <v-container
        id="maincontainer"
        fluid
      >
        <Spcgraphic 
          v-if="$store.state.gshowtrue"
          :key="$store.state.gshowtrue"
        />

        <v-container
          id="maincontainer2"
          fluid
        >
          <!-- <Reviews 
            v-if="$store.state.showrev"
          />         -->
          
          <AllReviews 
            v-if="$store.state.showprod"
          />
        </v-container>  
      </v-container>  
    </v-main>
    <CoreFooter />
  </div>
</template>

<script>
  import axios from 'axios'
  import cobj from '../constants/constants.js'
  import Spcgraphic from './spcgraphic'
  import AllReviews from './AllReviews'
  import Reviews from './Reviews'
  import Vuemainnav from './Vuemainnav'
  import CoreFooter from './Footer'

  const CHAINID = cobj.data.cobj.CHAINID
  const CONT_ADDY = cobj.data.cobj.CONT_ADDY
  const POSTURL_w3 = cobj.data.cobj.POSTURL_w3
  const GCMETHOD = 'getContract'
  const vjson = '{ "jsonrpc": "2.0"}'
  export default {
    name: 'Vuemain',
    components: {
      Spcgraphic,
      Vuemainnav,
      AllReviews,
      CoreFooter,

      // Reviews
    },
    data: () => ({
      // eslint-disable-next-line vue/require-default-prop
      spacetrue: true,
      showrev: false,
      showallrev: false,
      showgr: true,
      contract: null,
      products: null,
      CHAINID,
      CONT_ADDY,
      POSTURL_w3,
      GCMETHOD
    }),
    mounted () {
      // this.getContract()
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
