<template>
  <v-card 
    id="mainappcard"
    height="1600px"
    color="teal lighten-3"
    outlined
    class="d-flex align-start flex-column mt-auto"
    width="1400px"
  >
    <v-row>
      <v-col
        cols="5"
        md="5"
      >             <!-- * * * * * * *  main peachy card on left -->
        <v-card
          id="firstcard"
          mainappcard
          height="700px"
          width="500px"
          elevation="24"
          raised
          outlined
          shaped
          class="ml-5"
          color="peachy"
        >
          <v-btn
            id="getprodsbtn"
            color="primary"
            v-bind="btnprops"
            firstcard
            :class="btnclss"
            @click="axiosPost"
          >
            <span :class="btnfontclss">
              Current Products
            </span>
          </v-btn>
          
          <v-card
            v-for="product in products"
            id="showprodscard"
            :key="product"      
            width="400px"
            :class="cardclss"
            color="orangetext"
            shaped
            firstcard
          >      
            {{ product }}
          </v-card>
          <!-- end product card  * * * * * * * END LEFT COLUMN * * * * * * * * * * * * * * * * * * * * * * * -->
          <!--reviews card -->
          <!-- getrevssbtn btn  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        </v-card>
      </v-col>

      <v-col
        cols="6"
        md="6"
      >        <!-- ****** column 2 -->
        <!-- ****** vselcard greencard GREENCARD  -->
        <v-card
          id="greencard"
          width="90%"
          flat
          color="teal lighten-3"
        >                                <!-- * * * * * * vselbackgroundcard select BACKGROUND  -->
          <v-card        
            id="vselbackgroundcard"
            greencard
            shaped
            height="73px"
            width="270px"
            color="deep-orange lighten-4"
            class="d-inline-flex align-center justify-left pa-2 ml-n12"
          >         <!-- * * * * * *  * * * * * * * * * * * * * * * * * * * * * * * *  -->
            <!-- * * * * * *  * * * * * * * PRODUCT CHOICE SELECT * * * * * * * * * * * * * * * * *  -->
            <v-select
              id="vselone"
              v-model="prodchoice"
              width="230px"
              height="30px"
              labelWidth="140px"
              type="string"
              label="Select a Product"
              color="deep-purple"
              append-icon="mdi-plus"
              shaped
              outlined
              :style="`max-width:230px;`"        
              :items="products"
              vselcard
              class="mt-9"

            />
          </v-card>  
          <v-btn
            id="getrevssbtn"
            v-bind="btnprops"
            color="deep-orange lighten-3"
            greencard
            shaped
            elevation-4
            class="mb-2 mt-2 ml-6 pa-3"
            @click=axiosGetReviews()
          >    
          <span 
            :class="btnfontclss"
            :style="`text-shadow: 1px 1px 4px grey;`"
          >
            Get the Reviews
          </span>
        </v-btn>   
         <!-- end select a product -->
        </v-card>     <!-- ******end green card -->
      <!-- ****** column 2 -->

      <!-- ****** data results -->
      <v-card
        id="reviewsfoundback"
        width="250px"
        shaped
        elevation-24
        :style="`box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.34)`"
        height="45px"
        color="teal lighten-1"
        class="pa-2 ml-n3 mt-7 text-uppercase white--text"
        secondcard
      >
        <span class="text-h6 text-bold text-uppercase">Reviews Found</span> 
      </v-card>   

      <v-sheet
        id="rightbtmsheet"
        mainappcard
        shaped
        height="700px"
        width="675px"
        color="teal lighten-4"
        class="mt-n4 pa-2 d-flex flex-column"
        :style="`box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.34)`"

      >
        
        <v-card
          v-for="review in reviews"
          :key="review"      
          id="rightbtmsheet"
          width="630px"
          elevation-24
          raised
          height="650px"
          class="d-flex align-left mt-5 ml-3"
          :class="cardclss"
          color="teal lighten-5"
          shaped
          secondcard
        >      
          <br><br>
          {{ review }}
        </v-card>   
          <!-- end getrevssbtn btn  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
          <!-- * * *  - - - - - -- "test select" -->
        </v-sheet>
      
      <!-- end reviews card -->
      </v-col>
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
  </v-card>
</template>

<script>
import axios from "axios";
import ccodes from '@/constants/constantsnew.js'
import cobj from '@/constants/constants.js';
import colors from '../../node_modules/vuetify/lib/util/colors'
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
    prodchoice: '',
    btnclss: "mb-2 mt-2 ml-7 pa-3",
    btnfontclss: "font-bold text-l white--text",
    cardyprops: { elevation: 24, raised: true, width: "450px", 
      height: "400px", "d-flex": true, outlined: true },
    btnprops: { elevation: 24, raised: true, shaped: true, large: true, height: "42px",
      width: "242px", rounded: true },
    cardclss: "d-flex justify-left ma-2 pa-2",
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
    products: null,
    cardkey: 0,
    reviews: [],
    bgipur1: `background-image: linear-gradient(306deg, #beaae2 0%, #9873d6 100%)`,
    bgig1: `background-image: linear-gradient(to right, rgba(33, 138, 184, 1),rgba(0, 241, 181, 1))`,

    review: null,
    selectedProductId: null,
    visible: false,
    }),
  created () {
    this.axiosPost()  // get the prod list
    console.log()
  },
  methods: {
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

    async axiosPost() {
      const [accStr, restTypes, acctlMeths, acctlOrig, appJson, ctType, jsonV, 
        invMethod, REQtype, RETtype] = Object.values(ccodes.data.ccodes)
      const LASTLIST =[]
      console.log("inside axiosPost accStr: ", accStr)
      var vPARAMS = [this.CHAINID, this.CONT_ADDY, REQtype, RETtype, LASTLIST]
      
      const axiosi = axios.create({
        defaults: {
          headers: {
            post: { Accept: accStr, acctlMeths: restTypes, ctType: appJson },
            },
          },
        });
      try { 
        var axresult
        console.log("inside axiosPost vPARAMS: " + vPARAMS);
        axresult = await axiosi.post(this.POSTURL_w3, {
          jsonrpc: jsonV,
          method:  invMethod,
          id: 900099,
          params:  vPARAMS
        });
      } catch (e) {
        console.log(e);
        }
        this.products = JSON.parse(axresult.data.result.result)
        console.log("this.products: " + this.products)
        this.cardkey += 1;
     },
    async axiosGetReviews() {
      var productId = this.prodchoice
      const invMethod = 'invokeView'
      const RETtype = "(String productId) return Ljava/util/List;";
      const LASTLIST = [productId];
      const jsonV = '2.0'

      const REQtype = "getReviews";
      const vPARAMS = [this.CHAINID, this.CONT_ADDY, REQtype, RETtype, LASTLIST];
      const axiosi = this.makeaxiosi()
      try { 
        var axresult
        console.log("inside axiosPost vPARAMS: " + vPARAMS);
        axresult = await axiosi.post(this.POSTURL_w3, {
          jsonrpc: jsonV,
          method:  invMethod,
          id: 900092,
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
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital@1&display=swap');

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

</style>

        