<template>
  <container class="antialiased font-sans">
      <v-app-bar
        app
        color="primary"
        dark
      />

      <Navsam />
      <v-card id="app" >
        <v-card >
          <div :class="stringn4">
            <div class="text-6xl font-extrabold">
              <span class="leading-tight text-white rounded p-2 shadow-md bg-purple-400">Genuine</span> Reviews
            </div>
            <div class="text-orange-400 z-50 relative sm:-mt-10 sm:-mb-10 text-6xl font-extrabold">
              in
            </div>
            <div class="text-6xl font-extrabold">
              the <span class="text-white rounded p-2 shadow-md bg-black">blockchain</span>
            </div>

            <div 
              :class="stringn">
              Space Exploration provides users with genuine reviews validated by the blockchain
            </div>
          </div>

          <div class="stringn2">
            <div class="text-center relative text-6xl font-extrabold">Try Space Exploration</div>
            <a href="reviews.html">
              <div
                class="stringn3">
                Post a Review</div>
            </a>
          </div>
        </v-card>

      </v-card>
    </container>
  </template>>

  <script lang="ts">
import axios from "axios";
import constantsObj from "../constants/constants.js";
import Navsam from "./Navsam.vue";

const CHAINID = constantsObj.CHAINID;
const CONT_ADDY = constantsObj.CONT_ADDY;
const POSTURL_w3 = constantsObj.POSTURL_w3;
const GCMETHOD = "getContract";
const stringn = "text-gray-700 text-3xl leading-tight font-medium";
const stringn2 = "block xl:w-1/2 lg:w-1/3 md:mt-auto md:mb-auto sm:mt-6";
const stringn3 =
  "hover:bg-purple-500 cursor-pointer max-w-full text-2xl p-4 shadow rounded font-bold text-white bg-purple-400 text-center";
const stringn4 =
  "leading-none sm:leading-relaxed text-center block mt-24 w-full lg:w-2/3 xl:w-1/2";

export default {
  name: "Index",
  data: () => ({
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
  components: {
    Navsam
  },
  async mounted() {
    this.getContract();
  },
  methods: {
    async getContract() {
      let METHOD_D = this.GCMETHOD;
      let PARAMS = [this.CHAINID, this.CONT_ADDY];
      let ID_D = 900032;

      const result = await axios.post(this.POSTURL_w3, {
        jsonrpc: "2.0",
        method: METHOD_D,
        params: PARAMS,
        id: ID_D
      });
      if (result.status === 200) {
        console.log(result.data.result);
        this.contract = result.data.result;
      } else {
        this.error = "An error has occurred";
      }
    }
  }
};
</script>

  <style src="../assets/styles/tailwind.css">
  </style>
