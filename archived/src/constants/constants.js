
var CHAINID = 4810
var PW = 'kathy123'
var CONT_ADDY = 'SPEXdKRT4yJrChYu5KfusRJrLMpJ8qRmitSHxe'
var SENDER = 'SPEXdKRT4pz7ZhasM9pTK4fvGrJf8eod5ZqtXa'
var OWNER = 'SPEXdKRT4nfcKKVqSt1XLdJYMp2H1nwy3oZ1nJ'
var BUYER = 'SPEXdKRT4nfcKKVqSt1XLdJYMp2H1nwy3oZ1nJ'

var VALUE_ASSET = 25
var GAS_PRICE = 25
var GAS_LIMIT = 9000000

var POSTURL_w3 = 'http://westteam.nulstar.com:8003'
var POSTURL_w4 = 'http://westteam.nulstar.com:8004/jsonrpc'

// var POSTURL_w3 = 'http://westteam.nulstar.com:18003'
// var POSTURL_w4 = 'http://westteam.nulstar.com:18004/jsonrpc'

const cobj = {
  CHAINID, PW, CONT_ADDY, SENDER, OWNER, BUYER, VALUE_ASSET,
  GAS_PRICE, GAS_LIMIT, POSTURL_w3, POSTURL_w4
}

export default {
  data: {
    cobj,
  }
}
