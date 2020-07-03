<template>

  <container class="antialiased font-sans">
    <div id="app" class="relative ">
      <loading :active.sync="visible" :can-cancel="true"></loading>

      <nav class="flex items-center justify-between flex-wrap bg-purple-400 p-6">
        <div class="flex items-center justify-between flex-wrap mx-auto container">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <a href="index.html" class="font-semibold text-xl tracking-tight">Space Exploration</a>
          </div>
          <div class="flex-1 items-center ml-6">
            <a class="text-white font-black  mr-8" href="index.html">Home<a>
                <a class="text-white font-black  mr-8" href="reviews.html?products=1">List ProductIds</a>
                <a class="text-white font-black  mr-8" href="allreviews.html">List Reviews</a>
          </div>
          <a class="hover:bg-purple-700 hover:cursor-pointer rounded shadow-md text-white mr-2 font-bold py-2 px-5 bg-purple-600"
            href="reviews.html">
            Write Reviews</a>
        </div>
      </nav>

      <main id="app" class="mx-auto container">
        <h1 class="mt-4 text-center font-extrabold text-2xl">
          <span class="">
            All Reviews
          </span>
        </h1>
        <div class="lg:flex lg:justify-between">

          <div class="w-full ">
            <div class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4" v-if="contract">
              <div class="text-center relative text-4xl font-extrabold">Contract Info</div>
              <div>Alias: {{contract.alias}}</div>
            </div>

            <div class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4" v-if="reviews.length > 0">
              <div class="text-center relative text-4xl font-extrabold">{{reviews.length}} review(s)</div>
              <div class="overflow-auto h-screen">
                <div class="w-full rounded border" v-for="review in reviews">
                  <div class="items-center md:flex lg:block xl:flex rounded-lg p-6">
                      src="https://i.pravatar.cc/150?img=68"> -->
                    <div class="text-center md:text-left">
                      <div class="text-purple-500 font-medium text-base">Review for: {{review.productId}}</div>

                      <div class="text-gray-600 leading-tight text-base  xl:text-base">{{review.comments}}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>
      </div>
    </container>
  </template>

  <script>
import Allrevnav from '@\components\Allrevnav.vue'

    import axios from 'axios'
    import Vue from 'vue'

    import constantsObj from '../constants/constants.js';
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

    export default {
      name: "AllReviews",
      data: () ({
        contract: null,
        products: null,
        reviews: [],
        review: null,
        selectedProductId: null,
        showProducts: false,
        showReviewPrompt: false,
        reviewPosted: false,
        visible: false
      }),
      components: {
        Loading: VueLoading
      },
      async mounted() {
        await this.getAllProductIds()
        await this.getAllReviews()
        console.log(this.reviews)
      },
      methods: {

        async getAllProductIds() {
          let RET_TYPE = "() return String";
          let METHOD_D = "invokeView";
          let REQUEST_TYPE = "getAllProductIds"
          let LASTLIST = [];

          let ID_D = 900033;
          let PARAMS = [this.CHAINID, this.CONT_ADDY, REQUEST_TYPE, RET_TYPE, LASTLIST];

          let loader = this.$loading.show({
            loader: 'dots'
          });
          try {
            const result = await axios.post(this.POSTURL_w3, {
              "jsonrpc": "2.0",
              "method": METHOD_D,
              "params": PARAMS
            })

            if (result.status === 200) {
              const products = JSON.parse(result.data.result.result)
              this.products = products
            } else {
              this.error = 'An error has occurred'
            }
          } catch (error) {
            this.error = error.message

          }

          loader.hide()

        },
        async getAllReviews() {
          const fetchReview = async (productId) => {
            return this.getReviews(productId)
          }
          const promiseArray = this.products.map(async product => {
            return fetchReview(product)
          })
          await Promise.all(promiseArray)
        },
        async getReviews(productId) {
          let RET_TYPE = "(String productId) return Ljava/util/List;";
          let LASTLIST = [productId];
          let METHOD_D = "invokeView";
          let REQUEST_TYPE = "getReviews";
          let ID_D = 900033;
          let PARAMS = [this.CHAINID, this.CONT_ADDY, REQUEST_TYPE, RET_TYPE, LASTLIST];

          let loader = this.$loading.show({
            loader: 'dots'
          });
          try {

            const result = await axios.post(this.POSTURL_w3, {
              "jsonrpc": "2.0",
              "method": METHOD_D,
              "params": PARAMS,
              // "id": ID_D
            })

            if (result.status === 200) {
              const reviews = JSON.parse(result.data.result.result)
              console.log(reviews)
              this.reviews.push(...reviews)
              console.log(this.reviews)
            } else {
              this.error = 'An error has occurred'
            }

          } catch (error) {
            console.log(error)
            this.error = error.message
          }
          loader.hide()
        }

      },

    })
  </script>



  <style src="../styles/tailwind.css">
  </style>