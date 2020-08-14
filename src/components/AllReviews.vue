<template>
  <v-container
    fluid
  >
    <v-row
      class="v-flex"
    >
      <!-- top level col -->
      <v-col
       cols="2"
       sm="1"
      >
      
      </v-col>
      <v-col
        cols="9"
        md="10"
        sm="12"
        class="v-flex flex-column"
      >  
        <v-card
          id="botdiv"
          class="v-flex flex-column"
          style="padding-left:32px;padding-top:24px;border-bottom-right-radius:12px;border-bottom-left-radius:12px;\
            border-top-right-radius:12px;border-top-left-radius:12px;"
          :style="`background-image: linear-gradient(306deg, teal 70%, black 30% )`"
        > 
          <!-- * * * * * * *  main peachy card on left -->
          <v-card
            id="topleftcard"
            color="transparent"
            flat
            botdiv
            height="120px"
            width="90%"
            class="d-flex flex-column ml-5 mt-4 mb-12 pa-2"
          > 
            <v-card
              id="getprodschip"
              color="teal lighten-3"
              dark
              width="179px"
              height="34px"
              max-width="255px"  
              min-width="125px"    
              shaped
              filled
              elevation-6            
              topleftcard
              class="d-flex align-center justify-center white--text montyfont pl-3 py-3"
              style="font-size:15px;font-weight:500;text-transform:lowercase;"
              :style="`position:relative;z-index:999;`"
            >
              contract
            </v-card>
            <!-- orange small tab card with contract # - - - -   -->
            <v-card
              v-for="contract in contracts"
              id="contractchip"
              :key="contract"      
              color="deep-orange lighten-2"
              width="410px"
              height="54px"
              min-width="200px"
              class="d-flex mx-2 mt-n2 mb-22 pl-3 pr-4 pt-3 pb-3"
              style="font-size:16px;font-weight:700;"
              v-bind="shapfill"
            >      
              {{ contract }}
            </v-card> <!-- end contractchip -->
          </v-card>  <!-- end topleftcard -->


          <v-card
            id="formcard"
            color="deep-orange lighten-4"
            width="90%"
            height="400px"
            shaped
            class="d-flex mt-7 mb-20 ml-12 mr-2 py-10 pl-4 pr-6"
            light
          >          
            <v-chip
              id="writereviewchip"
              color="teal lighten-1"
              dark
              large
              class="mt-3 pa-7 white--text"    
            >
              Write Review
            </v-chip>

            <v-form 
              id="wform"
              ref="wform" 
              formcard
              width="620px"
              style="width:620px;margin-right:72px;"
              @submit.prevent="submit"
            >
              <v-text-field
                v-model="vmcat"
                height="20px"
                width="40%"
                color="purple darken-2"
                label="Product Category"
                class="mx-4 pa-3 mb-1"
                required
                clearable
                success
              >
              </v-text-field>
              <v-text-field
                v-model="vmrev"
                color="blue darken-2"
                label="Your Review"
                required
                clearable
                class="mx-4 pa-3 mt-1"
                height="120px"
              >
              </v-text-field>
              <v-btn
                id="wrevbtn"
                color="success"
                class="ma-1"
                @click="wreview"
              >
                Submit Review
              </v-btn>
            </v-form>
          </v-card>  <!-- end formcard -->
          <!-- </v-col> -->
          <!-- end product card  * * * * * * * END LEFT COLUMN * * * * * * * * * * * * * * * * * * * * * * * -->


          <!-- wide column  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
          <!-- <v-col
            cols="6"
          >        -->
            <!-- ****** column 2 -->
            <!-- ****** vselcard greencard GREENCARD  -->
          <v-card
            id="greencard"
            width="100%"
            flat
            color="transparent"
            class="d-flex justify-center"
          >                                <!-- * * * * * * vselbackgroundcard select BACKGROUND  -->
            <v-card
              id="spacercard"
              height="90px"
              width="100%"
              min-width="100%"
              flat
              color="green"
            />

            <v-card        
              id="vselbackgroundcard"
              greencard
              v-bind="shapfill"
              height="73px"
              width="520px"
              color="teal lighten-4"
              class="d-flex align-center justify-center pa-2"
            >        
              <!-- * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * *  -->
              <!-- * * * * * *  * * * * * * * PRODUCT CHOICE SELECT * * * * * * * * * * * * * * * * *  -->
              <v-select
                id="vselone"
                v-model="prodchoice"
                width="430px"
                min-width="430px"

                height="30px"
                labelWidth="340px"
                type="string"
                label="Select a Product"
                color="deep-purple accent-3"
                shaped
                outlined
                :style="`max-width:430px;font-weight:700;font-size:15px;`"        
                :items="products"
                vselcard
                class="mt-9 d-flex align-center justify-center"
              />
            </v-card>  <!-- end vselbackgroundcard -->
            <v-btn
              id="getrevssbtn"
              color="red lighten-1"
              fab
              left
              label="go"
              vselbackgroundcard
              class="ml-n15 mt-2"
              @click=axiosGetRevs()
            >    
              <v-icon :style="`padding-right:3px;`">mdi-feature-search-outline </v-icon>
            </v-btn>   
            <!-- end select a product -->
          </v-card>      <!-- end greencard -->
          <!-- ******end green card -->
          <!-- ****** column 2 -->
          <!-- ****** data results - revs listed here -->
          <v-card
            id="reviewsfoundback"
            width="250px"
            dark
            v-bind="shapfill"
            :style="`box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.34)`"
            height="45px"
            color="black lighten-1"
            class="py-2 pl-7 ml-n3 mt-9  white--text"
          >
            <span 
              style="font-family:'Montserrat', sans-serif; font-size:20px;letter-spacing:1.25px;"  
            >
            reviews
            </span> 
          </v-card>     <!-- end reviewsfoundback -->
          <v-card
            id="rightbtmsheet"
            mainappcard
            shaped
            height="700px"
            width="675px"
            color="grey lighten-3"
            class="mt-n4 px-2 pt-5 ml-14 d-flex flex-column"
            :style="`box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.34)`"
          >
            <v-card
              v-for="review in reviewlist"
              id="reviewlistcard"
              :key="review.id"      
              width="630px"
              height="auto"
              v-bind="shapfill"
              class="d-flex flex-column align-left ml-3 mt-2"
              color="teal lighten-5"
              rightbtmsheet
            >      
              <v-card-text 
                :style="`font-size:16px;font-family:'Rubik',sans-serif;font-weight:light;`"
              > 
                {{ review.comments }} 
              </v-card-text>
            </v-card>   <!-- end reviewlistcard -->
          </v-card>   <!-- end rightbtmsheet -->
        </v-card>  <!-- end   botdiv -->
      </v-col> 
    </v-row>
  </v-container>
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
    this.reset
    // this.cardkey += 1; 
    // this.showProds = true
  }
  export default {
    name: "AllReviews",
    data: () => ({
      prodchoice,
      review,
      shapfill: { elevation: 24, shaped: true, filled: true, raised: true },
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
      wreview,
      reset () {
        this.$refs.wform.reset()
        alert("success!")
        console.log("form resest")
    },
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
  .montyfont {
    font-family:'Montserrat',sans-serif;
  }
</style>

        