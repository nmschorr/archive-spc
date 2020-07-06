<template>
  <v-container>
    <v-card id="app">
      <loading
        :active.sync="visible"
        :can-cancel="true"
      />

      <v-card
        width="100%"
        class="flex justify-center mt-4"
      >
        <v-btn
          :class="disprevprompt"
          @click="displayReviewPrompt"
        >
          Write a new Review
        </v-btn>

        <v-btn
          :class="dispprod"
          @click="displayProducts"
        >
          Show a  list of products
        </v-btn>
      </v-card>

      <v-card :class="cardfont">
        Alias: {{ contract.alias }}
      </v-card>
      <v-card :class="cardfont">
        Contract address: {{ contract.contractAddress }}
      </v-card>
      <v-card-title>
        Product Review Viewer
      </v-card-title>

      <v-card
        v-if="!showReviewPrompt && selectedProductId"
        class="w-full flex justify-center"
      >
        <v-card class="newc">
          <v-card class="flexj">
            <v-btn
              :class="vchov"
              @click="selectedProductId=null"
            >
              X
            </v-btn>
          </v-card>

          <v-card
            class="text-center relative text-4xl font-extrabold"
          >
            {{ reviews.length }} review(s) for  {{ selectedProductId }}
          </v-card>

          <v-card
            v-for="review in reviews"
            :key="review"
            class="w-full rounded border"
          >
            <v-card
              :class="vc3"
            >
              <v-card-subtitle>
                Review for: {{ review.productId }}
              </v-card-subtitle>

              <v-card-subtitle
                class="vcardcls"
              >
                {{ review.comments }}
              </v-card-subtitle>
            </v-card>
          </v-card>
        </v-card>

        <v-card
          v-if="reviews.length>0 && selectedProductId"
          class="px-8 pt-6 pb-8 mb-4"
        >
          <v-card-subtitle
            v-if="reviewPosted"
            class="text-center text-xl font-semibold"
          >
            Thank you for the review
          </v-card-subtitle>
          <v-form>
            <v-card
              class="mb-4"
            >
              <v-chip
                :class="newc"
                for="username"
              >
                Write a review for <span class="font-bold">{{ selectedProductId }}</span>
              </v-chip>
              <v-textarea
                v-model="review"
                :class="textar"
                cols="30"
                rows="2"
              />
            </v-card>
            <v-btn
              :class="bluebtn"
              @click="postReview(false)"
            >
              Write A Review
            </v-btn>
          </v-form>
        </v-card>
      </v-card>
    </v-card>

    <v-card
      v-show="showReviewPrompt"
      class="w-1/2 mx-auto "
    >
      <v-form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1
          v-if="!reviewPosted"
          class="text-center font-bold text-xl"
        >
          Write a review
        </h1>

        <v-card v-if="!reviewPosted">
          <v-card class="mb-4">
            <v-card-subtitle
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Product ID
            </v-card-subtitle>

            <input
              id="productId"
              v-model="selectedProductId"
              :class="vmodrev"
              type="text"
              placeholder="Product Id"
            >
          </v-card>

          <v-card class="mb-4">
            <v-card-title
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Review
            </v-card-title>

            <textarea
              id="review"
              v-model="review"
              :class="vmodrev"
              type="text"
            />
          </v-card>

          <v-card
            class="flex items-center justify-between"
          >
            <v-btn
              :class="bluebtn"
              @click="postReview(true)"
            >
              Write a Review
            </v-btn>
          </v-card>
        </v-card>

        <v-card
          v-else-if="reviewPosted"
          class="text-center font-bold text-xl mt-2"
        >
          Thanks for the review!
        </v-card>
      </v-form>
    </v-card>

    <v-card>
      v-show='showProducts'
      width='100%'
      >
      <v-card
        v-if="products"
        color="white"
        rounded
        elevation="24"
        class="px-8 pt-6 pb-8 mb-4"
      >
        <v-card-subtitle
          :class="spantxt"
        >
          {{ products.length }} products listed
        </v-card-subtitle>
        <v-chip
          :class="spantxtd"
        >
          Select a product to display its reviews and then scrolldown
        </v-chip>

        <v-card
          v-for="product in products"
          :key="product"
        >
          <v-btn
            :class="revfont"
            @click="getReviews(product)"
          >
            {{ product }}
          </v-btn>
        </v-card>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>

import axios from 'axios';
import cobj from '../constants/constants.js';
const CHAINID = cobj.CHAINID;
const PW = cobj.PW;
const CONT_ADDY = cobj.CONT_ADDY;
const SENDER = cobj.SENDER;
const OWNER = cobj.OWNER;
const BUYER = cobj.BUYER;
const VALUE_ASSET = cobj.VALUE_ASSET;
const GAS_PRICE = cobj.GAS_PRICE;
const GAS_LIMIT = cobj.GAS_LIMIT;
const POSTURL_w3 = cobj.POSTURL_w3;
const POSTURL_w4 = cobj.POSTURL_w4;
const MULTIPLY = 100000000;
const revfont =
  'w-full rounded bg-purple-300 hover:bg-purple-400 px-4 mb-2 text-center text-xl text-white font-bold';
const spantxt = 'text-center relative text-2xl font-extrabold';
const dispprod =
  'hover:bg-orange-500 text-xl rounded shadow-md text-white font-bold py-4 px-10 bg-orange-400';
const disprevprompt =
  'hover:bg-purple-700 text-xl rounded shadow-md text-white mr-2 font-bold py-4 px-10 bg-purple-600';
const cardfont = 'text-center font-medium font-xl';
const h1class = 'mt-4 text-center font-extrabold text-2xl';
const vmodrev =
  'text-black shadow font-bold text-xl appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline';
