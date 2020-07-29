import axios from "axios";
import ccodes from '../constants/constantsnew.js'
// import cobj from '../constants/constants.js';
 
  
  
function makeaxio() {
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

export const MyFunctions = {
  makeaxio,
  axiosGetRs,
 }

