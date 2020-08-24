<template>
  <v-row>
    <!-- top level col -->
    <v-col
      cols="12"
      md="6"
      xs="12"
      class="d-flex flex-column"
    >  
      <!-- * * * * * * * ENTIRE LEFT COLUMN card on left -->
      <v-card
        id="columncard-left"
        color="black"
        width="100%"
        height="890px"
        min-width="200px"           
        max-width="700px"            
        min-height="550px"
        max-height="1000px"
        elevation-24
        raised
        shaped
        filled
        class="d-flex flex-column align-center flex-grow-1 flex-shrink-1 pt-1 pb-3 mt-0"
      > 
        <!-- * * * * * * *  card on left -->
        <v-card
          id="top-backcard"
          color="transparent"
          flat
          columncard-left
          width="100%"
          height="70px"
          min-width="23px"            
          max-width="900px"  
          min-height="90px"
          max-height="907px"             
          class="d-flex flex-column mx-3 mt-1 mb-1"
        > 
          <!-- JUST THE LABEL TITLE WORD CONTRACT: -->

          <v-card
            v-for="contract in contracts"
            id="contractviewer"
            :key="contract"      
            color="transparent"
            width="breakpoint.smAndDown ? 179px : 520px"
            flat
            height="140px"
            min-height="110px"
            max-height="290px"
            max-width="523px"            
            min-width="100px"
            class="d-flex flex-inline-row justify-between flex-grow-1 flex-wrap pl-1 pr-0 py-0 mt-0 mb-5 ptsans"
          >   
            <v-chip
              id="titleChiptopContract"
              color="transparent"
              text-color="black"
              contractviewer
              label
              large
              class="montyfont px-3 mx-2 mb-n1"
              style="font-size:16px;font-weight:700;"
            >   
              <v-icon
                :style="`margin-right:12px;`"
              >                
                mdi-nfc
              </v-icon>
              <span
                style="margin-right:24px;"
              >
                contract: 
              </span>
              <span 
                :style="styleObject"
                class="ptsans"
              >
                {{ contract }}
              </span>
            </v-chip>  
             
            <!--  card CHIP with contract # very small - - - -   -->   
          </v-card> <!-- end contractchip -->
        </v-card>  <!-- form card start -->
        <v-card
          id="form-card"
          color="teal lighten-5"
          columncard-left
          width="92%"
          height="520px"
          min-width="250px"
          max-width="700px"
          min-height="300px"
          max-height="600px"
          shaped
          class="d-flex flex-column align-center flex-grow-1 px-0 pt-2 mx-1 mt-7 mb-20"
        >          
          <v-chip
            id="write-rev-Chip"
            color="transparent"
            text-color="black"
            vselbackgroundcard2
            label
            dark
            medium
            class="montyfont pl-2 py-6 mx-3 mt-4 mb-1 text-center"
            style="font-size:36px;font-weight:700;max-width:600px;"
            :style="`position:relative;z-index:4;`"
          >   
            <v-icon
              :style="`margin-right:22px;font-size:36px;line-height:50px;`"
            >
              mdi-rocket-launch
            </v-icon>
            write review
          </v-chip>  

          <v-card
            id="form-wrap"
            form-card
            width="475px"
            height="430px"
            min-width="420px"
            max-width="600px"            
            min-height="200px"
            max-height="400px"
            flat
            color="transparent"
            class="d-flex flex-column align-center justify-center flex-grow-1 flex-shrink-1 pa-1 ma-1"
          >
            <v-form 
              id="wform"
              ref="wform" 
              form-wrap
              background-color="white"
              width="470px"
              min-width="270px"
              max-width="650px"
              min-height="300px"              
              max-height="900px"
              class="d-flex flex-column flex-grow-1 flex-shrink-1 justify-center align-center mt-5 mx-1 pa-2"
              @submit.prevent="submit"
            >
              <v-text-field
                id="textfieldform1a"
                v-model="vmcat"
                height="auto"
                width="250px"
                min-width="200px"
                max-width="220px"
                min-height="50px"
                max-height="200px"             
                required
                clearable
                color="deep-purple"
                label="Product Category"
                class="pa-2 mb-0 mx-2"
                :style="styleObject2"
              />                        
              <v-textarea
                id="textfieldform1b"
                v-model="vmrev"
                label="Your Review"
                color="deep-purple"
                height="110px"
                min-width="270px"
                max-width="700px"
                min-height="100px"
                max-height="300px"
                outlined
                clearable
                class="pa-2 ma-2"
                :style="styleObject2"
              />
              <v-card
                id="tocenterbutton"
                form-wrap
                flat
                color="transparent"
                width="100%"
                class="d-flex flex-column align-center justify-center"
              >
                <v-card-actions>
                  <v-btn
                    id="wrevbtn"
                    dark
                    tocenterbutton
                    elevation-12
                    color="deep-orange darken-2"
                    class="mt-n4 mb-3 montyfont"
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
          v-if="showfeedback"
          id="feedbackcard"
          :key="showfeedback"
          columncard-left
          color="white"
          width="auto"
          height="300px"
          min-width="320px"
          max-width="620px"
          min-height="220px"
          max-height="600px"
          shaped
          class="d-flex flex-column flex-wrap align-center px-4 pt-0 mx-4 mt-4 mb-4"
        >    
          <v-simple-table
            id="feedbacktable"
            feedbackcard
            color="teal lighten-2"
            width="auto"
            height="120px"
            min-width="220px"
            max-width="620px"
            min-height="140px"
            max-height="250px"
            class="px-4 py-3"
          >
            <span style="font-size:14px;"> <pre>{{ formaxrjson }} </pre></span>
          </v-simple-table>
        </v-card>  <!-- end formAREA -->
      </v-card>  <!-- end formcardtwo -->
    </v-col>
    <!-- </v-col> -->
    <!-- end product card  * * * * * * * END LEFT COLUMN * * * * * * * * * * * * * * * * * * * * * * * -->
    <v-col
      cols="12"
      md="6"
      xs="12"
      class="d-flex flex-column"
    >                           
      <!-- ****** column card  -->
      <v-card
        id="columncard-right"
        color="black"
        width="100%"
        height="auto"
        min-height="250px"
        max-height="2000px"
        elevation-24
        shaped
        filled
        class="d-flex flex-column flex-grow-1 flex-shrink-1 justify-around align-center pt-2"
      > 
        <!--   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        <!-- ****** vsel RED groupcard  -->
        <v-card
          id="groupcard"
          columncard-right
          width="100%"
          height="yesbig ? '450px' : '650px'"
          min-height="275px"
          max-height="700px"
          flat
          color="transparent"
          class="d-flex flex-column flex-grow-1 flex-shrink-1 align-center mt-1 px-3"
        >                                
          <!-- * * * * * * vselbackgroundcard select BACKGROUND  -->

          <v-card        
            id="vselbackgroundcard2"
            :key="prodkey1"
            groupcard
            width="97%"
            height="100%"
            min-width="150px"
            max-width="600px"
            min-height="170px"
            max-height="330px"
            color="white"
            class="d-flex flex-column flex-grow-1 align-center flex-shrink-1 px-2 py-6 mx-1 my-6"
            :style="`position:relative;z-index:1;`"
          >        
            <!-- * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * *  -->
            <!-- * * * * * *  * * * * * * * PRODUCT CHOICE SELECT * * * * * * * * * * * * * * * * *  -->
            <v-chip
              id="reviews-titleChipTop"
              color="transparent"
              text-color="black"
              vselbackgroundcard2
              label
              large
              class="montyfont px-3 mx-2 mb-n1"
              style="font-size:36px;font-weight:700;"
            >   
              <v-icon
                :style="`margin-right:12px;font-size:36px;`"
              >                
                mdi-clipboard-flow
              </v-icon>
              <span
                style="margin-right:24px;"
              >
                read reviews <br>
              </span> 
            </v-chip>
            <v-spacer />
            <v-select
              id="vselone"
              ref="vselone"
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
              :items="productlist"
              class="d-flex mt-n2 mb-0 ml-2 mr-10 pr-2"
            />
            <!-- <span style="font-size:14px">Select a Product then press go</span> -->
            <v-card-actions>
              <v-btn
                id="getrevssbtn"
                color="deep-orange darken-2"
                dark
                vselbackgroundcard2
                elevation-12
                class="mb-2 montyfont"
                style="text-transform:lowercase;"
                @click="axiosGetRevs"
              >    
                go
              </v-btn>
              <br>
              <p> 
                r
              </p>
              <v-spacer />
              If your product isn't showing in the list, try the reload products button.
              <v-btn
                id="reloadbtn"
                color="cyan darken-4"
                dark
                vselbackgroundcard2
                elevation-12
                class="mb-3 montyfont"
                style="text-transform:lowercase;"
                @click="axiosGetList"
              >    
                reload products
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
          height="70px"
          width="100%"
          min-width="100%"
          flat
          color="rgba(0,0,0,0)"
        />
        <v-card
          id="reviewssheet"
          columncard-right
          color="teal lighten-5"
          height="auto"
          width="92%"
          min-width="170px"    
          min-height="150px"            
          :max-width="`styleobject4`"
          max-height="1744px"
          shaped
          class="d-flex flex-column flex-shrink-1 px-6 py-6 mx-6 mt-24 mb-10"
          style="position:relative;z-index:1;"
        >    
          <v-chip
            id="reviews-titleChip2222"
            color="transparent"
            text-color="black"
            label
            reviewssheet
            dark
            medium
            class="montyfont px-6 mx-3 pl-4 mt-3 text-center"
            style="font-size:16px;font-weight:700;max-width:200px;"
            :style="`position:relative;z-index:4;`"
          >   
            <v-icon 
              left
            >
              mdi-clipboard-flow
            </v-icon>
            Reviews
          </v-chip>
          <!-- 
            <v-card
              id="reviews-titleChip"
              color="blue-grey darken-2"
              reviewssheet
              dark
              width="190px"
              height="34px"
              max-width="190px"  
              min-width="120px"    
              min-height="20px"    
              max-height="50px"
              class="shaped=false d-flex flex-column align-center align-content-center white--text montyfont px-3 mx-3 py-1 mt-n10"
              style="font-size:15px;font-weight:500;"
              :style="`position:relative;z-index:4;`"
            >   
              reviews
            </v-card> -->
          <!-- date below is for duplicate keys problem -->
          <v-simple-table
            v-for="review in reviewlist"
            id="reviewstable"
            :key="review.id + tdate"    
            reviewssheet  
            dense
            height="auto"
            width="auto"
            :max-width="`styleObject4`"
            min-width="120px"
            min-height="37px"
            max-height="1550px"
            class="d-flex flex-column flex-grow-1 flex-shrink-1 pa-3 ml-1 mr-4 mt-1 mb-1"
          >
            <span :style="`font-size:14px;overflow-x:scroll;`"> {{ review.comments }} </span>
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
  import ChipGray from './chipgray'
  var cj = cobj.data.cobj

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
    let axrsorted = axr.slice().sort()
    console.log("sorted: -- : " +  axrsorted)
    this.productlist = Object.assign(axrsorted)
    console.log("this.productlist: " + axrsorted)
    this.showProds = true
  }

  async function waitReloadProducts() {
    setTimeout(function () {
      alert("Data received by blockchain. Press OK to Continue"); // "done!"
      this.axiosGetProds()
      this.prodkey1 += 1;
    }, 5000);  

  }

  async function wreview () {
    var answerstr = ''
    const wcat = this.vmcat
    const wrev = this.vmrev
    this.resetform()
    this.showproducts = false;
    console.log("reset the form")
    console.log("wcat category being written to: " + wcat)
    console.log("wrev review being written: " + wrev)
    let axr = await this.writeReview( wcat, wrev)
    if (typeof(axr.data.result) == 'undefined') {
      badanswerstr = "Write Review Failed. Make sure both fields contain alpha-numeric values."
      alert(badanswerstr)
      }
    else {
      console.log("wreview received response axr: " + axr)
      let axrstring = JSON.stringify(axr)
      console.log("wreview received response myaxr: " + axrstring)
      let partresult = JSON.stringify(axr.data.result)
      let partb = JSON.stringify(axr.status)
      let partc = JSON.stringify(axr.statusText)
      this.formaxrjson = answerstr
      this.waitReloadProducts().then(console.log("- - - - ! ! ! done waiting"))
      this.respkey += 1;
      this.resetvselone();
      this.showfeedback = true
      }
  }

  export default {
    name: "AllReviews",
    data: () => ({
      review: '',
      respkey: 0,
      showproducts: true,
      prodkey1: 0,
      prodkey2: 0,
      formaxrjson: '',
      vmcat: '',
      vmrev: '',
      chainid: cobj.data.cobj.chainid,
      SENDER: cobj.data.cobj.SENDER,
      OWNER: cobj.data.cobj.OWNER,
      BUYER: cobj.data.cobj.BUYER,
      VALUE_ASSET: cobj.data.cobj.VALUE_ASSET,
      GAS_PRICE: cobj.data.cobj.GAS_PRICE,
      GAS_LIMIT: cobj.data.cobj.GAS_LIMIT,
      productlist: [],
      reviewlist: '',
      contracts:  ["SPEXdKRT4zmkrCMcwQKfWEQfmCCKSboHp4TCdC"], 
      showProds: false,
      prodchoice: '',
      showfeedback: false,
      MyQueries,
      }),

    computed: {
      cardyprops2 () {
        var myobj = { width: "190px", height: "34px", "max-width": "190px", "min-width": "120px", 
        "min-height": "34px", "max-height": "34px" };
        return myobj
      },
      formwid () {
        var fwsize = "350";
        if (window.outerWidth < 960) {
          tsize = "250"
        }
        return fwsize;
      },
      tdate () {
        return new Date().getTime();
      },
      styleObject () {
        return  (window.outerWidth < 960) ? { fontSize: '11px' } : {};
      },
      styleObject2 () {
        return  (window.outerWidth < 960) ? { width: '224px' } : { width: '424px' };
      },
      styleObject3 () {
        return  (window.outerWidth < 960) ? { width: '290px' } : { width: '424px' };
      },
      styleObject4 () {
        return  (window.outerWidth < 960) ? '290px' : '424px';
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
        console.log("yes mobile") 
        console.log(this.$vuetify.application.top) 
      }
    },
    methods: {
      axiosGetRevs,
      axiosGetProducts,
      axiosGetProds,
      writeReview,
      wreview,
      waitReloadProducts,
      resetform () {
        this.$refs.wform.reset()
        console.log("form reset")
      },
      resetvselone () {
        this.$refs.vselone.reset()
        console.log("vselone reset")
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

  /* .v-text-field input {
    width: 350px!important;
  } */
  .v-data-table__wrapper {
    font-size: small;
  }
  .ptsans {
    font-family:'PT Sans Narrow, sans-serif';
    font-weight: 400;
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
  .montyfonttwo {
    font-family: 'Montserrat',sans-serif;
    font-size: 20px;
    letter-spacing: 1.25px;
    text-transform: lowercase;
    font-weight: 600;
  }
</style>
