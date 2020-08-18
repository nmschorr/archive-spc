<template>
  <v-row>
    <!-- top level col -->
    <v-col
      cols="12"
      md="6"
      xm="12"
      class="d-flex flex-column"
    >  
      <!-- * * * * * * * ENTIRE LEFT COLUMN card on left -->
      <v-card
        id="left-COLUMN-card"
        color="blue-grey lighten-4"
        width="100%"
        height="950px"
        min-width="200px"           
        max-width="700px"            
        min-height="750px"
        max-height="2250px"
        elevation-10
        shaped
        filled
        class="d-flex flex-column align-center justify-center flex-grow-1 pt-19 pb-3 mt-19"
      > 
        <!-- * * * * * * *  card on left -->
        <v-card
          id="top-backcard"
          color="transparent"
          flat
          left-COLUMN-card
          width="100%"
          height="70px"
          min-width="23px"            
          max-width="900px"  
          min-height="90px"
          max-height="907px"             
          class="d-flex flex-column mx-3 mt-9 mb-12 pa-2"
        > 
          <!-- JUST THE LABEL TITLE WORD CONTRACT: -->
          <v-card
            id="getprodsCHIP-LABEL"
            color="blue-grey darken-2"
            top-backcard
            width="150px"
            height="34px"
            min-height="10px"
            max-height="37px"            
            min-width="23px"    
            max-width="190px"  
            dark
            shaped
            filled            
            class="d-flex flex-grow-1 align-center justify-center white--text montyfont px-3 py-3 mx-7"
            style="font-size:15px;font-weight:500;"
            :style="`position:relative;z-index:4;`"
          >
            contract
          </v-card>
          <!--  card CHIP with contract # very small - - - -   -->
          <v-card
            v-for="contract in contracts"
            id="contractCHIP"
            :key="contract"      
            color="blue-grey lighten-5"
            width="breakpoint.smAndDown ? 179px : 420px"
            height="90px"
            min-height="72px"
            max-height="290px"
            max-width="523px"            
            min-width="100px"
            shaped
            elevation-12
            class="d-flex flex-column flex-grow-1 flex-wrap justify-center pl-4 pr-1 py-3 mx-3 mt-n2 mb-6 ptsans"
            style="font-size:14px;font-weight:400;"
          >      
            {{ contract }}
          </v-card> <!-- end contractchip -->
        </v-card>  <!-- form card start -->
        <v-card
          id="form-AREA"
          color="blue-grey lighten-5"
          width="92%"
          height="400px"
          min-width="250px"
          max-width="700px"
          min-height="300px"
          max-height="900px"
          shaped
          class="d-flex flex-column align-center flex-grow-1 px-0 pt-0 mx-1 mt-7 mb-20"
        >          
          <v-card
            id="writerev-LABEL"
            color="blue-grey darken-2"
            dark
            width="190px"
            height="34px"
            max-width="190px"  
            min-width="50px"    
            form-AREA
            class="d-flex flex-column align-center justify-center white--text montyfont px-3 py-1 mx-3 mt-n3"
            style="font-size:15px;font-weight:500;"
            :style="`position:relative;z-index:3;`"
          >
            write review
          </v-card>
          <v-card
            id="form-WRAP"
            form-AREA
            width="100%"
            height="500px"
            min-width="200px"
            max-width="900px"            
            min-height="200px"
            max-height="1700px"
            flat
            color="transparent"
            class="d-flex flex-column align-center justify-center flex-grow-1 pa-2 ma-2"
          >
            <v-form 
              id="wform"
              form-WRAP
              ref="wform" 
              width="95%"
              min-width="170px"
              max-width="450px"
              min-height="300px"              
              max-height="900px"
              class="mt-12 mx-2 pa-2"
              @submit.prevent="submit"
            >
              <v-text-field
                id="textfieldform1a"
                v-model="vmcat"
                form-WRAP
                width="90%"
                height="auto"
                min-width="120px"
                max-width="500px"
                min-height="50px"
                max-height="200px"             
                required
                clearable
                color="blue-grey darken-1"
                label="Product Category"
                class="pa-2 mb-0 mx-2"
              />                        
              <v-textarea
                id="textfieldform1b"
                v-model="vmrev"
                form-WRAP
                label="Your Review"
                color="blue-grey darken-1"
                width="82%"
                height="170px"
                min-width="150px"
                max-width="700px"
                min-height="100px"
                max-height="500px"
                outlined
                clearable
                class="pa-2 ma-2 width=`82%`"
              />
              <v-card
                id="tocenterbutton"
                form-WRAP
                flat
                color="transparent"
                width="100%"
                class="d-flex flex-column align-center justify-center"
              >
                <v-card-actions>
                  <v-btn
                    id="wrevbtn"
                    dark
                    form-WRAP
                    tocenterbutton
                    elevation-12
                    color="blue-grey darken-2"
                    class="mt-n3 mb-3 montyfont"
                    style="text-transform:lowercase;"
                    @click="wreview"
                  >
                    submit review
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-card>  
        </v-card>  <!-- end formAREA --><!-- begin feedback -->
        <v-card
          id="feedbackcard"
          color="white"
          width="92%"
          height="220px"
          min-width="120px"
          max-width="620px"
          min-height="120px"
          max-height="600px"
          shaped
          class="d-flex flex-column align-center px-4 pt-0 mx-4 mt-7 mb-10"
        >    
          <v-simple-table
            id="feedbacktable"
            color="white"
            feedbackcard
            width="337px"
            height="170px"
            min-width="320px"
            max-width="620px"
            min-height="140px"
            max-height="550px"
            class="px-4 py-5"
          >
           <span style="font-size:14px;"> {{ formaxrjson }} </span>
          </v-simple-table>
        </v-card>  <!-- end formAREA -->
      </v-card>  <!-- end formcardtwo -->
    </v-col>
    <!-- </v-col> -->
    <!-- end product card  * * * * * * * END LEFT COLUMN * * * * * * * * * * * * * * * * * * * * * * * -->
    <v-col
      cols="12"
      md="6"
      sm="6"
      class="d-flex flex-column"
    >                           <!-- ****** column card  -->
      <v-card
        id="bottomcard-right"
        color="teal lighten-4"
        height="auto"
        min-height="250px"
        max-height="2000px"
        elevation-10
        shaped
        filled
        class="d-flex flex-column flex-grow-1 justify-around align-center"
      > 
        <!--   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        <!-- ****** vsel RED groupcard  -->
        <v-card
          id="groupcard"
          width="100%"
          height="yesbig ? '150px' : '260px'"
          min-height="75px"
          max-height="200px"
          flat
          color="teal lighten-4"
          class="d-flex flex-column flex-grow-1 flex-shrink-1 align-center justify-center mt-4"
        >                                
          <!-- * * * * * * vselbackgroundcard select BACKGROUND  -->

          <v-card        
            id="vselbackgroundcard2"
            groupcard
            width="97%"
            height="100%"
            min-width="150px"
            max-width="600px"
            min-height="120px"
            max-height="330px"
            color="blue-grey lighten-5"
            class="d-flex flex-row flex-wrap flex-grow-1 flex-shrink-1 pa-1 ma-1"
          >        
            <!-- * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * *  -->
            <!-- * * * * * *  * * * * * * * PRODUCT CHOICE SELECT * * * * * * * * * * * * * * * * *  -->
            <v-card-subtitle my-n1>
              Show Reviews
            </v-card-subtitle>
            <v-select
              id="vselone"
              v-model="prodchoice"
              vselbackgroundcard2
              label="Select a Product then press Go"
              color="deep-purple accent-3"
              width="82%"
              height="30px"
              min-width="100px"
              max-width="450px"
              min-height="20px"
              max-height="160px"
              :items="products"
              class="d-flex align-center justify-center mt-2 mb-2 ml-2 mr-10 pr-2"
            />
            <!-- <span style="font-size:14px">Select a Product then press Go</span> -->
            <v-card-actions>
              <v-btn
                id="getrevssbtn"
                color="blue-grey darken-2"
                dark
                vselbackgroundcard2
                vselone
                class="mt-2 text-body2"
                @click="axiosGetRevs"
              >    
                Go
              </v-btn>   
            </v-card-actions>
          </v-card>  <!-- end vselbackgroundcard -->
          <!-- end select a product -->
        </v-card>      <!-- end greencard -->
        <!-- ******end green card -->
        <!-- ****** column 2 -->
        <!-- ****** data results - revs listed here -->
        <v-card
          id="spacercard3"
          height="30px"
          width="100%"
          min-width="100%"
          flat
          color="rgba(0,0,0,0)"
        />
        <v-card
          id="reviewssheet"
          shaped
          height="auto"
          width="auto"
          min-width="220px"    
          min-height="50px"            
          max-width="644px"
          color="grey lighten-3"
          class="d-flex flex-column v-grow-1 px-2 pt-0 mx-4 mt-24 mb-10 "
          style="position:relative;z-index:1;"
        >           
          <v-card
            id="reviews-title-card"
            color="blue-grey darken-2"
            dark
            width="190px"
            height="34px"
            max-width="190px"  
            min-width="120px"    
            min-height="20px"    
            reviewssheet
            class="d-flex flex-column align-center align-content-center white--text montyfont px-3 mx-3 py-1 mt-n2 "
            style="font-size:15px;font-weight:500;"
            :style="`position:relative;z-index:4;`"
          >   
            reviews
          </v-card>
          <!-- end reviewsfoundback -->
          <v-simple-table
            v-for="review in reviewlist"
            id="reviewstable"
            :key="review.id"    
            reviewssheet  
            dense           
            width="590px"
            height="auto"
            max-width="620px"
            min-width="120px"
            min-height="40px"
            max-height="550px"
            class="d-flex v-grow-1 pa-3 ml-1 mt-1 mr-4 mb-2 font-size=small"
          >
           <span style="font-size:14px;"> {{ review.comments }} </span>
          </v-simple-table>
        </v-card>   <!-- end rightbtmsheet -->
      </v-card>  <!-- end   botdivgraphic -->
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
    this.reset()
    console.log("reset the form")
    console.log("wcat category being written to: " + wcat)
    console.log("wrev review being written: " + wrev)
    let axr = await this.writeReview( wcat, wrev)
    console.log("wreview received response axr: " + axr)

    let axrstring = JSON.stringify(axr)
    console.log("wreview received response myaxr: " + axrstring)
    let partresult = JSON.stringify(axr.data.result)
    let partb =  JSON.stringify(axr.status)
    let partc =  JSON.stringify(axr.statusText)
    let spc = "  "
    let answerstr = partresult + "\n\nStatus code returned (200 is Success): " + partb + "  statusText: " + partc
    this.formaxrjson = answerstr
    this.respkey += 1;
  }
  var redsize = null

  export default {
    name: "AllReviews",
    data: () => ({
      prodchoice,
      review,
      respkey: 0,
      formaxrjson: '',
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

    computed: {
      formwid () {
        var fwsize = "350";
        if (window.outerWidth < 960) {
          tsize = "250"
        }
        return fwsize;
      },
      yesbig () {
        var big = false;
        if (window.outerWidth > 959) {
          big = true;
        }
        return big;
      },
    },
    mounted () {
      this.axiosGetProds()  // get the prod list
      if (window.outerWidth < 960) {
        this.$store.dispatch('gMobileAct', true)    
      }
    },

    methods: {
      axiosGetRevs,
      axiosGetProducts,
      axiosGetProds,
      writeReview,
      wreview,
      reset () {
        this.$refs.wform.reset()
        console.log("form resest")
      },
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital@1&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap'); 

  .v-text-field input {
    width: 350px!important;
  }
  .v-data-table__wrapper {
    font-size: small;
  }
  .ptsans {
    font-family:'PT Sans Narrow, sans-serif';
  }
  .v-label  {
    font-size: 12px!important;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    color: black;
  }
  .tealback {
    background-image: linear-gradient(306deg, teal 70%, black 30% );
  }
  .montyfont {
    font-family: 'Montserrat',sans-serif;
    letter-spacing: 1.25px;
    text-transform: lowercase;
  }
</style>
