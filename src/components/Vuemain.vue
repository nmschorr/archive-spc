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

  const chainid = cobj.data.cobj.chainid
  const contaddy = cobj.data.cobj.contaddy
  const Url3 = cobj.data.cobj.Url3
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
      chainid,
      contaddy,
      Url3,
    }),
    mounted () {
    },
    methods: {
    }
  }
</script>
