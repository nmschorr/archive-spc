<template>
  <container 
    id="allrevs"
  >
    <!-- <loading
      :active.sync="visible"
      :can-cancel="true"
    /> -->
    <v-card id="appcard">
      <v-card-title
        id="vct1"
      >
        All Reviews
      </v-card-title>

      <v-card>
        <v-card
          width="100%"
        >
          <v-card
            v-if="contract"
            rounded
            color="white"
            class="pt-6 pb-8 mb-4"
          >
            <v-card-title 
              :class="fonts10"
            >
              Contract Info
            </v-card-title>

            <span>Alias: {{ contract.alias }}</span>
          </v-card>

          <v-card
            v-if="reviews.length > 0"
          >
            <v-card-sub-title :class="spanrev">
              {{ reviews.length }} review(s)
            </v-card-sub-title>

            <v-card class="overflow-auto h-screen">
              <v-card-sub-title
                v-for="review in reviews"
                :key="review"
                rounded
                border
                width="100%"
              >
                <v-card class="text-center md:text-left reviewcard">
                  <v-card-title :class="fontpurple">
                    Review for: {{ review.productId }}
                  </v-card-title>

                  <v-card-sub-title :class="fontrevcomments">
                    {{ review.comments }}
                  </v-card-sub-title>
                </v-card>
              </v-card-sub-title>
            </v-card>
          </v-card>
        </v-card>
      </v-card>
    </v-card>
  </container>
</template>

<script>
import axios from "axios";
import cobj from "../constants/constants.js";

const CHAINID = cobj.data.cobj.CHAINID;
const PW = cobj.data.cobj.PW;
const CONT_ADDY = cobj.data.cobj.CONT_ADDY;
const SENDER = cobj.data.cobj.SENDER;
const OWNER = cobj.data.cobj.OWNER;
const BUYER = cobj.data.cobj.BUYER;

const VALUE_ASSET = cobj.data.cobj.VALUE_ASSET;
const GAS_PRICE = cobj.data.cobj.GAS_PRICE;
const GAS_LIMIT = cobj.data.cobj.GAS_LIMIT;

const POSTURL_w3 = cobj.data.cobj.POSTURL_w3;
const POSTURL_w4 = cobj.data.cobj.POSTURL_w4;

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
    h1style,
    spanrev,
    allrev,
    contract: null,
    products: null,
    reviews: [],
    review: null,
    selectedProductId: null,
    showProducts: false,
    showReviewPrompt: false,
    reviewPosted: false,
    visible: false,
  }),
  async mounted() {
    await this.getAllProductIds();
    await this.getAllReviews();
    console.log(this.reviews);
  },
  methods: {
    async getAllProductIds() {
      const RET_TYPE = "() return String";
      const METHOD_D = "invokeView";
      const REQUEST_TYPE = "getAllProductIds";
      let LASTLIST = [];

      // let ID_D = 900033;
      const PARAMS = [
        this.CHAINID,
        this.CONT_ADDY,
        REQUEST_TYPE,
        RET_TYPE,
        LASTLIST
      ];

      const loader = this.$loading.show({
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
      const RET_TYPE = "(String productId) return Ljava/util/List;";
      const LASTLIST = [productId];
      const METHOD_D = "invokeView";
      const REQUEST_TYPE = "getReviews";
      // let ID_D = 900033;
      const PARAMS = [
        this.CHAINID,
        this.CONT_ADDY,
        REQUEST_TYPE,
        RET_TYPE,
        LASTLIST
      ];

      const loader = this.$loading.show({
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
