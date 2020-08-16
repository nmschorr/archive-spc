/* eslint-disable vue/max-attributes-per-line */
<template>
  <div
    id="vuemain"
    app 
  >
    <v-main>
      <v-container
        id="maincontainer"
        fluid
      >
        <Spcgraphic 
          v-if="$store.state.gshowtrue"
          :key="$store.state.gshowtrue"
        />
          <AllReviews 
            v-if="$store.state.showprod"
          />
        </v-container>  
    </v-main>
  </div>
</template>

<script>
  import axios from 'axios'
  import cobj from '../constants/constants.js'
  import Spcgraphic from './Spcgraphic'
  import AllReviews from './AllReviews'

  const chainid = cobj.data.cobj.chainid
  const contaddy = cobj.data.cobj.contaddy
  const Url3 = cobj.data.cobj.Url3
  const vjson = '{ "jsonrpc": "2.0"}'
  export default {
    name: 'Vuemain',
    components: {
      Spcgraphic,
      AllReviews,
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
  }
</script>
