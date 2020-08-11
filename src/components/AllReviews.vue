<template>
  <v-sheet>
    <v-row>
            <!-- top level col -->
      <v-col
        cols="12"
      >  
        <v-card
          id="mainappcard"
          class="d-inline-flex"
          :style="`background-image: linear-gradient(306deg, teal 70%, black 30% )`"
          
        > 
            <!-- second level col -->
          <v-col
            cols="4"
          >     
          <!-- * * * * * * *  main peachy card on left -->
            <v-card
              id="firstcard"
              mainappcard
              height="150px"
              width="500px"
              elevation="24"
              filled
              shaped
              class="ml-5"
              color="transparent"
            > 
        
              <v-btn
                id="getprodsbtn"
                color="grey"
                width="250px"
                shaped
                filled
                dark
                elevation-24
                firstcard
                height="45px"               
                class="py-2 pl-7 ml-n3 mt-3 mb-6 white--text"
              >
                <span 
                  style="font-family:'Montserrat', sans-serif; font-size:20px;text-transform:lowercase;font-weight:400;"
                >
                  contract
                </span>
              </v-btn>
              <!-- orange small tab card with contract # - - - -   -->
              <v-card
                v-for="contract in contracts"
                id="showprodscard"
                :key="contract"      
                width="400px"
                class="d-flex justify-left ma-2 pl-3 pr-4 py-3"
                color="deep-orange lighten-4"
                shaped
                filled
                elevation-24
                raised
                firstcard
              >      
                <span style="font-size:16px;margin-left:7px;">  {{ contract }} </span>
              </v-card>


            </v-card>>
            <!-- end product card  * * * * * * * END LEFT COLUMN * * * * * * * * * * * * * * * * * * * * * * * -->
            <!--revs card -->
            
          </v-col>
              <!-- empty column  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
          <v-col
            cols="1"
          >
          </v-col>
              <!-- wide column  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
          <v-col
            cols="7"
          >        <!-- ****** column 2 -->

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
          <span style="font-family:'Montserrat', sans-serif; font-size:20px;letter-spacing:1.25px;"  >
            reviews</span> 
        </v-card>   

        <v-sheet
          id="rightbtmsheet"
          mainappcard
          shaped
          height="700px"
          width="675px"
          color="grey lighten-3"
          class="mt-n4 pa-2 d-flex flex-column"
          :style="`box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.34)`"

        >

        <v-card
          v-for="review in reviewlist"
          :key="review.id"      
          id="rightbtmsheet"
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
            <!-- end getrevssbtn btn  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
            <!-- * * *  - - - - - -- "test select" -->
          </v-sheet>
      
          <!-- end revs card -->
          </v-col>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
          v-bind="cardyprops"
          color="teal lighten-2"
          mainappcard
          min-height="70px"
          :class="cardclss"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import Vue from 'vue'
import axios from "axios";
import { Hcont, ccodes} from '@/constants/constantsnew.js'
import cobj from '@/constants/constants.js';
require('./queries.js')
import { axiosGetProducts, axiosGetReviewsMain, MyQueries } from './queries.js'
var prodchoice

// const writeReview = MyQueries.axiosGetRevs

async function axiosGetRevs () {
  var contaddy = 'SPEXdKRT4zmkrCMcwQKfWEQfmCCKSboHp4TCdC'
  const cid = 4810
  const u3 = 'http://westteam.nulstar.com:8003'
  console.log("line225 ")
  let axr = await axiosGetReviewsMain( cid, contaddy, this.prodchoice, u3)

  const json =  JSON.stringify(axr.data.result.result)


  console.log(json)


  let stringy = JSON.stringify(axr.data.result.result)

  console.log(JSON.stringify(axr.data.result.result))
  var trevs = JSON.parse(JSON.stringify(axr.data.result.result.comments))
  console.log("axr.data.result: ", axr.data.result.result.comments)
  console.log("trevs  " + trevs)

  console.log("trevs: " + trevs)
  this.reviewlist = trevs
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

export default {
  name: "AllReviews",
  data: () => ({
    prodchoice,
    review,
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
    // writeReview,
  },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital@1&display=swap');

.v-label  {
  font-size: 12px!important;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  color: black;
}

</style>

        