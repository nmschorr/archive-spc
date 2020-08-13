<template>
  <v-container
    fluid
  >
    <v-row>
      <!-- top level col -->
      <v-col
        cols="12"
        md="12"
        sm="6"
      >  
        <v-card
          id="mainappcard"
          class="d-flex flex-column"
          color="purple"
          :style="`background-image: linear-gradient(306deg, teal 70%, black 30% )`"
        > 
          <!-- second level col -->
          <v-row>
            <v-col
              cols="6"
              align-left
            >     
              <!-- * * * * * * *  main peachy card on left -->
              <v-card
                id="firstcard"
                color="red"
                mainappcard
                height="150px"
                width="500px"
                elevation="24"
                filled
                shaped
                class="d-flex flex-column ml-5"
              > 
                <v-card
                  id="getprodsbtn"
                  color="teal lighten-3"
                  width="250px"
                  shaped
                  filled
                  dark
                  elevation-24
                  firstcard
                  height="35px"               
                  class="d-flex flex-column py-2 pl-7 mr-15 ml-n3 mt-6 white--text"
                  :style="`position:relative;z-index:999;`"
                >
                  <span 
                    style="font-family:'Montserrat',sans-serif;font-size:15px;text-transform:lowercase;font-weight:400;"
                  >
                    contract
                  </span>
                </v-card>
                <!-- orange small tab card with contract # - - - -   -->
                <v-card
                  v-for="contract in contracts"
                  id="showprodscard"
                  :key="contract"      
                  width="100%"
                  min-width="400"
                  class="d-flex justify-left flex-grow-1 flex mx-2 mt-n2 mb-22 pl-3 pr-4 py-3"
                  color="deep-orange lighten-4"
                  shaped
                  filled
                  elevation-24
                  raised
                  firstcard
                >      
                  <span 
                    showprodscard 
                    style="font-size:16px;font-weight:700;margin-left:4px;margin-right:5px;"
                  >
                    {{ contract }}
                  </span>
                </v-card>
              </v-card>

              <v-card
                id="writecard"
                v-bind="cardyprops"
                color="teal lighten-1"
                width="100%"
                mainappcard
                height="50px"
                min-height="40px"
                min-width="350px"
                class="d-flex flex-column mt-34 pa-1"    
                dark
              >
                <v-card-title>
                  Write Review
                </v-card-title>
                <v-card
                  id="write2"
                  writecard
                  color="deep-orange lighten-4"
                  width="500px"
                  class="d-flex my-3 mx-2 pa-3"
                  light
                >
                  <v-form 
                    ref="wform" 
                    @submit.prevent="submit"
                  >
                    <v-text-field
                      v-model="vmcat"
                      height="20px"
                      color="purple darken-2"
                      label="Product Category"
                      class="mx-4 pa-3"
                      required
                    >
                    </v-text-field>
                    <v-text-field
                      v-model="vmrev"
                      color="blue darken-2"
                      label="Your Review"
                      required
                      class="mx-4 pa-3"
                      height="70px"
                    >
                    </v-text-field>
                    <v-btn
                      color="success"
                      class="ma-2"
                      @click="wreview"
                    >
                      Submit Review
                    </v-btn>
                  </v-form>
                </v-card>
              </v-card>
            </v-card>
          </v-col>
          <!-- end product card  * * * * * * * END LEFT COLUMN * * * * * * * * * * * * * * * * * * * * * * * -->
          <!--revs card -->
          <!-- empty column  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->


          <!-- wide column  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
          <v-col
            cols="6"
          >       <!-- ****** column 2 -->
                  <!-- ****** vselcard greencard GREENCARD  -->
            <v-card
              id="greencard"
              width="100%"
              flat
              color="transparent"
              class="d-inline-flex justify-left"
            >                                <!-- * * * * * * vselbackgroundcard select BACKGROUND  -->
              <v-card        
                id="vselbackgroundcard"
                greencard
                shaped
                filled
                height="73px"
                width="520px"
                color="teal lighten-4"
                class="d-inline-flex align-center justify-left pa-2"
              >        
                <!-- * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * *  -->
                <!-- * * * * * *  * * * * * * * PRODUCT CHOICE SELECT * * * * * * * * * * * * * * * * *  -->
                <v-select
                  id="vselone"
                  v-model="prodchoice"
                  width="430px"
                  height="30px"
                  labelWidth="340px"
                  type="string"
                  label="Select a Product"
                  color="deep-purple accent-3"
                  shaped
                  outlined
                  :style="`max-width:430px;font-weight:700;`"        
                  :items="products"
                  vselcard
                  class="mt-9"
                />
              </v-card>  
              <v-btn
                id="getrevssbtn"
                color="red lighten-1"
                fab
                left
                vselbackgroundcard
                class="ml-n15 mt-2"
                @click=axiosGetRevs()
              >    
                <v-icon :style="`padding-right:3px;`">mdi-feature-search-outline </v-icon>
              </v-btn>   
              <!-- end select a product -->
            </v-card>    
            <!-- ******end green card -->
            <!-- ****** column 2 -->
            <!-- ****** data results - revs listed here -->
            <v-card
              id="reviewsfoundback"
              width="250px"
              shaped
              dark
              elevation-24
              :style="`box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.34)`"
              height="45px"
              color="black lighten-1"
              class="py-2 pl-7 ml-n3 mt-9  white--text"
              secondcard
            >
              <span 
                style="font-family:'Montserrat', sans-serif; font-size:20px;letter-spacing:1.25px;"  
              >
                reviews
              </span> 
            </v-card>   
            <v-sheet
              id="rightbtmsheet"
              mainappcard
              shaped
              height="700px"
              width="675px"
              color="grey lighten-3"
              class="mt-n4 px-2 pt-5 d-flex flex-column"
              :style="`box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.34)`"
            >
              <v-card
                v-for="review in reviewlist"
                id="rightbtmsheet"
                :key="review.id"      
                width="630px"
                height="auto"
                shaped
                filled          
                elevation-24
                raised
                class="d-flex flex-column align-left ml-3 mt-2"
                color="teal lighten-5"
                secondcard
              >      
                <v-card-text 
                  :style="`font-size:16px;font-family:'Rubik',sans-serif;font-weight:light;`"
                > 
                  {{ review.comments }} 
                </v-card-text>
              </v-card> 
              <!-- end getrevssbtn btn   | | | |* * * * | | | | | | | |* * * * | | | | -->
              <!-- * * *  - | | | |- -- test select -->
            </v-sheet>
            <!-- end revs card -->
          </v-col> 
        </v-row>
    

