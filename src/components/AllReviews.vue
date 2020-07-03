<template>
  <container :class="containerfont">
    <sheet 
      id="app" 
    >
      <loading 
        :active.sync="visible" 
        :can-cancel="true">
      </loading>

    <Allrevnav />

      <card id="app">
        <h1 :class="h1style">
            All Reviews
        </h1>
        <v-card :class="allrev">

          <v-card 
            width="100%"
          >
            <v-card 
              rounded
              color="white"
              class="pt-6 pb-8 mb-4"
              v-if="contract"
            >
              <span :class="fonts10">Contract Info</span>

              <span>Alias: {{ contract.alias }}</span>
            </v-card>

            <v-card 
              :class="fonts9" 
              v-if="reviews.length > 0"
            >
              <span :class="spanrev"  >
                {{ reviews.length }} review(s)
              </span>

              <v-card class="overflow-auto h-screen">
                
                <v-card
                  rounded
                  border
                  width="100%"
                  v-for="review in reviews"
                  :key="review"
                >
                  <v-card :class="reviewcard">
                       
                    <v-card class="text-center md:text-left">
                      <v-card :class="fontpurple">Review for: {{ review.productId }}</v-card>

                      <v-card :class="fontrevcomments">{{ review.comments }}</v-card>
                    </v-card>
                  </v-card>
                </v-card>
              </v-card>

            </v-card>

          </v-card>

        </v-card>

       </card>
      </sheet>
    </container>
  </template>

  <script lang="ts">
import Allrevnav from "./Allrevnav.vue";

import axios from "axios";
import Vue from "vue";

import constantsObj from "../constants/constants.js";
const CHAINID = constantsObj.CHAINID;
const PW = constantsObj.PW;
const CONT_ADDY = constantsObj.CONT_ADDY;
const SENDER = constantsObj.SENDER;
const OWNER = constantsObj.OWNER;
const BUYER = constantsObj.BUYER;

const VALUE_ASSET = constantsObj.VALUE_ASSET;
const GAS_PRICE = constantsObj.GAS_PRICE;
const GAS_LIMIT = constantsObj.GAS_LIMIT;

const POSTURL_w3 = constantsObj.POSTURL_w3;
const POSTURL_w4 = constantsObj.POSTURL_w4;
const h1style = "mt-4 text-center font-extrabold text-2xl";
const containerfont = "antialiased font-sans";
const fontpurple = "text-purple-500 font-medium text-base";
const fontrevcomments = "text-gray-600 leading-tight text-base  xl:text-base";
const reviewcard = "items-center md:flex lg:block xl:flex rounded-lg p-6";
const fonts9 = "bg-white shadow rounded px-8 pt-6 pb-8 mb-4";
const fonts10 = "text-center relative text-4xl font-extrabold";
const spanrev = "text-center relative text-4xl font-extrabold";
const allrev = "lg:flex lg:justify-between";

export default {
  name: "AllReviews",
  data: () => ({
    PW,
    CONT_ADDY,
    SENDER,
    OWNER,
    BUYER,
    VALUE_ASSET,
    GAS_PRICE,
    GAS_LIMIT,
    POSTURL_w3,
    POSTURL_w4,
    h1style,
    spanrev,
    allrev,
    fonts9,
    fonts10,
    reviewcard,
    containerfont,
    fontpurple,
    fontrevcomments,
    contract: null,
    products: null,
    reviews: [],
    review: null,
    selectedProductId: null,
    showProducts: false,
    showReviewPrompt: false,
    reviewPosted: false,
    visible: false,
    CHAINID
  }),
  components: {},
  async mounted() {
    await this.getAllProductIds();
    await this.getAllReviews();
    console.log(this.reviews);
  },
  methods: {
    async getAllProductIds() {
      let RET_TYPE = "() return String";
      let METHOD_D = "invokeView";
      let REQUEST_TYPE = "getAllProductIds";
      let LASTLIST = [];

      let ID_D = 900033;
      let PARAMS = [
        this.CHAINID,
        this.CONT_ADDY,
        REQUEST_TYPE,
        RET_TYPE,
        LASTLIST
      ];

      let loader = this.$loading.show({
        loader: "dots"
      });
      try {
        const result = await axios.post(this.POSTURL_w3, {
          jsonrpc: "2.0",
          method: METHOD_D,
          params: PARAMS
        });

        if (result.status === 200) {
          const products = JSON.parse(result.data.result.result);
          this.products = products;
        } else {
          this.error = "An error has occurred";
        }
      } catch (error) {
        this.error = error.message;
      }

      loader.hide();
    },
    async getAllReviews() {
      const fetchReview = async productId => {
        return this.getReviews(productId);
      };
      const promiseArray = this.products.map(async product => {
        return fetchReview(product);
      });
      await Promise.all(promiseArray);
    },
    async getReviews(productId) {
      let RET_TYPE = "(String productId) return Ljava/util/List;";
      let LASTLIST = [productId];
      let METHOD_D = "invokeView";
      let REQUEST_TYPE = "getReviews";
      let ID_D = 900033;
      let PARAMS = [
        this.CHAINID,
        this.CONT_ADDY,
        REQUEST_TYPE,
        RET_TYPE,
        LASTLIST
      ];

      let loader = this.$loading.show({
        loader: "dots"
      });
      try {
        const result = await axios.post(this.POSTURL_w3, {
          jsonrpc: "2.0",
          method: METHOD_D,
          params: PARAMS
          // "id": ID_D
        });

        if (result.status === 200) {
          const reviews = JSON.parse(result.data.result.result);
          console.log(reviews);
          this.reviews.push(...reviews);
          console.log(this.reviews);
        } else {
          this.error = "An error has occurred";
        }
      } catch (error) {
        console.log(error);
        this.error = error.message;
      }
      loader.hide();
    }
  }
};
</script>



  <style src="../styles/tailwind.css">
  </style>