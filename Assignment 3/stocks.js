const { default: axios } = require("axios");
const people = require('./people')

async function getStock() {
    try{
        let stockData = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json')
        return stockData //How to check if the URL is courrupted? Throw an error?
    }catch(e){
       // console.log(e)
        return false
    }
}
function getPeopleNameFromId(data,id) {
    for (let i in data){
        //console.log(data[i]['id'])
        if(data[i]['id'] === id) //return `${i['first_name']}  ${i['last_name']}`
        {
            //console.log(i['first_name'])
            let name = data[i]['first_name'] + ' ' + data[i]['last_name']
            return name
        }
    }
}
function checkStockId(Stockid) {
    if( typeof(Stockid) !== 'string') throw 'Input Stock ID is not a string'
    if( ! Stockid.replace(/\s/g,'').length) throw 'Input Stock ID is the Blank String'
    if( Stockid.length === 0) throw 'Stock ID is Empty'
    return true
    
}
function checkStockName(StockName) {
    if( typeof(StockName) !== 'string') throw 'Input is not a string'
    if( ! StockName.replace(/\s/g,'').length) throw 'Input is the Blank String'
    if( StockName.length === 0) throw 'Stock Name is Empty'
    return true
    
}
function checkFirstName(string) {
    if( typeof(string) !== 'string') throw 'First Name is not a string'
    if( ! string.replace(/\s/g,'').length) throw 'First Name is the Blank String'
    if( string.length === 0) throw 'First Name is Empty'
    return true
    
}
function checkLastName(string) {
    if( typeof(string) !== 'string') throw 'Last Name is not a string'
    if( ! string.replace(/\s/g,'').length) throw 'Last Name is the Blank String'
    if( string.length === 0) throw 'Last Name is Empty'
    return true
    
}
function getIdOfPerson(data,firstName,lastName) {
    for(let i in data){
        if(data[i]['first_name'] === firstName && data[i]['last_name'] === lastName){
            return data[i]['id']
        }
    }
    throw `${firstName} ${lastName} does not exist`
}
function topHolder(shareholders) {
    let id = ''
    let shares = 0
    for(let s_holder in shareholders){
        //console.log(typeof(stockData['data'][x]['shareholders'][s_holder]['number_of_shares']))
        if(id === '' & shares === 0){
            shares = shareholders[s_holder]['number_of_shares']
            id = shareholders[s_holder]['userId']
        }else if( shareholders[s_holder]['number_of_shares'] > shares){
            shares = shareholders[s_holder]['number_of_shares']
            id = shareholders[s_holder]['userId']
        }
    }

    return [id , shares]
    
}
async function listShareholders(arg) {
    //console.log(arg.toString())

    //if( arg ) throw 'Do not pass any argument' //this won't work with null & undefined input
    if( arguments.length !== 0) throw 'Do not pass any argument'

    let stockData = await getStock()
    if(!stockData) throw 'Something is wrong with Stock URL'
    let peopleData = await people.getPeopleData()
    if(! peopleData) throw 'Something is wrong with People URL'

    let tempObj = {}
    let tempNestedObj ={}
    let tempArray = []
    let resultListShareholders = []
    let stockHolderName = ''

    for(let x in stockData['data']){
        tempObj = {}
        tempObj['id'] = stockData['data'][x]['id']
        tempObj['stock_name'] = stockData['data'][x]['stock_name']
        for(let i in stockData['data'][x]['shareholders']){
            stockHolderName = getPeopleNameFromId(peopleData, stockData['data'][x]['shareholders'][i]['userId']).split(' ')
            tempNestedObj = {}
            tempNestedObj['first_name'] = stockHolderName[0]
            tempNestedObj['last_name'] = stockHolderName[1]
            tempNestedObj['number_of_shares'] = stockData['data'][x]['shareholders'][i]['number_of_shares']
            tempArray.push(tempNestedObj)
            tempNestedObj = {}
        }
        tempObj['shareholders'] = tempArray
        tempArray = []
        resultListShareholders.push(tempObj)
        tempObj = {}
    }
    if(resultListShareholders.length === 0) throw 'No Data to display'
    return resultListShareholders

}

async function topShareHolder(stockName) {
    checkStockName(stockName)
    let stockData = await getStock()
    if(!stockData) throw 'Something is wrong with Stock URL'
    let peopleData = await people.getPeopleData()
    if(! peopleData) throw 'Something is wrong with People URL'
    //console.log(stockData['data']['stock_name'])
    let topholderid = ''
    let topholdername = ''
    let topnoshares = 0
    //if( ! stockName in stockData['data']['stock_name']) throw 'No Stock With That Name'
    let stockFound = false
    for(let x in stockData['data']){
        if(stockData['data'][x]['stock_name'] === stockName){
            stockFound = true
            if(stockData['data'][x]['shareholders'].length === 0) throw `${stockName} currently has no shareholders.`
            //Find top shareholder
            let shareHolderDetails = topHolder(stockData['data'][x]['shareholders'])
            topholderid = shareHolderDetails[0]
            topnoshares = shareHolderDetails[1]

            topholdername =  getPeopleNameFromId(peopleData,topholderid)
            return `with ${topnoshares} shares in ${stockName}, ${topholdername} is the top shareholder.`

            
        }
    }
    if( ! stockFound) throw `${stockName} is not a listed Stock`
    
}

async function listStocks(firstName,lastName) {

    checkFirstName(firstName)
    checkLastName(lastName)
    let stockData = await getStock()
    if(!stockData) throw 'Something is wrong with Stock URL'
    let peopleData = await people.getPeopleData()
    if(! peopleData) throw 'Something is wrong with People URL'
    let id = getIdOfPerson(peopleData,firstName,lastName)
    let stock = {}
    let resultListStock = []

    for(let x in stockData['data']){
        for(let shareholders in stockData['data'][x]['shareholders']){
            if(stockData['data'][x]['shareholders'][shareholders]['userId'] === id){
                stock['stock_name'] = stockData['data'][x]['stock_name']
                stock['number_of_shares'] = stockData['data'][x]['shareholders'][shareholders]['number_of_shares']
                resultListStock.push(stock)
                
            }
            stock = {}
        }
    }
    if(resultListStock.length === 0 ) throw `${firstName} ${lastName} does not hold any share`

    return resultListStock  
}

async function getStockById(id) {

    checkStockId(id)
    let stockData = await getStock()
    if(!stockData) throw 'Something is wrong with Stock URL'

    for(let x in stockData['data']){
        if(stockData['data'][x]['id'] === id ){
            return stockData['data'][x]
        }
    }
    throw `Stock not found.`
}
module.exports = {
    listShareholders,
    topShareHolder,
    listStocks,
    getStockById
}

