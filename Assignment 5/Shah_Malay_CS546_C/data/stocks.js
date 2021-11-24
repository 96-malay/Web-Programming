const axios = require('axios')

async function getStock() {
    try{
        let {data} = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json')
        return data //How to check if the URL is courrupted? Throw an error?
    }catch(e){
       // console.log(e)
        throw 'Resource not found'
    }
}

function checkStockId(Stockid) {
    //No need to check type is string or not since every parameter will be converted into string while passing here. But still...
    if( typeof(Stockid) !== 'string') throw 'Input Stock ID is not a string'
   // Stockid = Stockid.trim()
    if( ! Stockid.replace(/\s/g,'').length) throw 'Input Stock ID is the Blank String'
    if( Stockid.length === 0) throw 'Stock ID is Empty'
    return true
    
}
async function getStockById(id) {
    id = id.trim()
    checkStockId(id)
    let stockData = await getStock()
    if(!stockData) throw 'Something is wrong with Stock URL'

    for(let x in stockData){
        if(stockData[x]['id'] === id ){
            return stockData[x]
        }
    }
    throw `Stock not found.`
}
module.exports = {
    getStock,
    getStockById
}