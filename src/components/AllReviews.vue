<template>
  <v-row>
    <!-- top level col -->
    <v-col
      cols="12"
      md="6"
      xs="12"
      class="d-flex flex-column"
    >  
      <!-- <v-img
        class="align-center"
        height="890px"
        src="@/assets/StockSnap_YVTZVJ1BRI.jpg"
      />       -->

      <!-- * * * * * * * ENTIRE LEFT COLUMN card on left -->
      <v-card
        id="columncard-left"
        color="transparent"
        width="100%"
        height="800px"
        min-width="200px"           
        max-width="700px"            
        min-height="550px"
        max-height="1000px"
        elevation-24
        raised
        shaped
        filled
        class="d-flex flex-column align-center flex-shrink-1 pt-1 pb-3 mt-0"
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
          min-width="250px"
          max-width="700px"
          min-height="300px"
          shaped
          :style="computedHeight"
          class="d-flex flex-column align-center px-0 pt-2 pb-2 mx-1 mt-3 mb-7"
        >          
          <v-chip
            id="write-rev-Chip"
            color="transparent"
            text-color="black"
            vselbackgroundcard2
            label
            dark
            medium
            class="montyfont pl-2 py-6 mx-3 mt-1 mb-1 text-center"
            style="font-size:36px;font-weight:700;max-width:600px;"
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
                height="10px"
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
        color="white"
        width="100%"
        height="auto"
        min-height="250px"
        max-height="2000px"
        elevation-24
        raised
        shaped
        filled
        class="d-flex flex-column align-center pt-2"
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
            color="transparent"
            class="d-flex flex-column flex-grow-1 align-center flex-shrink-1 px-2 py-6 mx-1 my-6"
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
              class="montyfont px-3 mx-2 mb-n1 mt-n1"
              style="font-size:36px;font-weight:700;"
            >   
              <v-icon
                :style="`margin-right:12px;font-size:36px;`"
              >                
                mdi-layers-search
              </v-icon>
              <span
                style="margin-right:24px;"
              >
                read reviews <br>
              </span> 
            </v-chip>
            <v-select
              v-show="showprodlist"
              id="vselone"
              :key="showprodlist"
              ref="vselone"
              v-model="prodchoice"
              vselbackgroundcard2
              label="Select a Product then press Go"
              color="deep-purple accent-3"
              width="82%"
              height="30px"
              min-width="100px"
              max-width="450px"
              min-height="30px"
              max-height="160px"
              :items="productlist"
              class="d-flex mt-2 mb-0 ml-2 mr-10 pr-2"
            />
            <!-- <span style="font-size:14px">Select a Product then press go</span> -->
            <v-card
              id="btnspacer"
              color="transparent"
              width="100%"
              height="150px"
              flat
              class="d-flex flex-column justify-center align-center"
            >
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
              </v-card-actions>
              If your product isn't showing in the list, try the reload products button.
              <v-card-actions>
                <v-btn
                  id="reloadbtn"
                  color="cyan darken-4"
                  dark
                  vselbackgroundcard2
                  elevation-12
                  class="mb-3 montyfont"
                  style="text-transform:lowercase;"
                  @click="reloadProducts"
                >    
                  reload products
                </v-btn> 
              </v-card-actions>
            </v-card>  <!-- end vselbackgroundcard -->
          </v-card>  <!-- end vselbackgroundcard -->
          <!-- end select a product -->
        </v-card>      <!-- end greencard -->
        <!-- ******end green card -->
        <!-- ****** column 2 -->
        <!-- ****** data results - revs listed here -->
        <v-card
          id="spacercard3"
          height="12px"
          width="100%"
          min-width="100%"
          flat
          color="transparent"
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
          class="d-flex flex-column align-left flex-shrink-1 px-6 pt-3 pb-6 mx-6 mt-4 mb-10"
        >    
          <v-card
            id="chipdivcenter"
            color="transparent"
            width="100%"
            height="70px"
            min-height="70px"
            class="d-flex flex-column align-center pa-0 ma-0"
            flat
          >
            <v-chip
              id="reviewsChip"
              chipdivcenter
              color="transparent"
              text-color="black"
              large
              label
              medium
              class="montyfont px-6 pt-3 pb-0 mx-3 mt-1 mb-0 text-center"
              style="font-size:30px;font-weight:700;max-width:200px;"
            >   
              <v-icon
                :style="`margin-right:12px;font-size:36px;`"
              >
                mdi-clipboard-flow
              </v-icon>
              reviews
            </v-chip>
          </v-card>
          <!-- Math.random below is for duplicate keys problem -->
          <v-simple-table
            v-for="review in reviewlist"
            id="reviewstable"
            :key="review.id + Math.random().toString()"    
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
  import cobj from '@/constants/constants.js';
  import { Hcont, ccodes} from '@/constants/constantsnew.js'
  import { axiosGetProducts, writeReview, axiosGetReviewsMain } from './queries.js'
  const dJSON = require('dirty-json');
  const cjo = cobj.data.cobj

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

  function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(JSON.stringify(jsonStr)));
  }

  async function axiosGetRevs () {
    var contaddy = 'SPEXdKRT4zmkrCMcwQKfWEQfmCCKSboHp4TCdC'
    const cid = 4810
    const u3 = 'http://westteam.nulstar.com:8003'
    // console.log("line225 ")
    let axr = await axiosGetReviewsMain( cid, contaddy, this.prodchoice, u3)
    const myresult =  axr.data.result.result // step 1 stringify
    const stepone = dJSON.parse(myresult)
    this.reviewlist = stepone
    const steptwo = JSON.stringify(stepone)
    this.cardkey += 1; 
  }  

  async function axiosGetProds () {
    const c = cjo
    this.showprodlist = false
    console.log("thedata: " +  c.chainid + " " + c.contaddy + " " + c.Url3)
    let axr = await this.axiosGetProducts( c.chainid, c.contaddy, c.Url3)
    let axrsorted = axr.slice().sort()
    console.log("sorted: -- : " +  axrsorted)
    this.productlist = []
    this.productlist = Object.assign(axrsorted)
    console.log("new this.productlist: " + axrsorted)
    this.showprodlist = true
  }

  async function reloadProducts(wcat) {
    var i = 0
    this.showfeedback = true
    while (i < 200) {
      i += 1;
      setTimeout(() => this.axiosGetProds(), 1000)
      if (this.productlist.indexOf(wcat) > -1)   // found it
        break;
    }
    this.formaxrjson = '';
    this.$refs.vselone.reset()
  }
  
  async function wreview () {
    var answerstr = ''
    this.showfeedback = false
    const wcat = this.vmcat
    const wrev = this.vmrev
    this.$refs.wform.reset()
    console.log("reset the form")
    console.log("wcat category being written to: " + wcat)
    console.log("wrev review being written: " + wrev)
    this.showfeedback = true
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
      let answerstr = partresult + "\n\nStatus code: " + partb + "\n\nStatusText: " + partc
      this.formaxrjson = answerstr
      this.reloadProducts(wcat);
      }
  }

  export default {
    name: "AllReviews",
    data: () => ({
      review: '',
      newcat: '',
      showprodlist: true,
      prodkey1: 0,
      prodkey2: 0,
      formaxrjson: '',
      vmcat: '',
      vmrev: '',
      chainid: cjo.chainid,
      productlist: [],
      reviewlist: '',
      contracts:  ["SPEXdKRT4zmkrCMcwQKfWEQfmCCKSboHp4TCdC"], 
      prodchoice: '',
      showfeedback: false,
      }),

    computed: {
      tdate () {
        var n = Math.random()
        var nn = n.toString()
        return nn;
      },
      styleObject () {
        return  (window.outerWidth < 960) ? { fontSize: '11px' } : {};
      },
      styleObject2 () {
        return  (window.outerWidth < 960) ? { width: '224px' } : { width: '424px' };
      },
      computedHeight () {
        return  (window.outerWidth < 960) ? { height: '624px' } : { height: '424px' };
      },
      styleObject3 () {
        return  (window.outerWidth < 960) ? '290px' : '424px';
      },
      styleObjMaxWidth () {
        return  (window.outerWidth < 960) ? { "max-width": "290px"} : {"max-width": "424px"};
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
      reloadProducts,
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap'); 

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
    background-image: linear-gradient(306deg, teal 70%, cyan 30% );
  }
  .montyfont {
    font-family: 'Montserrat',sans-serif;
    letter-spacing: 1.25px;
    text-transform: lowercase;
  }
</style>
