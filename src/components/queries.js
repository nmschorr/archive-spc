import axios from "axios";
import { ccodes2, ccodes } from '../constants/constantsnew.js'
// import cobj from '../constants/constants.js';
 
  
  
function makeaxio() {
  var [accStr, restTypes, acctlMeths, acctlOrig, appJson, ctType, ddunused] = Object.values(ccodes.data.ccodes2)
  var axio = axios.create({
    defaults: {
      headers: {
        post: { Accept: accStr, acctlMeths: restTypes, ctType: appJson },
        },
      },
    });
  return axio
}


async function axiosGetRs(chainid, contaddy, productId, POSTURL3) {
  const invMethod = 'invokeView'
  const RETtype = "(String productId) return Ljava/util/List;";
  const LASTLIST = [productId];
  const jsonV = '2.0'
  const queryId = 900092

  const REQtype = "getReviews";
  const vPARAMS = [chainid, contaddy, REQtype, RETtype, LASTLIST];
  const axiosi = makeaxio()
  try { 
    var axresult
    console.log("inside axiosPost vPARAMS: " + vPARAMS);
    axresult = await axiosi.post(POSTURL3, {
      jsonrpc: jsonV,
      method:  invMethod,
      id: queryId,
      params:  vPARAMS
    });
  } catch (e) {
    console.log(e);
    }
  return axresult
}

async function axiosGetProducts(chainid, contaddy, postu3) {
      const [accStr, restTypes, aunused, bunused, appJson, cunused, jsonV] = Object.values(ccodes.data.ccodes2)
      const invMethod = 'invokeView'
      const REQtype = 'getAllProductIds'
      const RETtype = '() return String'
      const lastlist =[]
      console.log("inside axiosGetProds accStr: ", accStr)
      var vparams = [chainid, contaddy, REQtype, RETtype, lastlist]
      
      const axiosi = axios.create({
        defaults: {
          headers: {
            post: { Accept: accStr, acctlMeths: restTypes, ctType: appJson },
            },
          },
        });
      try { 
        var axresult
        console.log("inside axiosGetProds vparams: " + vparams);
        axresult = await axiosi.post(postu3, {
          jsonrpc: jsonV,
          method:  invMethod,
          id: 900099,
          params:  vparams
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