</template>

<script>
import Vue from 'vue'
import axios from "axios";
import { Hcont, ccodes} from '@/constants/constantsnew.js'
import cobj from '@/constants/constants.js';
require('./queries.js')
import { axiosGetProducts, writeReview, axiosGetReviewsMain, MyQueries } from './queries.js'
const dJSON = require('dirty-json');
// const r = dJSON.parse("{ test: 'this is a test'}")
// console.log(JSON.stringify(r));
 
var prodchoice

// const writeReview = MyQueries.axiosGetRevs
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    // We don’t escape the key '__proto__'
    // which can cause problems on older engines
    obj[k] = v;
  }
  return obj;
}

function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    console.log("converting...: " + k)
    strMap.set(k, obj[k]);
  }
  return strMap;
}

function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(JSON.stringify(jsonStr)));
}

function ditchit(jstr) {
  let nstr = jstr.replace("\"" , "")
  console.log(nstr)
  return nstr
}

async function axiosGetRevs () {
  var contaddy = 'SPEXdKRT4zmkrCMcwQKfWEQfmCCKSboHp4TCdC'
  const cid = 4810
  const u3 = 'http://westteam.nulstar.com:8003'
  console.log("line225 ")
  let axr = await axiosGetReviewsMain( cid, contaddy, this.prodchoice, u3)

  const myresult =  axr.data.result.result // step 1 stringify
  const stepone = dJSON.parse(myresult)
  this.reviewlist = stepone

  const steptwo = JSON.stringify(stepone)
  this.cardkey += 1; 

}  


async function axiosGetProds () {
  const cid = cobj.data.cobj.chainid
  const ctaddy = cobj.data.cobj.contaddy
  const u3 = cobj.data.cobj.Url3
  console.log("thedata: " +  cid + " " + ctaddy + " " + u3)
  let axr = await this.axiosGetProducts( cid, ctaddy, u3)
  this.products = axr
  console.log("this.products: " + axr)
  // this.cardkey += 1; 
  this.showProds = true
}
var review =''

async function wreview () {
  const wcat = this.vmcat
  const wrev = this.vmrev
  console.log("wcat: " + wcat)
  console.log("wrev: " + wrev)
  let axr = await this.writeReview( wcat, wrev)

  // this.cardkey += 1; 
  // this.showProds = true
}
export default {
  name: "AllReviews",
  data: () => ({
    prodchoice,
    review,
    vmcat: '',
    vmrev: '',
    cardyprops: { elevation: 24, raised: true, width: "450px", 
      height: "400px", "d-flex": true, outlined: true },
    cardclss: "d-flex justify-left ma-2 pa-1",
    chainid: cobj.data.cobj.chainid,
    SENDER: cobj.data.cobj.SENDER,
    OWNER: cobj.data.cobj.OWNER,
    BUYER: cobj.data.cobj.BUYER,
    VALUE_ASSET: cobj.data.cobj.VALUE_ASSET,
    GAS_PRICE: cobj.data.cobj.GAS_PRICE,
    GAS_LIMIT: cobj.data.cobj.GAS_LIMIT,
    products: [],
    reviewlist: '',
    contracts:  ["SPEXdKRT4zmkrCMcwQKfWEQfmCCKSboHp4TCdC"], 
    showProds: false,
    MyQueries,
    }),
  mounted () {
    this.axiosGetProds()  // get the prod list
  },
  methods: {
    axiosGetRevs,
    axiosGetProducts,
    axiosGetProds,
    writeReview,
    wreview
    // writeReview,
  },
}
// from original vikingchain code:
//  const vtext3 = result.data.result.result.replace(/\r\n/g, "")
//               const vtext4 = vtext3.replace(/\n/g, "")

//               const reviews = JSON.parse(vtext4.replace(/\\/g, ""))
//               console.log(reviews)
//               this.reviews.push(...reviews)

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital@1&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap'); */

.v-label  {
  font-size: 12px!important;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  color: black;
}

</style>

        