const bluebtn =
  'w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';
const textar =
  'font-xl shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline';
const vcardcls = 'text-gray-600 leading-tight text-base  xl:text-base';
const vcardcls2 = 'text-purple-500 font-medium text-base';
const vc3 = 'items-center md:flex lg:block xl:flex rounded-lg p-6';
const vchov = 'hover:text-gray-700 focus:outline-none  font-extrabold text-4xl';
const newc =
  'w-1/2 z-10 mx-auto bg-white absolute shadow border border-gray-500';
const flexj = 'flex justify-end mr-4 hover:cursor-pointer';
const newc2 = 'block text-gray-700 text-sm font-bold mb-2';

// console.log('chainid: ' + CHAINID);

export default {
  name: 'Reviews',

  data: () => ({
    dispprod,
    disprevprompt,
    cardfont,
    h1class,
    vmodrev,
    bluebtn,
    textar,
    vcardcls,
    vcardcls2,
    vc3,
    vchov,
    newc,
    flexj,
    newc2,
    revfont,
    spantxt,
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
    MULTIPLY,
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
  methods: {
    displayProducts() {
      this.selectedProductId = null;
      this.showProducts = true;
      this.showReviewPrompt = false;
      this.getAllProductIds();
    },
    displayReviewPrompt() {
      this.selectedProductId = null;
      this.showProducts = false;
      this.showReviewPrompt = true;
    },
    async postReview(fromReviewWidget) {
      console.log(fromReviewWidget);
      const METHOD_D = 'contractCall';
      const REQUEST_TYPE = 'writeReview';
      const DESCRIPTION =
        '(String productId, String reviewComments) return LReviewContract$Review;';
      const ID_D = 900092;
      const REMARKS = 'Space Exploration Product Review';

      const PRODUCTID_REVIEW = [this.selectedProductId, this.review];
      var BIG_VALUE = this.MULTIPLY * this.VALUE_ASSET;

      const PARAMS = [
        this.CHAINID,
        this.BUYER,
        this.PW,
        BIG_VALUE,
        this.GAS_LIMIT,
        this.GAS_PRICE,
        this.CONT_ADDY,
        REQUEST_TYPE,
        DESCRIPTION,
        PRODUCTID_REVIEW,
        REMARKS
      ];

      const loader = this.$loading.show({
        loader: 'dots'
      });
      try {
        const result = await axios.post(POSTURL_w4, {
          jsonrpc: '2.0',
          method: METHOD_D,
          params: PARAMS,
          id: ID_D
        });
        console.log(result);
        if (result.status === 200) {
          const reviewObj = {
            productId: this.selectedProductId,
            comments: this.review
          };
          this.reviewPosted = true;
          this.reviews.push(reviewObj);
        } else {
          this.error = 'An error has occurred';
        }
      } catch (error) {
        this.error = error.message;
      }
      this.review = '';
      setTimeout(() => {
        this.reviewPosted = false;
      }, 2000);
      if (fromReviewWidget === true) {
        setTimeout(() => {
          this.selectedProductId = null;
        }, 2000);
      }
      loader.hide();
    },
    async getContract() {
      const METHOD_D = 'getContract';
      const PARAMS = [this.CHAINID, this.CONT_ADDY];
      const ID_D = 900032;

      const loader = this.$loading.show({
        loader: 'dots'
      });
      const result = await axios.post(POSTURL_w3, {
        jsonrpc: '2.0',
        method: METHOD_D,
        params: PARAMS,
        id: ID_D
      });
      if (result.status === 200) {
        console.log(result.data.result);
        this.contract = result.data.result;
      } else {
        this.error = 'An error has occurred';
      }
      loader.hide();
    },
    async getAllProductIds() {
      const RET_TYPE = '() return String';
      const METHOD_D = 'invokeView';
      const REQUEST_TYPE = 'getAllProductIds';
      const LASTLIST = [];

      // let ID_D = 900033;
      const PARAMS = [
        this.CHAINID,
        this.CONT_ADDY,
        REQUEST_TYPE,
        RET_TYPE,
        LASTLIST
      ];

      const loader = this.$loading.show({
        loader: 'dots'
      });
      try {
        const result = await axios.post(POSTURL_w3, {
          jsonrpc: '2.0',
          method: METHOD_D,
          params: PARAMS
          // 'id': ID_D
        });
        if (result.status === 200) {
          const products = JSON.parse(result.data.result.result);
          this.products = products;
        } else {
          this.error = 'An error has occurred';
        }
      } catch (error) {
        this.error = error.message;
      }
      loader.hide();
    },
    async getReviews(productId) {
      const RET_TYPE = '(String productId) return Ljava/util/List;';
      const LASTLIST = [productId];
      const METHOD_D = 'invokeView';
      const REQUEST_TYPE = 'getReviews';
      // let ID_D = 900033;
      const PARAMS = [
        this.CHAINID,
        this.CONT_ADDY,
        REQUEST_TYPE,
        RET_TYPE,
        LASTLIST
      ];
      const loader = this.$loading.show({
        loader: 'dots'
      });
      try {
        const result = await axios.post(POSTURL_w3, {
          jsonrpc: '2.0',
          method: METHOD_D,
          params: PARAMS
          // 'id': ID_D
        });
        if (result.status === 200) {
          const reviews = result.data.result.result;
          this.reviews = JSON.parse(reviews);
          this.selectedProductId = productId;
          console.log(JSON.parse(reviews));
        } else {
          this.error = 'An error has occurred';
        }
      } catch (error) {
        this.error = error.message;
      }
      loader.hide();
    }
  }
};
</script>
    <style src='../assets/styles/twsummary.css' />
