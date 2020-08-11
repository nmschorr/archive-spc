import axios from "axios";
require('../constants/constantsnew.js')
import Hcont from '../constants/constantsnew.js'
var [accStr, restTyps, acctlMeths, acctlOrig, aJson] = Object.values(Hcont)
import cobj from '@/constants/constants.js';


      
function makeaxio() {
    var axio = axios.create({
    defaults: {
      headers: {
        post: { Accept: accStr, acctlMeths: restTyps, ctType: aJson },
        },
      },
    });
  return axio
}

async function axiosGetRs(chainid, contaddy, productId, Url3) {
  const invMethod = 'invokeView'
  const RETtype = "(String productId) return Ljava/util/List;";
  const lastlist = [productId];
  const jsonV = '2.0'
  const queryId = 900092
  const REQtype = "getReviews";
  const vParams = [chainid, contaddy, REQtype, RETtype, lastlist];
  const axiosi = this.makeaxio()
  try { 
    var axresult
    console.log("inside axiosPost vParams: " + vParams);
    axresult = await axiosi.post(Url3, {
      jsonrpc: jsonV,
      method:  invMethod,
      id: queryId,
      params:  vParams
    });
  } catch (e) {
    console.log(e);
    }
  return axresult
}

async function axiosGetProducts(chainid, contaddy, Url3) {
  console.log(Hcont)
  console.log(Hcont.Hcont)
  console.log("here now")  
  // [accStr, restTyps, acctlMeths, acctlOrig, aJson] = Object.values(Hcont)
  const invMethod = 'invokeView'
  const REQtype = 'getAllProductIds'
  const RETtype = '() return String'
  const lastlist = []
  const jsonV = '2.0'
  console.log("inside axiosGetProds accStr: ", accStr)
  var vParams = [chainid, contaddy, REQtype, RETtype, lastlist]

  const axiosi = makeaxio()
  try { 
    var axresult
    console.log("inside axiosGetProds vParams: " + vParams);
    axresult = await axiosi.post(Url3, {
      jsonrpc: jsonV,
      method:  invMethod,
      id: 900099,
      params:  vParams
    });
  } catch (e) {
    console.log(e);
    }
    let thisproducts = JSON.parse(axresult.data.result.result)
    console.log("thisproducts: " + thisproducts)
    // this.cardkey += 1;
    return thisproducts
  }
    
async function axiosGetContracts() {
  var productId = this.prodchoice
  const invMethod = 'invokeView'
  const RETtype = "(String productId) return Ljava/util/List;";
  const LASTLIST = [productId];
  const jsonV = '2.0'
  const queryId = 900097

  const REQtype = "getAccountContractList";
  const vPARAMS = [this.chainid, this.contractaddy, REQtype, RETtype, LASTLIST];
  const axiosi = this.makeaxio()
  try { 
    var axresult
    console.log("axiosGetContracts vPARAMS: " + vPARAMS);
    axresult = await axiosi.post(this.Url3, {
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
}
async function axiosGetReviewsMain () {
  this.showRevs = false
  let axr = await axiosGetRs( this.chainid, this.contractaddy, this.prodchoice, this.Url3)
  this.reviews = JSON.parse(axr.data.result.result)
  console.log("this.reviews: " + this.reviews)
  this.showRevs = true
  this.cardkey += 1; 
}
  
async function axiosGetProds () {
  console.log("thedata: " +  this.chainid + " " + this.contractaddy + " " + this.Url3)
  let axr = await axiosGetProducts( this.chainid, this.contractaddy, this.Url3)
  console.log(axr)
  this.products = axr
  console.log("this.products: " + this.products)
  // this.cardkey += 1; 
  this.showProds = true
}
      
async function writeReview() {
  // var productId = "helmet"
  const chainid = cobj.data.cobj.chainid
  const contract = cobj.data.cobj.contaddy
  const jsonV = '2.0'
  const queryId = 900099
  const pw = cobj.data.cobj.PW
  const sender = cobj.data.cobj.SENDER
  const value_asset = cobj.data.cobj.VALUE_ASSET  // val * multiplier
  const Url4 = cobj.data.cobj.Url4

  const gas_price = cobj.data.cobj.GAS_PRICE
  const gas_limit = cobj.data.cobj.GAS_LIMIT
  const args= ["helmet", "too large"]
  const contract_methodname = "writeReview"
  const invMethod = 'contractCall'
  const remark = "call contract"
  const contract_desc = "(String productId, String reviewComments) return LReviewContract$Review;"

  const vPARAMS = [chainid, sender, pw, value_asset, gas_limit, gas_price,
    contract, contract_methodname, contract_desc, args, remark];
  
  const axiosi = this.makeaxio()
  try { 
    var axresult
    console.log("axiosGetContracts vPARAMS: " + vPARAMS);
    axresult = await axiosi.post(Url4, {
      jsonrpc: jsonV,
      method:  invMethod,
      id: queryId,
      params:  vPARAMS
    });
  } catch (e) {
    console.log(e);
    }
    var response = JSON.parse(axresult.data.result.result)
    console.log("the response: " + response)
    // this.cardkey += 1;
} 

const MyQueries = {
  makeaxio,
  axiosGetRs,
  axiosGetProducts,
  axiosGetContracts,
  axiosGetReviewsMain,
  axiosGetProds,
}

export default {
  MyQueries,
 }

