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
              height="700px"
              width="500px"
              elevation="24"
              raised
              filled
              shaped
              class="ml-5"
              color="grey lighten-3"
            >
              <v-btn
                id="getprodsbtn"
                color="black"
                x-large
                v-bind="btnprops"
                firstcard
                :class="btnclss"
                @click="axiosGetProds"
              >
                <span 
                  :class="btnfontclss" 
                  :style="`text-transform: capitalize;`" 
                >
                  Contracts
                </span>
              </v-btn>
              <v-card
                v-for="contract in contracts"
                id="showprodscard"
                :key="contract"      
                width="400px"
                :class="cardclss"
                color="orangetext"
                shaped
                firstcard
              >      
                <span style="font-size:12px;margin-left:12px;">  {{ contract }} </span>
              </v-card>
              <v-container class="px-0" fluid>
                <v-checkbox
                  v-model="checkbox"
                  :label="`Contract 1: ${checkbox.toString()}`"
                >
                </v-checkbox>

                <v-radio-group v-model="radioGroup">
                  <v-radio
                    v-for="n in 3"
                    :key="n"
                    :label="`Contract ${n}`"
                    :value="n"
                  ></v-radio>
                </v-radio-group>
                <v-switch
                  v-model="switch1"
                  :label="`Switch 1: ${switch1.toString()}`"
                >
                    </v-switch>
                  </v-container>




            </v-card>>
            <!-- end product card  * * * * * * * END LEFT COLUMN * * * * * * * * * * * * * * * * * * * * * * * -->
            <!--reviews card -->
            <!-- getrevssbtn btn  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
            
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
            <!-- <v-card
              width="100%"
              height="100%"
              color="red"
            />               -->
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
                width="320px"
                color="teal lighten-4"
                class="d-inline-flex align-center justify-left pa-2"
              >        
              <!-- * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * *  -->
                <!-- * * * * * *  * * * * * * * PRODUCT CHOICE SELECT * * * * * * * * * * * * * * * * *  -->
                <v-select
                  id="vselone"
                  v-model="prodchoice"
                  width="230px"
                  height="30px"
                  labelWidth="140px"
                  type="string"
                  label="Select a Product"
                  color="deep-purple accent-3"
                  shaped
                  outlined
                  :style="`max-width:230px;font-weight:700;`"        
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
                  @click=axiosGetReviews2()
                >    
                <v-icon :style="`padding-right:3px;`">mdi-feature-search-outline </v-icon>
              
              </v-btn>   
              <!-- end select a product -->
            </v-card>    
             <!-- ******end green card -->
            <!-- ****** column 2 -->

        <!-- ****** data results -->
        <v-card
          id="reviewsfoundback"
          width="250px"
          shaped
          elevation-24
          :style="`box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.34)`"
          height="45px"
          color="black lighten-1"
          class="pa-2 ml-n3 mt-7 text-uppercase white--text"
          secondcard
        >
          <span
            v-if="showit"
            class="text-h6 text-bold text-uppercase"
          >
            Reviews Found</span> 
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
        <div
          v-if="showit"
          width="90%"
          class="headline pt-5"
        > 
          Category:   {{ prodchoice  }}
          <br>
        </div>        
        <v-card
          v-for="review in reviews"
          :key="review.id"      
          id="rightbtmsheet"
          width="630px"
          elevation-24
          raised
          height="auto"
          class="d-flex flex-column align-left ml-3 mt-2"
          color="teal lighten-5"
          shaped
          filled
          secondcard
        >      
          <v-card-text 
            :style="`font-size:16px;font-weight:light;`"
          > 
            {{ review.comments }} <br> Reviewer: {{ review.writer }}
          </v-card-text>


          </v-card>   
            <!-- end getrevssbtn btn  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
            <!-- * * *  - - - - - -- "test select" -->
          </v-sheet>
        
          <!-- end reviews card -->
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
import axios from "axios";
import { ccodes, ccodes2} from '@/constants/constantsnew.js'
import cobj from '@/constants/constants.js';
import colors from '../../node_modules/vuetify/lib/util/colors'
require('./queries.js')
import  { MyFunctions } from './queries.js'
import Vue from 'vue'


  // primary: colors.deepPurple.lighten1, // purple was tw 805ad5
  // secondary: colors.deepPurple.accent1,  //was tw light purple b794f4
  // tertiary: colors.teal.base,  //md teal  009688
  // success: colors.teal.accent4,  // md teal accent-4 00BFA5
  // accent: colors.orange.lighten2,  //md orange lighten-2  FFB74D
  // info: colors.grey.lighten2,  // md deep-purple accent-3  651fff
  // error: colors.red.base,   //md deep-purple darken-2 455A64
  // warning: colors.orange.lighten2,  //md blue-grey darken-2  455A64
  // darkgrey: colors.grey.darken4, // 212121
  // orangetext: colors.deepOrange.lighten5, // for text
