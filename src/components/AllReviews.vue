<template>
  <v-card 
    id="appcard"
    color="#E1BEE7"
    height="600px"
    mx-0
  >
    <v-card-title
      id="vct1"
    >
      All Reviews
    </v-card-title>

    <v-card
      width="100%"
      color="teal"
      min-height="300px"
    >
      <v-card-title>
        Contract Info
      </v-card-title>

      <!-- <span>Alias: {{ contract.alias }}</span> -->
    </v-card>

    <v-card                      
      min-height="300px"
      color="teal lighten-2"
    >     <!-- v-if="reviews.length > 0" -->
        { reviews.length } review(s)

        <!-- v-for="review in reviews"
        :key="review" -->

      <v-btn
        id="getprods"
        large
        color="red"
        @click="gettheproducts"
      >
      Get Products
      </v-btn>
      <v-card
        color="orange1"
        min-height="300px"
      >
        <v-card-title 
          color="purple1"
        >
          Review for: { review.productId }
        </v-card-title>

          {{ review.contractAddress }}
      </v-card>
    </v-card>
  </v-card>
</template>

<script>
import axios from "axios";
import cobj from "../constants/constants.js";

export default {
  name: "AllReviews",
  data: () => ({
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
    // contractAddy: "SPEXdKRT4yJrChYu5KfusRJrLMpJ8qRmitSHxe",
    products: null,
    reviews: [],
    review: null,
    selectedProductId: null,
    visible: false,
    }),
  mounted() {
    // await this.getAllProductIds();
    // await this.getAllReviews();
    console.log(this.reviews);
  },
  methods: {
    gettheproducts () {
      console.log("inside click")
      this.axiosPost()
      // this.getAllProductIds()
    },
    async axiosPost() {
      var acceptStr = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
      var restTypes = "GET, POST, HEAD, UPDATE, PUT";
      var acctlMeths = "Access-Control-Allow-Methods";
      var acctlOrig = "Access-Control-Allow-Origin";
      var appJson = "application/json";
      var ctType = "Content-Type";   
      var tUrl1 = `{"jsonrpc": "2.0", "method": "invokeView", "params": [4810, "SPEXdKRT4yJrChYu5KfusRJrLMpJ8qRmitSHxe", "getAllProductIds", "() return String", []], "id": 900003}` 
      var tUrl = `{ "params": [4810, "SPEXdKRT4yJrChYu5KfusRJrLMpJ8qRmitSHxe", "getAllProductIds", "() return String", []], "id": 900003}` 
     
    //   const PARAMS = [
    //     this.CHAINID,
    //     this.CONT_ADDY,
    //     REQUEST_TYPE,
    //     RET_TYPE,
    //     LASTLIST
    //   ];

      const axiosi = axios.create({
        defaults: {
          headers: {
            post: { Accept: acceptStr, acctlMeths: restTypes, ctType: appJson },
            common: { acctlOrig: "*" }
            },
          },
        });
      try { 
        console.log("inside axiosPost: " + tUrl);
        const result = await axiosi.post(this.POSTURL_w3, {
          jsonrpc: "2.0",
          method:  "invokeView",
          params: PARAMS
        });
      } catch (e) {
        console.log(e);
        }
        console.log("DONE");
        console.log(result)
      },
    // async getAllProductIds() {
    //   console.log("in getallproductids")
    //   const METHOD_D = "invokeView";
    //   const REQUEST_TYPE = "getAllProductIds";
    //   const RET_TYPE = "() return String";
    //   let LASTLIST = [];

    //   const PARAMS = [
    //     this.CHAINID,
    //     this.CONT_ADDY,
    //     REQUEST_TYPE,
    //     RET_TYPE,
    //     LASTLIST
    //   ];
    //   console.log("in getallproductids2")
    //   try {
    //     const result = await axios.post(this.POSTURL_w3, {
    //       jsonrpc: "2.0",
    //       method: METHOD_D,
    //       params: PARAMS
    //     });
    //     console.log("result: " + result)
    //     if (result.status === 200) {
    //       const products = JSON.parse(result.data.result.result);
    //       this.products = products;
    //     } else {
    //       this.error = "An error has occurred";
    //     }
    //   } catch (error) {
    //     this.error = error.message;
    //   }
    // },
    // // async getAllReviews() {
    //   const fetchReview = async productId => {
    //     return this.getReviews(productId);
    //   };
    //   const promiseArray = this.products.map(async product => {
    //     return fetchReview(product);
    //   });
    //   await Promise.all(promiseArray);
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
    //   ];
    //   try {
    //     console.log("inside axiosPost: " + baseurl);
    //     (async () => {
    //       let response = await axiosi({
    //         url: baseurl,
    //         method: "post"
    //       });
    //     })();
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   this.$refs.formref.reset()
    //   console.log(`The plot Url is: ${this.finalIMAGE}`);
    //   try {
    //     const result = await axios.post(this.POSTURL_w3, {
    //       jsonrpc: "2.0",
    //       method: METHOD_D,
    //       params: PARAMS
    //     });
    //     if (result.status === 200) {
    //       const reviews = JSON.parse(result.data.result.result);
    //       console.log(reviews);
    //       this.reviews.push(...reviews);
    //       console.log(this.reviews);
    //     } else {
    //       this.error = "An error has occurred";
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     this.error = error.message;
    //   }
    // }
  },
}
</script>
