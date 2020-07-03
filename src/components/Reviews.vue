<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="stylesheet" href="/build/tailwind.css">
  <script src="vue.js"></script>
  <script src="axios.js"></script>
  <script src="vue-overlay.js"></script>

  <title>Space Exploration</title>
  <style>
    .vld-overlay {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      align-items: center;
      display: none;
      justify-content: center;
      overflow: hidden;
      z-index: 9999
    }

    .vld-overlay.is-active {
      display: flex
    }

    .vld-overlay.is-full-page {
      z-index: 9999;
      position: fixed
    }

    .vld-overlay .vld-background {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      background: #fff;
      opacity: 0.5
    }

    .vld-overlay .vld-icon,
    .vld-parent {
      position: relative
    }

    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(0, 0, 0, .5);
      -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    }
  </style>
</head>

<body class="antialiased font-sans">
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
    <main class="mx-auto container">
      <div class="w-full flex justify-center mt-4">
        <button @click="displayReviewPrompt"
          class="hover:bg-purple-700 text-xl rounded shadow-md text-white mr-2 font-bold py-4 px-10 bg-purple-600">Write
          a new Review</button>
        <button @click="displayProducts"
          class="hover:bg-orange-500 text-xl rounded shadow-md text-white font-bold py-4 px-10 bg-orange-400">Show a
          list of products</button>
      </div>
      <div class="text-center font-medium font-xl">Alias: {{contract.alias}}</div>
      <div class="text-center font-medium font-xl">Contract address: {{contract.contractAddress}}</div>
      <h1 class="mt-4 text-center font-extrabold text-2xl">


        <span class="">
          Product Review Viewer
        </span>

      </h1>
      <div class="w-full flex justify-center" v-if="!showReviewPrompt && selectedProductId">
        <div class="w-1/2 z-10 mx-auto bg-white absolute shadow border border-gray-500">
          <div class="flex justify-end mr-4 hover:cursor-pointer"><button @click="selectedProductId = null"
              class="hover:text-gray-700 focus:outline-none  font-extrabold text-4xl">X</button></div>
          <div class=" px-8 pt-6 pb-8 mb-4">
            <div class="text-center relative text-4xl font-extrabold">{{reviews.length}} review(s) for
              {{selectedProductId}}</div>
            <!-- <div class="text-center relative text-2xl font-extrabold"></div>  -->
            <div class="overflow-auto h-64">
              <div class="w-full rounded border" v-for="review in reviews">
                <div class="items-center md:flex lg:block xl:flex rounded-lg p-6">
                  <!-- <img class="h-16 w-16 md:h-16 md:w-16 rounded-full mx-auto xl:mx-0 xl:mr-6 "
                    src="https://i.pravatar.cc/150?img=68"> -->
                  <div class="text-center md:text-left">
                    <!-- <h2 class="text-2xl">Erwin Jeager</h2> -->
                    <div class="text-purple-500 font-medium text-base">Review for: {{review.productId}}</div>

                    <div class="text-gray-600 leading-tight text-base  xl:text-base">{{review.comments}}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="px-8 pt-6 pb-8 mb-4" v-if="reviews.length > 0 && selectedProductId">
            <h1 v-if="reviewPosted" class="text-center text-xl font-semibold">Thank you for the review</h1>
            <form class="">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Write a review for <span class="font-bold">{{selectedProductId}}</span>
                </label>
                <textarea v-model="review"
                  class="font-xl shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  name="" id="" cols="30" rows="2"></textarea>
                <!-- <textarea
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username" type="text" placeholder="Username"> -->
              </div>


              <button @click="postReview(false)"
                class="w-full mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Write A Review
              </button>
              <!-- <button @click="getAllProductIds"
                class="w-full mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Show Products
              </button> -->
              <!-- <button @click="getReviews"
                class="w-full mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Show Reviews
              </button> -->



            </form>
          </div>
        </div>
      </div>


      <div v-show="showReviewPrompt" class="w-1/2 mx-auto ">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 v-if="!reviewPosted" class="text-center font-bold text-xl">Write a review</h1>

          <div v-if="!reviewPosted">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Product ID
              </label>
              <input v-model="selectedProductId"
                class="text-black font-2xl font-bold shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="productId" type="text" placeholder="Product Id">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Review
              </label>
              <textarea v-model="review"
                class="text-black shadow font-bold text-xl appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="review" type="text"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button @click="postReview(true)"
                class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Write a Review
              </button>
            </div>
          </div>

          <h1 v-else-if="reviewPosted" class="text-center font-bold text-xl mt-2">Thanks for the review!</h1>
        </form>

      </div>

      <div v-show="showProducts" class="w-full ">
        <!-- <div class="leading-none sm:leading-relaxed text-center block mt-24 w-full lg:w-2/3 xl:w-1/3">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="******************">
            </div>

            <button @click="getContract"
              class="w-full mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Show Contracts
            </button>
            <button @click="getAllProductIds"
              class="w-full mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Show Products
            </button>
          



          </form>
        </div> -->
        <div class="w-full ">
          <!-- <div class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4" v-if="contract">
            <div class="text-center relative text-4xl font-extrabold">Contract Info</div>
            <div>Alias: {{contract.alias}}</div>
          </div> -->
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" v-if="products">
            <div class="text-center relative text-2xl font-extrabold">{{products.length}} products listed</div>
            <div class="text-center relative text-2xl font-extrabold">Select a product to display its reviews and then
              scrolldown</div>
            <div class="h-64 overflow-auto">
              <div class="" v-for="product in products">
                <button @click="getReviews(product)"
                  class="w-full rounded bg-purple-300 hover:bg-purple-400 px-4 mb-2 text-center text-xl text-white font-bold">

                  {{product}}
                </button>
              </div>
            </div>

          </div>


        </div>


      </div>

    </main>
  </div>
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

    console.log("chainid: " + CHAINID)
    Vue.use(VueLoading);

    const MULTIPLY = 100000000;

    new Vue({
      el: '#app',
      name: "Reviews",
      data: {
        contract: null,
        products: null,
        reviews: [],
        review: null,
        selectedProductId: null,
        showProducts: false,
        showReviewPrompt: false,
        reviewPosted: false,
        visible: false
      },
      components: {
        Loading: VueLoading
      },
      async mounted() {
        function getUrlVars() {
          var vars = {};
          var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
          });
          return vars;
        }

        const showAllProducts = getUrlVars()["products"];

        if (showAllProducts && Number(showAllProducts) === 1) {
          this.showProducts = true
          this.getAllProductIds()

        } else {
          this.showReviewPrompt = true
        }

        this.getContract()
      },
      methods: {
        displayProducts() {
          this.selectedProductId = null
          this.showProducts = true
          this.showReviewPrompt = false
          this.getAllProductIds()

        },
        displayReviewPrompt() {
          this.selectedProductId = null
          this.showProducts = false
          this.showReviewPrompt = true
        },
        async postReview(fromReviewWidget) {
          console.log(fromReviewWidget)

          const METHOD_D = "contractCall";
          const REQUEST_TYPE = "writeReview";
          const DESCRIPTION = "(String productId, String reviewComments) return LReviewContract$Review;";
          let ID_D = 900092;
          const REMARKS = "Space Exploration Product Review";

          const PRODUCTID_REVIEW = [this.selectedProductId, this.review];
          var BIG_VALUE = this.MULTIPLY * this.VALUE_ASSET;

          let PARAMS = [this.CHAINID, this.BUYER, this.PW, BIG_VALUE, this.GAS_LIMIT, this.GAS_PRICE, this.CONT_ADDY, REQUEST_TYPE,
            DESCRIPTION, PRODUCTID_REVIEW, REMARKS];

          let loader = this.$loading.show({
            loader: 'dots'
          });
          try {

            const result = await axios.post(POSTURL_w4,
              {
                "jsonrpc": "2.0",
                "method": METHOD_D,
                "params": PARAMS,
                "id": ID_D
              })

            console.log(result);

            if (result.status === 200) {
              const reviewObj = {
                productId: this.selectedProductId,
                comments: this.review
              }

              this.reviewPosted = true

              this.reviews.push(reviewObj)
            } else {
              this.error = 'An error has occurred'

            }

          } catch (error) {
            this.error = error.message
          }
          this.review = ''

          setTimeout(() => {
            this.reviewPosted = false

          }, 2000)
          if (fromReviewWidget === true) {
            setTimeout(() => {
              this.selectedProductId = null
            }, 2000)
          }


          loader.hide()

        },
        async getContract() {
          let METHOD_D = "getContract";
          let PARAMS = [this.CHAINID, this.CONT_ADDY];
          let ID_D = 900032;

          let loader = this.$loading.show({
            loader: 'dots'
          });

          const result = await axios.post(POSTURL_w3, {
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

          loader.hide()

        },
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
            const result = await axios.post(POSTURL_w3, {
              "jsonrpc": "2.0",
              "method": METHOD_D,
              "params": PARAMS
              // "id": ID_D

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

            const result = await axios.post(POSTURL_w3, {
              "jsonrpc": "2.0",
              "method": METHOD_D,
              "params": PARAMS,
              // "id": ID_D
            })

            if (result.status === 200) {
              const reviews = result.data.result.result
              this.reviews = JSON.parse(reviews)
              this.selectedProductId = productId
              console.log(JSON.parse(reviews))
            } else {
              this.error = 'An error has occurred'
            }

          } catch (error) {
            this.error = error.message
          }
          loader.hide()
        }

      },

    })


    </script>

</body>

</html>