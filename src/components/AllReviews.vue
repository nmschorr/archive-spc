<template>
  <v-card 
    id="mainappcard"
    height="1600px"
    color="teal lighten-3"
    outlined
    class="d-flex align-start flex-column mt-auto"
    width="1400px"
  >
    <v-row>
      <v-col
        cols="6"
        md="6"
      >
        <v-card
          id="firstcard"
          mainappcard
          height="700px"
          width="450px"
          outlined
          shaped
          class="ml-4"
          color="orange lighten-3"
        >
          <v-btn
            id="getprodsbtn"
            color="deep-purple"
            v-bind="btnprops"
            firstcard
            :class="btnclss"
            @click="axiosPost"
          >
            <span :class="btnfontclss">
              Get the Products
            </span>
          </v-btn>
          
          <v-card
            v-for="product in products"
            id="showprodscard"
            :key="product"      
            width="400px"
            :class="cardclss"
            color="grey lighten-3"
            shaped
            firstcard
          >      
            {{ product }}
          </v-card>
          <!-- end product card  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
          <!--reviews card -->
          <!-- getrevssbtn btn  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        </v-card>
      </v-col>

      <v-col
        cols="6"
        md="6"
      >
        <v-select
          id="vselone"
          v-model="vmd1"
          width="330px"
          height="50px"
          labelWidth="100px"
          type="string"
          label="Select a Product"
          color="deep-purple lighten-1"
          append-icon="mdi-plus"
          shaped
          outlined
          :style="`max-width:320px;`"        
          :items="products"
        />

        <v-card
          id="firstcard2"
          v-bind="cardyprops"
          mainappcard
          shaped
          elevation-24
          raised
          height="700px"
          width="450px"
          outlined
          color="deep-purple lighten-2"
          class="mt-15"
        >
          <v-btn
            id="getrevssbtn"
            v-bind="btnprops"
            firstcard2
            :class="btnclss"
            :style="bgig1"
            @click="axiosPost"
          >    
            <span :class="btnfontclss">
              Get the Reviews
            </span>
          </v-btn>      
          <!-- end getrevssbtn btn  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
          <!-- * * *  - - - - - -- "test select" -->


        </v-card>
      
      <!-- end reviews card -->
      </v-col>
      <v-col>
        <v-card
          v-bind="cardyprops"
          color="teal lighten-2"
          mainappcard
          min-height="70px"
          :class="cardclss"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";
import ccodes from '@/constants/constantsnew.js'
import cobj from '@/constants/constants.js';

export default {
  name: "AllReviews",
  data: () => ({
    vmm: '',
    vmd1: '',
    btnclss: "mb-2 mt-2 ml-7 pa-2",
    btnfontclss: "font-bold text-l white--text",
    cardyprops: { elevation: 24, raised: true, width: "450px", 
      height: "400px", "d-flex": true, outlined: true },
    btnprops: { elevation: 24, raised: true, shaped: true, large: true, height: "42px",
      width: "242px", rounded: true },
    cardclss: "d-flex justify-left ma-2 pa-2",
    CHAINID: cobj.data.cobj.CHAINID,
    PW: cobj.data.cobj.PW,
    CONT_ADDY: cobj.data.cobj.CONT_ADDY,
    SENDER: cobj.data.cobj.SENDER,
    OWNER: cobj.data.cobj.OWNER,
    BUYER: cobj.data.cobj.BUYER,
    VALUE_ASSET: cobj.data.cobj.VALUE_ASSET,
    GAS_PRICE: cobj.data.cobj.GAS_PRICE,
    GAS_LIMIT: cobj.data.cobj.GAS_LIMIT,
    POSTURL_w3: cobj.data.cobj.POSTURL_w3,
    POSTURL_w4: cobj.data.cobj.POSTURL_w4,
    products: null,
    cardkey: 0,
    firstprod: '',
    reviews: [],
    bgipur1: `background-image: linear-gradient(306deg, #beaae2 0%, #9873d6 100%)`,
    bgig1: `background-image: linear-gradient(to right, rgba(33, 138, 184, 1),rgba(0, 241, 181, 1))`,

    review: null,
    selectedProductId: null,
    visible: false,
    }),
  created () {
    this.axiosPost()  // get the prod list
    console.log()
  },
  methods: {
    async axiosPost() {

      console.log("inside axiosPost");
      const [accStr, restTypes, acctlMeths, acctlOrig, appJson, ctType, jsonV, 
        invMethod, REQtype, RETtype] = Object.values(ccodes.data.ccodes)
      console.log("accStr: ", accStr)
      const LASTLIST =[]

      var vPARAMS = [this.CHAINID, this.CONT_ADDY, REQtype, RETtype, LASTLIST]

      const axiosi = axios.create({
        defaults: {
          headers: {
            post: { Accept: accStr, acctlMeths: restTypes, ctType: appJson },
            common: { acctlOrig: "*" }
            },
          },
        });
      try { 
        var axresult
        console.log("inside axiosPost vPARAMS: " + vPARAMS);
        const url = this.POSTURL_w3
        console.log("inside axiosPost url: " + url);
        axresult = await axiosi.post(url, {
          jsonrpc: jsonV,
          method:  invMethod,
          id: 900099,
          params:  vPARAMS
        });
      } catch (e) {
        console.log(e);
        }
        var products = JSON.parse(axresult.data.result.result)
        console.log("products: " + products)
        this.products = products
        console.log("this.products: " + this.products)
        this.cardkey += 1;
     },

  },
}
</script>

<style scoped>

.btnfnt {
  font-size: 16px;
  font-weight: 700
}
.gradpink1 {
  background-image: linear-gradient(to right, #c19dc7, #884997)
}

.gradientpur1 {
  background-image: linear-gradient(306deg, #beaae2 0%, #9873d6 100%)
}
.gradientpur2 {
  background-image: linear-gradient(306deg, #83578b 0%, #896bbb 100%)
}

.gradientg1 {
  background-image: linear-gradient(to right, rgba(33, 138, 184, 1),rgba(0, 241, 181, 1))
}
.gradientg2 {
  background-image: linear-gradient(306deg, #2f996d 0%, #198ca8 100%)
}
.gradientg3 {
  background-image: linear-gradient(306deg, #47886d 0%, #116479 100%)
}


</style>

        