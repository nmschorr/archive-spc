import axios from "axios";
// import cobj from '../constants/constants.js';
require('../constants/constantsnew.js')
import Hcont from '../constants/constantsnew.js'
var [accStr, restTyps, acctlMeths, acctlOrig, aJson] = Object.values(Hcont)

function makeaxio() {
    // [accStr, restTyps, acctlMeths, acctlOrig, aJson] = Object.values(Hcont.Hcont)
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

export const MyFunctions = {
  makeaxio,
  axiosGetRs,
  axiosGetProducts,
 }

