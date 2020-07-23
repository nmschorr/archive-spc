<template>
  <v-card 
    id="mainappcard"
    color="#E1BEE7"
    height="1200px"
    class="d-flex justify-left pa-2 gradientpur1"
  >
    <v-card
      id="getprodcard"
      mainappcard
      :key="cardkey"
      v-bind="cardprops"
      height="500px"
      width="400px"
      class="d-flex justify-left gradientpur1 ma-2 pa-2"
    >
      <v-btn
        id="getprodsbtn"
        getprodcard
        color="deep-purple"
        v-bind="btnprops"
        class="mb-2 mt-2 ml-7 pa-2"
        @click="axiosPost"
      >
        <span class="font-bold text-2xl white--text">Get the Products</span>
      </v-btn>
      <div mainappcard
        v-for="product in products"
        :key="product"
      >          
        {{ product }}
      </div>
    </v-card>
          <!-- end product card -->
          <!--reviews card -->

    <v-card
      id="getrevscard"
      v-bind="cardprops"
      height="500px"
      width="400px"
      class="d-flex justify-left gradientg2 ma-2 pa-2"

    >
      <v-btn
        id="getrevssbtn"
        v-bind="btnprops"
        color="teal"
        class="mb-2 mt-2 ml-7 pa-2"
        :style="bgig1"
        @click="axiosPost"
      >
        <span class="font-bold text-2xl white--text">Get the Reviews</span>
      </v-btn>
       <v-card
        id="showprodscard"
        v-for="product in products"
        :key="product"
      >          
        <v-card-title
          id="vct1"
        >
          All Reviews
        </v-card-title>

        {{ product }}
      </v-card>
    </v-card>
          <!-- end reviews card -->


    <v-card
      width="300px"
      height="400px"
      v-bind="cardprops"
      color="teal lighten-2"
      min-height="70px"
      class="gradientd  ma-2 pa-2"
    >
      <v-card-title>
        Contract Info - add?
      </v-card-title>
    </v-card>

  </v-card>
</template>

<script>
import axios from "axios";
import cobj from "../constants/constants.js";

export default {
  name: "AllReviews",
  data: () => ({
    cardprops: { elevation: 24, raised: true, shaped: true},
    btnprops: { elevation: 24, raised: true, shaped: true, large: true, height: "42px",
      width: "90%", rounded: true },

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
  methods: {
    async axiosPost() {
      console.log("inside axiosPost");
      var acceptStr = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
      var restTypes = "GET, POST, HEAD, UPDATE, PUT";
      var acctlMeths = "Access-Control-Allow-Methods";
      var acctlOrig = "Access-Control-Allow-Origin";
      const appJson = "application/json";
      const ctType = "Content-Type";   
       const jsonV = "2.0"
      const invMethod = "invokeView"
      const REQUEST_TYPE = "getAllProductIds"
      const RET_TYPE = "() return String"
      var LASTLIST = []
      console.log("inside axiosPost");
      var vPARAMS =  
        [ this.CHAINID, 
          this.CONT_ADDY,
          REQUEST_TYPE,
          RET_TYPE,
          LASTLIST ]
      const axiosi = axios.create({
        defaults: {
          headers: {
            post: { Accept: acceptStr, acctlMeths: restTypes, ctType: appJson },
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

      // 2 for each product id - get the reviews
      // return this.getReviews(productId)



    // contractAddy: "SPEXdKRT4yJrChYu5KfusRJrLMpJ8qRmitSHxe",

     // var tUrl1 = `{"jsonrpc": "2.0", "method": "invokeView", "params": [4810, "SPEXdKRT4yJrChYu5KfusRJrLMpJ8qRmitSHxe", "getAllProductIds", "() return String", []], "id": 900003}` 
      // var tUrl = `{ "params": [4810, "SPEXdKRT4yJrChYu5KfusRJrLMpJ8qRmitSHxe", "getAllProductIds", "() return String", []], "id": 900003}` 

    // },
    // async getReviews(productId) {
    //   const RET_TYPE = "(String productId) return Ljava/util/List;";
    //   const LASTLIST = [productId];
    //   const METHOD_D = "invokeView";
    //   const REQUEST_TYPE = "getReviews";
    //   const PARAMS = [
    //     this.CHAINID,
    //     this.CONT_ADDY,
    //     REQUEST_TYPE,
    //     RET_TYPE,
    //     LASTLIST
        
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