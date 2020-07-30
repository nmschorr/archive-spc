
var chainid = 4810
var PW = 'kathy123'
var contaddy = 'SPEXdKRT4yJrChYu5KfusRJrLMpJ8qRmitSHxe'
var SENDER = 'SPEXdKRT4pz7ZhasM9pTK4fvGrJf8eod5ZqtXa'
var OWNER = 'SPEXdKRT4nfcKKVqSt1XLdJYMp2H1nwy3oZ1nJ'
var BUYER = 'SPEXdKRT4nfcKKVqSt1XLdJYMp2H1nwy3oZ1nJ'

var VALUE_ASSET = 25
var GAS_PRICE = 25
var GAS_LIMIT = 9000000

var Url3 = 'http://westteam.nulstar.com:8003'
var Url4 = 'http://westteam.nulstar.com:8004/jsonrpc'

// var Url3 = 'http://westteam.nulstar.com:18003'
// var Url4 = 'http://westteam.nulstar.com:18004/jsonrpc'

const cobj = {
  chainid, PW, contaddy, SENDER, OWNER, BUYER, VALUE_ASSET,
  GAS_PRICE, GAS_LIMIT, Url3, Url4
}
// font-family: 'Raleway', sans-serif;
export default { 
  name: "constants",
  data: {
    cobj,
  },
 }
