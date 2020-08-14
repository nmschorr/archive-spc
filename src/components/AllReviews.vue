<template>
  <v-container
    fluid
  >
    <v-row
      class="d-flex flex-center align-center "
    >
      <!-- top level col -->
      <v-col
       cols="2"
       sm="1"
      >
      <br>
      </v-col>
      <v-col
        cols="9"
        md="10"
        sm="12"
        class="d-flex flex-column"
      >  
        <v-card
          id="botdiv"
          class="d-flex flex-column"
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
            height="70px"
            width="90%"
            class="d-flex flex-column ml-5 mt-4 mb-4 pa-2"
          > 
            <v-card
              id="getprodschip"
              color="blue-grey darken-2"
              dark
              shaped
              filled
              width="120px"
              height="34px"
              max-width="120px"  
              min-width="23px"    
              topleftcard
              class="d-flex align-center justify-center white--text montyfont pl-3 py-3"
              style="font-size:15px;font-weight:500;"
              :style="`position:relative;z-index:999;`"
            >
              contract
            </v-card>
            <!-- orange small tab card with contract # - - - -   -->
            <v-card
              v-for="contract in contracts"
              id="contractchip"
              :key="contract"      
              color="blue-grey lighten-5"
              width="410px"
              height="54px"
              min-width="200px"
              class="d-flex flex-column  mx-2 mt-n2 mb-22 pl-3 pr-4 pt-3 pb-3 ptsans"
              style="font-size:14px;font-weight:400;"
              v-bind="shapfill"
            >      
              {{ contract }}
            </v-card> <!-- end contractchip -->
          </v-card>  <!-- end topleftcard -->


          <v-card
            id="formcard"
            color="blue-grey lighten-5"
            width="79%"
            height="310px"
            min-height="300px"
            max-height="900px"
            shaped
            class="d-flex flex-column align-center mt-7 mb-20 ml-12 mr-11 pt-0 pl-4 pr-11"
            light
          >          
            <v-card
              id="getprodschip"
              color="blue-grey darken-2"
              dark
              width="190px"
              height="34px"
              max-width="190px"  
              min-width="120px"    
              formcard
              class="d-flex align-center white--text montyfont pl-5 ml-20 py-3 mt-n4 pr-3"
              style="font-size:15px;font-weight:500;"
              :style="`position:relative;z-index:999;`"
            >
              write review
            </v-card>

            <v-form 
              id="wform"
              ref="wform" 
              formcard
              width="620px"
              style="width:620px;margin-right:72px;margin-top:32px;align-content:center"
              @submit.prevent="submit"
            >
              <v-text-field
                v-model="vmcat"
                height="20px"
                width="40%"
                outlined
                color="purple darken-2"
                label="Product Category"
                class="mx-4 px-3 mb-0"
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
                outlined
                clearable
                class="mx-4 pa-2 mt-n2"
                height="100px"
              >
              </v-text-field>
              <v-btn
                id="wrevbtn"
                dark
                formcard
                elevation-12
                color="blue-grey darken-2"
                class="align-center mx-22 mt-n6 montyfont"
                style="align:center;"
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
            class="d-flex flex-column justify-center"
          >                                <!-- * * * * * * vselbackgroundcard select BACKGROUND  -->
            <v-card
              id="spacercard"
              height="20px"
              width="100%"
              min-width="100%"
              flat
              color="rgba(0,0,0,.2)"
            />

            <v-card        
              id="vselbackgroundcard"
              greencard
              v-bind="shapfill"
              height="79px"
              width="420px"
              color="blue-grey lighten-5"
              class="d-flex px-2 pt-3 mt-2 ml-15"
            >        
              <!-- * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * *  -->
              <!-- * * * * * *  * * * * * * * PRODUCT CHOICE SELECT * * * * * * * * * * * * * * * * *  -->
              <v-select
                id="vselone"
                v-model="prodchoice"
                width="330px"
                min-width="330px"
                height="30px"
                labelWidth="240px"
                type="string"
                label="Select a Product then press Go"
                color="deep-purple accent-3"
                shaped
                outlined
                :style="`max-width:430px;font-weight:700;font-size:15px;`"        
                :items="products"
                vselbackgroundcard
                class="d-flex align-center justify-center mt-2 ml-15"
              />
              <v-btn
                id="getrevssbtn"
                color="blue-grey darken-2"
                dark
                fab
                right              
                vselone
                class="mt-0 ml-2"
                @click=axiosGetRevs()
              >    
                Go
              </v-btn>   
            </v-card>  <!-- end vselbackgroundcard -->
            <!-- end select a product -->
          </v-card>      <!-- end greencard -->
          <!-- ******end green card -->
          <!-- ****** column 2 -->
          <!-- ****** data results - revs listed here -->

          <v-card
            id="reviewssheet"
            shaped
            height="700px"
            width="675px"
            color="grey lighten-3"
            class="mt-0 px-2 pt-5 ml-14 d-flex flex-column"
            :style="`box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.34)`"
            style="position:relative;z-index:9;"
         >
            <v-card
              id="reviewsfoundback"
              width="250px"
              dark
              reviewssheet
              v-bind="shapfill"
              height="45px"
              color="blue-grey darken-2"
              class="py-2 pl-7 ml-12 mt-n4 white--text montyfont"
                style="font-size:20px;position:relative;z-index:999;"

            >
              <span 
              >
              reviews
              </span> 
            </v-card>     <!-- end reviewsfoundback -->

            <v-card
              v-for="review in reviewlist"
              id="reviewlistcard"
              :key="review.id"      
              width="630px"
              height="auto"
              v-bind="shapfill"
              class="d-flex flex-column align-left ml-3 mt-2 mb-5"
              color="blue-grey lighten-5"
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
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap'); 

  .ptsans {
    font-family:'PT Sans Narrow, sans-serif';
  }
  .v-label  {
    font-size: 12px!important;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    color: black;
  }
  .montyfont {
    font-family: 'Montserrat',sans-serif;
    letter-spacing: 1.25px;
    text-transform: lowercase;
  }
</style>

        