export default {
  name: "AllReviews",
  data: () => ({
    vmm: '',
    checkbox: true,
    radioGroup: 1,
    switch1: true,
    myspace: "--",
    prodchoice: '',
    btnclss: "mb-2 mt-2 ml-7 pa-3",
    btnfontclss: "font-bold text-l white--text",
    cardyprops: { elevation: 24, raised: true, width: "450px", 
      height: "400px", "d-flex": true, outlined: true },
    btnprops: { elevation: 24, raised: true, shaped: true, large: true, height: "42px",
      width: "242px", rounded: true },
    cardclss: "d-flex justify-left ma-2 pa-1",
    CHAINID: cobj.data.cobj.CHAINID,
    PW: cobj.data.cobj.PW,
    contractaddy: cobj.data.cobj.contractaddy,
    SENDER: cobj.data.cobj.SENDER,
    OWNER: cobj.data.cobj.OWNER,
    BUYER: cobj.data.cobj.BUYER,
    VALUE_ASSET: cobj.data.cobj.VALUE_ASSET,
    GAS_PRICE: cobj.data.cobj.GAS_PRICE,
    GAS_LIMIT: cobj.data.cobj.GAS_LIMIT,
    URL3: cobj.data.cobj.URL3,
    POSTURL_w4: cobj.data.cobj.POSTURL_w4,
    products: null,
    cardkey: 0,
    reviews: [],
    bgipur1: `background-image: linear-gradient(306deg, #beaae2 0%, #9873d6 100%)`,
    bgig1: `background-image: linear-gradient(to right, rgba(33, 138, 184, 1),rgba(0, 241, 181, 1))`,
    contracts:  ["SPEXdKRT4iLwhSaXEhLDR4YNL9WkKsPRjKWb4z", 
        "SPEXdKRT4pz7ZhasM9pTK4fvGrJf8eod5ZqtXa", 
        "SPEXdKRT4u1Y38BVnjxCcnY33E5y3e3rfnwNv3", 
        "SPEXdKRT4yQDZXwNJJQn3HbAGBR4p8QMKvZBVC"], 
    radioGroup:  ["SPEXdKRT4iLwhSaXEhLDR4YNL9WkKsPRjKWb4z", 
        "SPEXdKRT4pz7ZhasM9pTK4fvGrJf8eod5ZqtXa", 
        "SPEXdKRT4u1Y38BVnjxCcnY33E5y3e3rfnwNv3", 
        "SPEXdKRT4yQDZXwNJJQn3HbAGBR4p8QMKvZBVC"], 

    review: null,
    selectedProductId: null,
    showit: false,
    }),
  created () {
    this.axiosGetProds()  // get the prod list
    console.log()
  },
  methods: {
    async axiosGetReviews2 () {
      let axr = await MyFunctions.axiosGetRs( this.CHAINID, this.contractaddy, this.prodchoice, this.URL3)
      this.reviews = JSON.parse(axr.data.result.result)
      console.log("this.reviews: " + this.reviews)
      this.cardkey += 1; 
      this.showit = true
    },
    async axiosGetProds () {
      let axr = await MyFunctions.axiosGetProducts( this.CHAINID, this.contractaddy, this.URL3)
      this.products = JSON.parse(axr.data.result.result)
      console.log("this.products: " + this.products)
      this.cardkey += 1; 
      this.showit = true
    },
    makeaxiosi () {
      var [accStr, restTypes, acctlMeths, acctlOrig, appJson, ctType, ddunused, 
        ccunused, aaunused, bbunused] = Object.values(ccodes.data.ccodes)
      var axio = axios.create({
        defaults: {
          headers: {
            post: { Accept: accStr, acctlMeths: restTypes, ctType: appJson },
            },
          },
        });
      return axio
    },

    // async axiosGetProds5() {
    //   const [accStr, restTypes, acctlMeths, acctlOrig, appJson, ctType, jsonV, 
    //     invMethod, REQtype, RETtype] = Object.values(ccodes.data.ccodes)
    //   const LASTLIST =[]
    //   console.log("inside axiosGetProds accStr: ", accStr)
    //   var vPARAMS = [this.CHAINID, this.contractaddy, REQtype, RETtype, LASTLIST]
      
    //   const axiosi = axios.create({
    //     defaults: {
    //       headers: {
    //         post: { Accept: accStr, acctlMeths: restTypes, ctType: appJson },
    //         },
    //       },
    //     });
    //   try { 
    //     var axresult
    //     console.log("inside axiosGetProds vPARAMS: " + vPARAMS);
    //     axresult = await axiosi.post(this.URL3, {
    //       jsonrpc: jsonV,
    //       method:  invMethod,
    //       id: 900099,
    //       params:  vPARAMS
    //     });
    //   } catch (e) {
    //     console.log(e);
    //     }
    //     this.products = JSON.parse(axresult.data.result.result)
    //     console.log("this.products: " + this.products)
    //     this.cardkey += 1;
    //  },
    async axiosGetContracts() {
      var productId = this.prodchoice
      const invMethod = 'invokeView'
      const RETtype = "(String productId) return Ljava/util/List;";
      const LASTLIST = [productId];
      const jsonV = '2.0'
      const queryId = 900097

      const REQtype = "getAccountContractList";
      const vPARAMS = [this.CHAINID, this.contractaddy, REQtype, RETtype, LASTLIST];
      const axiosi = this.makeaxiosi()
      try { 
        var axresult
        console.log("axiosGetContracts vPARAMS: " + vPARAMS);
        axresult = await axiosi.post(this.URL3, {
          jsonrpc: jsonV,
          method:  invMethod,
          id: queryId,
          params:  vPARAMS
        });
      } catch (e) {
        console.log(e);
        }
        this.reviews = JSON.parse(axresult.data.result.result)
        console.log("this.reviews: " + this.reviews)
        this.cardkey += 1;
     },
  },
}
//await this.$post('/', 'getAccountContractList', [this.pageIndex, this.pageSize, address, -1, false]) SENDER


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital@1&display=swap');
@import 'https://fonts.googleapis.com/css2?family=Rubik:ital@1&display=swap'

.btnfnt {
  font-size: 16px;
  font-weight: 700
}
.gradpink1 {
  background-image: linear-gradient(to right, #c19dc7, #884997)
}

.gradientpur1 {
  background-image: linear-gradient(306deg, #beaae2 0%, #9873d6 100%)
}
.gradientpur2 {
  background-image: linear-gradient(306deg, #83578b 0%, #896bbb 100%)
}

.gradientg1 {
  background-image: linear-gradient(to right, rgba(33, 138, 184, 1),rgba(0, 241, 181, 1))
}
.gradientg2 {
  background-image: linear-gradient(306deg, #2f996d 0%, #198ca8 100%)
}
.gradientg3 {
  background-image: linear-gradient(306deg, #47886d 0%, #116479 100%)
}
.gradientprime {
  background-image: linear-gradient(306deg,  #7e57c2 0%, #9871DC 100%)
}
.gradientprime2 {
  background-image: linear-gradient(306deg,  #7e57c2, #9871DC)
}
</style>

        