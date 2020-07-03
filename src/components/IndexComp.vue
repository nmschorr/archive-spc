<template>
  <container class="antialiased font-sans">
    <div class="relative ">


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
      <v-card id="app" class="mx-auto container">
        <v-card class="lg:flex">
          <div class="leading-none sm:leading-relaxed text-center block mt-24 w-full lg:w-2/3 xl:w-1/2">
            <div class="text-6xl font-extrabold">
              <span class="leading-tight text-white rounded p-2 shadow-md bg-purple-400">Genuine</span> Reviews
            </div>
            <div class="text-orange-400 z-50 relative sm:-mt-10 sm:-mb-10 text-6xl font-extrabold">
              in
            </div>
            <div class="text-6xl font-extrabold">
              the <span class="text-white rounded p-2 shadow-md bg-black">blockchain</span>
            </div>

            <div class="text-gray-700 text-3xl leading-tight font-medium">
              Space Exploration provides users with genuine reviews validated by the blockchain
            </div>
          </div>

          <div class="block xl:w-1/2 lg:w-1/3 md:mt-auto md:mb-auto sm:mt-6">
            <div class="text-center relative text-6xl font-extrabold">Try Space Exploration</div>
            <a href="reviews.html">
              <div
                class="hover:bg-purple-500 cursor-pointer max-w-full text-2xl p-4 shadow rounded font-bold text-white bg-purple-400 text-center">
                Post a Review</div>
            </a>
          </div>
        </v-card>

      </v-card>
    </container>
  </template>>

  <script type="module">
    import axios from 'axios'
    import Vue from 'vue'
    import constantsObj from './constants/constants';
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

    Vue.use(VueLoading);
    const GCMETHOD = "getContract";

    new Vue({
      el: '#app',
      name: "IndexComp",
      data: {
        contract: null,
        products: null,
      },
      components: {
        Loading: VueLoading
      },
      async mounted() {
        this.getContract()
      },
      methods: {
        async getContract() {
          let METHOD_D = this.GCMETHOD;
          let PARAMS = [this.CHAINID, this.CONT_ADDY];
          let ID_D = 900032;

          const result = await axios.post(this.POSTURL_w3, {
            "jsonrpc": "2.0",
            "method": METHOD_D,
            "params": PARAMS,
            "id": ID_D
          })
          if (result.status === 200) {
            console.log(result.data.result)
            this.contract = result.data.result
          } else {
            this.error = 'An error has occurred'
          }
        }
      },
    })

  </script>

  </html>
  <style src="./styles/tailwind.css">
  </style>