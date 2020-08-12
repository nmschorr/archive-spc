
var chainid = 4810
var PW = 'kathy123'
// var contaddy = 'SPEXdKRT4yJrChYu5KfusRJrLMpJ8qRmitSHxe'
// SPEXdKRT4zmkrCMcwQKfWEQfmCCKSboHp4TCdC   new contract august 10
var contaddy = 'SPEXdKRT4zmkrCMcwQKfWEQfmCCKSboHp4TCdC'
var SENDER = 'SPEXdKRT4pz7ZhasM9pTK4fvGrJf8eod5ZqtXa'
var OWNER = 'SPEXdKRT4hTzACffQBAP8jUwtJsaTg36b4uH7d'  //new aug10
var BUYER = 'SPEXdKRT4nfcKKVqSt1XLdJYMp2H1nwy3oZ1nJ'

var VALUE_ASSET = 2500000000
var GAS_PRICE = 25000000
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
// '{"jsonrpc":"2.0","id":"900072","result":{"contractAddress":"SPEXdKRT4zmkrCMcwQKfWEQfmCCKSboHp4TCdC","creater":"SPEXdKRT4hTzACffQBAP8jUwtJsaTg36b4uH7d","createTxHash":"5ca5f4c3dbcda6f528166693d09e3268373a975b8187a3974064aae18996b886","alias":"spex_productreview","blockHeight":154731,"success":true,"balance":0,"totalBalance":0,"errorMsg":null,"tokenType":0,"status":0,"certificationTime":0,"createTime":1596430149,"remark":null,"txCount":5,"deleteHash":null,"methods":[{"name":"<init>","desc":"() return void","returnType":"void","view":false,"payable":false,"event":false,"jsonSerializable":false,"params":[]},{"name":"writeReview","desc":"(String productId, String reviewComments) return LReviewContract$Review;","returnType":"LReviewContract$Review;","view":false,"payable":true,"event":false,"jsonSerializable":false,"params":[{"type":"String","name":"productId","required":true},{"type":"String","name":"reviewComments","required":true}]},{"name":"withDraw","desc":"() return void","returnType":"void","view":false,"payable":true,"event":false,"jsonSerializable":false,"params":[]},{"name":"getReviews","desc":"(String productId) return Ljava/util/List;","returnType":"Ljava/util/List;","view":true,"payable":false,"event":false,"jsonSerializable":false,"params":[{"type":"String","name":"productId","required":true}]},{"name":"getAllProductIds","desc":"() return String","returnType":"String","view":true,"payable":false,"event":false,"jsonSerializable":false,"params":[]},{"name":"WriteReviewEvent","desc":"(LReviewContract; var1, String productId, String reviewComments, String writer) return void","returnType":"void","view":false,"payable":false,"event":true,"jsonSerializable":false,"params":[{"type":"LReviewContract;","name":"var1","required":false},{"type":"String","name":"productId","required":false},{"type":"String","name":"reviewComments","required":false},{"type":"String","name":"writer","required":false}]}],"tokenName":null,"symbol":null,"decimals":0,"totalSupply":null,"transferCount":0,"owners":null,"resultInfo":null,"args":"[]","new":false,"nrc20":false,"directPayable":false}}')